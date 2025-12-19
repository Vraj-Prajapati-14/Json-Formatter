import styles from '../Home.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JSON Examples | Sample JSON Data',
  description: 'Example JSON data for testing. Learn JSON structure through practical examples.',
  alternates: {
    canonical: 'https://www.jsonformatter.online/examples',
  },
};

export default function ExamplesPage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>JSON Examples</h1>
        <p className={styles.subtitle}>
          Sample JSON data for learning and testing.
        </p>
      </section>

      <section className={styles.section}>
        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Simple Object</h2>
          <pre style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: '8px', fontFamily: 'JetBrains Mono', overflow: 'auto' }}>
{`{
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com"
}`}
          </pre>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Nested Object</h2>
          <pre style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: '8px', fontFamily: 'JetBrains Mono', overflow: 'auto' }}>
{`{
  "user": {
    "id": 1,
    "name": "Jane Smith",
    "address": {
      "street": "123 Main St",
      "city": "New York",
      "country": "USA"
    }
  }
}`}
          </pre>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Array of Objects</h2>
          <pre style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: '8px', fontFamily: 'JetBrains Mono', overflow: 'auto' }}>
{`{
  "products": [
    { "id": 1, "name": "Laptop", "price": 999.99 },
    { "id": 2, "name": "Phone", "price": 599.99 },
    { "id": 3, "name": "Tablet", "price": 399.99 }
  ]
}`}
          </pre>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Common Use Cases</h2>
          <div className={styles.grid}>
            <div>
              <h3 className={styles.featureTitle}>API Responses</h3>
              <p className={styles.text}>Format and debug API response data.</p>
            </div>
            <div>
              <h3 className={styles.featureTitle}>Configuration Files</h3>
              <p className={styles.text}>Validate package.json and config files.</p>
            </div>
            <div>
              <h3 className={styles.featureTitle}>Data Export</h3>
              <p className={styles.text}>Format data exports for readability.</p>
            </div>
            <div>
              <h3 className={styles.featureTitle}>Documentation</h3>
              <p className={styles.text}>Prepare JSON examples for docs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

