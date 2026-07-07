# Game Dashboard

A Chrome extension that renders live game statistics by fetching data from public gaming APIs and displaying them in a clean, real-time popup dashboard.

## Features

- Live game data fetched from public REST APIs
- Clean popup UI with stats cards
- Auto-refresh on popup open
- Supports multiple game data sources
- Lightweight — no external dependencies, pure JS

## Screenshots

> Popup showing live stats with clean card layout.

## Installation

1. Clone or download this repo
2. Open Chrome → `chrome://extensions/`
3. Enable **Developer Mode** (top right)
4. Click **Load unpacked** → select the project folder
5. Pin the extension from the toolbar

## File Structure

```
├── manifest.json       # Extension config
├── popup/
│   ├── popup.html      # Extension popup UI
│   ├── popup.js        # Fetch logic + DOM updates
│   └── popup.css       # Styles
├── background/
│   └── background.js   # Service worker
├── icon16.png
├── icon48.png
└── icon128.png
```

## Tech Stack

- JavaScript (Chrome Extensions Manifest V3)
- Chrome Extensions API
- HTML5 / CSS3
- Public REST APIs

## Permissions

- `storage` — save user preferences
- `alarms` — scheduled data refresh

## License

MIT
