# 📖 GodofManga

A responsive manga reading platform built with React + TypeScript that provides a clean and immersive chapter viewing experience. The application includes chapter navigation, responsive page fitting, theme switching, a collapsible sidebar, and Google Drive-based manga chapter integration.

## 🚀 Features

📚 Manga chapter viewer with embedded Google Drive content  
📑 Chapter-based navigation for available manga chapters  
⚡ Smooth scrolling and responsive reading experience  
🖥️ Multiple page fitting modes — Fit Both, Fit Height, and Fit Width  
🌙 Light/Dark theme switching  
📱 Responsive layout for desktop and mobile devices  
🧭 Sticky and auto-hiding navigation header  
🧩 Modular component structure using reusable UI components  
🔄 React Query integration for application state and async handling  

## 🧰 Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- React Router
- TanStack React Query
- shadcn/ui
- Radix UI
- Lucide React
- Next Themes
- Google Drive integration for chapter content

## 🔗 Link

🌐 GitHub Repository: https://github.com/AtulRanjanJha/GodofManga

## 📦 Folder Structure

```text
GodofManga/
├── src/
│   ├── components/
│   │   ├── ui/                 # Reusable shadcn/ui components
│   │   └── viewer/             # Manga viewer components
│   │       ├── Header.tsx       # Viewer header
│   │       ├── Sidebar.tsx      # Reader settings and controls
│   │       └── Navigation.tsx   # Chapter/page navigation
│   │
│   ├── pages/
│   │   └── Viewer.tsx           # Main manga viewing page
│   │
│   ├── App.tsx                  # Application routing and providers
│   └── main.tsx                 # Application entry point
│
├── public/
├── package.json
└── README.md
```

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/AtulRanjanJha/GodofManga.git
cd GodofManga
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

### 5. Preview the Production Build

```bash
npm run preview
```

## 📖 Manga Viewer

The main manga reading experience is handled by `Viewer.tsx`.

The viewer supports:

- Chapter selection
- Embedded manga content
- Responsive page sizing
- Fit-to-width mode
- Fit-to-height mode
- Contain/both mode
- Smooth page scrolling
- Sticky header
- Auto-hiding header while scrolling
- Light and dark themes

Chapter content is mapped through Google Drive file IDs:

```ts
const chapterLinks = {
  "1": "GOOGLE_DRIVE_FILE_ID",
  "2": "GOOGLE_DRIVE_FILE_ID",
  "3": "",
};
```

A chapter is considered available when a Google Drive file ID is provided.

## ⚙️ Chapter Configuration

To add another chapter, update the `chapterLinks` object inside:

```text
src/pages/Viewer.tsx
```

Example:

```ts
const chapterLinks = {
  "1": "GOOGLE_DRIVE_FILE_ID",
  "2": "GOOGLE_DRIVE_FILE_ID",
  "3": "GOOGLE_DRIVE_FILE_ID",
  "4": "GOOGLE_DRIVE_FILE_ID",
};
```

The viewer automatically uses the available chapter links to populate the chapter navigation.

## 🎨 Reader Controls

The manga viewer provides different display modes for a better reading experience:

```text
Fit Both
   ↓
Fits the manga page inside the available viewer area

Fit Height
   ↓
Fits the page according to the viewer height

Fit Width
   ↓
Fits the page according to the viewer width
```

The application also provides a theme toggle for switching between light and dark modes.

## 📸 Preview

<!-- Add your GitHub screenshots here -->

```text
Add screenshots of the manga viewer here.
```

## 🙌 Credits

- React for the frontend framework
- Vite for the development and build environment
- Tailwind CSS for styling
- shadcn/ui and Radix UI for reusable interface components
- Lucide React for icons
- TanStack React Query for asynchronous state management

## 📄 License

This project is licensed under the MIT License.

---

## ⚠️ Disclaimer

This project is a prototype manga reader created for educational and demonstration purposes.

The application currently uses externally hosted Google Drive content for manga chapters. The availability of chapters depends on the configured Google Drive files and their accessibility.

This project does not claim ownership of any third-party manga content displayed through the application. Please ensure that you have the necessary rights or permissions for any content you host or distribute through the platform.

