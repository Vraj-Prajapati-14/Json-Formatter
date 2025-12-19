import styles from '../Home.module.css';
import { Metadata } from 'next';
import { FileJson, Shield, Zap, Eye, Copy, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Features | JSON Formatter Online Tool',
  description: 'Explore all features of our free online JSON formatter. Format, validate, and beautify JSON instantly.',
  alternates: {
    canonical: 'https://www.jsonformatter.online/features',
  },
};

export default function FeaturesPage() {
  const features = [
    {
      icon: <FileJson size={32} />,
      title: 'JSON Formatting',
      description: 'Automatically format and beautify JSON with proper indentation and line breaks.',
    },
    {
      icon: <Check size={32} />,
      title: 'Validation',
      description: 'Validate JSON syntax and get clear error messages with line numbers.',
    },
    {
      icon: <Eye size={32} />,
      title: 'Syntax Highlighting',
      description: 'Color-coded syntax highlighting makes it easy to read and understand JSON.',
    },
    {
      icon: <Shield size={32} />,
      title: '100% Client-Side',
      description: 'All processing happens in your browser. Your data never leaves your device.',
    },
    {
      icon: <Zap size={32} />,
      title: 'Real-time Processing',
      description: 'JSON is formatted as you type. No need to click any buttons.',
    },
    {
      icon: <Copy size={32} />,
      title: 'One-Click Copy',
      description: 'Copy the formatted JSON to clipboard with a single click.',
    },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Features</h1>
        <p className={styles.subtitle}>
          Powerful JSON formatting features for developers.
        </p>
      </section>

      <section className={styles.section}>
        <div className="glass-card">
          <div className={styles.grid}>
            {features.map((feature, index) => (
              <div key={index} style={{ padding: '20px' }}>
                <div style={{ color: 'var(--accent-primary)', marginBottom: '16px' }}>
                  {feature.icon}
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.text}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

