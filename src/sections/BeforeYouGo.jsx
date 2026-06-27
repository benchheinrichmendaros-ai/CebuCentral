import {
  CloudSun,
  MapPin,
  Clock,
  Phone,
  Wallet,
  CreditCard,
  WifiOff,
  Ship,
  CheckCircle2,
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { checklistItems } from '../data/beforeYouGo';
import styles from './BeforeYouGo.module.css';

const ICON_MAP = {
  CloudSun, MapPin, Clock, Phone, Wallet, CreditCard, WifiOff, Ship,
};

function ChecklistCard({ item, index }) {
  const Icon = ICON_MAP[item.icon] || CheckCircle2;

  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.iconWrap}>
          <Icon size={20} strokeWidth={1.75} />
        </div>
        <div className={styles.stepNum}>{String(index + 1).padStart(2, '0')}</div>
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{item.title}</h3>
        <p className={styles.cardDesc}>{item.description}</p>
      </div>

      {item.actionLabel && item.actionHref && (
        <div className={styles.cardFooter}>
          <Button variant="ghost" size="sm" href={item.actionHref}>
            {item.actionLabel} →
          </Button>
        </div>
      )}
    </div>
  );
}

export default function BeforeYouGo() {
  return (
    <section id="before-you-go" className={styles.section}>
      <div className="container">
        <SectionHeader
          eyebrow="Checklist"
          title="Before You Go"
          subtitle="Eight things to check before heading anywhere in Cebu. Quick, practical, and easy to scan."
        />

        <div className={styles.grid}>
          {checklistItems.map((item, i) => (
            <ChecklistCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={styles.cta}>
          <CheckCircle2 size={22} className={styles.ctaIcon} />
          <div className={styles.ctaText}>
            <p className={styles.ctaHeading}>Ready? You're good to go.</p>
            <p className={styles.ctaSub}>
              Save this page for quick access whenever you're planning a trip around Cebu.
            </p>
          </div>
          <Button variant="primary" href="#cebu-today">
            Back to Dashboard
          </Button>
        </div>
      </div>
    </section>
  );
}
