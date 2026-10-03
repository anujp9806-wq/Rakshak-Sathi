# 🛡️ Rakshak Saathi (रक्षक साथी)

**A voice-first investor-scam checker for first-time Indian investors.**

Paste or speak a suspicious WhatsApp or Telegram message, a link, or a SEBI registration number. Rakshak Saathi checks it against known scam patterns and tells you what it found — and, just as importantly, what it cannot know.

> **Built for Tier-2 and Tier-3 India.** Works offline. Works on low-end phones. No login. Stores nothing.

---

## The problem

Indians lost **₹22,495 crore to cyber fraud in 2025**. Over **75% of that was investment fraud**. The people being targeted hardest are first-time investors in Tier-2 and Tier-3 cities — the same people who are driving India's retail investment boom and who have the least access to trustworthy verification tools.

A typical scam message looks like this:

> *"SEBI registered advisory. Guaranteed 40% monthly returns. Limited slots. Pay ₹5,000 registration fee via UPI to join. Only for serious investors."*

Every single sentence in that message is a red flag. But a 35-year-old first-time investor in Indore has no way to know that — and no one to ask.

Rakshak Saathi is the tool that answers that question in under a second, in the language they actually speak.

---

## What it does

1. **You paste or speak a message.** Text input, or a mic button if the browser supports it.
2. **It runs deterministic, transparent rules** — no AI, no black box — and finds every red flag in the text.
3. **It gives you one of three verdicts:** High Risk, Be Careful, or Unverified. **It never says "Safe."**
4. **It shows you the evidence** — every matched rule, with the exact text that triggered it, quoted back to you.
5. **It tells you what it cannot know** — a permanent, honest list of limits.
6. **It pauses you.** Three questions to ask yourself before you do anything.
7. **It tells you what to do next** — don't pay, check the SEBI list yourself, call 1930, use cybercrime.gov.in, file a complaint with SEBI SCORES.

Everything works in **English and Hindi**, and everything can be **read aloud** for users who prefer listening to reading.

---

## Why this exists (and what it refuses to be)

Rakshak Saathi is built on a set of rules that will not change, no matter how the project grows:

| It will never... | Because... |
|---|---|
| Say "Safe" | No message can be verified as safe. Only "no known pattern matched." |
| Give stock tips | This is not investment advice. It is fraud detection. |
| Recommend buy, sell, or hold | That is a SEBI-registered adviser's job, and it requires a licence. |
| Show ads or monetise | The user is a potential fraud victim, not a customer. |
| Require a login | A scam checker must not become a data collection tool. |
| Store anything | No localStorage, no cookies, no analytics, no server. Nothing leaves the phone. |
| Use an AI model | Rules are auditable, debuggable, and explainable. Black boxes are not. |

These are not limitations. They are the design.

---

## Features

- ✅ **Voice-first input** using the Web Speech API, with explicit listening, error, and unsupported states
- ✅ **Read-aloud verdict** using `speechSynthesis` in Hindi (`hi-IN`) or Indian English (`en-IN`)
- ✅ **Full English / हिंदी toggle** — every string in the UI, including verdicts, evidence, and next steps
- ✅ **11-rule detection engine** covering the most common investment scam patterns in India
- ✅ **Hinglish pattern matching** — "निश्चित मुनाफा", "पक्का रिटर्न", "आज ही", "सीमित सीटें"
- ✅ **SEBI registration number format validation** (`IN[ABHP]` + 9 digits)
- ✅ **"What we cannot know"** section — permanent, always shown
- ✅ **Pause step** with three honest questions before any next steps
- ✅ **Golden Hour alert** — if you have already paid, call 1930 immediately
- ✅ **Copy / Share report** for showing a family member or filing with police
- ✅ **Zero dependencies, zero build step, single HTML file**
- ✅ **Fully offline** — no network requests after page load
- ✅ **Mobile-first, 18px+ base font, high contrast, large tap targets**

---

## What it checks for

| # | Rule | Example trigger |
|---|---|---|
| 1 | Guaranteed / fixed returns | "guaranteed profit", "पक्का रिटर्न", "no risk" |
| 2 | Artificial urgency | "limited slots", "today only", "आज ही" |
| 3 | "SEBI approved" with no registration number | "SEBI registered" with no INA number present |
| 4 | Malformed SEBI registration number | "INA12345" (too short) |
| 5 | Remote-access / screen-share requests | "AnyDesk", "share your screen", "install this APK" |
| 6 | Fee / UPI / QR payment demands | "registration fee", "scan this QR", "पैसे भेजें" |
| 7 | Shortened links | "bit.ly", "t.me/", "chat.whatsapp.com" |
| 8 | Suspicious or lookalike domains | ".xyz", "zerodha-kyc-login.com" |
| 9 | Unrealistic return percentages | "40% monthly", "10% per week" |
| 10 | Secrecy demands | "don't tell anyone", "किसी को न बताएं" |
| 11 | Personal bank account payment | "send to my account", "IFSC" |

**Verdict logic:** 2+ rules matched, or any critical rule matched → **High Risk**. Exactly 1 non-critical rule → **Be Careful**. No rules matched → **Unverified**.

---

## Run it

No install. No build. No dependencies.

```bash
git clone https://github.com/YOUR-USERNAME/rakshak-saathi.git
cd rakshak-saathi
