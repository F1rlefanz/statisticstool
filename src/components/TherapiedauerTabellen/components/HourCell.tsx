import React from 'react'

interface HourCellProps {
  value: number
  hourIndex: number
  onStartSelection: (hourIndex: number, event: React.PointerEvent) => void
  onPointerEnter: (hourIndex: number) => void
}

const HourCell: React.FC<HourCellProps> = ({ 
  value, 
  hourIndex, 
  onStartSelection, 
  onPointerEnter 
}) => {
  const formattedHourIndex = hourIndex.toString().padStart(2, '0')

  const handlePointerDown = (event: React.PointerEvent) => {
    onStartSelection(hourIndex, event)
  }

  const handlePointerEnter = () => {
    onPointerEnter(hourIndex)
  }

  return (
    <td 
      className="hour-cell"
      role="checkbox"
      aria-checked={value === 1}
      aria-label={`Stunde ${formattedHourIndex}`}
    >
      <div 
        className="hour-selector"
        onPointerDown={handlePointerDown}
        onPointerEnter={handlePointerEnter}
      >
        <div 
          className="hour-checkbox"
          data-selected={value === 1}
        ></div>
      </div>
    </td>
  )
}

export default HourCell