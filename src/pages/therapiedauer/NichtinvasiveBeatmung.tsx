import DateNavigation from '../../components/DateNavigation'
import TherapieTimeTable from '../../components/TherapiedauerTabellen/TherapieTimeTable'

function NichtinvasiveBeatmung() {
  return (
    <div className="page-container full-width">
      <h1 className="page-title">Nichtinvasive Beatmung</h1>
      <p className="page-description">
        Hier werden Daten zur nichtinvasiven Beatmung erfasst.
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

export default NichtinvasiveBeatmung