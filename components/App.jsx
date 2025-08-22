// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./Homepage"
import Configurator from "./Configurator"

function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<HomePage />} />

        {/* Configurator */}
        <Route path="/customize" element={<Configurator />} />
      </Routes>
    </Router>
  )
}

export default App
