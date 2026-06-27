import {
  Shield,
  Flame,
  HeartPulse,
  Building2,
  CloudLightning,
  Anchor,
  Phone,
  AlertCircle,
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { emergencyCategories } from '../data/emergency';
import styles from './Emergency.module.css';

const ICON_MAP = { Shield, Flame, HeartPulse, Building2, CloudLightning, Anchor };

// Map CSS variable names to resolved values for inline style use
const ICON_STYLES = {
  '--blue':   { iconColor: '#1D4ED8', iconBg: '#EFF6FF' },
  '--red':    { iconColor: '#C0392B', iconBg: '#FDEDEC' },
  '--green':  { iconColor: '#059669', iconBg: '#ECFDF5' },
  '--purple': { iconColor: '#7C3AED', iconBg: '#F5F3FF' },
  '--gold':   { iconColor: '#D97706', iconBg: '#FEF3C7' },
  '--orange': { iconColor: '#EA580C', iconBg: '#FFF7ED' },
};

function EmergencyCard({ category }) {
  const Icon = ICON_MAP[category.icon] || Phone;
  const colorStyle = ICON_STYLES[category.colorVar] || ICON_STYLES['--blue'];

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div
          className={styles.iconWrap}
          style={{ background: colorStyle.iconBg, color: colorStyle.iconColor }}
        >
          <Icon size={22} strokeWidth={1.75} />
        </div>
        <h3 className={styles.categoryName}>{category.category}</h3>
      </div>

      <ul className={styles.contactList}>
        {category.contacts.map((contact) => (
          <li key={contact.name} className={styles.contactItem}>
            <span className={styles.contactName}>{contact.name}</span>
            {contact.isTapToCall ? (
              <a
                href={`tel:${contact.number.replace(/[\s()+-]/g, '')}`}
                className={styles.contactNumber}
                aria-label={`Call ${contact.name}: ${contact.number}`}
              >
                <Phone size={13} className={styles.callIcon} />
                {contact.number}
              </a>
            ) : (
              <span className={styles.contactNumberStatic}>{contact.number}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Emergency() {
  return (
    <section id="emergency" className={styles.section}>
      <div className="container">
        {/* Top alert banner */}
        <div className={styles.alertBanner} role="alert">
          <AlertCircle size={20} />
          <div>
            <strong>Life-threatening emergency?</strong>
            {' '}Call{' '}
            <a href="tel:911" className={styles.alertNumber}>911</a>
            {' '}immediately. All numbers below are tap-to-call on mobile.
          </div>
        </div>

        <SectionHeader
          eyebrow="Emergency"
          title="Emergency Contacts"
          subtitle="Key Cebu emergency numbers — organized, readable, and ready when you need them."
        />

        <div className={styles.grid}>
          {emergencyCategories.map((cat) => (
            <EmergencyCard key={cat.id} category={cat} />
          ))}
        </div>

        {/* Quick dial strip */}
        <div className={styles.quickDial}>
          <p className={styles.quickDialLabel}>Quick Dial</p>
          <div className={styles.quickDialNumbers}>
            {[
              { label: '911 · Emergencies', number: '911' },
              { label: '117 · PNP', number: '117' },
              { label: 'Red Cross', number: '02-527-0000' },
            ].map((item) => (
              <a
                key={item.number}
                href={`tel:${item.number.replace(/[-\s]/g, '')}`}
                className={styles.quickDialBtn}
              >
                <Phone size={15} />
                <span className={styles.quickDialNum}>{item.number}</span>
                <span className={styles.quickDialSub}>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
