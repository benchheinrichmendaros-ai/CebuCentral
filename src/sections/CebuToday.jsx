import {
  Cloud,
  Plane,
  Ship,
  Car,
  Phone,
  ChevronRight,
  CalendarDays,
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import styles from './CebuToday.module.css';

// Real-time date — no API needed
function useCebuDate() {
  const now = new Date();
  const options = { timeZone: 'Asia/Manila' };
  const day = now.toLocaleDateString('en-PH', { ...options, weekday: 'long' });
  const date = now.toLocaleDateString('en-PH', {
    ...options,
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  const time = now.toLocaleTimeString('en-PH', {
    ...options,
    hour: '2-digit',
    minute: '2-digit',
  });
  return { day, date, time };
}

export default function CebuToday() {
  const { day, date, time } = useCebuDate();

  return (
    <section id="cebu-today" className={styles.section}>
      <div className="container">
        <SectionHeader
          eyebrow="Dashboard"
          title="Cebu Today"
          subtitle="Your quick-glance overview of what matters right now."
        />

        <div className={styles.grid}>

          {/* Tile 1: Date & Time */}
          <div className={`${styles.tile} ${styles.tileDate}`}>
            <div className={styles.tileIcon} style={{ background: 'var(--gold-tint)', color: 'var(--gold)' }}>
              <CalendarDays size={22} />
            </div>
            <div className={styles.tileBody}>
              <p className={styles.tileEyebrow}>Philippine Standard Time</p>
              <p className={styles.tilePrimary}>{day}</p>
              <p className={styles.tileSecondary}>{date}</p>
              <p className={styles.tileTime}>{time} PST</p>
            </div>
          </div>

          {/* Tile 2: Weather Quick View */}
          <a href="#weather" className={`${styles.tile} ${styles.tileLink}`}>
            <div className={styles.tileIcon} style={{ background: 'var(--blue-light)', color: 'var(--blue)' }}>
              <Cloud size={22} />
            </div>
            <div className={styles.tileBody}>
              <p className={styles.tileEyebrow}>Weather · Cebu City</p>
              <p className={styles.tilePrimary}>30°C</p>
              <p className={styles.tileSecondary}>Partly Cloudy</p>
              <p className={styles.tileNote}>Static data — connect to live API to update</p>
            </div>
            <ChevronRight size={18} className={styles.tileArrow} />
          </a>

          {/* Tile 3: Transport Quick View */}
          <a href="#transportation" className={`${styles.tile} ${styles.tileLink}`}>
            <div className={styles.tileIcon} style={{ background: 'var(--green-light)', color: 'var(--green)' }}>
              <Plane size={22} />
            </div>
            <div className={styles.tileBody}>
              <p className={styles.tileEyebrow}>Transport Guide</p>
              <p className={styles.tilePrimary}>6 Modes</p>
              <div className={styles.transportChips}>
                <span><Ship size={12} /> Ferries</span>
                <span><Car size={12} /> Taxis</span>
                <span>+ more</span>
              </div>
              <p className={styles.tileNote}>Flights, ferries, buses, jeepneys & more</p>
            </div>
            <ChevronRight size={18} className={styles.tileArrow} />
          </a>

          {/* Tile 4: Emergency Quick Access */}
          <a href="#emergency" className={`${styles.tile} ${styles.tileLink} ${styles.tileEmergency}`}>
            <div className={styles.tileIcon} style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}>
              <Phone size={22} />
            </div>
            <div className={styles.tileBody}>
              <p className={styles.tileEyebrowLight}>Emergency Hotline</p>
              <p className={styles.tileNumberBig}>9 1 1</p>
              <p className={styles.tileNoteLight}>Police · Fire · Medical · Disaster</p>
            </div>
            <ChevronRight size={18} className={styles.tileArrowLight} />
          </a>

        </div>
      </div>
    </section>
  );
}
