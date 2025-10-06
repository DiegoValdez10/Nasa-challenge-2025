import React from 'react';
import HeroImage from '../../assets/Hero-image.jpg';
import AboutImage from '../../assets/About-image.jpg';
import { Link } from 'react-router-dom';

function Home() {
    const scrollToStats = () => {
        const statsSection = document.getElementById('stats-section');
        if (statsSection) {
            statsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const stats = [
        {
            number: "280+",
            label: "Astronauts",
            sublabel: "from 26 countries",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '48px', height: '48px' }}>
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            )
        },
        {
            number: "3,000+",
            label: "Scientific Experiments",
            sublabel: "conducted onboard",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '48px', height: '48px' }}>
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                </svg>
            )
        },
        {
            number: "408 km",
            label: "Orbital Height",
            sublabel: "above Earth",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '48px', height: '48px' }}>
                    <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            )
        },
        {
            number: "17,500 mph",
            label: "Orbital Speed",
            sublabel: "28,000 km/h",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '48px', height: '48px' }}>
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                </svg>
            )
        }
    ];

    const sections = [
        {
            title: "The Cupola",
            description: "Experience Earth from the window to the world",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '40px', height: '40px' }}>
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                </svg>
            ),
            link: "/cupola"
        },
        {
            title: "NBL Training",
            description: "Discover how astronauts prepare for spacewalks",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '40px', height: '40px' }}>
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
            ),
            link: "/nbl"
        },
        {
            title: "Benefits to Earth",
            description: "Learn how space research improves life on our planet",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '40px', height: '40px' }}>
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
            ),
            link: "/benefits"
        },
        {
            title: "25 Years of History",
            description: "Explore the timeline and achievements of the ISS",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '40px', height: '40px' }}>
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
            ),
            link: "/history"
        }
    ];

    return (
        <div style={styles.container}>
            {/* Hero Section */}
            <section style={styles.hero}>
                <div style={styles.heroImage}>
                    <img
                        src={HeroImage}
                        alt="ISS orbiting Earth"
                        style={styles.heroImageElement}
                    />
                    <div style={styles.heroOverlay}></div>
                </div>
                <div style={styles.heroContent}>
                    <h1 style={styles.heroTitle}>25 Years of Science, Discovery & Innovation</h1>
                    <p style={styles.heroSubtitle}>
                        The International Space Station: Humanity's laboratory in space,
                        orbiting 408 km above Earth since 1998
                    </p>
                    <button
                        style={styles.ctaButton}
                        onClick={scrollToStats}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 8px 20px rgba(99, 102, 241, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.3)';
                        }}
                    >
                        Explore the ISS Experience
                    </button>
                </div>
            </section>

            {/* Stats Section */}
            <section id="stats-section" style={styles.statsSection}>
                <div style={styles.statsGrid}>
                    {stats.map((stat, index) => (
                        <div key={index} style={styles.statCard}>
                            <div style={styles.statIcon}>{stat.icon}</div>
                            <h2 style={styles.statNumber}>{stat.number}</h2>
                            <p style={styles.statLabel}>{stat.label}</p>
                            <p style={styles.statSublabel}>{stat.sublabel}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* What is the ISS Section */}
            <section style={styles.aboutSection}>
                <div style={styles.aboutContent}>
                    <h2 style={styles.sectionTitle}>What is the International Space Station?</h2>
                    <div style={styles.aboutGrid}>
                        <div style={styles.aboutText}>
                            <p style={styles.paragraph}>
                                The International Space Station (ISS) is a marvel of human engineering
                                and international cooperation. It serves as a microgravity laboratory
                                where scientific research is conducted in fields such as biology, physics,
                                astronomy, and meteorology.
                            </p>
                            <p style={styles.paragraph}>
                                Assembled in orbit over more than a decade, the ISS represents a
                                partnership between NASA (United States), Roscosmos (Russia), ESA (Europe),
                                JAXA (Japan), and CSA (Canada). It has been continuously occupied since
                                November 2000, making it humanity's permanent foothold in space.
                            </p>
                            <div style={styles.keyFacts}>
                                <h3 style={styles.factsTitle}>Key Facts:</h3>
                                <ul style={styles.factsList}>
                                    <li style={styles.factItem}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="3" style={{ width: '20px', height: '20px', marginRight: '12px', flexShrink: 0 }}>
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        Completes 16 orbits around Earth daily
                                    </li>
                                    <li style={styles.factItem}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="3" style={{ width: '20px', height: '20px', marginRight: '12px', flexShrink: 0 }}>
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        Size of a football field (109m x 73m)
                                    </li>
                                    <li style={styles.factItem}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="3" style={{ width: '20px', height: '20px', marginRight: '12px', flexShrink: 0 }}>
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        Weighs approximately 420,000 kg
                                    </li>
                                    <li style={styles.factItem}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="3" style={{ width: '20px', height: '20px', marginRight: '12px', flexShrink: 0 }}>
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        Crew of 6-7 astronauts at a time
                                    </li>
                                    <li style={styles.factItem}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="3" style={{ width: '20px', height: '20px', marginRight: '12px', flexShrink: 0 }}>
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        Visible from Earth with the naked eye
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div style={styles.aboutImage}>
                            <img
                                src={AboutImage}
                                alt="International Space Station"
                                style={styles.issImage}
                            />
                            <p style={styles.imageCaption}>The ISS photographed from a Crew Dragon spacecraft</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation Cards Section */}
            <section style={styles.navigationSection}>
                <h2 style={styles.sectionTitle}>Explore the ISS Experience</h2>
                <div style={styles.cardsGrid}>
                    {sections.map((section, index) => (
                        <Link
                            key={index}
                            to={section.link}
                            style={styles.navCard}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.borderColor = '#6366F1';
                                e.currentTarget.style.boxShadow = '0 12px 24px rgba(99, 102, 241, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = '#334155';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div style={styles.cardIcon}>{section.icon}</div>
                            <h3 style={styles.cardTitle}>{section.title}</h3>
                            <p style={styles.cardDescription}>{section.description}</p>
                            <span style={styles.cardArrow}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '24px', height: '24px' }}>
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Quote Section */}
            <section style={styles.quoteSection}>
                <div style={styles.quoteContent}>
                    <svg viewBox="0 0 24 24" fill="currentColor" style={styles.quoteIcon}>
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                    </svg>
                    <blockquote style={styles.quote}>
                        The view of Earth is spectacular. It's a reminder of how fragile
                        and precious our planet is, and how we must work together to protect it.
                    </blockquote>
                    <p style={styles.quoteAuthor}>— Astronaut Chris Hadfield</p>
                    <p style={styles.quoteRole}>Commander, ISS Expedition 35</p>
                </div>
            </section>
        </div>
    );
}

const styles = {
    container: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
        color: '#F8FAFC',
        paddingTop: '80px',
        margin: 0,
        padding: 0,
        width: '100%',
        maxWidth: '100%',
        overflowX: 'hidden',
    },
    hero: {
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        width: '100%',
    },
    heroImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    heroImageElement: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    heroOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%)',
    },
    heroContent: {
        position: 'relative',
        textAlign: 'center',
        maxWidth: '900px',
        padding: '0 24px',
        zIndex: 1,
    },
    heroTitle: {
        fontSize: '56px',
        fontWeight: '700',
        marginBottom: '24px',
        lineHeight: '1.2',
        color: '#FFFFFF',
        textShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
    },
    heroSubtitle: {
        fontSize: '20px',
        color: '#E2E8F0',
        lineHeight: '1.6',
        marginBottom: '40px',
        textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
    },
    ctaButton: {
        background: '#6366F1',
        color: '#FFFFFF',
        border: 'none',
        padding: '16px 40px',
        fontSize: '16px',
        fontWeight: '600',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.3s',
        boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
    },
    statsSection: {
        padding: '80px 24px',
        background: '#0F172A',
    },
    statsGrid: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '24px',
    },
    statCard: {
        background: '#1E293B',
        padding: '40px 24px',
        borderRadius: '12px',
        textAlign: 'center',
        border: '1px solid #334155',
        transition: 'all 0.3s',
    },
    statIcon: {
        color: '#6366F1',
        marginBottom: '16px',
        display: 'flex',
        justifyContent: 'center',
    },
    statNumber: {
        fontSize: '48px',
        fontWeight: '700',
        color: '#6366F1',
        margin: '0 0 8px 0',
    },
    statLabel: {
        fontSize: '18px',
        fontWeight: '600',
        color: '#F8FAFC',
        margin: '0 0 4px 0',
    },
    statSublabel: {
        fontSize: '14px',
        color: '#94A3B8',
        margin: 0,
    },
    aboutSection: {
        padding: '100px 24px',
        background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)',
    },
    aboutContent: {
        maxWidth: '1200px',
        margin: '0 auto',
    },
    sectionTitle: {
        fontSize: '42px',
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: '60px',
        color: '#F8FAFC',
    },
    aboutGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '60px',
        alignItems: 'center',
    },
    aboutText: {
        color: '#CBD5E1',
    },
    paragraph: {
        fontSize: '16px',
        lineHeight: '1.8',
        marginBottom: '24px',
    },
    keyFacts: {
        background: '#1E293B',
        padding: '24px',
        borderRadius: '12px',
        border: '1px solid #334155',
        marginTop: '32px',
    },
    factsTitle: {
        fontSize: '18px',
        fontWeight: '600',
        color: '#F8FAFC',
        marginBottom: '16px',
    },
    factsList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    factItem: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '12px',
        fontSize: '15px',
        color: '#CBD5E1',
    },
    aboutImage: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    issImage: {
        width: '100%',
        maxWidth: '500px',
        height: 'auto',
        borderRadius: '12px',
        border: '2px solid #334155',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
    },
    imageCaption: {
        color: '#94A3B8',
        fontSize: '14px',
        marginTop: '12px',
        textAlign: 'center',
    },
    navigationSection: {
        padding: '100px 24px',
        background: '#0F172A',
    },
    cardsGrid: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
    },
    navCard: {
        background: '#1E293B',
        padding: '40px 32px',
        borderRadius: '12px',
        border: '2px solid #334155',
        textDecoration: 'none',
        transition: 'all 0.3s',
        position: 'relative',
        cursor: 'pointer',
        display: 'block',
    },
    cardIcon: {
        color: '#6366F1',
        marginBottom: '16px',
    },
    cardTitle: {
        fontSize: '22px',
        fontWeight: '700',
        color: '#F8FAFC',
        marginBottom: '12px',
    },
    cardDescription: {
        fontSize: '15px',
        color: '#CBD5E1',
        lineHeight: '1.6',
        marginBottom: '16px',
    },
    cardArrow: {
        color: '#6366F1',
        position: 'absolute',
        bottom: '32px',
        right: '32px',
    },
    quoteSection: {
        padding: '100px 24px',
        background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
    },
    quoteContent: {
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
    },
    quoteIcon: {
        width: '60px',
        height: '60px',
        color: '#6366F1',
        opacity: '0.3',
        marginBottom: '24px',
    },
    quote: {
        fontSize: '28px',
        fontStyle: 'italic',
        color: '#F8FAFC',
        lineHeight: '1.6',
        margin: '0 0 32px 0',
        fontWeight: '300',
    },
    quoteAuthor: {
        fontSize: '18px',
        fontWeight: '600',
        color: '#6366F1',
        margin: '0 0 8px 0',
    },
    quoteRole: {
        fontSize: '14px',
        color: '#94A3B8',
        margin: 0,
    },
};

export default Home;