# Dashboard - React + TypeScript + Vite + Tailwind + Framer-motion

## Introduction

Dashboard app featuring draggable cards with theme toggle (light/dark).

<!-- **Link to project**: https://your-live-demo-url.example.com -->

![App Screenshot](https://github.com/slyncrafty/laughing-giggle/blob/main/img/dash.png)

![App Demo](https://github.com/slyncrafty/laughing-giggle/blob/main/img/dash.gif)
![App Demo](https://github.com/slyncrafty/laughing-giggle/blob/main/img/dash2.gif)

## Tech Stack

- **Frontend**: React, Vite, React Router
- **Styling**: Tailwind CSS
- **Animation**: framer-motion

## Features

- Dashboard with a grid of cards.
- Customizable and draggable cards and simple pages displaying contents.
- Cards automatically compact down to columns.
- Light/Dark theme toggle.

## Project Structure

**React App**

```
src/
├─ main.tsx
├─ App.tsx
├─ index.css
├─ components/
│ ├─ Button.tsx
│ ├─ Card.tsx
│ ├─ Dashboard.tsx
│ ├─ Navbar.tsx
│ └─ SettingCard.tsx
├─ contexts/
│ └─ AppSettingContext.tsx
├─ data/
│ └─ data.ts
├─ layouts/
│ ├─ SimpleCard.tsx
│ └─ VerticalCard.tsx
├─ pages/
│ ├─ AboutPage.tsx
│ └─ PostPage.tsx
```

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run

- **For running both React App and Server**

```bash

npm run dev

```

- Run the React app (Vite)
- Vite will print the dev URL. (`➜ Local: http://localhost:5173/`)
- Open the printed URL in your browser.

## Lessons Learned

- Feature-oriented folder structure scales better as the app grows
- Used Tailwind to keep consistent styles
- Small, reusable components simplify UI changes (Button, Card) and layouts
- Utilizing React Context - context can provide a shared and centralized state that tracks(dark/light theme)

## Optimizations

- Make it responsive to render well on all screen sizes and resolutions.
- Add adjustable reading width slider.

## Examples

- **Portfolio:** https://slyncrafty.github.io/

## Reference

- [npmjs](https://www.npmjs.com/package/react-grid-layout#responsive-grid-layout-props)
- [Tom Is Loading](https://www.youtube.com/watch?v=Q0F6LxJAkjE)
