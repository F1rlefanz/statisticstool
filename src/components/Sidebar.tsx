import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
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

  const getMainSection = (): string => {
    const path = location.pathname
    if (path === '/') return 'Home'
    
    const section = path.split('/')[1]
    
    switch(section) {
      case 'kiss-erfassung':
        return 'KISS'
      case 'therapiedauer':
      case 'statistiken':
      case 'graphen':
        return 'Schweregrad'
      case 'einstellungen':
        return 'Einstellungen'
      default:
        return 'Navigation'
    }
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
            <h3>{getMainSection()}</h3>
            <ul className="menu">
              <li className="menu-item">
                <Link to="/" className={isActive('/') ? 'active' : ''}>
                  Home
                </Link>
              </li>

              <li className="menu-item">
                <Link to="/kiss-erfassung" className={isActive('/kiss-erfassung') ? 'active' : ''}>
                  KISS
                </Link>
              </li>

              <li className="menu-section">
                <div className="section-title">Schweregrad</div>
                <ul className="submenu">
                  <li>
                    <Link to="/therapiedauer" className={isActive('/therapiedauer') ? 'active' : ''}>
                      Erfassung der Therapiedauer
                    </Link>
                    {isActive('/therapiedauer') && (
                      <ul className="nested-menu">
                        <li className="submenu-section">
                          <div className="subsection-title">Beatmung</div>
                          <ul className="nested-submenu">
                            <li>
                              <Link to="/therapiedauer/invasive-beatmung">
                                Invasive Beatmung
                              </Link>
                            </li>
                            <li>
                              <Link to="/therapiedauer/nichtinvasive-beatmung">
                                Nichtinvasive Beatmung
                              </Link>
                            </li>
                            <li>
                              <Link to="/therapiedauer/nasaler-highflow">
                                Nasaler Highflow
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/therapiedauer/nierenersatz">
                            Nierenersatz (CRRT)
                          </Link>
                        </li>
                        <li>
                          <Link to="/therapiedauer/herzunterstuetzung">
                            Herzunterstützung
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li>
                    <Link to="/statistiken" className={isActive('/statistiken') ? 'active' : ''}>
                      Statistiken
                    </Link>
                    {isActive('/statistiken') && (
                      <ul className="nested-menu">
                        <li className="submenu-section">
                          <div className="subsection-title">Therapien</div>
                          <ul className="nested-submenu">
                            <li>
                              <Link to="/statistiken/beatmung">
                                Beatmung
                              </Link>
                            </li>
                            <li>
                              <Link to="/statistiken/nierenersatz">
                                Nierenersatz (CRRT)
                              </Link>
                            </li>
                            <li>
                              <Link to="/statistiken/herzunterstuetzung">
                                Herzunterstützung (VAD)
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="submenu-section">
                          <div className="subsection-title">Schweregradstatistiken</div>
                          <ul className="nested-submenu">
                            <li>
                              <Link to="/statistiken/intensiv">
                                Intensiv (ICU)
                              </Link>
                            </li>
                            <li>
                              <Link to="/statistiken/intensivueberwachung">
                                Intensivüberwachung (IMC)
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li>
                    <Link to="/graphen" className={isActive('/graphen') ? 'active' : ''}>
                      Graphen
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="menu-item">
                <Link to="/einstellungen" className={isActive('/einstellungen') ? 'active' : ''}>
                  Einstellungen
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  )
}

export default Sidebar