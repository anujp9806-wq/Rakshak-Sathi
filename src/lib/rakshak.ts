export type Lang = "en" | "hi";
export type VerdictKey = "high" | "careful" | "unverified";

export const i18n = {
  en: {
    title: "Rakshak Saathi",
    tagline: "Check before you send money",
    placeholder: "Paste the message, link or SEBI number here",
    helper: "Paste the whole message. Nothing you type leaves your phone.",
    check: "Check",
    speak: "Speak",
    stop: "Stop",
    listen: "Read aloud",
    clear: "Clear",
    listening: "Listening… speak now",
    micError: "Could not hear you. Please type instead.",
    micDenied: "Microphone permission was denied. Please type instead.",
    micUnsupported: "Voice input is not supported on this browser. Please type instead.",
    tooShort: "Please paste or speak a message first (at least 5 characters).",
    verdicts: { high: "HIGH RISK", careful: "BE CAREFUL", unverified: "UNVERIFIED" },
    verdictSub: {
      high: "Do not pay or install anything.",
      careful: "Something here looks wrong. Slow down.",
      unverified: "We could not confirm anything. That does not make it safe.",
    },
    flags: (n: number) => (n === 1 ? "1 red flag found" : `${n} red flags found`),
    evidenceHeading: "What we found",
    noneFound: "No known red-flag pattern was found in this text. This does NOT mean it is safe.",
    noteLabel: "Note",
    unknownHeading: "What we cannot know",
    unknown: [
      "We cannot know if the person who sent this is who they claim to be.",
      "We cannot know if the returns they promise are real.",
      "We cannot know if this is a new scam we have not seen before.",
      "We cannot check whether this company is registered with SEBI unless you give us the registration number.",
      "We cannot see what is behind a link until you open it — and you should not open it.",
      "We cannot recover your money. Only you, acting fast, can.",
    ],
    pauseHeading: "Before you do anything, ask yourself",
    questions: [
      "Did this person contact you first, or did you find them yourself?",
      "Are they promising a fixed, guaranteed, or very high return?",
      "Are they asking you to pay, install an app, share your screen, or send an ID document?",
    ],
    yes: "Yes",
    no: "No",
    pauseClose: "If you answered yes to any of these, stop. Do not pay. Talk to someone you trust first.",
    nextHeading: "What to do now",
    steps: {
      s1: "Do not pay. Do not send money. Do not install any app.",
      s2: "Check the SEBI registration yourself",
      s2c: "Search the name or the registration number. If it is not there, it is not registered.",
      s3: "If you have already paid — call 1930 right now",
      s3c: "The first hour matters most. Also file a complaint at cybercrime.gov.in.",
      s3link: "Open cybercrime.gov.in",
      s4: "Complain to SEBI SCORES",
      s4c: "For complaints against registered intermediaries, or to report someone claiming to be registered.",
      s5: "Tell someone.",
      s5c: "Show this screen to a family member before you do anything.",
    },
    copy: "Copy report",
    copied: "Report copied",
    share: "Share",
    reportTitle: "Rakshak Saathi report",
    disclaimer:
      "This app gives general safety information only. It is not investment advice and does not recommend buying or selling anything. It cannot detect every scam. Always verify independently.",
    langLabel: "Language",
  },
  hi: {
    title: "रक्षक साथी",
    tagline: "पैसे भेजने से पहले जाँचें",
    placeholder: "यहाँ मैसेज, लिंक या SEBI नंबर पेस्ट करें",
    helper: "पूरा मैसेज पेस्ट करें। आपका लिखा कुछ भी फ़ोन से बाहर नहीं जाता।",
    check: "जाँचें",
    speak: "बोलें",
    stop: "रोकें",
    listen: "सुनें",
    clear: "साफ़ करें",
    listening: "सुन रहा हूँ… अब बोलिए",
    micError: "सुन नहीं पाया। कृपया टाइप करके लिखें।",
    micDenied: "माइक की इजाज़त नहीं मिली। कृपया टाइप करके लिखें।",
    micUnsupported: "इस ब्राउज़र में बोलकर लिखना नहीं चलता। कृपया टाइप करें।",
    tooShort: "पहले कोई मैसेज पेस्ट करें या बोलें (कम से कम 5 अक्षर)।",
    verdicts: { high: "उच्च जोखिम", careful: "सावधान रहें", unverified: "असत्यापित" },
    verdictSub: {
      high: "पैसे न भेजें, कुछ भी इंस्टॉल न करें।",
      careful: "यहाँ कुछ गड़बड़ लग रहा है। रुककर सोचें।",
      unverified: "हम कुछ पक्का नहीं कर पाए। इसका मतलब यह नहीं कि यह सुरक्षित है।",
    },
    flags: (n: number) => `${n} खतरे के संकेत मिले`,
    evidenceHeading: "हमें क्या मिला",
    noneFound: "इस टेक्स्ट में कोई जाना-पहचाना खतरे का पैटर्न नहीं मिला। इसका मतलब यह नहीं कि यह सुरक्षित है।",
    noteLabel: "ध्यान दें",
    unknownHeading: "जो हम नहीं जान सकते",
    unknown: [
      "हम यह नहीं जान सकते कि मैसेज भेजने वाला वाकई वही है जो वह बताता है।",
      "हम यह नहीं जान सकते कि जो रिटर्न वह वादा कर रहा है, वह सच है।",
      "हम यह नहीं जान सकते कि यह कोई नया तरीका है जो हमने पहले नहीं देखा।",
      "जब तक आप रजिस्ट्रेशन नंबर न दें, हम यह जाँच नहीं सकते कि कंपनी SEBI में रजिस्टर्ड है या नहीं।",
      "लिंक के पीछे क्या है, यह हम देख नहीं सकते — और आपको भी उसे खोलना नहीं चाहिए।",
      "हम आपके पैसे वापस नहीं ला सकते। सिर्फ़ आप, जल्दी कदम उठाकर, ऐसा कर सकते हैं।",
    ],
    pauseHeading: "कुछ भी करने से पहले, खुद से पूछें",
    questions: [
      "क्या इस व्यक्ति ने पहले आपसे संपर्क किया, या आपने खुद उन्हें खोजा?",
      "क्या वे तय, गारंटीड या बहुत ज़्यादा रिटर्न का वादा कर रहे हैं?",
      "क्या वे पैसे, ऐप इंस्टॉल, स्क्रीन शेयर या पहचान पत्र भेजने को कह रहे हैं?",
    ],
    yes: "हाँ",
    no: "नहीं",
    pauseClose: "अगर किसी एक का भी जवाब हाँ है, तो रुक जाइए। पैसे न भेजें। पहले किसी भरोसेमंद इंसान से बात करें।",
    nextHeading: "अब क्या करें",
    steps: {
      s1: "पैसे न भेजें। कोई ऐप इंस्टॉल न करें।",
      s2: "SEBI रजिस्ट्रेशन खुद जाँचें",
      s2c: "नाम या रजिस्ट्रेशन नंबर से खोजें। अगर वहाँ नहीं है, तो वह रजिस्टर्ड नहीं है।",
      s3: "अगर पैसे भेज चुके हैं — अभी 1930 पर कॉल करें",
      s3c: "पहला घंटा सबसे ज़रूरी है। cybercrime.gov.in पर शिकायत भी दर्ज करें।",
      s3link: "cybercrime.gov.in खोलें",
      s4: "SEBI SCORES पर शिकायत करें",
      s4c: "रजिस्टर्ड इंटरमीडियरी की शिकायत, या फर्ज़ी दावे की रिपोर्ट के लिए।",
      s5: "किसी को बताएँ।",
      s5c: "कुछ भी करने से पहले यह स्क्रीन परिवार के किसी सदस्य को दिखाएँ।",
    },
    copy: "रिपोर्ट कॉपी करें",
    copied: "रिपोर्ट कॉपी हो गई",
    share: "शेयर करें",
    reportTitle: "रक्षक साथी रिपोर्ट",
    disclaimer:
      "यह ऐप सिर्फ़ सामान्य सुरक्षा जानकारी देता है। यह निवेश सलाह नहीं है और कुछ खरीदने या बेचने की सिफ़ारिश नहीं करता। यह हर ठगी को पकड़ नहीं सकता। हमेशा खुद जाँच करें।",
    langLabel: "भाषा",
  },
};

export type Match = {
  id: string;
  label: { en: string; hi: string };
  weight: number; // 0 = informational, not a red flag
  matchedSnippet: string;
};

const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\/]/g, "\\$&");
// ASCII patterns get word-ish boundaries; Devanagari ones match as substrings.
function compile(patterns: string[]): RegExp {
  const parts = patterns.map((p) =>
    /^[\x00-\x7f]+$/.test(p) ? `(?<![a-z0-9])${esc(p)}${/[a-z0-9]$/i.test(p) ? "(?![a-z0-9])" : ""}` : esc(p),
  );
  return new RegExp(parts.join("|"), "i");
}

const R = {
  guaranteed: compile([
    "guaranteed return", "guaranteed profit", "guaranteed", "fixed return", "assured return", "no risk",
    "risk free", "risk-free", "100% return", "double your money", "sure shot", "confirm profit",
    "निश्चित मुनाफा", "पक्का रिटर्न", "गारंटीड", "कोई जोखिम नहीं", "डबल", "मुनाफ़ा तय",
  ]),
  urgency: compile([
    "limited time", "limited seats", "limited slots", "today only", "last chance", "hurry", "act now",
    "only few", "expires today", "offer ends", "आज ही", "सीमित सीटें", "जल्दी करें", "आखिरी मौका", "अभी करें",
  ]),
  sebiWord: /sebi|सेबी/i,
  sebiClaim: /(sebi|सेबी)[^\n]{0,40}?(approved|registered|certified|मंज़ूर|मंजूर|रजिस्टर्ड)|(approved|registered|certified|रजिस्टर्ड)[^\n]{0,40}?(sebi|सेबी)|सेबी/i,
  sebiValid: /\bIN[ABHP]\d{9}\b/i,
  sebiAny: /\bIN[ABHP][\s-]?\d[\d\s-]*/i,
  remote: compile([
    "anydesk", "teamviewer", "quicksupport", "rustdesk", "screen share", "share your screen", "install this app",
    "download this apk", "apk", "स्क्रीन शेयर", "ऐप इंस्टॉल", "एपीके",
  ]),
  payment: compile([
    "upi", "gpay", "phonepe", "paytm", "google pay", "pay now", "transfer", "registration fee", "processing fee",
    "membership fee", "joining fee", "advance", "deposit first", "scan this qr", "qr code", "पैसे भेजें", "फीस",
    "एडवांस", "क्यूआर", "यूपीआई", "रजिस्ट्रेशन फीस",
  ]),
  vpa: /[a-z0-9.\-_]{2,}@(okaxis|oksbi|okhdfcbank|okicici|ybl|paytm|upi|axl|ibl|apl|airtel)\b/i,
  shortLink: compile([
    "bit.ly", "tinyurl", "rb.gy", "t.co", "goo.gl", "ow.ly", "is.gd", "cutt.ly", "rebrand.ly", "shorturl",
    "tiny.cc", "t.me/", "wa.me/", "chat.whatsapp.com",
  ]),
  domain: /(?:https?:\/\/)?(?:www\.)?([a-z0-9-]+\.[a-z.]{2,})/gi,
  badTld: /\.(xyz|top|club|online|site|live|icu|buzz|click|link|info|tk|ml|ga|cf|gq)$/i,
  lookalike: /(zerodha|groww|upstox|angel|icici|hdfc|sbi|nse|bse|sebi|npci|paytm|phonepe)[a-z0-9-]*(login|verify|kyc|support|help|invest|trade|pro|official)/i,
  highPct: /\b(\d{2,4})\s?%\s?(per\s)?(day|daily|week|weekly|month|monthly|रोज़|हफ़्ते|महीने)/i,
  monthlyPct: /(\d+(?:\.\d+)?)\s?%\s?(?:per\s|a\s|\/\s?|हर\s|प्रति\s)?(month|monthly|महीने|मासिक)/i,
  secret: compile([
    "don't tell", "dont tell", "keep this between us", "don't discuss", "secret", "only for you", "whatsapp me",
    "personal number", "किसी को न बताएं", "गुप्त", "सिर्फ आपके लिए",
  ]),
  personalAcct: compile([
    "send to my account", "account number", "ifsc", "my account", "व्यक्तिगत खाते", "मेरे खाते में",
  ]),
};

export const CRITICAL = new Set(["guaranteed", "sebiNoNumber", "remote", "payment", "highReturn"]);

function snip(original: string, idx: number, len: number) {
  const s = Math.max(0, idx - 20);
  const e = Math.min(original.length, idx + len + 20);
  return (s > 0 ? "…" : "") + original.slice(s, e).replace(/\s+/g, " ").trim() + (e < original.length ? "…" : "");
}

function find(re: RegExp, original: string) {
  const m = re.exec(original);
  return m ? { text: m[0], idx: m.index } : null;
}

export function analyse(input: string): Match[] {
  const original = input;
  const out: Match[] = [];
  const add = (id: string, en: string, hi: string, hit: { text: string; idx: number }, weight = 1) =>
    out.push({ id, label: { en, hi }, weight, matchedSnippet: snip(original, hit.idx, hit.text.length) });

  let h = find(R.guaranteed, original);
  if (h)
    add("guaranteed",
      "Promises guaranteed or fixed returns — no legitimate investment can promise this.",
      "निश्चित या गारंटीड रिटर्न का वादा — कोई भी असली निवेश ऐसा वादा नहीं कर सकता।", h);

  h = find(R.urgency, original);
  if (h)
    add("urgency", "Creates urgency or scarcity to stop you from thinking it over.",
      "जल्दबाज़ी या सीमित मौके का दबाव — ताकि आप सोच न सकें।", h);

  const valid = find(R.sebiValid, original);
  const anyNum = find(R.sebiAny, original);
  if (!valid) {
    h = R.sebiWord.test(original) ? find(R.sebiClaim, original) : null;
    if (h)
      add("sebiNoNumber", "Claims to be SEBI approved but gives no SEBI registration number.",
        "SEBI से मंज़ूरी का दावा, लेकिन कोई SEBI रजिस्ट्रेशन नंबर नहीं दिया गया।", h);
  }
  if (valid) {
    add("sebiNumber",
      "A SEBI registration number was found. A number existing in a message does NOT prove it belongs to the sender. Verify it yourself on the SEBI website using the link in the next steps.",
      "SEBI रजिस्ट्रेशन नंबर मिला। किसी मैसेज में नंबर होना यह साबित नहीं करता कि वह भेजने वाले का है। SEBI की वेबसाइट पर खुद जाँचें।",
      valid, 0);
  } else if (anyNum) {
    add("sebiMalformed", "A SEBI number was mentioned but it is not in a valid format.",
      "SEBI नंबर का ज़िक्र है, लेकिन वह सही फॉर्मेट में नहीं है।", anyNum);
  }

  h = find(R.remote, original);
  if (h)
    add("remote",
      "Asks you to install a remote-access app or share your screen — this is how bank accounts get emptied.",
      "रिमोट-एक्सेस ऐप इंस्टॉल करने या स्क्रीन शेयर करने को कहा गया है — इसी तरह बैंक खाते खाली होते हैं।", h);

  h = find(R.vpa, original) || find(R.payment, original);
  if (h)
    add("payment", "Asks you to pay a fee, transfer money, or scan a QR code before you can invest.",
      "निवेश से पहले फीस, पैसे ट्रांसफर या QR स्कैन करने को कहा गया है।", h);

  h = find(R.shortLink, original);
  if (h)
    add("shortLink", "Contains a shortened or group-invite link — you cannot see where it actually goes.",
      "छोटा (shortened) लिंक या ग्रुप इनवाइट लिंक है — पता नहीं यह कहाँ ले जाता है।", h);

  R.domain.lastIndex = 0;
  let dm: RegExpExecArray | null;
  let guard = 0;
  while ((dm = R.domain.exec(original)) && guard++ < 50) {
    const d = (dm[1] ?? "").replace(/\.+$/, "");
    if (/@/.test(original.slice(Math.max(0, dm.index - 1), dm.index))) continue; // skip emails / UPI ids
    if (R.badTld.test(d) || R.lookalike.test(d)) {
      add("domain", "A suspicious or lookalike website address was found.",
        "संदिग्ध या नकली वेबसाइट पता मिला है।", { text: dm[0], idx: dm.index });
      break;
    }
  }

  h = find(R.highPct, original);
  if (!h) {
    const mm = R.monthlyPct.exec(original);
    if (mm && parseFloat(mm[1] ?? "0") >= 5) h = { text: mm[0], idx: mm.index };
  }
  if (h)
    add("highReturn",
      "Promises a very high return in a short period — this is the most common scam pattern in India.",
      "कम समय में बहुत ज़्यादा रिटर्न का वादा — भारत में सबसे आम ठगी का तरीका।", h);

  h = find(R.secret, original);
  if (h)
    add("secret", "Asks you to keep it secret or move to a private chat — a strong sign of fraud.",
      "गुप्त रखने या प्राइवेट चैट पर आने को कहा गया है — यह धोखाधड़ी का बड़ा संकेत है।", h);

  h = find(R.personalAcct, original);
  if (h)
    add("personalAcct", "Asks for money into a personal account instead of a company account.",
      "कंपनी के खाते की जगह व्यक्तिगत खाते में पैसे माँगे गए हैं।", h);

  return out;
}

export function verdictFor(matches: Match[]): { verdict: VerdictKey; flags: number } {
  const flags = matches.filter((m) => m.weight > 0);
  if (flags.length >= 2 || flags.some((m) => CRITICAL.has(m.id))) return { verdict: "high", flags: flags.length };
  if (flags.length === 1) return { verdict: "careful", flags: 1 };
  return { verdict: "unverified", flags: 0 };
}

export const LINKS = {
  sebi: "https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=13",
  cyber: "https://cybercrime.gov.in",
  scores: "https://scores.sebi.gov.in",
};
