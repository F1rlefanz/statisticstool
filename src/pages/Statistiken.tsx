import { Outlet } from 'react-router-dom'

const Statistiken = () => {
  return (
    <div className="page-container full-width">
      <Outlet />
      {/* Fallback wenn keine Child-Route aktiv ist */}
      <div style={{ display: 'none' }}>
        <h1 className="page-title">Statistiken</h1>
        <p className="page-description">
          Wählen Sie in der Sidebar den gewünschten Bereich aus, um detaillierte Statistiken einzusehen.
        </p>
      </div>
    </div>
  )
}

export default Statistiken