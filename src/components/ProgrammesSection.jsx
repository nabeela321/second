import React, { useState, useRef, useEffect } from "react";
import { Clock, Calendar, Monitor, ArrowRight, CheckCircle, Zap, FlaskConical, Microscope, ChevronRight } from "lucide-react";

/* ── Reveal on scroll ─────────────────────────────── */
function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "translateY(0)" : "translateY(28px)",
      transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    }}>
      {children}
    </div>
  );
}

/* ── Info Card (Duration / Dates / Timings) ────────── */
const INFO_CARDS = [
  {
    icon: Clock,
    iconBg: "rgba(16,185,129,0.12)",
    iconBorder: "rgba(16,185,129,0.25)",
    iconColor: "#10b981",
    accentGlow: "rgba(16,185,129,0.15)",
    label: "Program Duration",
    tag: "FLEXIBLE",
    value: "6–12 Months",
    sub: "Based on class level",
    detail: "Structured into 3 phases with built-in reserve days and homework slots between live sessions.",
    chips: ["Foundation · 6mo", "Advanced · 9mo", "Intensive · 12mo"],
  },
  {
    icon: Calendar,
    iconBg: "rgba(251,191,36,0.12)",
    iconBorder: "rgba(251,191,36,0.25)",
    iconColor: "#fbbf24",
    accentGlow: "rgba(251,191,36,0.12)",
    label: "Class Dates",
    tag: "2026 TRACK",
    value: "Apr – Dec 2026",
    sub: "Academic year aligned",
    detail: "4 live sessions per week. Each session is 90 minutes with Q&A. Recordings available 24 hours after class.",
    chips: ["Mon / Tue", "Thu / Fri", "Live + Recorded"],
  },
  {
    icon: Monitor,
    iconBg: "rgba(129,140,248,0.12)",
    iconBorder: "rgba(129,140,248,0.25)",
    iconColor: "#818cf8",
    accentGlow: "rgba(129,140,248,0.12)",
    label: "Class Timings",
    tag: "ONLINE",
    value: "6:00 PM – 7:30 PM",
    sub: "IST · Mon–Fri",
    detail: "Evening batch optimised for school students. Weekend make-up sessions available for enrolled students.",
    chips: ["Eve 6PM IST", "Weekend sessions", "Lifetime access"],
  },
];

/* ── Programme cards (Class 8 / Class 10) ─────────── */
const PROGRAMMES = [
  {
    icon: FlaskConical,
    grade: "Class 8",
    gradeColor: "#10b981",
    gradeBg: "rgba(16,185,129,0.12)",
    gradeBorder: "rgba(16,185,129,0.25)",
    title: "Junior Research Fellowship",
    subtitle: "Foundation Track · 6 Months",
    badge: "Most Popular",
    badgeBg: "rgba(16,185,129,0.15)",
    badgeColor: "#34d399",
    highlights: [
      "Introduction to scientific methodology",
      "Guided field observation sessions",
      "Mentor-led hypothesis building",
      "Fellowship certificate on completion",
    ],
    price: "₹4,999",
    priceLabel: "One-time · All inclusive",
    bottomColor: "#10b981",
  },
  {
    icon: Microscope,
    grade: "Class 10",
    gradeColor: "#fbbf24",
    gradeBg: "rgba(251,191,36,0.12)",
    gradeBorder: "rgba(251,191,36,0.25)",
    title: "Advanced Research Fellowship",
    subtitle: "Extended Track · 9–12 Months",
    badge: "High Impact",
    badgeBg: "rgba(251,191,36,0.12)",
    badgeColor: "#fbbf24",
    highlights: [
      "Advanced field investigation techniques",
      "Data analysis & statistical methods",
      "Peer-reviewed project presentations",
      "National symposium participation",
    ],
    price: "₹6,999",
    priceLabel: "One-time · All inclusive",
    bottomColor: "#fbbf24",
    featured: true,
  },
];

function InfoCard({ card, delay }) {
  const [hovered, setHovered] = useState(false);
  const Icon = card.icon;
  return (
    <Reveal delay={delay}>
      <div
        className="info-card"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ padding:0, height:"100%" }}
        data-hover
      >
        {/* Top accent line */}
        <div style={{ height:3,background:`linear-gradient(90deg,${card.iconColor},transparent)`,opacity: hovered?1:0,transition:"opacity 0.4s" }}/>

        <div style={{ padding:28 }}>
          {/* Icon row */}
          <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:20 }}>
            <div style={{
              width:52,height:52,borderRadius:15,
              background:card.iconBg,border:`1px solid ${card.iconBorder}`,
              display:"flex",alignItems:"center",justifyContent:"center",
              boxShadow: hovered ? `0 0 24px ${card.accentGlow}` : "none",
              transition:"box-shadow 0.4s",
            }}>
              <Icon size={22} style={{ color:card.iconColor }}/>
            </div>
            <span style={{
              fontFamily:"'DM Mono'",fontSize:9,fontWeight:500,letterSpacing:"0.15em",textTransform:"uppercase",
              color:card.iconColor,padding:"5px 10px",borderRadius:100,
              background:card.iconBg,border:`1px solid ${card.iconBorder}`,
            }}>
              {card.tag}
            </span>
          </div>

          {/* Label */}
          <div style={{ fontFamily:"'DM Sans'",fontSize:12,fontWeight:500,color:"rgba(232,237,245,0.45)",letterSpacing:"0.05em",marginBottom:6,textTransform:"uppercase" }}>
            {card.label}
          </div>

          {/* Value */}
          <div style={{ fontFamily:"'Plus Jakarta Sans'",fontWeight:800,fontSize:26,color:"#fff",lineHeight:1.1,marginBottom:4 }}>
            {card.value}
          </div>
          <div style={{ fontFamily:"'DM Sans'",fontSize:13,color:"rgba(232,237,245,0.45)",marginBottom:16 }}>
            {card.sub}
          </div>

          {/* Divider */}
          <div style={{ height:1,background:"rgba(255,255,255,0.07)",marginBottom:16 }}/>

          {/* Detail text */}
          <p style={{ fontFamily:"'DM Sans'",fontSize:13,lineHeight:1.65,color:"rgba(232,237,245,0.55)",marginBottom:18 }}>
            {card.detail}
          </p>

          {/* Chips */}
          <div style={{ display:"flex",flexWrap:"wrap",gap:6 }}>
            {card.chips.map(c=>(
              <span key={c} style={{
                fontFamily:"'DM Mono'",fontSize:10,fontWeight:500,
                color:card.iconColor,
                padding:"5px 11px",borderRadius:100,
                background:card.iconBg,border:`1px solid ${card.iconBorder}`,
                letterSpacing:"0.05em",
              }}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function ProgrammeCard({ prog, delay }) {
  const [hovered, setHovered] = useState(false);
  const Icon = prog.icon;
  return (
    <Reveal delay={delay}>
      <div
        className="info-card"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ position:"relative", height:"100%", display:"flex", flexDirection:"column" }}
        data-hover
      >
        {/* Featured glow ring */}
        {prog.featured && (
          <div style={{ position:"absolute",inset:-1,borderRadius:25,border:`1px solid ${prog.gradeColor}40`,pointerEvents:"none" }}/>
        )}

        {/* Top bar */}
        <div style={{ height:4,background:`linear-gradient(90deg,${prog.gradeColor},${prog.gradeColor}00)` }}/>

        <div style={{ padding:28,flex:1,display:"flex",flexDirection:"column" }}>
          {/* Icon + badge */}
          <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:20 }}>
            <div style={{
              width:52,height:52,borderRadius:15,
              background:prog.gradeBg,border:`1px solid ${prog.gradeBorder}`,
              display:"flex",alignItems:"center",justifyContent:"center",
              boxShadow: hovered ? `0 0 24px ${prog.gradeColor}30` : "none",
              transition:"box-shadow 0.4s",
            }}>
              <Icon size={22} style={{ color:prog.gradeColor }}/>
            </div>
            <span style={{
              fontFamily:"'DM Mono'",fontSize:9,fontWeight:500,letterSpacing:"0.12em",textTransform:"uppercase",
              color:prog.badgeColor,padding:"5px 10px",borderRadius:100,
              background:prog.badgeBg,border:`1px solid ${prog.gradeBorder}`,
            }}>
              ⚡ {prog.badge}
            </span>
          </div>

          {/* Grade pill */}
          <div style={{ marginBottom:10 }}>
            <span style={{
              fontFamily:"'Plus Jakarta Sans'",fontWeight:700,fontSize:13,
              color:prog.gradeColor,padding:"6px 14px",borderRadius:100,
              background:prog.gradeBg,border:`1px solid ${prog.gradeBorder}`,
            }}>
              {prog.grade}
            </span>
          </div>

          {/* Title */}
          <div style={{ fontFamily:"'Plus Jakarta Sans'",fontWeight:800,fontSize:20,color:"#fff",lineHeight:1.2,marginBottom:4 }}>
            {prog.title}
          </div>
          <div style={{ fontFamily:"'DM Sans'",fontSize:12,color:"rgba(232,237,245,0.4)",marginBottom:18,fontStyle:"italic" }}>
            {prog.subtitle}
          </div>

          {/* Divider */}
          <div style={{ height:1,background:"rgba(255,255,255,0.07)",marginBottom:18 }}/>

          {/* Highlights */}
          <div style={{ flex:1,display:"flex",flexDirection:"column",gap:10,marginBottom:22 }}>
            {prog.highlights.map(h=>(
              <div key={h} style={{ display:"flex",alignItems:"flex-start",gap:10 }}>
                <CheckCircle size={15} style={{ color:prog.gradeColor,flexShrink:0,marginTop:1 }}/>
                <span style={{ fontFamily:"'DM Sans'",fontSize:13,color:"rgba(232,237,245,0.65)",lineHeight:1.5 }}>{h}</span>
              </div>
            ))}
          </div>

          {/* Price */}
          <div style={{ display:"flex",alignItems:"baseline",gap:8,marginBottom:18 }}>
            <span style={{ fontFamily:"'Plus Jakarta Sans'",fontWeight:800,fontSize:28,color:"#fff" }}>{prog.price}</span>
            <span style={{ fontFamily:"'DM Sans'",fontSize:12,color:"rgba(232,237,245,0.4)" }}>{prog.priceLabel}</span>
          </div>

          {/* CTA */}
          <button
            data-hover
            style={{
              display:"flex",alignItems:"center",justifyContent:"space-between",
              width:"100%",padding:"14px 18px",borderRadius:14,cursor:"pointer",
              border:`1px solid ${hovered ? prog.gradeColor : prog.gradeBorder}`,
              background: hovered ? prog.gradeColor : prog.gradeBg,
              color: hovered ? (prog.gradeColor === "#10b981" ? "#03060f" : "#03060f") : prog.gradeColor,
              fontFamily:"'Plus Jakarta Sans'",fontWeight:700,fontSize:14,
              transition:"all 0.3s cubic-bezier(0.16,1,0.3,1)",
              boxShadow: hovered ? `0 8px 24px ${prog.gradeColor}35` : "none",
            }}
          >
            Enrol Now
            <ChevronRight size={18}/>
          </button>
        </div>
      </div>
    </Reveal>
  );
}

export default function ProgrammesSection() {
  return (
    <section id="programmes" style={{ background:"#03060f",padding:"100px 0",position:"relative",overflow:"hidden" }}>

      {/* Background orbs */}
      <div className="orb" style={{ width:600,height:600,background:"rgba(16,185,129,0.04)",top:"-10%",left:"50%",transform:"translateX(-50%)" }}/>
      <div className="orb" style={{ width:300,height:300,background:"rgba(251,191,36,0.05)",bottom:"5%",right:"5%" }}/>

      <div style={{ maxWidth:1280,margin:"0 auto",padding:"0 32px" }}>

        {/* ── Section header ── */}
        <Reveal>
          <div style={{ textAlign:"center",marginBottom:64 }}>
            <span className="section-label" style={{ marginBottom:16,display:"inline-flex" }}>
              <span style={{ width:6,height:6,borderRadius:"50%",background:"#10b981",display:"inline-block",boxShadow:"0 0 8px #10b981" }}/>
              Programme Info · 2026 Academic Track
            </span>
            <h2 style={{ fontFamily:"'Plus Jakarta Sans'",fontWeight:800,fontSize:"clamp(32px,4vw,56px)",lineHeight:1.1,letterSpacing:"-0.02em",color:"#fff",margin:"16px 0 14px" }}>
              Everything You Need to{" "}
              <span className="text-grad-em">Know</span>
            </h2>
            <p style={{ fontFamily:"'DM Sans'",fontSize:16,color:"rgba(232,237,245,0.5)",maxWidth:520,margin:"0 auto",lineHeight:1.7 }}>
              Full transparency on schedule, timing, and duration — so you can plan your research journey with confidence.
            </p>
          </div>
        </Reveal>

        {/* ── Info cards (Duration / Dates / Timings) ── */}
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:20,marginBottom:72 }}>
          {INFO_CARDS.map((c,i)=>(
            <InfoCard key={c.label} card={c} delay={i*0.1}/>
          ))}
        </div>

        {/* ── Programme cards divider label ── */}
        <Reveal delay={0.1}>
          <div style={{ display:"flex",alignItems:"center",gap:20,marginBottom:36 }}>
            <div style={{ flex:1,height:1,background:"rgba(255,255,255,0.07)" }}/>
            <span className="section-label">Choose Your Track</span>
            <div style={{ flex:1,height:1,background:"rgba(255,255,255,0.07)" }}/>
          </div>
        </Reveal>

        {/* ── Class 8 / Class 10 programme cards ── */}
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:20,marginBottom:60 }}>
          {PROGRAMMES.map((p,i)=>(
            <ProgrammeCard key={p.grade} prog={p} delay={i*0.15}/>
          ))}
        </div>

        {/* ── Bottom CTA banner ── */}
        <Reveal delay={0.1}>
          <div style={{
            position:"relative",overflow:"hidden",borderRadius:24,
            background:"linear-gradient(135deg,rgba(16,185,129,0.12) 0%,rgba(6,13,30,0.9) 60%,rgba(20,39,77,0.8) 100%)",
            border:"1px solid rgba(16,185,129,0.2)",
            padding:"40px 40px",
            display:"flex",flexWrap:"wrap",
            alignItems:"center",justifyContent:"space-between",gap:24,
            boxShadow:"0 0 80px rgba(16,185,129,0.08), inset 0 1px 0 rgba(255,255,255,0.07)",
          }}>
            {/* Glow orb inside banner */}
            <div style={{ position:"absolute",top:-40,left:-40,width:200,height:200,borderRadius:"50%",background:"rgba(16,185,129,0.1)",filter:"blur(60px)",pointerEvents:"none" }}/>

            <div style={{ position:"relative" }}>
              <div style={{ fontFamily:"'DM Mono'",fontSize:10,color:"#34d399",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:8 }}>
                🔥 Limited seats — 2026 cohort
              </div>
              <h3 style={{ fontFamily:"'Plus Jakarta Sans'",fontWeight:800,fontSize:"clamp(22px,2.5vw,32px)",color:"#fff",lineHeight:1.15,marginBottom:8 }}>
                Not sure which track fits you?
              </h3>
              <p style={{ fontFamily:"'DM Sans'",fontSize:14,color:"rgba(232,237,245,0.5)",maxWidth:440,lineHeight:1.6 }}>
                Book a free 15-minute academic counselling call. Our research mentors will help you pick the right programme.
              </p>
            </div>

            <div style={{ display:"flex",flexWrap:"wrap",gap:12,position:"relative" }}>
              <button className="btn-em" style={{ fontSize:14 }}>
                Book Free Counselling <ArrowRight size={16}/>
              </button>
              <button className="btn-outline" style={{ fontSize:14 }}>
                Download Brochure
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
