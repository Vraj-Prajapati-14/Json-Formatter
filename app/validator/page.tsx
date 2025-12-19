import JsonTool from '@/components/JsonTool';
import styles from '../Home.module.css';

export const metadata = {
    title: 'JSON Validator Online - Free Error Checking',
    description: 'Validate your JSON data against RFC standards. Find and fix errors instantly.',
};

export default function ValidatorPage() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <h1 className={styles.title}>
                    Online JSON Validator
                </h1>
                <p className={styles.subtitle}>
                    Strict syntax checking and error debugging for your JSON files.
                </p>
            </section>
            <JsonTool />
        </div>
    );
}
