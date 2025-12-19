import JsonTool from '@/components/JsonTool';
import styles from './Home.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Online JSON Formatter & Validator | Free, Secure, Fast',
  description: 'Format, validate, and minify JSON with the best online JSON Formatter. Features include error debugging, tree view, and conversion to XML/YAML. Secure client-side processing.',
  alternates: {
    canonical: 'https://www.jsonformatter.online',
  },
  openGraph: {
    title: 'Best Online JSON Formatter & Validator',
    description: 'Format, validate, and minify JSON with the best online JSON Formatter.',
    url: 'https://www.jsonformatter.online',
    siteName: 'JSON Pro',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'JSON Formatter & Validator',
    url: 'https://www.jsonformatter.online',
    description: 'A free online tool to format, validate, minifying, and fix JSON data instantly.',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'JSON Formatting',
      'JSON Validation',
      'JSON Minification',
      'Auto-Fix Common Errors',
      'Secure Client-Side Processing'
    ]
  };

  return (
    <div className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Best Online JSON Formatter & Validator
        </h1>
        <p className={styles.subtitle}>
          Format, validate, minifying, and fix your JSON data instantly. Secure, client-side processing ensuring your data never leaves your browser.
        </p>
      </section>

      <JsonTool />

      <section className={styles.section}>
        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Why use this JSON Formatter?</h2>
          <div className={styles.grid}>
            <div>
              <h3 className={styles.featureTitle}>Secure & Client-Side</h3>
              <p className={styles.text}>
                We prioritize your privacy. All processing happens locally in your browser using JavaScript. No data is sent to any server.
              </p>
            </div>
            <div>
              <h3 className={styles.featureTitle}>Smart Error Detection</h3>
              <p className={styles.text}>
                Our validator pinpoints exactly where your JSON syntax errors are, providing line numbers and helpful fix suggestions.
              </p>
            </div>
            <div>
              <h3 className={styles.featureTitle}>Features Galore</h3>
              <p className={styles.text}>
                Minify for production, format for readability, or validate against standards. We support RFC 8259 compliance.
              </p>
            </div>
            <div>
              <h3 className={styles.featureTitle}>Fast & Responsive</h3>
              <p className={styles.text}>
                Built with modern technologies for a smooth experience on any device, from desktop 4K screens to mobile phones.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className={styles.faqItem}>
              <h4 className={styles.faqQuestion}>What is JSON?</h4>
              <p className={styles.text}>
                JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write and easy for machines to parse and generate.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h4 className={styles.faqQuestion}>Is my data safe?</h4>
              <p className={styles.text}>
                Yes! We do not store or transmit your data. Everything validates locally on your device.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h4 className={styles.faqQuestion}>How do I fix JSON errors?</h4>
              <p className={styles.text}>
                Simply use our 'Fix' button. It uses advanced algorithms to correct trailing commas, missing quotes, and other common syntax issues automatically.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
