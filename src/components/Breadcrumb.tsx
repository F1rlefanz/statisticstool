import { useLocation, Link } from 'react-router-dom'

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface NavigationMapEntry {
  name: string;
  parent: string | null;
  group?: string;
}

type NavigationMapType = Record<string, NavigationMapEntry>;

// Navigation Map aus dem Vue-Projekt
const navigationMap: NavigationMapType = {
  // Hauptkategorien
  'kiss-erfassung': { 
    name: 'KISS', 
    parent: null 
  },
  'therapiedauer': { 
    name: 'Erfassung der Therapiedauer', 
    parent: 'schweregrad' 
  },
  'statistiken': { 
    name: 'Statistiken', 
    parent: 'schweregrad' 
  },
  'graphen': { 
    name: 'Graphen', 
    parent: 'schweregrad' 
  },
  'einstellungen': { 
    name: 'Einstellungen', 
    parent: null 
  }
  // Weitere Einträge werden später hinzugefügt
}

const Breadcrumb = () => {
  const location = useLocation()

  const breadcrumbs = (): BreadcrumbItem[] => {
    const paths = location.pathname.split('/').filter(Boolean)
    if (paths.length === 0) return []

    const result: BreadcrumbItem[] = []
    let currentPath = ''
    
    paths.forEach(segment => {
      currentPath += `/${segment}`
      const mapEntry = navigationMap[segment]
      
      if (mapEntry) {
        // Füge Schweregrad für relevante Bereiche hinzu
        if (mapEntry.parent === 'schweregrad' && 
            !result.some(item => item.name === 'Schweregrad')) {
          result.push({
            name: 'Schweregrad',
            path: '/schweregrad'
          })
        }
        
        result.push({
          name: mapEntry.name,
          path: currentPath
        })
      }
    })

    return result
  }

  const breadcrumbItems = breadcrumbs()

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        {breadcrumbItems.map((crumb, index) => (
          <li key={crumb.path}>
            <span className="separator" aria-hidden="true">/</span>
            {index < breadcrumbItems.length - 1 ? (
              <Link to={crumb.path}>{crumb.name}</Link>
            ) : (
              <span>{crumb.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb