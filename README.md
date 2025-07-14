
# 📒 Smart Outdoor Sketchbook

A React + Tailwind CSS web app for **Outdoor sketching**. It lets you draw on a **canvas**, **save sketches** with **geolocation**, **date**, and **time**, **view them later**, and manage them easily.

---

## 🚀 Features

- ✨ **Full-screen canvas** with grid overlay
- 🧾 Toolbar with: **🎨 Brush color**, **🖌️ Brush size**, **🩹 Eraser**, **↩️ Undo/redo**
- 🔎 **Save sketches** to **localStorage**
- 📍 **Tag location** (latitude/longitude)
- 🗓️ Save **date** & **time** of creation
- 🖼️ Gallery of **previous sketches** (with location, date, time)  
- ✏️ **delete**, **export** sketches
- 📤 **Export sketches** as PNG
- 📴 Works offline with background sync simulation 

---
## 🛠️ Built With

|  API                      | Purpose                                       |
|---------------------------|-----------------------------------------------|
| 🖌️**Canvas API**           | For freehand drawing and image export         |
| 🌍**Geolocation API**      | To tag sketches with latitude and longitude   |
| 📴**localStorage**         | Offline storage of sketches in the browser    |
| 🔁**Background Sync (Sim)**| Simulates syncing using service workers       |
| 📶**Network Information API** | Displays current online/offline connection status | 

---

## 🗂️ Project Structure

```bash
📁 Sketchbook/
├──📁src/
|  ├──📁components/
│  |     ├── 🖼️ CanvasBoard.jsx
│  |     ├── 🛠️ CanvasControls.jsx
│  |     ├── 🧠 CanvasLogic.jsx
│  |     ├── 🎚️ CanvasToolbar.jsx
│  |     ├── 🗺️ LocationInfo.jsx
│  |     ├── 🌐 NetworkStatus.jsx
│  |     └── 📒 SketchGallery.jsx
|  ├──📁hooks/
│  |     ├── 🧩 useCanvasSetup.js
│  |     ├── 🖱️ useDrawingEvents.js
|  ├──📁services/
│  |     └── 💾 storage.js
|  ├── ⚙️ App.js
|  ├── 🧩 index.js
|  └── 🎨index.css
```

## 🧰 Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/rajashreedebnath/Sketchbook.git
cd Sketchbook
npm install
npm start
```

## Usage Guide


⚡ Web APIs Used
- 🖼️ Canvas API: drawing and exporting images
- 🌍 Geolocation API: tagging sketch location
- 🔄 Background Tasks API (via localStorage simulation): offline storage and sync
- 📶 Network Information API: show connection status

---
