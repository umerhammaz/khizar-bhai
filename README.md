# Khizar Bhai Tribute

Zero build step tribute web site. Works directly in browser using native ES modules.

## File Map
- `index.html`: Base page shell and templates.
- `css/tokens.css`: Color variables and fonts.
- `css/base.css`: Reset, image rules, reduced motion.
- `css/layout.css`: Grid, flex, and spacing helpers.
- `css/components.css`: Shared buttons, cards, inputs.
- `css/sections/*.css`: Section-scoped styling.
- `js/main.js`: Main startup script with crash guards.
- `js/utils.js`: Shared helper functions.
- `js/data/media.js`: Media links and SVG fallback.
- `js/data/*-data.js`: Text content for facts, quiz, timeline, awards.
- `js/components/*.js`: Feature logic for each section.

## How To Edit
- **Add memory:** Open `js/data/timeline-data.js` and add an object.
- **Add quiz question:** Open `js/data/quiz-data.js` and add an entry.
- **Change photos:** Put image link into `js/data/timeline-data.js` or `js/data/media.js`.
- **Passcode:** Default passcodes in `js/components/gate.js` are `786`, `khizar`, `bhai`.

## Run Locally
Browser modules require a local web server:
```
python3 -m http.server 8000
```
Open `http://localhost:8000` in your browser.