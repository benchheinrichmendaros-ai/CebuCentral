import { Plane, Ship, Car, Bus, Truck, Bike, ExternalLink, Info } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { transportOptions } from '../data/transport';
import styles from './Transportation.module.css';

const ICON_MAP = { Plane, Ship, Car, Bus, Truck, Bike };

const TAG_COLORS = {
  'Air Travel':   { bg: 'var(--blue-light)',   color: 'var(--blue)' },
  'Sea Travel':   { bg: 'var(--blue-light)',   color: 'var(--blue)' },
  'On-Demand':    { bg: 'var(--green-light)',  color: 'var(--green)' },
  'Provincial':   { bg: 'var(--gold-tint)',    color: 'var(--gold)' },
  'City Routes':  { bg: 'var(--purple-light)', color: 'var(--purple)' },
  'Motorbike':    { bg: 'var(--orange-light)', color: 'var(--orange)' },
};

function TransportCard({ option }) {
  const Icon = ICON_MAP[option.icon] || Plane;
  const tagColor = TAG_COLORS[option.tag] || { bg: 'var(--bg)', color: 'var(--text-muted)' };

  return (
    <div className={styles.card}>
      <div className={styles.cardHead}>
        <div className={styles.iconWrap}>
          <Icon size={22} strokeWidth={1.75} />
        </div>
        <div>
          <div
            className={styles.tag}
            style={{ background: tagColor.bg, color: tagColor.color }}
          >
            {option.tag}
          </div>
          <h3 className={styles.cardTitle}>{option.title}</h3>
        </div>
      </div>

      <p className={styles.cardDesc}>{option.description}</p>

      {option.tips.length > 0 && (
        <ul className={styles.tips}>
          {option.tips.map((tip, i) => (
            <li key={i} className={styles.tip}>
              <span className={styles.tipDot} aria-hidden="true" />
              {tip}
            </li>
          ))}
        </ul>
      )}

      {option.providers.length > 0 && (
        <div className={styles.providers}>
          <p className={styles.providersLabel}>Book / Visit:</p>
          <div className={styles.providerLinks}>
            {option.providers.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.providerLink}
              >
                {p.name}
                <ExternalLink size={12} />
              </a>
            ))}
          </div>
        </div>
      )}

      {option.providers.length === 0 && (
        <p className={styles.noBooking}>No online booking — find at terminals or roadside.</p>
      )}
    </div>
  );
}

export default function Transportation() {
  return (
    <section id="transportation" className={styles.section}>
      <div className="container">
        <SectionHeader
          eyebrow="Getting Around"
          title="Transportation in Cebu"
          subtitle="Every way to get around — from the airport to the last barangay."
        />

        {/* Static data notice */}
        <div className={styles.notice}>
          <Info size={15} />
          <span>
            This is a guide, not a booking system. Links open official provider websites.
            Schedules and fares change — always confirm before travel.
          </span>
        </div>

        <div className={styles.grid}>
          {transportOptions.map((option) => (
            <TransportCard key={option.id} option={option} />
          ))}
        </div>
      </div>
    </section>
  );
}
