# Recall-and-React-game
(Healthcare Project) 


**A short memory and reaction game that keeps your own progress log, so you can notice changes over time.**

Play it here: **https://recall-and-react.netlify.app**

> **Important:** Recall and React is a student project and a screening *prototype*. It is **not** a medical test and it **cannot diagnose** dementia or any other condition (however, it can aid in alerting users to potential signs of dementia or similar cognitive-decline-related health conditions). See [What this game is, and is not](#what-this-game-is-and-is-not).

---

## Why this project exists

Dementia affects tens of millions of people worldwide (WHO), and changes in memory and reaction speed are often among the first things people, or their families, begin to notice. These changes tend to creep in slowly, and many people only seek help late.

Age is not the only thing that can affect memory and focus. Natural cognitive decline comes with ageing, but modern habits may add to it. Many people of every age, from children to older adults, now spend hours scrolling short-form videos such as reels and YouTube Shorts. A growing body of research, including a 2025 meta-analysis in Psychological Bulletin, links heavy short-form video use with poorer attention, memory and self-control. This evidence shows an association. It does not prove that short videos cause lasting memory loss, and some researchers dispute how strong the link is. Still, it is one more reason for people of all ages to keep an eye on how their memory and reaction speed are doing.

Recall and React is a simple, friendly game designed for older adults. Every time you play, your results are saved in your own **progress log** with the date and time. Over weeks and months, the log shows how your memory and reaction speed are changing.

## How it can help

- **Notice a decline early.** If your results move clearly outside your own usual range and stay there, the game tells you. That can be a prompt to think about a proper medical check-up, so you can decide whether to book one.
- **Serve as a first nudge, not a verdict.** If someone sees a worrying trend, goes for a professional check-up, and a condition is found early, then the game has done its job well.
- **Train memory and reaction.** Playing regularly can help people practise remembering words and numbers and responding quickly. The progress charts show whether you are improving.
- **Be useful for everyone.** Three difficulty levels (Easy, Standard, Challenge) let anyone test where they stand and push themselves further. Students can also use the optional study questions (a normal day, before an exam, after an exam, stress rating, sleep) to see how stress affects reaction time.

## What this game is, and is not

| It is | It is not |
|---|---|
| A tool that helps you track *your own* results over time | A medical test or a diagnosis |
| A way to notice when a result is unusual *for you* | Proof that anyone has, or does not have, dementia |
| A possible reason to talk to a doctor | A replacement for a doctor |

A change in your results does not mean you are unwell. Tiredness, stress, poor sleep, time of day, the device you use and plain practice all change scores. If you are worried about your memory, please speak to a doctor, whatever the game shows.

## What you do in the game

Each play takes about 7 to 10 minutes and has five short activities:

1. **Words:** remember a short list of words.
2. **Quick taps:** tap as soon as a circle turns green (simple reaction time).
3. **Left or right:** tap the side where a dot appears (choice reaction time).
4. **Numbers:** repeat lists of numbers that get longer (working memory).
5. **Word check:** say which words you saw earlier and which are new (recognition memory).

## Your progress log

- Create a profile with a **nickname** and year of birth (no real name needed).
- Every play is saved as a log entry with your nickname, **date and time**, level and results.
- Charts show each measure over time, with a shaded **usual range**.
- Save a **backup file** or a **results table (CSV)** at any time, and restore a backup on another device.

Your results are stored **only on your own device**, in your browser. Nothing is sent anywhere unless you choose to share it.

## How "unusual" is decided (the data science)

- Each person is compared with **themselves**, not with a fixed pass mark. Levels are never mixed, so Easy, Standard and Challenge are compared only with plays at the same level.
- Your first **3 plays** at a level set your baseline (the mean and spread of each measure).
- A later play is flagged as outside your usual range only if a measure is more than **2 standard deviations** from your baseline, with minimum spreads so that tiny differences do not trigger a flag.
- Measures used: median quick-tap time, median left-or-right time, longest number list, and words remembered (hits minus false alarms).
- Reaction times are summarised with the **median** because they are skewed. A new set of words is used each play so that earlier plays are not simply remembered.

This is a small prototype and has **not** been clinically validated. Proper cut-offs would need data from many older adults and, ideally, comparison with clinical assessments.

## Privacy and taking part

- Use a nickname, not your real name.
- Players must be **18 or older**.
- Results stay in your browser. To take part in the study, you can press **Copy my results** on the Progress page and paste the text into the study form. Sharing is optional and you choose each time. The shared text contains your player code and age, not your nickname.
- Clearing your browser data, or using a private window, will delete your saved results, so save a backup file now and then.

## Run it yourself

The game is a single web page with no installation needed. Download `index.html` from this repository and open it in a browser, or use the hosted version above. It works on phones and can be added to a phone's home screen.

## Files

| File | Purpose |
|---|---|
| `index.html` | The whole game (page, styles and code) |
| `manifest.webmanifest`, `sw.js`, `icon-*.png` | Let the game be added to a phone's home screen and load offline |

## About

Built by **Amogh Upadhyay**, BITS Pilani, K K Birla Goa Campus, as a project for the *Data Science for Healthcare* course.

*Recall and React is for learning and self-tracking only. It is not medical advice.*
