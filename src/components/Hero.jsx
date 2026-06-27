import { ArrowRight, Phone } from 'lucide-react';
import Button from './Button';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Welcome to CebuCentral">
      <div className={`container ${styles.inner}`}>

        {/* Left — Text Content */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            Your Cebu Resource Hub
          </div>

          <h1 className={styles.headline}>
            Your Cebu,<br />
            <span className={styles.headlineAccent}>All in One Place</span>
          </h1>

          <p className={styles.lead}>
            Transport routes, weather forecasts, emergency contacts, and local
            guides — everything you need to navigate Cebu quickly and
            confidently.
          </p>

          <div className={styles.actions}>
            <Button variant="primary" size="lg" href="#cebu-today">
              Explore CebuCentral
              <ArrowRight size={18} />
            </Button>
            <Button variant="secondary" size="lg" href="#emergency">
              <Phone size={16} />
              Emergency Contacts
            </Button>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>6+</span>
              <span className={styles.statLabel}>Transport modes</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat}>
              <span className={styles.statNum}>20+</span>
              <span className={styles.statLabel}>Emergency contacts</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat}>
              <span className={styles.statNum}>Free</span>
              <span className={styles.statLabel}>Always</span>
            </div>
          </div>
        </div>

        {/* Right — Logo Placeholder + Visual */}
        <div className={styles.visual} aria-hidden="true">
          <div className={styles.logoPlaceholderArea}>
            <img
  src="public/Logo.png"
  alt="CebuCentral"
  style={{
    width: '180px',
    height: 'auto',
    display: 'block',
  }}
/>
          </div>

          {/* Floating info cards for visual interest */}
          <div className={`${styles.floatCard} ${styles.floatCardTop}`}>
            <span className={styles.floatDot} />
            <span>Cebu City</span>
          </div>
          <div className={`${styles.floatCard} ${styles.floatCardBottom}`}>
            <span className={styles.floatIcon}>🌤</span>
            <span>30°C · Partly Cloudy</span>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className={styles.waveBottom} aria-hidden="true" />
    </section>
  );
}
