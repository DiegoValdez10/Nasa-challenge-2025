import React, { useState } from "react";
import "./Benefits.css";

function Benefits() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const benefits = [
    {
      id: 1,
      icon: "🏥",
      title: "Medical Advances",
      description: "Space research revolutionizes healthcare on Earth",
      details: [
        "Telemedicine and robotic surgery systems",
        "Bone loss studies lead to osteoporosis treatments",
        "Cancer research in microgravity reveals new insights",
        "Improved vaccine development techniques"
      ],
      stat: "Over 2,000 medical innovations from space research"
    },
    {
      id: 2,
      icon: "💧",
      title: "Water Purification",
      description: "ISS water recycling systems benefit communities worldwide",
      details: [
        "Advanced filtration technology from ISS water systems",
        "Solutions for communities without clean water access",
        "Emergency water purification for natural disasters",
        "Reduces water waste by 90% through recycling"
      ],
      stat: "Technology provides clean water to 2+ billion people"
    },
    {
      id: 3,
      icon: "🌡️",
      title: "Climate Monitoring",
      description: "Space-based observation protects our planet",
      details: [
        "Sea level rise tracking with millimeter precision",
        "Global temperature monitoring systems",
        "Polar ice melt documentation",
        "Deforestation mapping and prevention",
        "Data driving environmental policies worldwide"
      ],
      stat: "50+ Earth observation instruments on ISS"
    },
    {
      id: 4,
      icon: "🔬",
      title: "Materials Science",
      description: "Microgravity creates next-generation materials",
      details: [
        "Stronger alloys impossible to create on Earth",
        "Perfect crystals for advanced semiconductors",
        "Revolutionary applications in electronics",
        "Lightweight materials for sustainable construction"
      ],
      stat: "300% stronger materials developed in microgravity"
    },
    {
      id: 5,
      icon: "🌱",
      title: "Agriculture & Food",
      description: "Space technology feeds growing populations",
      details: [
        "Crop monitoring from orbit improves yields",
        "Harvest prediction systems reduce food waste",
        "Space farming experiments enable vertical agriculture",
        "Drought and pest early warning systems"
      ],
      stat: "20% increase in crop yields using satellite data"
    },
    {
      id: 6,
      icon: "🏗️",
      title: "Engineering & Robotics",
      description: "ISS robotics transform Earth-based industries",
      details: [
        "Robotic arms enable precision surgery",
        "Autonomous systems power self-driving vehicles",
        "Lightweight materials reduce construction costs",
        "Remote operation technology for hazardous environments"
      ],
      stat: "Canadarm technology used in 90% of robotic surgeries"
    },
    {
      id: 7,
      icon: "📡",
      title: "Communications",
      description: "Satellite technology connects the world",
      details: [
        "Enhanced satellite systems from ISS research",
        "Internet access for remote and rural areas",
        "GPS accuracy improved to centimeter-level",
        "Emergency communication during disasters"
      ],
      stat: "5 billion people rely on space-based communications"
    },
    {
      id: 8,
      icon: "👨‍🔬",
      title: "Education & Inspiration",
      description: "ISS inspires the next generation of explorers",
      details: [
        "Global educational programs reach millions",
        "Student experiments conducted aboard ISS",
        "STEM career inspiration for young people",
        "Live connections between astronauts and classrooms"
      ],
      stat: "100+ million students engaged through ISS programs"
    },
    {
      id: 9,
      icon: "🚨",
      title: "Disaster Response",
      description: "Space station aids emergency relief efforts",
      details: [
        "Real-time wildfire monitoring and mapping",
        "Hurricane tracking and early warning systems",
        "Earthquake damage assessment from orbit",
        "Flood extent mapping for rescue coordination"
      ],
      stat: "ISS photos support 50+ disaster responses annually"
    },
    {
      id: 10,
      icon: "🔋",
      title: "Energy Solutions",
      description: "Space research powers sustainable energy",
      details: [
        "Advanced solar panel technology from ISS",
        "Battery efficiency improvements",
        "Hydrogen fuel cell development",
        "Energy storage solutions for renewable power"
      ],
      stat: "ISS solar arrays are 30% more efficient than commercial panels"
    }
  ];

  return (
    <div className="benefits-container">
      <div className="benefits-header">
        <h1 className="benefits-title">From Space to Earth</h1>
        <p className="benefits-subtitle">
          Discover how the International Space Station transforms life on our planet
        </p>
      </div>

      <div className="benefits-grid">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className={`benefit-card ${selectedCategory === benefit.id ? "active" : ""}`}
            onClick={() => setSelectedCategory(selectedCategory === benefit.id ? null : benefit.id)}
          >
            <div className="benefit-icon">{benefit.icon}</div>
            <h3 className="benefit-title">{benefit.title}</h3>
            <p className="benefit-description">{benefit.description}</p>
            
            {selectedCategory === benefit.id && (
              <div className="benefit-details">
                <ul className="benefit-list">
                  {benefit.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
                <div className="benefit-stat">
                  <span className="stat-icon">📊</span>
                  {benefit.stat}
                </div>
              </div>
            )}
            
            <div className="benefit-expand">
              {selectedCategory === benefit.id ? "Show less" : "Learn more"}
            </div>
          </div>
        ))}
      </div>

      <div className="benefits-footer">
        <p>Every experiment conducted on the ISS contributes to solving challenges here on Earth</p>
      </div>
    </div>
  );
}

export default Benefits;