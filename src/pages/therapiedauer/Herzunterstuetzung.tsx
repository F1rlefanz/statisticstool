import DateNavigation from '../../components/DateNavigation'
import TherapieTimeTable from '../../components/TherapiedauerTabellen/TherapieTimeTable'

function Herzunterstuetzung() {
  return (
    <div className="page-container full-width">
      <h1 className="page-title">Herzunterstützung</h1>
      <p className="page-description">
        Hier werden Daten zur Herzunterstützung erfasst.
      </p>
      
      <div className="mb-6">
        <DateNavigation />
      </div>

      <div className="table-container">
        <TherapieTimeTable />
      </div>
    </div>
  )
}

export default Herzunterstuetzung