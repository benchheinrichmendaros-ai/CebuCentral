import { ImageIcon } from 'lucide-react';
import styles from './Footer.module.css';

const QUICK_LINKS = [
  { label: 'Cebu Today', href: '#cebu-today' },
  { label: 'Transportation', href: '#transportation' },
  { label: 'Weather', href: '#weather' },
  { label: 'Emergency', href: '#emergency' },
  { label: 'Before You Go', href: '#before-you-go' },
];

const EXTERNAL_LINKS = [
  { label: 'PAGASA', href: 'https://bagong.pagasa.dost.gov.ph' },
  { label: 'NDRRMC', href: 'https://ndrrmc.gov.ph' },
  { label: 'Cebu City Government', href: 'https://www.cebucity.gov.ph' },
  { label: 'MCIA Airport', href: 'https://mactan-cebuairport.com.ph' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>

        {/* Brand column */}
        <div className={styles.brand}>
          <a href="#" className={styles.brandLink}>
            <span className={styles.logoPlaceholder}>
              <ImageIcon size={16} strokeWidth={1.5} />
            </span>
            <span className={styles.brandName}>
              Cebu<span className={styles.brandAccent}>Central</span>
            </span>
          </a>
          <p className={styles.tagline}>
            Your local resource hub for Cebu — transport, weather, emergency,
            and essential guides in one place.
          </p>
          <p className={styles.disclaimer}>
            CebuCentral is a community resource site. Always verify critical
            information with official sources.
          </p>
        </div>

        {/* Quick links */}
        <div className={styles.linkGroup}>
          <h3 className={styles.linkGroupTitle}>Quick Access</h3>
          <ul className={styles.linkList}>
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.footerLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* External resources */}
        <div className={styles.linkGroup}>
          <h3 className={styles.linkGroupTitle}>Official Sources</h3>
          <ul className={styles.linkList}>
            {EXTERNAL_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={styles.footerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              © {year} CebuCentral. Version 1.0 — Front-end only.
            </p>
            <p className={styles.buildNote}>
              Built for Cebu, Philippines 🇵🇭
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
