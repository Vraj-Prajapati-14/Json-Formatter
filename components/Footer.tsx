import Link from 'next/link';
import { Braces } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    const productLinks = [
        { href: '/', label: 'Formatter' },
        { href: '/features', label: 'Features' },
        { href: '/guide', label: 'User Guide' },
        { href: '/examples', label: 'Examples' },
        { href: '/reference', label: 'JSON Reference' },
    ];

    const resourceLinks = [
        { href: '/guide', label: 'Documentation' },
        { href: '/examples', label: 'JSON Examples' },
        { href: '/reference', label: 'Syntax Reference' },
    ];

    const legalLinks = [
        { href: '/privacy', label: 'Privacy Policy' },
        { href: '/terms', label: 'Terms of Service' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.brandSection}>
                        <Link href="/" className={styles.logo}>
                            <Braces size={24} />
                            <span>JSON Pro</span>
                        </Link>
                        <p className={styles.description}>
                            Format and validate JSON instantly. Free, fast, and secure.
                        </p>
                    </div>

                    <div className={styles.linksSection}>
                        <h4 className={styles.linksTitle}>Product</h4>
                        <ul className={styles.linksList}>
                            {productLinks.map((link) => (
                                <li key={link.href + link.label}>
                                    <Link href={link.href} className={styles.link}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.linksSection}>
                        <h4 className={styles.linksTitle}>Resources</h4>
                        <ul className={styles.linksList}>
                            {resourceLinks.map((link) => (
                                <li key={link.href + link.label}>
                                    <Link href={link.href} className={styles.link}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.linksSection}>
                        <h4 className={styles.linksTitle}>Legal</h4>
                        <ul className={styles.linksList}>
                            {legalLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className={styles.link}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} JSON Pro. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
