import { Outlet } from 'react-router-dom'

const Therapiedauer = () => {
  return (
    <div className="page-container full-width">
      <Outlet />
      {/* Fallback wenn keine Child-Route aktiv ist */}
      <div style={{ display: 'none' }}>
        <h1 className="page-title">Erfassung der Therapiedauer</h1>
        <p className="page-description">
          Wählen Sie in der Sidebar die gewünschte Therapieform aus, um die Dauer zu erfassen.
        </p>
      </div>
    </div>
  )
}

export default Therapiedauer