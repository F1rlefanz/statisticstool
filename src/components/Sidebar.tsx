import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true)
  const location = useLocation()

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded)
  }

  const isActive = (path: string): boolean => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <div className="sidebar-container">
      <button 
        className={`toggle-button ${!isExpanded ? 'sidebar-collapsed' : ''}`}
        onClick={toggleSidebar}
        aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
      >
        <ChevronLeft size={24} />
      </button>

      <div className={`sidebar ${!isExpanded ? 'collapsed' : ''}`}>
        {isExpanded && (
          <nav>
            <h3>Navigation</h3>
            <ul className="menu">
              <li className="menu-item">
                <a href="/" className={isActive('/') ? 'active' : ''}>
                  Home
                </a>
              </li>
              <li className="menu-item">
                <a href="/kiss-erfassung" className={isActive('/kiss-erfassung') ? 'active' : ''}>
                  KISS
                </a>
              </li>
              {/* Weitere Navigation wird in den nächsten Schritten hinzugefügt */}
            </ul>
          </nav>
        )}
      </div>
    </div>
  )
}

export default Sidebar