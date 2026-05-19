import React, { useRef, useState, useEffect } from "react";
import { CheckCircle, MapPin, Users, BookOpen, Award, ArrowRight } from "lucide-react";

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "translateY(0)" : "translateY(24px)",
      transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    }}>{children}</div>
  );
}

const OVERVIEW = [
  "Fully Online Classes at 6 PM, 4 Times a Week",
  "Open to Students & Working Professionals",
  "Homework & Reserve Days Between Classes",
  "Fellowship Certificate Upon Completion",
];
const FIELDWORK = [
  "Research in Your Own Neighbourhood",
  "Detailed Guidance Provided by Mentors",
  "Conduct Studies Close to Home",
  "Publish Your Research Abstract",
];

export default function AboutSection() {
  return (
    <section id="about" style={{ background:"#06090f",padding:"100px 0",position:"relative",overflow:"hidden" }}>
      {/* Subtle top divider */}
      <div style={{ position:"absolute",top:0,left:0,right:0,height:1,background:"linear-gradient(90deg,transparent,rgba(16,185,129,0.3),transparent)" }}/>

      {/* BG orbs */}
      <div className="orb" style={{ width:500,height:500,background:"rgba(16,185,129,0.04)",top:"20%",right:"-10%" }}/>

      <div style={{ maxWidth:1280,margin:"0 auto",padding:"0 32px" }}>

        {/* Header */}
        <Reveal>
          <div style={{ textAlign:"center",marginBottom:64 }}>
            <span className="section-label" style={{ marginBottom:16,display:"inline-flex" }}>
              <span style={{ width:6,height:6,borderRadius:"50%",background:"#10b981",display:"inline-block",boxShadow:"0 0 8px #10b981" }}/>
              About the Course
            </span>
            <h2 style={{ fontFamily:"'Plus Jakarta Sans'",fontWeight:800,fontSize:"clamp(30px,4vw,52px)",lineHeight:1.1,color:"#fff",margin:"16px 0" }}>
              IISPPR{" "}
              <span className="text-grad-em">Field Research</span>{" "}
              Fellowship
            </h2>
            <p style={{ fontFamily:"'DM Sans'",fontSize:16,color:"rgba(232,237,245,0.5)",maxWidth:540,margin:"0 auto",lineHeight:1.7 }}>
              Gain hands-on research experience in your community. A unique programme blending online education with real-world local fieldwork.
            </p>
          </div>
        </Reveal>

        {/* Main 2-col grid */}
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:24,marginBottom:48 }}>

          {/* Programme Overview card */}
          <Reveal delay={0.1}>
            <div className="info-card" style={{ padding:32,height:"100%" }}>
              <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:24 }}>
                <div style={{ width:44,height:44,borderRadius:12,background:"rgba(16,185,129,0.12)",border:"1px solid rgba(16,185,129,0.25)",display:"flex",alignItems:"center",justifyContent:"center" }}>
                  <BookOpen size={20} style={{ color:"#10b981" }}/>
                </div>
                <div>
                  <div style={{ fontFamily:"'Plus Jakarta Sans'",fontWeight:700,fontSize:16,color:"#fff" }}>Programme Overview</div>
                  <div style={{ fontFamily:"'DM Sans'",fontSize:12,color:"rgba(232,237,245,0.4)" }}>Online · Self-paced + Live</div>
                </div>
              </div>
              <div style={{ height:1,background:"rgba(255,255,255,0.07)",marginBottom:22 }}/>
              <div style={{ display:"flex",flexDirection:"column",gap:14 }}>
                {OVERVIEW.map((item)=>(
                  <div key={item} style={{ display:"flex",alignItems:"flex-start",gap:11 }}>
                    <CheckCircle size={16} style={{ color:"#10b981",flexShrink:0,marginTop:1 }}/>
                    <span style={{ fontFamily:"'DM Sans'",fontSize:14,color:"rgba(232,237,245,0.7)",lineHeight:1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
              {/* Urgency */}
              <div style={{ marginTop:24,padding:"14px 16px",borderRadius:14,background:"rgba(255,107,107,0.08)",border:"1px solid rgba(255,107,107,0.2)",display:"flex",alignItems:"center",gap:10 }}>
                <span style={{ fontSize:18 }}>🔥</span>
                <div>
                  <div style={{ fontFamily:"'Plus Jakarta Sans'",fontWeight:700,fontSize:14,color:"#ff6b6b" }}>Only 4 Seats Remaining!</div>
                  <div style={{ fontFamily:"'DM Sans'",fontSize:11,color:"rgba(232,237,245,0.4)" }}>2026 cohort · Closing soon</div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Local Fieldwork card */}
          <Reveal delay={0.2}>
            <div className="info-card" style={{ padding:32,height:"100%" }}>
              <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:24 }}>
                <div style={{ width:44,height:44,borderRadius:12,background:"rgba(251,191,36,0.12)",border:"1px solid rgba(251,191,36,0.25)",display:"flex",alignItems:"center",justifyContent:"center" }}>
                  <MapPin size={20} style={{ color:"#fbbf24" }}/>
                </div>
                <div>
                  <div style={{ fontFamily:"'Plus Jakarta Sans'",fontWeight:700,fontSize:16,color:"#fff" }}>Local Fieldwork</div>
                  <div style={{ fontFamily:"'DM Sans'",fontSize:12,color:"rgba(232,237,245,0.4)" }}>In your neighbourhood</div>
                </div>
              </div>
              <div style={{ height:1,background:"rgba(255,255,255,0.07)",marginBottom:22 }}/>
              <div style={{ display:"flex",flexDirection:"column",gap:14,marginBottom:24 }}>
                {FIELDWORK.map((item)=>(
                  <div key={item} style={{ display:"flex",alignItems:"flex-start",gap:11 }}>
                    <CheckCircle size={16} style={{ color:"#fbbf24",flexShrink:0,marginTop:1 }}/>
                    <span style={{ fontFamily:"'DM Sans'",fontSize:14,color:"rgba(232,237,245,0.7)",lineHeight:1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
              {/* Map visual placeholder */}
              <div style={{
                borderRadius:14,overflow:"hidden",height:80,
                background:"linear-gradient(135deg,rgba(251,191,36,0.06),rgba(20,39,77,0.8))",
                border:"1px solid rgba(251,191,36,0.15)",
                display:"flex",alignItems:"center",justifyContent:"center",
                gap:8,
              }}>
                <MapPin size={18} style={{ color:"#fbbf24",opacity:0.7 }}/>
                <span style={{ fontFamily:"'DM Mono'",fontSize:11,color:"rgba(232,237,245,0.35)",letterSpacing:"0.08em" }}>RESEARCH IN YOUR COMMUNITY</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* CTA row */}
        <Reveal delay={0.2}>
          <div style={{ display:"flex",flexWrap:"wrap",justifyContent:"center",gap:14 }}>
            <button className="btn-em">
              Enrol Now — Limited Seats <ArrowRight size={17}/>
            </button>
            <button className="btn-outline">
              Download Full Syllabus
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
