import { Routes, Route } from 'react-router-dom'
import InvasiveBeatmung from './therapiedauer/InvasiveBeatmung'
import NichtinvasiveBeatmung from './therapiedauer/NichtinvasiveBeatmung'
import NasalerHighflow from './therapiedauer/NasalerHighflow'
import Nierenersatz from './therapiedauer/Nierenersatz'
import Herzunterstuetzung from './therapiedauer/Herzunterstuetzung'

function Therapiedauer() {
  return (
    <Routes>
      <Route path="invasive-beatmung" element={<InvasiveBeatmung />} />
      <Route path="nichtinvasive-beatmung" element={<NichtinvasiveBeatmung />} />
      <Route path="nasaler-highflow" element={<NasalerHighflow />} />
      <Route path="nierenersatz" element={<Nierenersatz />} />
      <Route path="herzunterstuetzung" element={<Herzunterstuetzung />} />
      <Route path="/" element={
        <div className="page-container full-width">
          <h1 className="page-title">Erfassung der Therapiedauer</h1>
          <p className="page-description">
            Wählen Sie in der Sidebar die gewünschte Therapieform aus, um die Dauer zu erfassen.
          </p>
        </div>
      } />
    </Routes>
  )
}

export default Therapiedauer