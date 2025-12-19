import styles from '../Home.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JSON Reference | Complete JSON Syntax Guide',
  description: 'Complete JSON syntax reference. Learn about JSON data types, structure, and common errors.',
  alternates: {
    canonical: 'https://www.jsonformatter.online/reference',
  },
};

export default function ReferencePage() {
  const dataTypes = [
    { type: 'String', example: '"hello world"', description: 'Text enclosed in double quotes' },
    { type: 'Number', example: '42, 3.14, -17', description: 'Integer or floating point' },
    { type: 'Boolean', example: 'true, false', description: 'true or false (lowercase)' },
    { type: 'Null', example: 'null', description: 'Empty value (lowercase)' },
    { type: 'Object', example: '{ "key": "value" }', description: 'Key-value pairs in curly braces' },
    { type: 'Array', example: '[1, 2, 3]', description: 'Ordered list in square brackets' },
  ];

  const commonErrors = [
    { error: 'Trailing comma', fix: 'Remove comma after last element' },
    { error: 'Single quotes', fix: 'Use double quotes for strings' },
    { error: 'Unquoted keys', fix: 'Always quote object keys' },
    { error: 'Comments', fix: 'JSON does not support comments' },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>JSON Reference</h1>
        <p className={styles.subtitle}>
          Complete reference for JSON syntax and data types.
        </p>
      </section>

      <section className={styles.section}>
        <div className="glass-card">
          <h2 className={styles.sectionTitle}>JSON Data Types</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '16px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                  <th style={{ padding: '12px', textAlign: 'left', color: 'var(--text-secondary)' }}>Type</th>
                  <th style={{ padding: '12px', textAlign: 'left', color: 'var(--text-secondary)' }}>Example</th>
                  <th style={{ padding: '12px', textAlign: 'left', color: 'var(--text-secondary)' }}>Description</th>
                </tr>
              </thead>
              <tbody>
                {dataTypes.map((item, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                    <td style={{ padding: '12px', color: 'var(--accent-primary)', fontWeight: 600 }}>{item.type}</td>
                    <td style={{ padding: '12px', fontFamily: 'JetBrains Mono', fontSize: '0.875rem' }}>{item.example}</td>
                    <td style={{ padding: '12px', color: 'var(--text-secondary)' }}>{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Common Errors & Fixes</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '16px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                  <th style={{ padding: '12px', textAlign: 'left', color: 'var(--text-secondary)' }}>Error</th>
                  <th style={{ padding: '12px', textAlign: 'left', color: 'var(--text-secondary)' }}>Fix</th>
                </tr>
              </thead>
              <tbody>
                {commonErrors.map((item, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                    <td style={{ padding: '12px', color: 'var(--error, #ef4444)', fontWeight: 600 }}>{item.error}</td>
                    <td style={{ padding: '12px', color: 'var(--text-secondary)' }}>{item.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

