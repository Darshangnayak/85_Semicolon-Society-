# 3D Car Customizer

A modern React + Vite application that lets users explore models and start a booking/consultation for a customized 3D car experience.

> Built by **Semicolon Society**.

---

## ✨ Features

* **Hero section** with call‑to‑action (Customize / Book)
* **Models gallery** (Toyota Land Cruiser, Jeep Rubicon, Ford Bronco)
* **Features section** (AR/VR ready text, real‑time configurator copy)
* **Booking**: embedded form (name, email, phone, model) or optional dedicated route `/booking`
* **Responsive UI** styled with Tailwind CSS

---

## 🧰 Tech Stack

* **Framework**: [React](https://react.dev/)
* **Build tool**: [Vite](https://vitejs.dev/guide/)
* **Router**: [React Router](https://reactrouter.com/en/main/start/overview)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/docs/installation)
* **Package manager**: [npm](https://docs.npmjs.com/)

> Make sure you have **Node.js** and **Git** installed:
> • Node.js: [https://nodejs.org/](https://nodejs.org/)
> • Git: [https://git-scm.com/](https://git-scm.com/)


## 📸 Screenshots

### 🏠 Home Page
![Home Page](https://github.com/Darshangnayak/85_Semicolon-Society-/blob/8001e578528281f75f81386454ebc99d87422903/homepage%20(2).png)
### 🚗 Car Models
![Car Customization](https://github.com/Darshangnayak/85_Semicolon-Society-/blob/8001e578528281f75f81386454ebc99d87422903/models.png)

### 🚗 Car Customization
![Car Customization](https://github.com/Darshangnayak/85_Semicolon-Society-/blob/8001e578528281f75f81386454ebc99d87422903/jeep.png)

---

## 📁 Project Structure (suggested)

```
project-root/
├─ public/
│  └─ assets/
│     └─ images/
│        ├─ background.jpg
│        ├─ f.avif
│        ├─ ru.jpg
│        └─ br.jpg
├─ src/
│  ├─ components/
│  │  ├─ HomePage.jsx
│  │  └─ Booking.jsx                # (optional) dedicated booking page
│  ├─ App.jsx
│  └─ main.jsx
├─ index.html
├─ package.json
└─ tailwind.config.js               # if Tailwind is used
```

> Place the referenced images inside `public/assets/images/` so URLs like `/assets/images/background.jpg` work.

---

## 🚀 Getting Started

### 1) Clone or download

```bash
git clone <your-repo-url>
cd <project-folder>
```

### 2) Install dependencies

```bash
npm install
```

### 3) Run the dev server

```bash
npm run dev
```

Vite will print a local URL (typically `http://localhost:5173`).

### 4) Production build & preview

```bash
npm run build
npm run preview
```

> Default Vite scripts (in `package.json`):

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

---

## 🔀 Routing

* `/` → `HomePage.jsx` (hero, models, features, booking form)
* `/customize` → your configurator page (add your component/route)
* `/booking` → (optional) separate form page `Booking.jsx` if you prefer navigating away from the home page

**Example `App.jsx`:**

```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Booking from "./components/Booking"; // optional

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<Booking />} />
        {/* Add your /customize route here */}
      </Routes>
    </Router>
  );
}
```

---

## 🧩 Environment / Assets

* Put public images under `public/assets/images/` (Vite serves them as `/assets/images/...`).
* If you later add APIs/keys, create a `.env` file and use **Vite prefixes** like `VITE_API_URL` (see: [https://vitejs.dev/guide/env-and-mode.html](https://vitejs.dev/guide/env-and-mode.html)).

---

## 🛠 Troubleshooting (Windows / OneDrive / Vite)

### EPERM: operation not permitted (rmdir ... `.vite`) on Windows

This is commonly caused by **OneDrive locking files** inside your project.

**Fix options:**

1. **Move your project outside OneDrive** (recommended):

   * Example path: `C:\Projects\3D_Car_Customizer`
   * Then reinstall: `npm install` → `npm run dev`
2. **Delete Vite cache** (PowerShell):

   ```powershell
   Remove-Item -Recurse -Force "<your-project>\node_modules\.vite"
   ```
3. **Pause OneDrive syncing**, then try again (see Microsoft OneDrive help: [https://support.microsoft.com/office/pause-and-resume-sync-in-onedrive-398b8b44-1737-4a7d-8c49-5fbf5e6be59a](https://support.microsoft.com/office/pause-and-resume-sync-in-onedrive-398b8b44-1737-4a7d-8c49-5fbf5e6be59a))

### Paths with spaces

Wrap in quotes in PowerShell:

```powershell
cd "C:\Users\you\Desktop\3D Car Customizer"
```

### npm peer dependency conflicts

If you see `ERESOLVE` errors:

```powershell
# clean install
Remove-Item -Recurse -Force node_modules, package-lock.json
npm install

# if needed
npm install --legacy-peer-deps
```

### React Router not found

Install it if missing:

```bash
npm install react-router-dom
```

---

## ⛅️ Booking Form (inline vs separate page)

* **Inline**: Home page contains a form (Name, Email, Phone, Model). Hook it to your backend/DB or email service as needed.
* **Separate page**: Link the navbar **Booking** item to `/booking` and render `Booking.jsx` with the same fields + submit logic.

> React forms guide (official): [https://react.dev/learn](https://react.dev/learn)

---

## 🧪 Linting & Quality (optional but recommended)

* ESLint: [https://eslint.org/](https://eslint.org/)
* Prettier: [https://prettier.io/](https://prettier.io/)

**Install quickly:**

```bash
npm install -D eslint prettier
```

---

## 📤 Push to GitHub

### First time

```bash
git init
git add .
git commit -m "Initial commit: 3D Car Customizer"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo>.git
git push -u origin main
```

### Non-fast-forward / rejected push

If GitHub already has commits (README, etc.):

**Option A (merge safely):**

```bash
git pull origin main --rebase
git push origin main
```

**Option B (overwrite GitHub – caution!):**

```bash
git push origin main --force
```

> Git basics: https
