import React, { useState } from 'react';
import Zarya from '../../assets/Zarya.jpg';
import Crew2000 from '../../assets/Crew2000.jpg';
import Destiny from '../../assets/Destiny.jpg';
import Columbus from '../../assets/Columbus.jpg';
import Atlantis from '../../assets/Atlantis.jpg';
import CrewDragon from '../../assets/CrewDragon.jpg';
import ISS from '../../assets/ISS.jpg';
import EarthCupola from '../../assets/earth-cupola.jpg';
import Spacewalk from '../../assets/Spacewalk.jpg';
import HurricaneView from '../../assets/HurricaneView.jpg';
import ISSAssembly from '../../assets/ISS-Assembly.jpg';
import LaboratoryWork from '../../assets/LaboratoryWork.jpg';
import AuroraSpace from '../../assets/AuroraSpace.jpg';
import CrewPortrait from '../../assets/CrewPortrait.jpg';
import RoboticArm from '../../assets/RoboticArm.jpg';
import PlantGrowth from '../../assets/PlantGrowth.jpg';
import InsideCupola from '../../assets/InsideCupola.jpg';
import SolarPanels from '../../assets/SolarPanels.jpg';
import MedicalResearch from '../../assets/MedicalResearch.jpg';
import ChrisImage from '../../assets/Chris-Hadfield.jpg';
import PeggyImage from '../../assets/Peggy-Whitson.jpg';
import SamanthaImage from '../../assets/Samantha-Cristoforetti.jpg';
import TimImage from '../../assets/Tim-Peake.jpg';

function History() {
    const [activeFilter, setActiveFilter] = useState('all');

    const timeline = [
        {
            year: "1998",
            title: "First Module - Zarya",
            date: "November 20, 1998",
            description: "The Russian-built Zarya (Sunrise) module was the first component of the ISS launched into orbit, providing initial propulsion, power, and storage.",
            image: Zarya
        },
        {
            year: "2000",
            title: "First Permanent Crew",
            date: "November 2, 2000",
            description: "Expedition 1 crew members William Shepherd, Yuri Gidzenko, and Sergei Krikalev became the first residents of the ISS, marking the beginning of continuous human presence in space.",
            image: Crew2000
        },
        {
            year: "2001",
            title: "Cupola Installation",
            date: "February 8, 2001",
            description: "The U.S. Destiny laboratory was added, providing the primary research facility. The iconic Cupola would be added later in 2010, offering breathtaking views of Earth.",
            image: Destiny
        },
        {
            year: "2008",
            title: "Columbus Laboratory",
            date: "February 11, 2008",
            description: "The European Space Agency's Columbus laboratory was attached, expanding the station's scientific research capabilities with state-of-the-art facilities.",
            image: Columbus
        },
        {
            year: "2011",
            title: "End of Space Shuttle Era",
            date: "July 21, 2011",
            description: "Space Shuttle Atlantis completed the final shuttle mission (STS-135), marking the end of the 30-year Space Shuttle program. Future crew transport shifted to Soyuz spacecraft.",
            image: Atlantis
        },
        {
            year: "2020",
            title: "SpaceX Crew Dragon",
            date: "May 30, 2020",
            description: "SpaceX's Crew Dragon spacecraft successfully launched astronauts to the ISS, restoring American human spaceflight capability and ushering in the commercial crew era.",
            image: CrewDragon
        },
        {
            year: "2023",
            title: "25th Anniversary",
            date: "November 20, 2023",
            description: "The ISS celebrated 25 years since the launch of Zarya, commemorating over two decades of international cooperation, scientific achievement, and continuous human presence in space.",
            image: ISS
        }
    ];

    const statistics = [
        { icon: "orbit", number: "16", label: "Orbits per Day", sublabel: "Every 90 minutes" },
        { icon: "astronaut", number: "280+", label: "Astronauts", sublabel: "From 26 countries" },
        { icon: "globe", number: "110+", label: "Countries", sublabel: "Involved in research" },
        { icon: "experiment", number: "3,000+", label: "Experiments", sublabel: "Scientific investigations" },
        { icon: "spacewalk", number: "260+", label: "Spacewalks", sublabel: "EVAs conducted" },
    ];

    const galleryImages = [
        { id: 1, category: "earth", title: "Earth from Cupola", image: EarthCupola },
        { id: 2, category: "astronauts", title: "Spacewalk", image: Spacewalk },
        { id: 3, category: "construction", title: "ISS Assembly", image: ISSAssembly },
        { id: 4, category: "science", title: "Laboratory Work", image: LaboratoryWork },
        { id: 5, category: "earth", title: "Aurora from Space", image: AuroraSpace },
        { id: 6, category: "astronauts", title: "Crew Portrait", image: CrewPortrait },
        { id: 7, category: "construction", title: "Robotic Arm", image: RoboticArm },
        { id: 8, category: "science", title: "Plant Growth", image: PlantGrowth },
        { id: 9, category: "earth", title: "Hurricane View", image: HurricaneView },
        { id: 10, category: "astronauts", title: "Inside Cupola", image: InsideCupola },
        { id: 11, category: "construction", title: "Solar Panels", image: SolarPanels },
        { id: 12, category: "science", title: "Medical Research", image: MedicalResearch }
    ];

    const astronautStories = [
        {
            name: "Chris Hadfield",
            role: "Commander, Expedition 35",
            quote: "You can't look down on Earth from space and not be overwhelmed by the fragility and beauty of our planet.",
            image: ChrisImage,
            flag: "🇨🇦"
        },
        {
            name: "Peggy Whitson",
            role: "Commander, Record Holder",
            quote: "The ISS is proof that when we work together internationally, we can achieve extraordinary things.",
            image: PeggyImage,
            flag: "🇺🇸"
        },
        {
            name: "Samantha Cristoforetti",
            role: "Flight Engineer, Expedition 42/43",
            quote: "Living on the ISS taught me that our home planet is a precious oasis in the cosmic void.",
            image: SamanthaImage,
            flag: "🇮🇹"
        },
        {
            name: "Tim Peake",
            role: "Flight Engineer, Expedition 46/47",
            quote: "The view of Earth from space is a constant reminder of the adventure and wonder of human exploration.",
            image: TimImage,
            flag: "🇬🇧"
        }
    ];

    const filteredGallery = activeFilter === 'all' 
        ? galleryImages 
        : galleryImages.filter(img => img.category === activeFilter);

    const getIcon = (iconType) => {
        const icons = {
            orbit: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width: '40px', height: '40px'}}>
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M2 12h20"/>
                </svg>
            ),
            astronaut: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width: '40px', height: '40px'}}>
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                </svg>
            ),
            globe: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width: '40px', height: '40px'}}>
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
            ),
            experiment: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width: '40px', height: '40px'}}>
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                    <polyline points="14 2 14 8 20 8"/>
                </svg>
            ),
            spacewalk: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width: '40px', height: '40px'}}>
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
                </svg>
            ),
            time: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width: '40px', height: '40px'}}>
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                </svg>
            )
        };
        return icons[iconType] || icons.orbit;
    };

    return (
        <div style={styles.container}>
            {/* Hero Section */}
            <section style={styles.hero}>
                <div style={styles.heroContent}>
                    <h1 style={styles.heroTitle}>25 Years of History</h1>
                    <p style={styles.heroSubtitle}>
                        A Journey Through International Cooperation and Scientific Achievement
                    </p>
                </div>
            </section>

            {/* Timeline Section */}
            <section style={styles.timelineSection}>
                <h2 style={styles.sectionTitle}>ISS Timeline: 1998-2023</h2>
                <div style={styles.timeline}>
                    {timeline.map((event, index) => (
                        <div key={index} style={styles.timelineItem}>
                            <div style={styles.timelineMarker}>
                                <div style={styles.timelineDot}></div>
                                {index < timeline.length - 1 && <div style={styles.timelineLine}></div>}
                            </div>
                            <div style={styles.timelineContent}>
                                <div style={styles.timelineYear}>{event.year}</div>
                                <div style={styles.timelineCard}>
                                    <div style={styles.timelineImageContainer}>
                                        <div style={styles.timelineImagePlaceholder}>
                                            <img style={styles.timelineImage} src={event.image} alt={event.title} />
                                        </div>
                                    </div>
                                    <div style={styles.timelineText}>
                                        <h3 style={styles.timelineTitle}>{event.title}</h3>
                                        <p style={styles.timelineDate}>{event.date}</p>
                                        <p style={styles.timelineDescription}>{event.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* By the Numbers Section */}
            <section style={styles.statsSection}>
                <h2 style={styles.sectionTitle}>By the Numbers</h2>
                <div style={styles.statsGrid}>
                    {statistics.map((stat, index) => (
                        <div key={index} style={styles.statCard}>
                            <div style={styles.statIcon}>{getIcon(stat.icon)}</div>
                            <h3 style={styles.statNumber}>{stat.number}</h3>
                            <p style={styles.statLabel}>{stat.label}</p>
                            <p style={styles.statSublabel}>{stat.sublabel}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Photo Gallery Section */}
            <section style={styles.gallerySection}>
                <h2 style={styles.sectionTitle}>Photo Gallery</h2>
                <div style={styles.filterButtons}>
                    <button 
                        style={{...styles.filterBtn, ...(activeFilter === 'all' ? styles.filterBtnActive : {})}}
                        onClick={() => setActiveFilter('all')}
                    >
                        All Photos
                    </button>
                    <button 
                        style={{...styles.filterBtn, ...(activeFilter === 'earth' ? styles.filterBtnActive : {})}}
                        onClick={() => setActiveFilter('earth')}
                    >
                        Earth Views
                    </button>
                    <button 
                        style={{...styles.filterBtn, ...(activeFilter === 'astronauts' ? styles.filterBtnActive : {})}}
                        onClick={() => setActiveFilter('astronauts')}
                    >
                        Astronauts
                    </button>
                    <button 
                        style={{...styles.filterBtn, ...(activeFilter === 'construction' ? styles.filterBtnActive : {})}}
                        onClick={() => setActiveFilter('construction')}
                    >
                        Construction
                    </button>
                    <button 
                        style={{...styles.filterBtn, ...(activeFilter === 'science' ? styles.filterBtnActive : {})}}
                        onClick={() => setActiveFilter('science')}
                    >
                        Science
                    </button>
                </div>
                <div style={styles.galleryGrid}>
                    {filteredGallery.map((image) => (
                        <div key={image.id} style={styles.galleryItem}>
                            <div style={styles.galleryImagePlaceholder}>
                                <img style={styles.galleryImage} src={image.image} alt={image.title} />
                            </div>
                            <p style={styles.galleryTitle}>{image.title}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Astronaut Stories Section */}
            <section style={styles.storiesSection}>
                <h2 style={styles.sectionTitle}>Astronaut Stories</h2>
                <div style={styles.storiesGrid}>
                    {astronautStories.map((astronaut, index) => (
                        <div key={index} style={styles.storyCard}>
                            <div style={styles.astronautImageContainer}>
                                <div style={styles.astronautImagePlaceholder}>
                                    <img style={styles.astronautImage} src={astronaut.image} alt={astronaut.name} />
                                </div>
                            </div>
                            <div style={styles.storyContent}>
                                <div style={styles.quoteIcon}>
                                    <svg viewBox="0 0 24 24" fill="currentColor" style={{width: '30px', height: '30px'}}>
                                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                                    </svg>
                                </div>
                                <p style={styles.astronautQuote}>"{astronaut.quote}"</p>
                                <div style={styles.astronautInfo}>
                                    <h4 style={styles.astronautName}>{astronaut.flag} {astronaut.name}</h4>
                                    <p style={styles.astronautRole}>{astronaut.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Resources Section */}
            <section style={styles.resourcesSection}>
                <h2 style={styles.sectionTitle}>Resources & Learn More</h2>
                <div style={styles.resourcesGrid}>
                    <div style={styles.resourceCard}>
                        <div style={styles.resourceIcon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width: '40px', height: '40px'}}>
                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                            </svg>
                        </div>
                        <h3 style={styles.resourceTitle}>Official NASA ISS</h3>
                        <p style={styles.resourceDescription}>Visit the official NASA International Space Station website</p>
                        <a href="https://www.nasa.gov/mission_pages/station/main/index.html" target="_blank" rel="noopener noreferrer" style={styles.resourceLink}>
                            Visit Site →
                        </a>
                    </div>

                    <div style={styles.resourceCard}>
                        <div style={styles.resourceIcon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width: '40px', height: '40px'}}>
                                <polygon points="23 7 16 12 23 17 23 7"/>
                                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                            </svg>
                        </div>
                        <h3 style={styles.resourceTitle}>Documentaries</h3>
                        <p style={styles.resourceDescription}>Watch amazing documentaries about the ISS</p>
                        <ul style={styles.resourceList}>
                            <li>"A Beautiful Planet" (IMAX)</li>
                            <li>"The Wonderful: Stories from the Space Station"</li>
                            <li>"ISS: Above & Beyond"</li>
                        </ul>
                    </div>

                    <div style={styles.resourceCard}>
                        <div style={styles.resourceIcon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width: '40px', height: '40px'}}>
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                            </svg>
                        </div>
                        <h3 style={styles.resourceTitle}>Educational Resources</h3>
                        <p style={styles.resourceDescription}>Learning materials for students and educators</p>
                        <ul style={styles.resourceList}>
                            <li>NASA STEM Engagement</li>
                            <li>ISS Research Publications</li>
                            <li>Virtual Tours & Activities</li>
                        </ul>
                    </div>

                    <div style={styles.resourceCard}>
                        <div style={styles.resourceIcon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width: '40px', height: '40px'}}>
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                <circle cx="8.5" cy="8.5" r="1.5"/>
                                <polyline points="21 15 16 10 5 21"/>
                            </svg>
                        </div>
                        <h3 style={styles.resourceTitle}>Image Credits</h3>
                        <p style={styles.resourceDescription}>All images courtesy of NASA</p>
                        <ul style={styles.resourceList}>
                            <li>NASA Image Gallery</li>
                            <li>NASA Flickr Archive</li>
                            <li>ISS Imagery Database</li>
                        </ul>
                    </div>
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
        background: '#0F172A',
    },
    hero: {
        padding: '100px 24px 80px',
        background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
        textAlign: 'center',
        borderBottom: '1px solid #334155',
    },
    heroContent: {
        maxWidth: '800px',
        margin: '0 auto',
    },
    heroTitle: {
        fontSize: '56px',
        fontWeight: '700',
        marginBottom: '16px',
        color: '#F8FAFC',
    },
    heroSubtitle: {
        fontSize: '20px',
        color: '#CBD5E1',
        lineHeight: '1.6',
    },
    timelineSection: {
        padding: '100px 24px',
        background: '#0F172A',
        maxWidth: '1000px',
        margin: '0 auto',
    },
    sectionTitle: {
        fontSize: '42px',
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: '60px',
        color: '#F8FAFC',
    },
    timeline: {
        position: 'relative',
    },
    timelineItem: {
        display: 'flex',
        gap: '32px',
        marginBottom: '60px',
        position: 'relative',
    },
    timelineMarker: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        flexShrink: 0,
    },
    timelineDot: {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        background: '#6366F1',
        border: '4px solid #0F172A',
        boxShadow: '0 0 0 4px #6366F1',
        zIndex: 2,
    },
    timelineLine: {
        width: '2px',
        flex: 1,
        background: '#334155',
        marginTop: '8px',
    },
    timelineContent: {
        flex: 1,
    },
    timelineYear: {
        fontSize: '32px',
        fontWeight: '700',
        color: '#6366F1',
        marginBottom: '16px',
    },
    timelineCard: {
        background: '#1E293B',
        borderRadius: '12px',
        padding: '24px',
        border: '1px solid #334155',
    },
    timelineImageContainer: {
        marginBottom: '20px',
    },
    timelineImagePlaceholder: {
        width: '100%',
        height: '250px',
        background: 'linear-gradient(135deg, #334155 0%, #1E293B 100%)',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #334155',
    },
    timelineImage: {
        width: '100%',
        height: '100%',
        borderRadius: '8px',
        objectFit: 'cover',
    },
    imageIcon: {
        fontSize: '48px',
        marginBottom: '12px',
    },
    imageName: {
        fontSize: '14px',
        color: '#94A3B8',
        textAlign: 'center',
        padding: '0 16px',
    },
    timelineText: {},
    timelineTitle: {
        fontSize: '24px',
        fontWeight: '700',
        color: '#F8FAFC',
        marginBottom: '8px',
    },
    timelineDate: {
        fontSize: '14px',
        color: '#6366F1',
        marginBottom: '12px',
        fontWeight: '600',
    },
    timelineDescription: {
        fontSize: '16px',
        color: '#CBD5E1',
        lineHeight: '1.6',
    },
    statsSection: {
        padding: '100px 24px',
        background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)',
    },
    statsGrid: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '24px',
    },
    statCard: {
        background: '#0F172A',
        padding: '32px 24px',
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
        fontSize: '36px',
        fontWeight: '700',
        color: '#6366F1',
        margin: '0 0 8px 0',
    },
    statLabel: {
        fontSize: '16px',
        fontWeight: '600',
        color: '#F8FAFC',
        margin: '0 0 4px 0',
    },
    statSublabel: {
        fontSize: '13px',
        color: '#94A3B8',
        margin: 0,
    },
    gallerySection: {
        padding: '100px 24px',
        background: '#0F172A',
    },
    filterButtons: {
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        marginBottom: '40px',
        flexWrap: 'wrap',
        maxWidth: '900px',
        margin: '0 auto 40px',
    },
    filterBtn: {
        background: '#1E293B',
        color: '#CBD5E1',
        border: '1px solid #334155',
        padding: '12px 24px',
        borderRadius: '8px',
        fontSize: '15px',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 0.3s',
    },
    filterBtnActive: {
        background: '#6366F1',
        color: '#FFFFFF',
        borderColor: '#6366F1',
    },
    galleryGrid: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '24px',
    },
    galleryItem: {
        background: '#1E293B',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid #334155',
        transition: 'all 0.3s',
        cursor: 'pointer',
    },
    galleryImagePlaceholder: {
        width: '100%',
        height: '200px',
        background: 'linear-gradient(135deg, #334155 0%, #1E293B 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    galleryImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    galleryImageName: {
        fontSize: '12px',
        color: '#94A3B8',
        padding: '0 12px',
        textAlign: 'center',
    },
    galleryTitle: {
        padding: '16px',
        fontSize: '14px',
        fontWeight: '600',
        color: '#F8FAFC',
        margin: 0,
    },
    storiesSection: {
        padding: '100px 24px',
        background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)',
    },
    storiesGrid: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '32px',
    },
    storyCard: {
        background: '#0F172A',
        borderRadius: '12px',
        padding: '32px',
        border: '1px solid #334155',
    },
    astronautImageContainer: {
        marginBottom: '24px',
    },
    astronautImagePlaceholder: {
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #334155 0%, #1E293B 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '3px solid #6366F1',
        margin: '0 auto',
    },
    astronautImage: {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        objectFit: 'cover',
    },
    storyContent: {},
    quoteIcon: {
        color: '#6366F1',
        opacity: 0.3,
        marginBottom: '16px',
    },
    astronautQuote: {
        fontSize: '16px',
        fontStyle: 'italic',
        color: '#CBD5E1',
        lineHeight: '1.6',
        marginBottom: '24px',
    },
    astronautInfo: {
        borderTop: '1px solid #334155',
        paddingTop: '16px',
    },
    astronautName: {
        fontSize: '18px',
        fontWeight: '700',
        color: '#F8FAFC',
        marginBottom: '4px',
    },
    astronautRole: {
        fontSize: '14px',
        color: '#94A3B8',
        margin: 0,
    },
    resourcesSection: {
        padding: '100px 24px',
        background: '#0F172A',
    },
    resourcesGrid: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
    },
    resourceCard: {
        background: '#1E293B',
        borderRadius: '12px',
        padding: '32px',
        border: '1px solid #334155',
        transition: 'all 0.3s',
    },
    resourceIcon: {
        color: '#6366F1',
        marginBottom: '20px',
    },
    resourceTitle: {
        fontSize: '20px',
        fontWeight: '700',
        color: '#F8FAFC',
        marginBottom: '12px',
    },
    resourceDescription: {
        fontSize: '15px',
        color: '#CBD5E1',
        lineHeight: '1.6',
        marginBottom: '16px',
    },
    resourceLink: {
        display: 'inline-block',
        color: '#6366F1',
        textDecoration: 'none',
        fontSize: '15px',
        fontWeight: '600',
        marginTop: '8px',
        transition: 'color 0.3s',
    },
    resourceList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
};

export default History;
