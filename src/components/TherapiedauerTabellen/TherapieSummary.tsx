import React from 'react'

interface TherapieSummaryProps {
  activePatients: number
  totalTime: number
}

const TherapieSummary: React.FC<TherapieSummaryProps> = ({ 
  activePatients, 
  totalTime 
}) => {
  return (
    <tfoot>
      <tr className="summary-row">
        {/* Spalten für Nummer, Name, Fachrichtung */}
        <td colSpan={3} className="summary-cell patient-count">
          Fallzahl: {activePatients} Patient(en)
        </td>
        {/* 24 Stunden-Spalten + Gesamtzeit + Aktion */}
        <td colSpan={26} className="summary-cell total-time">
          Gesamtzeit aller Patienten: {totalTime} Stunden
        </td>
      </tr>
    </tfoot>
  )
}

export default TherapieSummary