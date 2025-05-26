import { Routes, Route } from 'react-router-dom'
import Breadcrumb from './components/Breadcrumb'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import KISSErfassung from './pages/KISSErfassung'
import Therapiedauer from './pages/Therapiedauer'
import Statistiken from './pages/Statistiken'
import Graphen from './pages/Graphen'
import Einstellungen from './pages/Einstellungen'
import InvasiveBeatmung from './pages/therapiedauer/InvasiveBeatmung'
import './components/Breadcrumb.scss'
import './components/Sidebar.scss'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Breadcrumb />
      <div className="content-wrapper">
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kiss-erfassung" element={<KISSErfassung />} />
            <Route path="/therapiedauer/*" element={<Therapiedauer />} />
            <Route path="/statistiken/*" element={<Statistiken />} />
            <Route path="/graphen" element={<Graphen />} />
            <Route path="/einstellungen" element={<Einstellungen />} />
            <Route path="/test-invasive-beatmung" element={<InvasiveBeatmung />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App