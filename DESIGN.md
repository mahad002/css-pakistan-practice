---
name: CSS Practice
description: A self-study course for Pakistan's CSS exam, drawn as a railway line the candidate drives from start to the written exam.
colors:
  green: "#0f4d3a"
  green-2: "#16654c"
  green-ink: "#ffffff"
  green-muted: "#bcd6ca"
  cream: "#e9e3cc"
  signal: "#f2c230"
  signal-ink: "#1d2420"
  signal-soft: "#fff7dc"
  signal-line: "#ead595"
  bg: "#f6f4ec"
  surface: "#ffffff"
  surface-2: "#fbfaf5"
  ink: "#1d2420"
  muted: "#56625b"
  line: "#dcd8c6"
  line-soft: "#ece8da"
  s0: "#e9e3cc"
  s1: "#a9d1bd"
  s2: "#3d8e6c"
  s3: "#0f4d3a"
  right: "#1d7a52"
  right-soft: "#e3f2ea"
  wrong: "#a5502c"
  wrong-soft: "#f8e9e1"
  dark-bg: "#0f1613"
  dark-surface: "#16211c"
  dark-surface-2: "#1b2822"
  dark-ink: "#e7eae4"
  dark-muted: "#a2b2a9"
  dark-line: "#2b3b33"
  dark-line-soft: "#22302a"
  dark-green: "#0c3a2c"
  dark-green-2: "#5fb894"
  dark-green-muted: "#a9c9bb"
  dark-cream: "#33443b"
  dark-signal-soft: "#2c2817"
  dark-signal-line: "#5a4d1f"
  dark-s1: "#3e6e58"
  dark-s2: "#5fae8a"
  dark-s3: "#b8e3cc"
  dark-right: "#6fcf9f"
  dark-right-soft: "#183327"
  dark-wrong: "#e39a78"
  dark-wrong-soft: "#3a231a"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(30px, 3.4vw, 40px)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.015em"
  count:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "34px"
    fontWeight: 700
    lineHeight: 1
    fontFeature: "tnum"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "23px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.03em"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.03em"
  station:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "15px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.03em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  reading:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, sans-serif"
    fontSize: "16.5px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, sans-serif"
    fontSize: "12.5px"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "0.06em"
  urdu:
    fontFamily: "Noto Nastaliq Urdu, Jameel Noori Nastaleeq, Noto Naskh Arabic, serif"
    fontWeight: 500
    lineHeight: 2.1
rounded:
  marker: "4px"
  tag: "6px"
  control: "8px"
  option: "10px"
  card: "12px"
  pill: "999px"
  round: "50%"
spacing:
  xs: "8px"
  sm: "14px"
  md: "18px"
  lg: "24px"
  xl: "28px"
  gutter: "32px"
  gutter-phone: "16px"
  container: "1280px"
components:
  button:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.green-2}"
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "40px"
  button-go:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.signal-ink}"
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "40px"
  button-solid:
    backgroundColor: "{colors.green}"
    textColor: "{colors.green-ink}"
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "40px"
  button-solid-hover:
    backgroundColor: "{colors.green-2}"
  button-quiet:
    textColor: "{colors.green-2}"
    rounded: "{rounded.control}"
    padding: "0 10px"
    height: "40px"
  button-quiet-hover:
    backgroundColor: "{colors.line-soft}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "8px 12px"
    height: "42px"
  header:
    backgroundColor: "{colors.green}"
    textColor: "{colors.green-ink}"
    height: "60px"
  station-marker:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.signal-ink}"
    typography: "{typography.station}"
    rounded: "{rounded.marker}"
    padding: "5px 9px"
  station-dot:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.round}"
    size: "30px"
  station-dot-ok:
    backgroundColor: "{colors.green}"
  board:
    backgroundColor: "{colors.green}"
    textColor: "{colors.green-ink}"
    rounded: "{rounded.tag}"
    padding: "22px 24px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "22px 24px"
  chip:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    padding: "0 14px"
    height: "36px"
  chip-pressed:
    backgroundColor: "{colors.green}"
    textColor: "{colors.green-ink}"
  tag:
    backgroundColor: "{colors.line-soft}"
    textColor: "{colors.muted}"
    rounded: "{rounded.tag}"
    padding: "0 8px"
    height: "22px"
  tag-next-stop:
    backgroundColor: "{colors.signal-soft}"
    rounded: "{rounded.tag}"
    padding: "0 8px"
    height: "22px"
---

# Design System: CSS Practice

## Overview

**Creative North Star: "The Railway Line"**

Preparation is a line the candidate drives. Each paper is a station; the arrival is the written exam on the date the candidate set. The site speaks in the language of a national railway: a deep railway-green header ruled off with a cream band, ringed station dots on a cream track, a green departure board for the timetable, and one signal-yellow marker that says "you are here". Station names, counts and section heads are set in condensed uppercase, like platform signage; everything meant to be read is set in the system sans.

The mood is calm, orderly and honest. Density is moderate: rows divided by hairlines rather than stacks of boxed cards, generous breathing room around the line, and tabular numbers wherever something is counted. Nothing warns, scolds or flashes red. Progress is shown as track already covered, not as a score against a deadline.

The system rejects the progress dashboard: no rings, no red "behind" badges, no streak alarms. Depth is almost flat; the line, the board and the hairlines do the structural work.

**Key Characteristics:**
- Railway green (#0f4d3a) header with a 5px cream (#e9e3cc) rule under it.
- Stations are ringed dots on an 8px cream track; covered track fills green.
- Signal yellow (#f2c230) marks "you are here" and the one primary action.
- Barlow Condensed uppercase for signage (stations, counts, section heads); system sans for reading.
- Green departure board for dates; warm paper ground (#f6f4ec) everywhere else.
- Light and dark themes from the same token names; reduced motion respected.

## Colors

A warm paper-and-railway palette: one deep green family, one cream, one signal yellow, and neutral inks with a faint green cast.

### Primary
- **Railway Green** (green): the header, the covered track fill, passed and mastered station dots, the departure board, solid buttons, pressed chips and h1/h2 colour in light mode. It is the institution's colour.
- **Line Green** (green-2): interactive green. Links, default button text, hover borders, focus outlines, the current station's name, and the "Revised" state. In dark mode it lifts to a bright mint (#5fb894) so links stay legible.
- **Cream Track** (cream): the unbuilt track, untouched station rings, the header's bottom rule, and the "Not yet" step of the progress scale. In dark mode it becomes a dim moss (#33443b).

### Secondary
- **Signal Yellow** (signal, with signal-ink text): the "you are here" marker above the current station, the inner square of the end station, the primary action button, and the 3px underline that marks the current tab in the header, sub-tabs and phone tab bar. Also the heading and link colour printed on the green departure board.
- **Signal Wash** (signal-soft with signal-line): the "next stop" tag, search-hit highlights, the brief flash on a heading reached from a link, and the note panel. A pale wash, never a warning.

### Tertiary
- **Progress scale** (s0 to s3): four steps of one green ramp for Not yet, Studied once, Revised and Mastered, used in segmented bars and the legend. Dark mode reverses lightness so Mastered is the brightest (#b8e3cc).
- **Answer feedback** (right / right-soft, wrong / wrong-soft): only for marking an MCQ after it is answered. Wrong is a burnt terracotta (#a5502c), not red, and it never describes the candidate's pace or progress.

### Neutral
- **Paper** (bg): page ground, a warm off-white.
- **Surface** (surface) and **Surface Deep** (surface-2): white bands, cards, inputs; surface-2 for explanations and code blocks.
- **Ink** (ink) and **Muted Ink** (muted): text and secondary text, both with a slight green cast.
- **Rule** (line) and **Soft Rule** (line-soft): borders and the hairlines between rows.

Dark values live in the `dark-*` tokens and are applied by redefining the same custom properties under `prefers-color-scheme: dark` (unless `data-theme="light"`) and under `[data-theme="dark"]`. Signal yellow and signal-ink are unchanged in dark mode.

### Named Rules
**The One Signal Rule.** Signal yellow fills only two things: the "you are here" marker and the screen's primary action. As a thin 3px underline it may mark the current tab, which is the same "you are here" meaning. Anything else that wants attention uses green or the signal wash.

**The No Red Rule.** There is no red and no "behind" state anywhere. Lateness, gaps and untouched work are shown as cream track still ahead, never as an alarm colour.

## Typography

**Display Font:** Barlow Condensed 500/600/700, self-hosted (with Arial Narrow, sans-serif)
**Body Font:** the system sans stack (-apple-system, Segoe UI, Roboto, Noto Sans)
**Urdu Font:** Noto Nastaliq Urdu 500 from Google Fonts (with Jameel Noori Nastaleeq, Noto Naskh Arabic)

**Character:** Condensed signage over a plain, fast reading face. Barlow speaks like platform boards and timetables; the system sans stays out of the way for long notes and questions.

### Hierarchy
- **Display** (700, clamp(30px, 3.4vw, 40px), line-height 1, mixed case): page titles such as "Your line to the written exam", in railway green. May carry a small Urdu word beside it at half size in line green.
- **Count** (700, 34px, 30px on phones, tabular figures): the big figures above the line (stations passed, left, weeks to arrival) and summary figures (32px).
- **Headline** (700, 23px, uppercase, 0.03em): section heads such as "Next stop" and "Timetable".
- **Title** (600, 18px, uppercase, 0.03em): sub-section heads; picks and library groups use 17px uppercase.
- **Station** (700, 15px, uppercase, 0.03em; 16px on phones): station names on the line and the paper path. Timetable stops use 600 15px uppercase at 0.05em; timetable dates 700 16px.
- **Body** (400, 16px, line-height 1.55): interface text. Task titles at 600.
- **Reading** (400, 16.5px, line-height 1.7, max 74ch): rendered notes. Note h1 uses the display face; note h2 is Barlow 700 25px over a rule.
- **Label** (400, 12.5px, uppercase, 0.06em, sans): captions under counts and table headers. Board column heads are 600 11.5px at 0.1em.
- **Urdu** (500, line-height 2.1): any `lang="ur"` or `dir="rtl"` text switches to Nastaliq with tall leading.

### Named Rules
**The Signage Rule.** Barlow Condensed is for things you would read off a platform: station names, counts, dates, section heads, the logo. Paragraphs, questions, options and buttons are set in the system sans.

**The Counted Figures Rule.** Every number that is counted or compared uses tabular figures.

## Layout

A centred container of 1280px with 32px side gutters (16px under 820px). The home screen stacks a white band holding the title, the three counts and the full-width line, then a two-column body: the Next stop task list (flexible) and a 380px column with the departure board and side links, 28px apart. Under 1080px the body becomes one column and the reading table of contents disappears.

The line is a CSS grid with one column per station (`--n` stations), the track drawn as a pseudo-element between the first and last centres and the green fill sized by `--done`. The marker is placed by `--at`.

Under 820px the phone layout takes over: the header shrinks to 54px and loses its nav, a fixed five-item bottom tab bar appears (with safe-area padding, current tab marked by a 3px signal bar at its top edge), and the line turns vertical. The track runs down the left at 6px, each station becomes a row (dot, name, count pushed right), the floating marker is replaced by an inline "You are here" badge after the current station name, and stations far from the current one are folded behind a "Show all N stations" quiet button.

Rows are the main rhythm: 13–14px vertical padding separated by a 1px soft rule. Sections sit 30px apart; page heads have 30px above and 24px below.

## Elevation & Depth

Nearly flat. Structure comes from the green header, white bands on paper, 1px rules and the track itself. One ambient shadow token exists (`0 1px 2px rgba(15,40,30,.06), 0 6px 18px -10px rgba(15,40,30,.18)`; darker in dark mode) and is used only on the floating toast. The departure board gets an inset bottom edge (`inset 0 -4px 0 rgba(0,0,0,.18)`) so it reads as a physical panel.

### Named Rules
**The Flat Platform Rule.** Surfaces rest flat. Only things that float above the page (the toast) cast a shadow.

## Shapes

Circles for stations, soft rectangles for everything else. Station dots, path steps and setup step numbers are rings with a 4–5px border; the end station is the one square (6px radius) with a signal-yellow inner square, so the destination looks different from the stops. Tracks are fully rounded bars (8px on the home line, 6px on the paper path and the phone line).

Radii: 4px for the marker and badges, 6px for tags, checkboxes and the board, 8px for buttons, inputs and segmented controls, 10px for MCQ options and the toast, 12px for cards, and pills only for filter chips. Borders are 1px; left borders are only ever 1px neutral or green rules (blockquotes, the library tree, the table of contents).

## Components

### Buttons
Plain and confident, sans text at 600 15px, 40px tall (34px for `sm`), 8px radius.
- **Default:** white surface, 1px rule border, line-green text; hover turns the border line green.
- **Go (primary):** signal yellow with dark ink, used for the screen's one primary action ("Show my line", "20 MCQs now", "Submit"). Hover darkens to #e6b51f.
- **Solid:** railway green with white text, hover to line green. In dark mode it becomes mint with dark text.
- **Quiet:** transparent, no border, 10px padding; hover fills the soft rule colour. For secondary verbs like "Skip", "Browse all", "Show all stations".
- **Disabled:** 45% opacity.

### The line and stations (signature)
A horizontal track of ringed stations from Start to the written exam.
- **Untouched:** white dot with a 5px cream ring.
- **Part:** white dot with a green ring.
- **Ok (first pass done):** solid green dot.
- **Here:** name turns line green; a signal-yellow marker with a small downward pointer sits above it ("You are here" inline badge on phones).
- **End:** a square ring in green with a signal-yellow inner square; its caption shows the exam date and the projected first-pass date.
- Each station caption shows a small count ("4 of 12 left", "first pass done") in muted tabular figures and, where available, a projected date in line green. Hovering a station scales its dot to 1.12.

### Paper path
A four-step mini line on each paper page: Understand, Learn, Practise, Mock (Prepare for the interview). Numbered 36px rings on a 6px cream track; done steps fill green, untouched steps have cream rings and muted numbers, and the current step carries a "You are here" signal badge under its name. Each step anchors to a numbered section below with a solid green number dot.

### Task rows (Next stop)
A grid of checkbox, title with muted meta line, hours estimate and action. The checkbox is a 24px rounded square with a 1.75px grey-green border that fills green with a white tick when checked; checked tasks strike through in muted ink. On phones the hours column folds into the meta line.

### Status segmented control
Four joined buttons, Not yet / Studied / Revised / Mastered, in a 1px bordered 8px pill with 12.5px muted labels. The pressed button fills along the progress ramp: soft rule for Not yet, s2 for Studied, line green for Revised, railway green for Mastered, white text. On phones the control drops to its own row under the topic.

### Departure board (timetable)
A railway-green panel (6px radius, 22px 24px padding) with a signal-yellow uppercase heading, a muted hint, and column heads "Stop / Date" in small spaced sans over a 35% white rule. Rows are Barlow uppercase stop names with right-aligned Barlow dates, a small sans sub-line, and a "proj." note for projected dates. Past rows dim to 55%. Rules between rows are 15% white.

### Header and navigation
Sticky green bar, 60px, with the "CSS PRACTICE" wordmark in Barlow 700 23px, nav links in pale green (white on hover), and the current link in white 600 with a 3px signal underline sitting on the cream rule. Right side shows the subject set and exam date. Sub-tabs repeat the pattern on paper: muted text, current in line green with a 3px signal underline.

### Inputs and chips
Inputs are 42px, 1px rule, 8px radius, white; focus turns the border line green with a 3px 22% line-green halo. Chips are 36px pills that fill railway green when pressed. Tags are 22px soft-rule badges; the "next stop" tag uses the signal wash with dark amber text.

### Motion
On arrival at the home screen the marker drops 10px into place (0.7s, cubic-bezier(.16,1,.3,1)) and the current station's dot sends out two signal-yellow pulse rings (1.6s, 0.25s delay). Both run only under `prefers-reduced-motion: no-preference`; the marker and fill are drawn in their final place, so with motion off the truth is already shown. Elsewhere, transitions are 0.15–0.2s colour and scale changes.

## Do's and Don'ts

### Do:
- **Do** show progress as track: cream for ahead, green for covered, ringed dots for stations.
- **Do** keep signal yellow fills to the "you are here" marker and the one primary action per screen.
- **Do** set station names, counts, dates and section heads in Barlow Condensed uppercase, and reading text in the system sans.
- **Do** use tabular figures for every count and date.
- **Do** separate rows with 1px soft rules instead of boxing each item in a card.
- **Do** switch Urdu text to Noto Nastaliq Urdu with line-height 2.1.
- **Do** turn the line vertical and fold far stations on phones, with the bottom tab bar under 820px.
- **Do** draw animated elements in their final state so reduced motion loses nothing.

### Don't:
- **Don't** use red, or any "behind", "overdue" or warning state for pace or progress.
- **Don't** use signal yellow as a general accent, a background for badges that are not "next stop", or for a second primary button on the same screen.
- **Don't** add coloured left borders thicker than 1px.
- **Don't** add progress rings, streak counters or score dashboards.
- **Don't** add shadows to resting surfaces.
- **Don't** set paragraphs or button labels in Barlow Condensed.
