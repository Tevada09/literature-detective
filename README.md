# Literature Detective

A small, front-end educational demonstration website for English literature and reading comprehension.

## Requirements
- A modern web browser (Chrome, Edge, Firefox, Safari)
- Visual Studio Code
- Live Server extension for VS Code (recommended)

No backend, database, login, or API key is required.

## Run the website
1. Extract the `literature-detective.zip` folder.
2. Open the `literature-detective` folder in VS Code.
3. Install the **Live Server** extension if it is not already installed.
4. Right-click `index.html`.
5. Select **Open with Live Server**.
6. The website should open in your browser.

You can also open `index.html` directly in a browser. Live Server is recommended while editing.

## Project structure
```text
literature-detective/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── stories.js
│   ├── missions.js
│   └── progress.js
└── assets/
    └── images/
```

## How it works
- `index.html`: page structure and navigation.
- `css/style.css`: colors, layout, responsive design, and visual styles.
- `js/stories.js`: story passages, vocabulary, and mission questions.
- `js/missions.js`: mission question flow and answer checking.
- `js/progress.js`: saves completed case reports in browser Local Storage.
- `js/main.js`: navigation, story display, vocabulary popups, and report screen.

## Add or edit stories
Open `js/stories.js`. The `STORIES` array contains each story's:
- `id`, `title`, `level`, `minutes`, `emoji`, `art`, `description`, and `author`
- `paragraphs`: an array of story paragraphs
- `vocabulary`: words with `definition`, `example`, and `synonym`
- `missions`: four mission objects (`word`, `character`, `plot`, `meaning`), each containing questions

Each question needs:
- `q`: question text
- `options`: an array of answer choices
- `answer`: the zero-based index of the correct answer
- `explain`: a short explanation

For example, if the second option is correct, set `answer: 1`.

## Reset saved demo progress
Open the browser developer console and run:
```javascript
localStorage.removeItem("literatureDetectiveProgress");
```
Then refresh the page.

## Notes
- The project uses locally stored JavaScript story data.
- Google Fonts are loaded from the internet; if offline, the browser uses fallback fonts.
- Story illustrations use emoji and CSS backgrounds, so the demo does not require image downloads.
- This is a demonstration prototype, not a secure student assessment system.
