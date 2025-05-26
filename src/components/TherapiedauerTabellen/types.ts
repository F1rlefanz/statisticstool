/** Konstante für die Anzahl der Stunden */
export const TOTAL_HOURS = 24;

/** Standard-Header für die Therapie-Tabelle */
export const DEFAULT_HEADERS: readonly TableHeader[] = [
  { key: 'number', label: 'Nummer' },
  { key: 'name', label: 'Name' },
  { key: 'department', label: 'Fachrichtung' },
  ...Array.from({ length: TOTAL_HOURS }, (_, i) => ({
    key: `hour-${i}`,
    label: String(i).padStart(2, '0'),
    class: 'hour-header'
  })),
  { key: 'total', label: 'Gesamtzeit' },
  { key: 'actions', label: 'Aktion' }
] as const;

/**
 * Repräsentiert eine Spaltenüberschrift in der Tabelle
 */
export interface TableHeader {
  /** Eindeutiger Schlüssel für die Spalte */
  key: string;
  /** Anzeigetext für die Spalte */
  label: string;
  /** Optionale CSS-Klasse für die Spalte */
  class?: string;
}

/**
 * Repräsentiert eine Zeile in der Therapie-Zeittabelle
 */
export interface TherapieRow {
  /** Eindeutige Patientennummer */
  number: string;
  /** Name des Patienten */
  name: string;
  /** Medizinische Fachrichtung */
  department: string;
  /**
   * Array mit 24 Einträgen für jede Stunde (0 oder 1)
   */
  hours: number[];
}

/**
 * Erstellt eine neue leere TherapieRow
 */
export function createEmptyTherapieRow(): TherapieRow {
  return {
    number: '',
    name: '',
    department: '',
    hours: new Array(TOTAL_HOURS).fill(0)
  };
}

/**
 * Validiert ein TherapieRow Objekt
 */
export function isValidTherapieRow(row: unknown): row is TherapieRow {
  if (!row || typeof row !== 'object') return false;
  
  const therapieRow = row as TherapieRow;
  
  return (
    typeof therapieRow.number === 'string' &&
    typeof therapieRow.name === 'string' &&
    typeof therapieRow.department === 'string' &&
    Array.isArray(therapieRow.hours) &&
    therapieRow.hours.length === TOTAL_HOURS &&
    therapieRow.hours.every(hour => hour === 0 || hour === 1)
  );
}