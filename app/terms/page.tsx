import styles from '../Home.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | JSON Formatter',
  description: 'Terms of service for JSON Formatter. Read our terms and conditions.',
  alternates: {
    canonical: 'https://www.jsonformatter.online/terms',
  },
};

export default function TermsPage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.subtitle}>Last updated: December 2024</p>
      </section>

      <section className={styles.section}>
        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Acceptance of Terms</h2>
          <p className={styles.text}>
            By using JSON Pro, you agree to these terms. The tool is provided "as is" without warranties.
          </p>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Use License</h2>
          <p className={styles.text}>
            Permission is granted to use this tool for personal and commercial purposes.
          </p>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p className={styles.text}>
            Questions? Contact us at:{' '}
            <a href="mailto:connect@rivonixtech.com" style={{ color: 'var(--accent-primary)' }}>
              connect@rivonixtech.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

