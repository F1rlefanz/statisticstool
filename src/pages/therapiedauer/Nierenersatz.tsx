import DateNavigation from '../../components/DateNavigation'
import TherapieTimeTable from '../../components/TherapiedauerTabellen/TherapieTimeTable'

function Nierenersatz() {
  return (
    <div className="page-container full-width">
      <h1 className="page-title">Nierenersatz (CRRT)</h1>
      <p className="page-description">
        Hier werden Daten zur kontinuierlichen Nierenersatztherapie erfasst.
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

export default Nierenersatz