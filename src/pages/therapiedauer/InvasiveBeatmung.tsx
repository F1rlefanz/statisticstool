import DateNavigation from '../../components/DateNavigation'
import { TherapieTimeTable } from '../../components/TherapiedauerTabellen'
import '../../components/DateNavigation.scss'
import '../../components/TherapiedauerTabellen/TherapieTimeTable.scss'

const InvasiveBeatmung = () => {
  return (
    <div className="page-container full-width">
      <h1 className="page-title">Invasive Beatmung</h1>
      <p className="page-description">
        Hier werden Daten zur invasiven Beatmung erfasst.
      </p>
      
      <div style={{ marginBottom: '1.5rem' }}>
        <DateNavigation />
      </div>

      <div className="table-container">
        <TherapieTimeTable />
      </div>
    </div>
  )
}

export default InvasiveBeatmung