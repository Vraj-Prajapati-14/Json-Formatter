import styles from '../Home.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JSON Formatter Guide | How to Format JSON',
  description: 'Complete guide on how to format and validate JSON. Learn about JSON syntax, common errors, and best practices.',
  alternates: {
    canonical: 'https://www.jsonformatter.online/guide',
  },
};

export default function GuidePage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>JSON Formatter Guide</h1>
        <p className={styles.subtitle}>
          Learn how to format, validate, and work with JSON data.
        </p>
      </section>

      <section className={styles.section}>
        <div className="glass-card">
          <h2 className={styles.sectionTitle}>What is JSON?</h2>
          <p className={styles.text}>
            JSON (JavaScript Object Notation) is a lightweight data interchange format. It's 
            easy for humans to read and write, and easy for machines to parse and generate. 
            JSON is widely used for APIs, configuration files, and data storage.
          </p>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>JSON Syntax Rules</h2>
          <div className={styles.grid}>
            <div>
              <h3 className={styles.featureTitle}>Objects</h3>
              <p className={styles.text}>Objects are enclosed in curly braces {'{ }'} and contain key-value pairs.</p>
            </div>
            <div>
              <h3 className={styles.featureTitle}>Arrays</h3>
              <p className={styles.text}>Arrays are enclosed in square brackets [ ] and contain ordered lists.</p>
            </div>
            <div>
              <h3 className={styles.featureTitle}>Strings</h3>
              <p className={styles.text}>Strings must be enclosed in double quotes " ". Single quotes are not valid.</p>
            </div>
            <div>
              <h3 className={styles.featureTitle}>No Trailing Commas</h3>
              <p className={styles.text}>Unlike JavaScript, JSON does not allow trailing commas after the last element.</p>
            </div>
          </div>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>How to Use This Tool</h2>
          <div className={styles.text}>
            <ol style={{ marginLeft: '20px', lineHeight: '2' }}>
              <li>Paste your JSON in the input area on the left</li>
              <li>The formatted JSON will appear on the right</li>
              <li>Errors will be highlighted with explanations</li>
              <li>Use the copy button to copy the formatted output</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}

