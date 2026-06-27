import {
  Plane,
  Cloud,
  Phone,
  CheckSquare,
  Map,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { services } from '../data/services';
import styles from './ServicesGrid.module.css';

const ICON_MAP = {
  Plane,
  Cloud,
  Phone,
  CheckSquare,
  Map,
  AlertTriangle,
};

const COLOR_MAP = {
  red:    { bg: 'var(--red-light)',   icon: 'var(--red)',    border: 'rgba(192,57,43,0.15)' },
  blue:   { bg: 'var(--blue-light)',  icon: 'var(--blue)',   border: 'rgba(29,78,216,0.12)' },
  danger: { bg: 'var(--red-tint)',    icon: 'var(--red)',    border: 'rgba(192,57,43,0.2)' },
  green:  { bg: 'var(--green-light)', icon: 'var(--green)',  border: 'rgba(5,150,105,0.15)' },
  gold:   { bg: 'var(--gold-tint)',   icon: 'var(--gold)',   border: 'rgba(217,119,6,0.18)' },
  orange: { bg: 'var(--orange-light)', icon: 'var(--orange)', border: 'rgba(234,88,12,0.15)' },
  purple: { bg: 'var(--purple-light)', icon: 'var(--purple)', border: 'rgba(124,58,237,0.15)' },
};

function ServiceCard({ service }) {
  const Icon = ICON_MAP[service.icon] || Plane;
  const color = COLOR_MAP[service.color] || COLOR_MAP.red;

  return (
    <a
      href={service.href}
      className={styles.card}
      target={service.external ? '_blank' : undefined}
      rel={service.external ? 'noopener noreferrer' : undefined}
    >
      <div
        className={styles.iconWrap}
        style={{ background: color.bg, color: color.icon }}
      >
        <Icon size={26} strokeWidth={1.75} />
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{service.title}</h3>
        <p className={styles.cardDesc}>{service.description}</p>
      </div>

      <div className={styles.cardFooter} style={{ color: color.icon }}>
        <span>{service.external ? 'Open site' : 'Go to section'}</span>
        <ArrowRight size={15} />
      </div>
    </a>
  );
}

export default function ServicesGrid() {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <SectionHeader
          eyebrow="Services"
          title="What do you need today?"
          subtitle="Jump straight to the section that helps you most."
        />

        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
