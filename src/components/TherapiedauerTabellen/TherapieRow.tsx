import React, { useState } from 'react'
import HourCell from './components/HourCell'
import { TOTAL_HOURS, type TherapieRow as TherapieRowType } from './types'
import './components/HourCell.scss'

interface TherapieRowProps {
  row: TherapieRowType
  rowIndex: number
  onUpdateRow: (rowIndex: number, updatedRow: TherapieRowType) => void
  onRemoveRow: (rowIndex: number) => void
}

const TherapieRow: React.FC<TherapieRowProps> = ({ 
  row, 
  rowIndex, 
  onUpdateRow, 
  onRemoveRow 
}) => {
  const [isDragging, setIsDragging] = useState(false)
  const [newHourState, setNewHourState] = useState(0)

  const totalHours = row.hours.reduce((sum, hour) => sum + hour, 0)

  const updateRow = (updatedRow: TherapieRowType) => {
    onUpdateRow(rowIndex, updatedRow)
  }

  const updateHour = (hourIndex: number, value: number) => {
    const updatedHours = [...row.hours]
    updatedHours[hourIndex] = value
    updateRow({
      ...row,
      hours: updatedHours
    })
  }

  const handleStartSelection = (hourIndex: number, event: React.PointerEvent) => {
    event.preventDefault()
    setIsDragging(true)
    const newState = row.hours[hourIndex] === 0 ? 1 : 0
    setNewHourState(newState)
    updateHour(hourIndex, newState)
    
    const handlePointerUp = () => {
      setIsDragging(false)
      window.removeEventListener('pointerup', handlePointerUp)
    }
    window.addEventListener('pointerup', handlePointerUp)
  }

  const handleHourPointerEnter = (hourIndex: number) => {
    if (isDragging) {
      updateHour(hourIndex, newHourState)
    }
  }

  const handleRemoveRow = () => {
    onRemoveRow(rowIndex)
  }

  const handleInputChange = (field: keyof TherapieRowType, value: string) => {
    updateRow({
      ...row,
      [field]: value
    })
  }

  return (
    <tr>
      {/* Identifikation */}
      <td>
        <input 
          value={row.number} 
          onChange={(e) => handleInputChange('number', e.target.value)}
          type="text" 
          placeholder="Nummer" 
          className="input-field"
        />
      </td>
      <td>
        <input 
          value={row.name} 
          onChange={(e) => handleInputChange('name', e.target.value)}
          type="text" 
          placeholder="Name eingeben" 
          className="input-field"
        />
      </td>
      <td>
        <input 
          value={row.department} 
          onChange={(e) => handleInputChange('department', e.target.value)}
          type="text" 
          placeholder="Fachrichtung" 
          className="input-field"
        />
      </td>

      {/* Stundenzellen */}
      {Array.from({ length: TOTAL_HOURS }, (_, hourIndex) => (
        <HourCell 
          key={hourIndex}
          value={row.hours[hourIndex]}
          hourIndex={hourIndex}
          onStartSelection={handleStartSelection}
          onPointerEnter={handleHourPointerEnter}
        />
      ))}

      {/* Gesamtzeit und Löschen-Button */}
      <td className="total-cell">{totalHours} h</td>
      <td>
        <button 
          onClick={handleRemoveRow}
          className="delete-btn"
          aria-label="Zeile löschen"
        >
          Löschen
        </button>
      </td>
    </tr>
  )
}

export default TherapieRow