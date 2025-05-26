import React, { useState } from 'react'
import TherapieRow from './TherapieRow'
import TherapieSummary from './TherapieSummary'
import { 
  type TherapieRow as TherapieRowType, 
  createEmptyTherapieRow, 
  isValidTherapieRow,
  DEFAULT_HEADERS 
} from './types'


interface ErrorState {
  message: string;
  type: 'error' | 'warning';
}

const TherapieTimeTable: React.FC = () => {
  const [tableData, setTableData] = useState<TherapieRowType[]>([createEmptyTherapieRow()])
  const [error, setError] = useState<ErrorState | null>(null)

  const setErrorMessage = (message: string, type: 'error' | 'warning' = 'error') => {
    setError({ message, type })
  }

  const clearError = () => {
    setError(null)
  }

  const handleAddRow = () => {
    setTableData([...tableData, createEmptyTherapieRow()])
    clearError()
  }

  const handleRowUpdate = (rowIndex: number, updatedRow: TherapieRowType) => {
    if (!tableData[rowIndex]) {
      setErrorMessage('Ungültige Zeilenposition')
      return
    }
    
    const newTableData = [...tableData]
    newTableData[rowIndex] = updatedRow
    setTableData(newTableData)

    if (!isValidTherapieRow(updatedRow)) {
      setErrorMessage('Die Eingaben sind unvollständig oder fehlerhaft', 'warning')
    } else {
      clearError()
    }
  }

  const handleRowRemove = (index: number) => {
    if (tableData.length <= 1) {
      setErrorMessage('Es muss mindestens eine Zeile vorhanden sein', 'warning')
      return
    }
    
    setTableData(tableData.filter((_, i) => i !== index))
    clearError()
  }

  const activePatients = tableData.filter(row => {
    const hasIdentification = row.number.trim() !== '' || row.name.trim() !== ''
    const hasTherapy = row.hours.some(hour => hour === 1)
    return hasIdentification && hasTherapy
  }).length

  const totalTime = tableData.reduce((total, row) => 
    total + row.hours.reduce((sum, hour) => sum + hour, 0), 0)

  return (
    <div className="therapie-time-table-container">
      {/* Haupttabelle */}
      <table className="therapie-time-table">
        <thead>
          <tr>
            {DEFAULT_HEADERS.map(header => (
              <th 
                key={header.key}
                className={header.class}
                scope="col"
              >
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <TherapieRow 
              key={rowIndex}
              row={row}
              rowIndex={rowIndex}
              onUpdateRow={handleRowUpdate}
              onRemoveRow={handleRowRemove}
            />
          ))}
        </tbody>
        <TherapieSummary 
          activePatients={activePatients}
          totalTime={totalTime}
        />
      </table>
      
      {/* Hinzufügen-Button */}
      <div className="add-row-container">
        <button 
          onClick={handleAddRow} 
          className="add-row-btn"
          aria-label="Neue Zeile hinzufügen"
        >
          + Zeile hinzufügen
        </button>
      </div>

      {/* Error Alert */}
      {error && (
        <div 
          role="alert" 
          aria-live="polite" 
          className={`error-alert ${error.type === 'warning' ? 'error-alert--warning' : ''}`}
        >
          {error.message}
        </div>
      )}
    </div>
  )
}

export default TherapieTimeTable