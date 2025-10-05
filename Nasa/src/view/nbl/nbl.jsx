import React from "react";
import { Global, css } from "@emotion/react";
import {
  MapPin,
  Anchor,
  Activity,
  Clock,
  FlaskConical,
  FileText,
  TrendingUp,
  Droplets,
  ShieldCheck,
  Wrench,
  Cpu,
  Zap,
} from "lucide-react";
import { nblInfo } from "../../utils/nbl";
import NBL1 from '../../assets/NBL1.jpg';
import NBL2 from '../../assets/NBL2.jpg';
import NBL3 from '../../assets/NBL3.jpg';
import Medical from '../../assets/Medical.jpg';
import SuitUp from '../../assets/SUIT-UP.jpg';
import Weight from '../../assets/Weight.jpg';
import VideoReview from '../../assets/VideoReview.jpg';
import underWater from '../../assets/underWater.jpg';
import Why from '../../assets/Why.jpg';
import Iss from '../../assets/ISS.jpg';
import modules from '../../assets/module.jpg';
import repair from '../../assets/repair.jpg';
import experiment from '../../assets/experiment.jpg';
import full from '../../assets/full.jpg';
import backpack from '../../assets/backpack.jpg'

/**
 * NBLShowcase.jsx
 *
 * • Visualizes NBL information in sections with a dark theme and custom colors.
 * • Provides responsive image placeholders you can replace with <img src=... />.
 * • Uses @emotion/react (in your package.json) and lucide-react for icons.
 *
 * USAGE:
 * import { nblInfo } from "./utils/nblInfo"; // adjust the path
 * import NBLShowcase from "./NBLShowcase";
 *
 * <NBLShowcase />
 */

const theme = {
  primary: "#6366F1",
  primaryDark: "#4F46E5",
  primaryLight: "#818CF8",
  background: "#0F172A",
  surface: "#1E293B",
  surfaceLight: "#334155",
  accentPurple: "#A78BFA",
  accentTeal: "#2DD4BF",
  accentPink: "#F472B6",
  textPrimary: "#F8FAFC",
  textSecondary: "#CBD5E1",
  textMuted: "#64748B",
  border: "#334155",
  success: "#10B981",
  warning: "#F59E0B",
};

const pageStyles = css`
  :root {
    --primary: ${theme.primary};
    --primary-dark: ${theme.primaryDark};
    --primary-light: ${theme.primaryLight};
    --background: ${theme.background};
    --surface: ${theme.surface};
    --surface-light: ${theme.surfaceLight};
    --accent-purple: ${theme.accentPurple};
    --accent-teal: ${theme.accentTeal};
    --accent-pink: ${theme.accentPink};
    --text-primary: ${theme.textPrimary};
    --text-secondary: ${theme.textSecondary};
    --text-muted: ${theme.textMuted};
    --border: ${theme.border};
    --success: ${theme.success};
    --warning: ${theme.warning};
  }

  * { box-sizing: border-box; }

  .nbl-wrapper {
    background: radial-gradient(1000px 800px at 10% -10%, rgba(99, 102, 241, 0.08), transparent),
                radial-gradient(900px 700px at 110% 10%, rgba(167, 139, 250, 0.08), transparent),
                var(--background);
    color: var(--text-primary);
    padding: clamp(16px, 3vw, 32px);
    min-height: 100dvh;
    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .title {
    font-size: clamp(24px, 4vw, 40px);
    line-height: 1.1;
    font-weight: 800;
    letter-spacing: -0.02em;
  }

  .subtitle {
    color: var(--text-secondary);
    max-width: 80ch;
  }

  .chip {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(120deg, rgba(45, 212, 191, 0.12), rgba(99, 102, 241, 0.12));
    color: var(--text-secondary);
    border: 1px solid var(--border);
    padding: 6px 10px;
    border-radius: 999px;
    font-size: 12px;
    margin-bottom: 12px;
  }

  .grid {
    display: grid;
    gap: 16px;
  }

  .grid-2 {
    grid-template-columns: 1fr;
  }
  @media (min-width: 900px) {
    .grid-2 { grid-template-columns: 1.2fr 1fr; }
  }

  .card {
    background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.0));
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: clamp(14px, 2vw, 20px);
    backdrop-filter: blur(6px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.25);
  }

  .kpi {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }
  @media (min-width: 700px) { .kpi { grid-template-columns: repeat(4, 1fr); } }

  .kpi-item {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 16px;
  }
  .kpi-label { color: var(--text-muted); font-size: 12px; }
  .kpi-value { font-weight: 700; font-size: 18px; }

  .image-row { display: grid; gap: 12px; grid-template-columns: 1fr; }
  @media (min-width: 900px) { .image-row { grid-template-columns: repeat(3, 1fr); } }

  .image-ph {
    border-radius: 16px;
    background: linear-gradient(135deg, rgba(129, 140, 248, 0.15), rgba(15, 23, 42, 0.8));
    border: 1px dashed var(--primary-light);
    min-height: 160px;
    display: grid;
    place-items: center;
    color: var(--text-secondary);
    text-align: center;
    padding: 12px;
  }

  .section-title {
    font-size: clamp(18px, 2.5vw, 26px);
    font-weight: 800;
    letter-spacing: -0.01em;
    margin-bottom: 8px;
  }

  .section-sub { color: var(--text-secondary); margin-bottom: 16px; }

  .stepper { display: grid; gap: 12px; }
  @media (min-width: 900px) { .stepper { grid-template-columns: repeat(3, 1fr); } }

  .step {
    border: 1px solid var(--border);
    background: var(--surface);
    border-radius: 16px;
    padding: 16px;
    display: grid;
    gap: 10px;
  }
  .badge {
    display: inline-grid;
    place-items: center;
    font-weight: 700;
    width: 36px; height: 36px;
    border-radius: 999px;
    background: linear-gradient(180deg, var(--primary), var(--primary-dark));
    color: white;
    box-shadow: 0 6px 20px rgba(79, 70, 229, 0.35);
  }

  .compare {
    width: 100%;
    border-collapse: collapse;
    overflow: hidden;
    border-radius: 16px;
    border: 1px solid var(--border);
  }
  .compare thead th {
    background: linear-gradient(180deg, rgba(99, 102, 241, 0.18), rgba(99, 102, 241, 0.05));
    color: var(--text-primary);
    padding: 12px;
    text-align: left;
    font-weight: 800;
  }
  .compare tbody td {
    padding: 12px;
    border-top: 1px solid var(--border);
    color: var(--text-secondary);
    vertical-align: top;
  }
  .compare tbody tr:hover { background: rgba(129, 140, 248, 0.06); }

  .gallery {
    display: grid;
    gap: 12px;
    grid-template-columns: 1fr;
  }
  @media (min-width: 900px) { .gallery { grid-template-columns: repeat(4, 1fr); } }

  .gallery-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    overflow: hidden;
    display: grid;
    grid-template-rows: 150px auto;
  }
  .gallery-img { background: rgba(99, 102, 241, 0.15); display: grid; place-items: center; }
  .gallery-body { padding: 12px; }
  .gallery-body h4 { margin: 0 0 6px; font-size: 16px; }
  .tag {
    display: inline-block;
    font-size: 11px; color: var(--text-secondary);
    background: rgba(45, 212, 191, 0.12);
    border: 1px solid var(--border);
    padding: 2px 8px; border-radius: 999px;
  }

  .emu-grid { display: grid; gap: 12px; grid-template-columns: 1fr; }
  @media (min-width: 900px) { .emu-grid { grid-template-columns: 1fr 1fr; } }

  .list {
    display: grid; gap: 10px;
  }
  .list-item { display: grid; grid-template-columns: 28px 1fr; gap: 10px; align-items: start; }
  .muted { color: var(--text-secondary); }

  .divider { height: 1px; background: var(--border); margin: 24px 0; }
`;

const Pill = ({ icon: Icon, children }) => (
  <span className="chip"><Icon size={14} />{children}</span>
);

const KPI = ({ label, value }) => (
  <div className="kpi-item">
    <div className="kpi-label">{label}</div>
    <div className="kpi-value">{value}</div>
  </div>
);

const ImagePH = ({ img, alt = "NBL Image", height='100%', width='100%' }) => (
  <div className="image-ph" style={{ padding: 0, overflow: "hidden", height: height, width: width }}>
    <img
      src={img}
      alt={alt}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",      // Ajusta imagen sin deformarla
        display: "block",        // Elimina espacios blancos
      }}
    />
  </div>
);

const SectionHeader = ({ title, subtitle, icon: Icon }) => (
  <div style={{ marginBottom: 12 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div className="badge" aria-hidden>
        <Icon size={18} />
      </div>
      <h3 className="section-title" style={{ margin: 0 }}>{title}</h3>
    </div>
    {subtitle && <p className="section-sub">{subtitle}</p>}
  </div>
);

function Overview({ data }) {
  return (
    <div className="card">
      <Pill icon={MapPin}>Houston, Texas · Sonny Carter Training Facility</Pill>
      <h2 className="title" style={{ margin: "8px 0 8px" }}>{data?.overview?.title || "Neutral Buoyancy Laboratory (NBL)"}</h2>
      <p className="subtitle">{data?.overview?.description}</p>

      <div className="divider" />

      <div className="grid grid-2">
        <div className="grid" style={{ gap: 16 }}>
          <div className="kpi">
            <KPI label="Length" value={data?.pool?.length} />
            <KPI label="Width" value={data?.pool?.width} />
            <KPI label="Depth" value={data?.pool?.depth} />
            <KPI label="Volume" value={data?.pool?.volume} />
          </div>

          <div className="list">
            <div className="list-item">
              <Droplets size={20} />
              <div>
                <div style={{ fontWeight: 700 }}>Water</div>
                <div className="muted">{data?.pool?.waterComposition} · {data?.pool?.waterTemperature}</div>
              </div>
            </div>
            <div className="list-item">
              <ShieldCheck size={20} />
              <div>
                <div style={{ fontWeight: 700 }}>Safety & Control</div>
                <div className="muted">Multiple integrated control rooms, cameras, audio and instrumentation for planning, verification and EVA training.</div>
              </div>
            </div>
            <div className="list-item">
              <Wrench size={20} />
              <div>
                <div style={{ fontWeight: 700 }}>LMF</div>
                <div className="muted">Fabrication & repair shops (welding, machining, carpentry) with co-located technical support.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid" style={{ gap: 12 }}>
          <div className="image-row">
            <ImagePH label="Facility photo 1" img={NBL1} />
            <ImagePH label="Facility photo 2" img={NBL2}/>
            <ImagePH label="Facility photo 3" img={NBL3}/>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrainingProcess() {
  const steps = [
    {
      title: "Medical & Physical Requirements",
      icon: Activity,
      image: Medical,
      desc: "Medical evaluations, fitness tests, and diving/safety certifications.",
    },
    {
      title: "Suit Up Process (6+ hrs)",
      icon: Anchor,
      image: SuitUp,
      desc: "EMU prep, comms checks, ballast, leak checks, and systems verification.",
    },
    {
      title: "Weight Adjustment",
      icon: TrendingUp,
      image: Weight,
      desc: "Mass adjustments to achieve neutral buoyancy and simulate microgravity.",
    },
    {
      title: "Underwater Tasks (6–8 hrs)",
      icon: Clock,
      image: underWater,
      desc: "EVA procedures, translation with tethers, tooling and repairs.",
    },
    {
      title: "Debriefing & Analysis",
      icon: FileText,
      image: VideoReview,
      desc: "Video review, telemetry and procedure iteration for real missions.",
    },
  ];

  return (
    <div className="card">
      <SectionHeader title="Training Process" subtitle="Step-by-step training infographic" icon={FlaskConical} />
      <div className="stepper">
        {steps.map((s, i) => (
          <div className="step" key={s.title}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div className="badge">{i + 1}</div>
              <h4 style={{ margin: 0 }}>{s.title}</h4>
            </div>
            <div className="muted">{s.desc}</div>
            <ImagePH img={s.image} height={150}/>
          </div>
        ))}
      </div>
    </div>
  );
}

function WhyUnderwater() {
  const rows = [
    {
      label: "Effective gravity",
      nbl: "Approximation via neutral buoyancy (near 0 g effective for slow translation).",
      space: "True microgravity (~10^-6 g) in orbit.",
    },
    {
      label: "Medium resistance",
      nbl: "Water drag adds effort and slows motions.",
      space: "Vacuum: no drag; governed by inertia, mass and propulsion.",
    },
    {
      label: "Thermal",
      nbl: "Tempered water and EMU thermal control; relatively stable environment.",
      space: "Extreme hot/cold cycles from sun/shade; radiation.",
    },
    {
      label: "Comms & safety",
      nbl: "Control rooms, safety divers, immediate extraction.",
      space: "Communication delays, complex return, higher risk.",
    },
    {
      label: "Procedure fidelity",
      nbl: "Very high for choreographing tasks and validating tools.",
      space: "Final condition validating performance in the real environment.",
    },
  ];

  return (
    <div className="card">
      <SectionHeader title="Why Underwater?" subtitle="Neutral buoyancy explained and comparison with space" icon={Droplets} />
      <div className="grid grid-2" style={{ alignItems: "start" }}>
        <div className="grid" style={{ gap: 12 }}>
          <p className="muted">
            <strong>Neutral buoyancy</strong> is achieved when effective weight is zero due to the balance between gravity and the water's buoyant force. By adjusting ballast on the EMU, astronauts practice <em>translations</em> and <em>EVA tasks</em> that closely emulate microgravity for operational training.
          </p>
          <ImagePH img={Why}/>
        </div>
        <div className="grid" style={{ gap: 12 }}>
          <table className="compare">
            <thead>
              <tr>
                <th>Condition</th>
                <th>NBL</th>
                <th>Real space</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label}>
                  <td><strong>{r.label}</strong></td>
                  <td>{r.nbl}</td>
                  <td>{r.space}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function TypesOfEVA() {
  const items = [
    {
      title: "ISS Maintenance",
      tag: "Upkeep",
      image: Iss,
      desc: "Battery replacements, inspections, cleaning and periodic adjustments.",
    },
    {
      title: "New Modules Installation",
      tag: "Assembly",
      image: modules,
      desc: "Integration of modules, solar arrays and radiators in orbit.",
    },
    {
      title: "Equipment Repair",
      tag: "Repair",
      image: repair,
      desc: "Fixing unexpected failures on critical external hardware.",
    },
    {
      title: "External Experiments",
      tag: "Science",
      image: experiment,
      desc: "Installation and calibration of scientific payloads.",
    },
  ];

  return (
    <div className="card">
      <SectionHeader title="Types of EVA Missions" subtitle="Gallery of EVA types" icon={Zap} />
      <div className="gallery">
        {items.map((it) => (
          <div className="gallery-card" key={it.title}>
            <div className="gallery-img">
              <ImagePH img={it.image} />
            </div>
            <br/>
            <br/>
            <div className="gallery-body">
              <h4>{it.title}</h4>
              <span className="tag">{it.tag}</span>
              <p className="muted" style={{ marginTop: 8 }}>{it.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Spacesuits() {
  return (
    <div className="card">
      <SectionHeader title="The Spacesuits (EMU)" subtitle="Components, technology and evolution" icon={Cpu} />
      <div className="emu-grid">
        <div className="grid" style={{ gap: 12 }}>
          <div className="list">
            <div className="list-item">
              <ShieldCheck size={20} />
              <div>
                <div style={{ fontWeight: 700 }}>Life support</div>
                <div className="muted">ECLSS: oxygen, CO₂ removal, thermal control, potable water.</div>
              </div>
            </div>
            <div className="list-item">
              <Wrench size={20} />
              <div>
                <div style={{ fontWeight: 700 }}>Mobility & tools</div>
                <div className="muted">Pressurized joints, dexterity gloves, interfaces for tool tethers.</div>
              </div>
            </div>
            <div className="list-item">
              <Activity size={20} />
              <div>
                <div style={{ fontWeight: 700 }}>Protection</div>
                <div className="muted">Layers against micrometeoroids, radiation and thermal extremes.</div>
              </div>
            </div>
          </div>
          <div className="divider" />
          <div className="list">
            <div className="list-item">
              <FileText size={20} />
              <div>
                <div style={{ fontWeight: 700 }}>Evolution</div>
                <div className="muted">From Shuttle/ISS EMU to next-gen suits (xEMU, commercial EVA).</div>
              </div>
            </div>
            <div className="list-item">
              <TrendingUp size={20} />
              <div>
                <div style={{ fontWeight: 700 }}>Telemetry & comms</div>
                <div className="muted">HUD/voice, flight control link, biometrics and video for debrief.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid" >
          <ImagePH img={full} height={325}/>
          <ImagePH img={backpack} height={325}/>
        </div>
      </div>
    </div>
  );
}

export default function NBLShowcase() {
  return (
    <div className="nbl-wrapper">
      <Global styles={pageStyles} />
      <div className="container grid" style={{ gap: 16 }}>
        {/* Header */}
        <div className="grid" style={{ gap: 8 }}>
          <span className="chip">3 · NBL – Neutral Buoyancy Laboratory</span>
          <h1 className="title" style={{ margin: 0 }}>Explaining Astronaut Training</h1>
          <p className="subtitle">Purpose: Explain astronaut training using the NBL for mission planning, procedure development, hardware verification, and refining time‑critical operations.</p>
        </div>

        {/* Section 1: What is the NBL? */}
        <Overview data={nblInfo} />

        {/* Section 2: Training Process */}
        <TrainingProcess />

        {/* Section 3: Why Underwater? */}
        <WhyUnderwater />

        {/* Section 4: Types of EVA Missions */}
        <TypesOfEVA />

        {/* Section 5: The Spacesuits */}
        <Spacesuits />
      </div>
    </div>
  );
}
