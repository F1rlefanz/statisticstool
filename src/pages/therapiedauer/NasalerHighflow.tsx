import DateNavigation from '../../components/DateNavigation'
import TherapieTimeTable from '../../components/TherapiedauerTabellen/TherapieTimeTable'

function NasalerHighflow() {
  return (
    <div className="page-container full-width">
      <h1 className="page-title">Nasaler Highflow</h1>
      <p className="page-description">
        Hier werden Daten zum nasalen Highflow erfasst.
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

export default NasalerHighflow