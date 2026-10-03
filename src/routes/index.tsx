import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { analyse, i18n, LINKS, verdictFor, type Lang, type Match, type VerdictKey } from "@/lib/rakshak";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rakshak Saathi — Check before you send money" },
      { name: "description", content: "Voice-first investor scam checker for Indian investors. Paste a WhatsApp message, link or SEBI number. Works offline, stores nothing." },
      { property: "og:title", content: "Rakshak Saathi (रक्षक साथी)" },
      { property: "og:description", content: "Check suspicious investment messages before you send money. English and Hindi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

type Result = { matches: Match[]; verdict: VerdictKey; flags: number };

const Icon = {
  warn: (
    <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2 1 21h22L12 2zm0 5 7.5 12h-15L12 7zm-1 4v4h2v-4h-2zm0 5v2h2v-2h-2z" /></svg>
  ),
  caution: (
    <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2.5" /><rect x="11" y="6" width="2.5" height="8" fill="currentColor" /><rect x="11" y="16" width="2.5" height="2.5" fill="currentColor" /></svg>
  ),
  question: (
    <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2.5" /><path d="M9 9a3 3 0 1 1 4 2.8c-.8.4-1 .9-1 1.7V14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /><circle cx="12" cy="17.5" r="1.4" fill="currentColor" /></svg>
  ),
  mic: (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="2" width="6" height="12" rx="3" fill="currentColor" /><path d="M5 11a7 7 0 0 0 14 0M12 18v4" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
  ),
  speaker: (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="currentColor" /><path d="M16 8a5 5 0 0 1 0 8M18.5 5a9 9 0 0 1 0 14" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
  ),
};

function Index() {
  const [lang, setLang] = useState<Lang>("en");
  const t = i18n[lang];
  const [text, setText] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [notice, setNotice] = useState("");
  const [micOk, setMicOk] = useState<boolean | null>(null);
  const [ttsOk, setTtsOk] = useState(false);
  const [listening, setListening] = useState(false);
  const [micErr, setMicErr] = useState<"" | "micError" | "micDenied">("");
  const [speaking, setSpeaking] = useState(false);
  const [answers, setAnswers] = useState<Record<number, "y" | "n">>({});
  const [copied, setCopied] = useState(false);
  const [canShare, setCanShare] = useState(false);
  const recRef = useRef<any>(null);
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    const w = window as any;
    setMicOk(!!(w.SpeechRecognition || w.webkitSpeechRecognition));
    setCanShare(typeof navigator.share === "function");
    if ("speechSynthesis" in window) {
      setTtsOk(true);
      const load = () => (voicesRef.current = window.speechSynthesis.getVoices());
      load();
      window.speechSynthesis.addEventListener("voiceschanged", load);
      return () => {
        window.speechSynthesis.removeEventListener("voiceschanged", load);
        window.speechSynthesis.cancel();
      };
    }
    return undefined;
  }, []);

  const stopSpeech = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
    setSpeaking(false);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    stopSpeech();
  }, [lang]);

  const runCheck = (value = text) => {
    stopSpeech();
    if (value.trim().length < 5) {
      setResult(null);
      setNotice(t.tooShort);
      return;
    }
    setNotice("");
    const matches = analyse(value);
    setAnswers({});
    setResult({ matches, ...verdictFor(matches) });
  };

  const clearAll = () => {
    stopSpeech();
    recRef.current?.abort?.();
    setListening(false);
    setText("");
    setResult(null);
    setNotice("");
    setMicErr("");
    setAnswers({});
  };

  const startMic = () => {
    const w = window as any;
    const SR = w.SpeechRecognition || w.webkitSpeechRecognition;
    if (!SR) return;
    try {
      const rec = new SR();
      rec.lang = lang === "hi" ? "hi-IN" : "en-IN";
      rec.interimResults = false;
      rec.maxAlternatives = 1;
      rec.onresult = (e: any) => {
        const said = Array.from(e.results as ArrayLike<any>).map((r: any) => r[0].transcript).join(" ").trim();
        if (said) setText((prev) => (prev ? prev + " " : "") + said);
        else setMicErr("micError");
      };
      rec.onerror = (e: any) => {
        setMicErr(e.error === "not-allowed" || e.error === "service-not-allowed" ? "micDenied" : "micError");
        setListening(false);
      };
      rec.onend = () => setListening(false);
      recRef.current = rec;
      setMicErr("");
      setListening(true);
      rec.start();
    } catch {
      setListening(false);
      setMicErr("micError");
    }
  };
  const stopMic = () => {
    try { recRef.current?.stop(); } catch { /* ignore */ }
    setListening(false);
  };

  const evidenceText = (r: Result) =>
    r.matches.length ? r.matches.map((m) => `• ${m.label[lang]} “${m.matchedSnippet}”`) : [t.noneFound];

  const stepsList = [
    t.steps.s1,
    `${t.steps.s2}: ${t.steps.s2c}`,
    `${t.steps.s3}. ${t.steps.s3c}`,
    `${t.steps.s4}: ${t.steps.s4c}`,
    `${t.steps.s5} ${t.steps.s5c}`,
  ];

  const readAloud = () => {
    if (!result) return;
    if (speaking) return stopSpeech();
    const parts = [
      `${t.verdicts[result.verdict]}. ${t.flags(result.flags)}.`,
      t.evidenceHeading + ".",
      ...(result.matches.length ? result.matches.map((m) => m.label[lang]) : [t.noneFound]),
      t.unknownHeading + ".",
      ...t.unknown,
      t.pauseHeading + ".",
      ...t.questions,
      t.nextHeading + ".",
      ...stepsList,
    ];
    const u = new SpeechSynthesisUtterance(parts.join(" "));
    u.lang = lang === "hi" ? "hi-IN" : "en-IN";
    const pref = lang === "hi" ? "hi" : "en-in";
    const v =
      voicesRef.current.find((x) => x.lang.toLowerCase().replace("_", "-").startsWith(pref)) ||
      voicesRef.current.find((x) => x.lang.toLowerCase().startsWith(lang));
    if (v) u.voice = v;
    u.rate = 0.9;
    u.pitch = 1;
    u.onend = () => setSpeaking(false);
    u.onerror = () => setSpeaking(false);
    window.speechSynthesis.cancel();
    setSpeaking(true);
    window.speechSynthesis.speak(u);
  };

  const report = useMemo(() => {
    if (!result) return "";
    return [
      t.reportTitle,
      `${t.verdicts[result.verdict]} — ${t.flags(result.flags)}`,
      "",
      t.evidenceHeading + ":",
      ...evidenceText(result),
      "",
      t.nextHeading + ":",
      ...stepsList.map((s, i) => `${i + 1}. ${s}`),
      `SEBI: ${LINKS.sebi}`,
      `Cyber: ${LINKS.cyber} / 1930`,
      `SCORES: ${LINKS.scores}`,
    ].join("\n");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result, lang]);

  const copyReport = async () => {
    try {
      await navigator.clipboard.writeText(report);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = report;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const vIcon = result?.verdict === "high" ? Icon.warn : result?.verdict === "careful" ? Icon.caution : Icon.question;

  return (
    <main className="rs-wrap min-h-screen">
      <div role="group" aria-label={t.langLabel} className="grid grid-cols-2 gap-2">
        {(["en", "hi"] as Lang[]).map((l) => (
          <button key={l} type="button" aria-pressed={lang === l} onClick={() => setLang(l)}
            className={`rs-btn ${lang === l ? "rs-btn-on" : "rs-btn-secondary"}`}>
            {l === "en" ? "English" : "हिंदी"}
          </button>
        ))}
      </div>

      <header className="mt-5 text-center">
        <h1 className="text-3xl font-extrabold text-primary">🛡️ {t.title}</h1>
        <p className="mt-1 text-xl font-semibold">{t.tagline}</p>
      </header>

      <section className="mt-5">
        <textarea rows={6} className="rs-textarea" value={text} placeholder={t.placeholder} aria-label={t.placeholder}
          onChange={(e) => setText(e.target.value)} />
        <p className="mt-1 text-base text-muted-foreground">{t.helper}</p>

        <button type="button" className="rs-btn rs-btn-primary mt-3 w-full text-xl" aria-label={t.check} onClick={() => runCheck()}>
          {t.check}
        </button>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {micOk && (listening ? (
            <button type="button" className="rs-btn rs-btn-danger rs-pulse" aria-label={t.stop} onClick={stopMic}>
              {Icon.mic} {t.stop}
            </button>
          ) : (
            <button type="button" className="rs-btn rs-btn-secondary" aria-label={t.speak} onClick={startMic}>
              {Icon.mic} {t.speak}
            </button>
          ))}
          {ttsOk && (
            <button type="button" className="rs-btn rs-btn-secondary" aria-label={speaking ? t.stop : t.listen}
              disabled={!result} onClick={readAloud} style={{ opacity: result ? 1 : 0.5 }}>
              {Icon.speaker} {speaking ? t.stop : t.listen}
            </button>
          )}
          <button type="button" className="rs-btn rs-btn-secondary col-span-2" aria-label={t.clear} onClick={clearAll}>
            {t.clear}
          </button>
        </div>
        {listening && <p className="mt-2 font-bold text-danger" aria-live="assertive">● {t.listening}</p>}
        {micErr && <p className="mt-2 font-semibold" role="alert">⚠️ {t[micErr]}</p>}
        {micOk === false && <p className="mt-2 text-base text-muted-foreground">{t.micUnsupported}</p>}
        {notice && <p className="mt-3 font-semibold" role="alert">{notice}</p>}
      </section>

      {result && (
        <>
          <section role="status" aria-live="polite" className={`rs-card border-0 rs-verdict-${result.verdict}`}>
            <div className="flex items-center gap-3">
              {vIcon}
              <div>
                <p className="text-[32px] font-extrabold leading-tight">{t.verdicts[result.verdict]}</p>
                <p className="text-lg font-semibold">{t.flags(result.flags)}</p>
              </div>
            </div>
            <p className="mt-2">{t.verdictSub[result.verdict]}</p>
          </section>

          <section className="rs-card">
            <h2 className="text-2xl font-bold">{t.evidenceHeading}</h2>
            {result.matches.length === 0 ? (
              <p className="mt-2">{t.noneFound}</p>
            ) : (
              <ul className="mt-2 space-y-3">
                {result.matches.map((m) => (
                  <li key={m.id} className="flex gap-2">
                    <span aria-hidden="true" className="text-xl">{m.weight > 0 ? "🚩" : "ℹ️"}</span>
                    <div>
                      {m.weight === 0 && <strong>{t.noteLabel}: </strong>}
                      {m.label[lang]}
                      <div className="mt-1 text-base">“<mark className="rs-mark">{m.matchedSnippet}</mark>”</div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="rs-card rs-unknown">
            <h2 className="text-2xl font-bold">❓ {t.unknownHeading}</h2>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              {t.unknown.map((u) => <li key={u}>{u}</li>)}
            </ul>
          </section>

          <section className="rs-card rs-pause">
            <h2 className="text-2xl font-bold">✋ {t.pauseHeading}</h2>
            <ol className="mt-3 space-y-4">
              {t.questions.map((q, i) => (
                <li key={i}>
                  <p className="font-semibold">{i + 1}. {q}</p>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {(["y", "n"] as const).map((a) => (
                      <button key={a} type="button" aria-pressed={answers[i] === a}
                        className={`rs-btn ${answers[i] === a ? (a === "y" ? "rs-btn-danger" : "rs-btn-on") : "rs-btn-secondary"}`}
                        onClick={() => setAnswers((p) => ({ ...p, [i]: a }))}>
                        {answers[i] === a ? "✓ " : ""}{a === "y" ? t.yes : t.no}
                      </button>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-4 font-bold">{t.pauseClose}</p>
          </section>

          <section className="rs-card">
            <h2 className="text-2xl font-bold">{t.nextHeading}</h2>
            <ol className="mt-3 space-y-4">
              <li><p className="text-xl font-bold">1. 🚫 {t.steps.s1}</p></li>
              <li>
                <a className="rs-btn rs-btn-secondary w-full" href={LINKS.sebi} target="_blank" rel="noopener noreferrer">2. {t.steps.s2}</a>
                <p className="mt-1">{t.steps.s2c}</p>
              </li>
              <li>
                <a className="rs-btn rs-btn-danger w-full" href="tel:1930">📞 3. {t.steps.s3}</a>
                <p className="mt-1">{t.steps.s3c}</p>
                <a className="rs-btn rs-btn-secondary mt-2 w-full" href={LINKS.cyber} target="_blank" rel="noopener noreferrer">{t.steps.s3link}</a>
              </li>
              <li>
                <a className="rs-btn rs-btn-secondary w-full" href={LINKS.scores} target="_blank" rel="noopener noreferrer">4. {t.steps.s4}</a>
                <p className="mt-1">{t.steps.s4c}</p>
              </li>
              <li>
                <p className="text-xl font-bold">5. 👨‍👩‍👧 {t.steps.s5}</p>
                <p>{t.steps.s5c}</p>
              </li>
            </ol>
          </section>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <button type="button" className="rs-btn rs-btn-primary" aria-label={t.copy} onClick={copyReport}>
              {copied ? `✓ ${t.copied}` : t.copy}
            </button>
            {canShare && (
              <button type="button" className="rs-btn rs-btn-secondary" aria-label={t.share}
                onClick={() => navigator.share({ title: t.reportTitle, text: report }).catch(() => {})}>
                {t.share}
              </button>
            )}
          </div>
        </>
      )}

      <footer className="mt-8 border-t-2 pt-4 text-base text-muted-foreground">{t.disclaimer}</footer>
    </main>
  );
}
