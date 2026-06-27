import styles from './SectionHeader.module.css';

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  actionLabel,
  actionHref,
  centered = false,
}) {
  return (
    <div className={`${styles.header} ${centered ? styles.centered : ''}`}>
      <div className={styles.titleGroup}>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      {actionLabel && actionHref && (
        <a href={actionHref} className={styles.action}>
          {actionLabel}
          <span aria-hidden="true" className={styles.arrow}>→</span>
        </a>
      )}
    </div>
  );
}
