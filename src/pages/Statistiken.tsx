import { Routes, Route } from 'react-router-dom'
import Beatmung from './statistiken/Beatmung'
import Nierenersatz from './statistiken/Nierenersatz'
import Herzunterstuetzung from './statistiken/Herzunterstuetzung'
import Intensiv from './statistiken/Intensiv'
import Intensivueberwachung from './statistiken/Intensivueberwachung'

function Statistiken() {
  return (
    <Routes>
      <Route path="beatmung" element={<Beatmung />} />
      <Route path="nierenersatz" element={<Nierenersatz />} />
      <Route path="herzunterstuetzung" element={<Herzunterstuetzung />} />
      <Route path="intensiv" element={<Intensiv />} />
      <Route path="intensivueberwachung" element={<Intensivueberwachung />} />
      <Route path="/" element={
        <div className="page-container full-width">
          <h1 className="page-title">Statistiken</h1>
          <p className="page-description">
            Wählen Sie in der Sidebar den gewünschten Bereich aus, um detaillierte Statistiken einzusehen.
          </p>
        </div>
      } />
    </Routes>
  )
}

export default Statistiken