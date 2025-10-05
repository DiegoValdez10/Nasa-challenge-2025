import React, { useState } from 'react';
import { Eye, Mountain, Waves, Cloud, Flame, TreePine, Sparkles, Wind, Camera, Globe, Users, TrendingUp } from 'lucide-react';
import './cupola.css';
import AgricultureImg from '../../assets/cupola/agriculture.jpg';
import BorealisImg from '../../assets/cupola/borealis.jpg';
import CityLightsImg from '../../assets/cupola/city_lights.jpg';
import DesertImg from '../../assets/cupola/desert.jpg';
import GlacierImg from '../../assets/cupola/glacier.jpg';
import CoastImg from '../../assets/cupola/coast.jpg';
import VolcanoImg from '../../assets/cupola/volcano.jpg';
import HurricaneImg from '../../assets/cupola/hurricane.jpg';
import CupolaOutImg from '../../assets/cupola/cupola3.jpg';

const Cupola = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const observations = [
        {
            id: 1,
            icon: Waves,
            title: "Oceans & Coastlines",
            emoji: "🌊",
            description: "Astronauts monitor ocean currents, coral bleaching, and coastal erosion from the unique vantage point of the ISS.",
            importance: "Essential for understanding climate change impacts on marine ecosystems and predicting sea level changes.",
            data: "Over 2,000 coastal monitoring observations recorded annually",
            image: CoastImg
        },
        {
            id: 2,
            icon: Cloud,
            title: "Weather Phenomena",
            emoji: "🌪️",
            description: "Real-time observation of hurricanes, typhoons, and severe weather systems as they develop and move across the planet.",
            importance: "Provides critical data for weather prediction models and early warning systems for natural disasters.",
            data: "ISS tracks 90% of major tropical storms worldwide",
            image: HurricaneImg
        },
        {
            id: 3,
            icon: Mountain,
            title: "Mountains & Glaciers",
            emoji: "🏔️",
            description: "Documentation of glacial retreat, ice sheet changes, and mountain ecosystem transformations over time.",
            importance: "Key indicator of climate change acceleration and global temperature trends.",
            data: "Documented 15% glacial retreat in major ice sheets since 2000",
            image: GlacierImg
        },
        {
            id: 4,
            icon: Sparkles,
            title: "City Lights at Night",
            emoji: "🌃",
            description: "Mapping urban expansion, light pollution patterns, and human settlement growth across continents.",
            importance: "Reveals urbanization trends and energy consumption patterns affecting ecosystems and human health.",
            data: "Light pollution increased 49% in major cities over last decade",
            image: CityLightsImg
        },
        {
            id: 5,
            icon: Flame,
            title: "Volcanic Activity",
            emoji: "🌋",
            description: "Monitoring active volcanoes, detecting early signs of eruptions, and tracking ash clouds that affect air travel.",
            importance: "Crucial for aviation safety and understanding geological processes that shape our planet.",
            data: "60+ active volcanoes monitored continuously from ISS",
            image: VolcanoImg
        },
        {
            id: 6,
            icon: TreePine,
            title: "Forests & Agriculture",
            emoji: "🌿",
            description: "Tracking deforestation rates, crop health, and agricultural patterns across different seasons and regions.",
            importance: "Vital for food security planning and conservation efforts to protect biodiversity.",
            data: "10 million hectares of forest loss detected annually",
            image: AgricultureImg
        },
        {
            id: 7,
            icon: Sparkles,
            title: "Aurora Borealis/Australis",
            emoji: "✨",
            description: "Stunning views of Earth's magnetic field interactions with solar winds creating mesmerizing light displays.",
            importance: "Helps scientists understand space weather and its effects on satellites and communication systems.",
            data: "Auroras documented in over 40 ISS expeditions",
            image: BorealisImg
        },
        {
            id: 8,
            icon: Wind,
            title: "Deserts & Dunes",
            emoji: "🏜️",
            description: "Observing sand dune migration, desertification processes, and geological formations in arid regions.",
            importance: "Understanding desertification helps combat land degradation and water scarcity.",
            data: "Sahara Desert expands ~48 km annually into Sahel region",
            image: DesertImg
        }
    ];

    const instruments = [
        { name: "ECOSTRESS", purpose: "Measures plant water use and heat stress" },
        { name: "GEDI", purpose: "3D forest structure mapping with lidar" },
        { name: "OCO-3", purpose: "Carbon dioxide atmospheric measurements" },
        { name: "SAGE III", purpose: "Ozone and aerosol monitoring" },
        { name: "LIS", purpose: "Lightning detection and tracking" },
        { name: "HICO", purpose: "Coastal and ocean color imaging" }
    ];

    const collaborations = [
        { org: "NASA", focus: "Earth observation programs" },
        { org: "ESA", focus: "Climate monitoring initiatives" },
        { org: "JAXA", focus: "Disaster response coordination" },
        { org: "CSA", focus: "Agricultural monitoring" },
        { org: "Roscosmos", focus: "Atmospheric research" }
    ];

    return (
        <div className="cupola-container">
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-background"></div>

                <div className="hero-content">
                    <div className="hero-title-wrapper">
                        <Eye className="hero-icon" size={48} />
                        <h1 className="hero-title">THE CUPOLA</h1>
                    </div>
                    <p className="hero-subtitle">Window to the World</p>
                    <p className="hero-description">
                        A revolutionary observation module providing unprecedented views of Earth and scientific discoveries that shape our understanding of the planet
                    </p>
                </div>
            </div>

            {/* Section 1: About the Cupola */}
            <section className="section">
                <h2 className="section-title">About the Cupola</h2>

                <div className="about-grid">
                    <div className="card">
                        <h3 className="card-title">What is it?</h3>
                        <p className="card-text">
                            The Cupola is a small module designed for the observation of operations outside the International Space Station.
                            It features seven windows, including a circular top window that provides an unparalleled 360-degree view of Earth and space.
                        </p>
                        <p className="card-text">
                            Serving as the ISS's "lookout," it allows astronauts to monitor spacewalks, robotic operations, and Earth observations
                            with unprecedented clarity and perspective.
                        </p>
                    </div>

                    <div className="card">
                        <h3 className="card-title">Installation & Specifications</h3>
                        <div className="specs-list">
                            <div className="spec-item">
                                <span className="spec-bullet">▸</span>
                                <div>
                                    <strong>Installed:</strong> February 2010 (STS-130 mission)
                                </div>
                            </div>
                            <div className="spec-item">
                                <span className="spec-bullet">▸</span>
                                <div>
                                    <strong>Diameter:</strong> 3 meters (10 feet)
                                </div>
                            </div>
                            <div className="spec-item">
                                <span className="spec-bullet">▸</span>
                                <div>
                                    <strong>Mass:</strong> 1,880 kg (4,145 lbs)
                                </div>
                            </div>
                            <div className="spec-item">
                                <span className="spec-bullet">▸</span>
                                <div>
                                    <strong>Windows:</strong> 7 (6 side windows + 1 top circular window)
                                </div>
                            </div>
                            <div className="spec-item">
                                <span className="spec-bullet">▸</span>
                                <div>
                                    <strong>Top Window:</strong> 80 cm (31 inches) diameter - largest space window
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technical Diagram */}
                <div className="card technical-card">
                    <h3 className="card-title centered">Overview</h3>
                    <div className="diagram-container">
                        <div className="diagram-wrapper">
                            {/* ✅ Imagen en lugar del diagrama construido en CSS */}
                            <img
                                src={CupolaOutImg}
                                alt="Cupola outer view"
                                className="technical-diagram-img"
                            />
                            <p className="diagram-caption">
                                Exterior view of the Cupola module, showcasing its iconic dome structure and panoramic windows overlooking Earth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Earth Observations Gallery */}
            <section className="section">
                <h2 className="section-title gradient-teal">Earth Observations Gallery</h2>
                <p className="section-description">
                    Explore the diverse phenomena and environments that astronauts observe and document from the Cupola
                </p>

                <div className="observations-grid">
                    {observations.map((obs) => {
                        const Icon = obs.icon;
                        return (
                            <div
                                key={obs.id}
                                className={`observation-card ${selectedCategory === obs.id ? 'expanded' : ''}`}
                                onClick={() => setSelectedCategory(selectedCategory === obs.id ? null : obs.id)}
                            >
                                <div className="observation-content">
                                    <div className="observation-header">
                                        <div className="observation-icon-wrapper">
                                            <Icon size={24} />
                                        </div>
                                        <div className="observation-title-wrapper">
                                            <h3 className="observation-title">{obs.title}</h3>
                                        </div>
                                        <span className="observation-emoji">{obs.emoji}</span>
                                    </div>

                                    <p className="observation-description">{obs.description}</p>

                                    {selectedCategory === obs.id && (
                                        <div className="observation-details">
                                            <div className="detail-box importance">
                                                <p className="detail-label">Scientific Importance</p>
                                                <p className="detail-text">{obs.importance}</p>
                                            </div>
                                            <div className="detail-box data">
                                                <p className="detail-label">Key Data</p>
                                                <p className="detail-text">{obs.data}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="observation-visual">
                                    <img
                                        src={obs.image}
                                        alt={obs.title}
                                        className="observation-image"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Section 3: Impact on Earth Science */}
            <section className="section">
                <h2 className="section-title gradient-green">Impact on Earth Science</h2>

                {/* Scientific Instruments */}
                <div className="subsection">
                    <h3 className="subsection-title">
                        <TrendingUp size={24} />
                        Scientific Instruments on the ISS
                    </h3>
                    <div className="instruments-grid">
                        {instruments.map((instrument, idx) => (
                            <div key={idx} className="instrument-card">
                                <h4 className="instrument-name">{instrument.name}</h4>
                                <p className="instrument-purpose">{instrument.purpose}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Climate Studies */}
                <div className="card climate-card">
                    <h3 className="subsection-title">
                        <Globe size={24} />
                        Climate & Environmental Studies
                    </h3>
                    <div className="studies-grid">
                        <div className="studies-column">
                            <div className="study-item">
                                <span className="study-check">✓</span>
                                <div>
                                    <strong>Carbon Cycle Research:</strong>
                                    <p className="study-text">Tracking CO2 levels and their impact on global climate patterns</p>
                                </div>
                            </div>
                            <div className="study-item">
                                <span className="study-check">✓</span>
                                <div>
                                    <strong>Ocean Health Monitoring:</strong>
                                    <p className="study-text">Assessing phytoplankton blooms and marine ecosystem changes</p>
                                </div>
                            </div>
                            <div className="study-item">
                                <span className="study-check">✓</span>
                                <div>
                                    <strong>Atmospheric Composition:</strong>
                                    <p className="study-text">Measuring aerosols, ozone, and greenhouse gas concentrations</p>
                                </div>
                            </div>
                        </div>
                        <div className="studies-column">
                            <div className="study-item">
                                <span className="study-check">✓</span>
                                <div>
                                    <strong>Disaster Response:</strong>
                                    <p className="study-text">Real-time imagery for natural disaster assessment and relief coordination</p>
                                </div>
                            </div>
                            <div className="study-item">
                                <span className="study-check">✓</span>
                                <div>
                                    <strong>Biodiversity Mapping:</strong>
                                    <p className="study-text">Identifying critical habitats and tracking species migration patterns</p>
                                </div>
                            </div>
                            <div className="study-item">
                                <span className="study-check">✓</span>
                                <div>
                                    <strong>Water Resources:</strong>
                                    <p className="study-text">Monitoring freshwater availability and drought conditions globally</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* International Collaborations */}
                <div className="card">
                    <h3 className="subsection-title">
                        <Users size={24} />
                        International Collaborations
                    </h3>
                    <p className="collaboration-intro">
                        The Cupola serves as a focal point for global cooperation in Earth observation and space science,
                        bringing together expertise from space agencies worldwide.
                    </p>
                    <div className="collaborations-grid">
                        {collaborations.map((collab, idx) => (
                            <div key={idx} className="collaboration-card">
                                <h4 className="collaboration-org">{collab.org}</h4>
                                <p className="collaboration-focus">{collab.focus}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p className="footer-text">
                    The Cupola continues to provide invaluable insights into our planet's health and beauty,
                    inspiring future generations to protect and explore Earth from new perspectives.
                </p>
            </footer>
        </div>
    );
};

export default Cupola;