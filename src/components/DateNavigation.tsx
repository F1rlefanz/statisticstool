import { useState } from 'react'
import DatePicker from 'react-datepicker'
import { ChevronLeft, ChevronRight, Calendar, RefreshCw } from 'lucide-react'
import "react-datepicker/dist/react-datepicker.css"

const DateNavigation = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [showCalendar, setShowCalendar] = useState(false)

  const adjustDate = (days: number) => {
    const newDate = new Date(selectedDate)
    newDate.setDate(newDate.getDate() + days)
    setSelectedDate(newDate)
  }

  const handleTodayDate = () => {
    setSelectedDate(new Date())
  }

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setSelectedDate(date)
      setShowCalendar(false)
    }
  }

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar)
  }

  const handleVortagÜbernahme = () => {
    // TODO: Zukünftige Implementierung - Datenübernahme vom Vortag
    console.log('Vortag Übernahme: Platzhalter für zukünftige Implementierung')
  }

  const formattedDate = selectedDate.toISOString().slice(0, 10)

  return (
    <div className="date-navigation">
      <button onClick={() => adjustDate(-1)} className="nav-button" aria-label="Previous Date">
        <ChevronLeft size={24} />
      </button>

      <div className="date-input-container">
        <input 
          type="date" 
          value={formattedDate} 
          onChange={(e) => handleDateChange(new Date(e.target.value))} 
          className="date-input" 
        />
        <button 
          onClick={toggleCalendar} 
          className="calendar-toggle-button" 
          aria-expanded={showCalendar}
        >
          <Calendar size={20} />
        </button>

        {showCalendar && (
          <div className="calendar-popup">
            <DatePicker 
              selected={selectedDate}
              onChange={handleDateChange}
              inline
            />
          </div>
        )}
      </div>

      <button onClick={() => adjustDate(1)} className="nav-button" aria-label="Next Date">
        <ChevronRight size={24} />
      </button>

      <button onClick={handleTodayDate} className="nav-button today-button" aria-label="Today">
        <Calendar size={24} />
      </button>

      <button 
        onClick={handleVortagÜbernahme} 
        className="nav-button vortaguebernahme-button" 
        aria-label="Vortag Übernahme"
      >
        <RefreshCw size={24} />
      </button>
    </div>
  )
}

export default DateNavigation