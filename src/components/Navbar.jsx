import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Today', href: '#cebu-today' },
  { label: 'Transport', href: '#transportation' },
  { label: 'Weather', href: '#weather' },
  { label: 'Before You Go', href: '#before-you-go' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on nav link click
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Brand */}
        <a href="#" className={styles.brand} onClick={handleNavClick}>
          <img
  src="/logo.png"
  alt="CebuCentral logo"
  width="36"
  height="36"
  style={{ display: 'block' }}
/>
          <span className={styles.brandName}>
            Cebu<span className={styles.brandAccent}>Central</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
          <a href="#emergency" className={styles.emergencyLink}>
            Emergency
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={styles.mobileToggle}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#emergency"
            className={`${styles.mobileNavLink} ${styles.mobileEmergency}`}
            onClick={handleNavClick}
          >
            Emergency
          </a>
        </nav>
      </div>
    </header>
  );
}
