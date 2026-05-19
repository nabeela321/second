import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Play, Star, Users, Award, TrendingUp, ChevronDown } from "lucide-react";

/* ── Animated counter ─────────────────────────────── */
function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      let start = 0;
      const step = target / 60;
      const timer = setInterval(() => {
        start += step;
        if (start >= target) { setCount(target); clearInterval(timer); }
        else setCount(Math.floor(start));
      }, 16);
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

/* ── Floating particle dot ────────────────────────── */
function Particle({ style }) {
  return (
    <div style={{
      position:"absolute", borderRadius:"50%",
      background:"rgba(16,185,129,0.6)",
      animation:`floatY ${3+Math.random()*3}s ease-in-out infinite`,
      animationDelay:`${Math.random()*3}s`,
      ...style,
    }}/>
  );
}

/* ── Stats bar ────────────────────────────────────── */
const STATS = [
  { icon: Users,    val: 12000, suf: "+", label: "Students Enrolled" },
  { icon: Award,    val: 98,    suf: "%", label: "Completion Rate" },
  { icon: TrendingUp,val:500,  suf: "+", label: "Research Projects" },
  { icon: Star,     val: 4.9,  suf: "",  label: "Avg. Rating" },
];

/* ── Trust logos ──────────────────────────────────── */
const LOGOS = ["ICAR", "ICMR", "DBT", "DST", "UGC"];

export default function HeroSection() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    width:  `${2 + Math.random() * 4}px`,
    height: `${2 + Math.random() * 4}px`,
    top:    `${Math.random() * 100}%`,
    left:   `${Math.random() * 100}%`,
    opacity: 0.3 + Math.random() * 0.5,
  }));

  return (
    <section
      id="hero"
      style={{
        position:"relative",
        minHeight:"100vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        overflow:"hidden",
        background:"#03060f",
        paddingTop:100,
      }}
    >
      {/* ── Background layers ── */}
      {/* Deep radial gradient */}
      <div style={{
        position:"absolute", inset:0, pointerEvents:"none",
        background:"radial-gradient(ellipse 80% 70% at 65% 40%, rgba(16,185,129,0.08) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 20% 80%, rgba(251,191,36,0.05) 0%, transparent 50%)",
      }}/>

      {/* Grid lines */}
      <div style={{
        position:"absolute", inset:0, pointerEvents:"none", opacity:0.04,
        backgroundImage:"linear-gradient(rgba(255,255,255,0.7) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.7) 1px,transparent 1px)",
        backgroundSize:"60px 60px",
      }}/>

      {/* Glowing orbs */}
      <div className="orb" style={{ width:500,height:500,background:"rgba(16,185,129,0.07)",top:"10%",right:"-5%",animationName:"glowPulse",animationDuration:"4s",animationIterationCount:"infinite" }}/>
      <div className="orb" style={{ width:400,height:400,background:"rgba(251,191,36,0.05)",bottom:"0%",left:"-8%",animationName:"glowPulse",animationDuration:"6s",animationIterationCount:"infinite",animationDelay:"2s" }}/>
      <div className="orb" style={{ width:300,height:300,background:"rgba(16,185,129,0.05)",top:"40%",left:"30%",animationName:"glowPulse",animationDuration:"8s",animationIterationCount:"infinite",animationDelay:"1s" }}/>

      {/* Particles */}
      {particles.map((p, i) => <Particle key={i} style={p} />)}

      {/* ── Main content ── */}
      <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 32px 80px", width:"100%", position:"relative", zIndex:2 }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr", gap:60, alignItems:"center" }}
             className="lg:grid-cols-[1.1fr_0.9fr]" >

          {/* LEFT */}
          <div style={{ display:"flex", flexDirection:"column", gap:24 }}>

            {/* Eyebrow pill */}
            <div className="animate-fade-up d-0" style={{ display:"inline-flex", alignItems:"center", gap:8 }}>
              <span className="section-label">
                <span style={{ width:6,height:6,borderRadius:"50%",background:"#10b981",display:"inline-block",boxShadow:"0 0 8px #10b981",animation:"glowPulse 2s ease-in-out infinite" }}/>
                Excellence in Research · 2026 Track
              </span>
            </div>

            {/* Main headline */}
            <div className="animate-fade-up d-1">
              <h1 style={{ fontFamily:"'Plus Jakarta Sans'",fontWeight:800,lineHeight:1.04,letterSpacing:"-0.03em",margin:0 }}>
                <span style={{ fontSize:"clamp(44px,6vw,80px)",color:"#fff",display:"block" }}>IISPPR Field</span>
                <span style={{ fontSize:"clamp(44px,6vw,80px)",display:"block" }} className="text-grad-em">&amp; Research</span>
                <span style={{ fontSize:"clamp(44px,6vw,80px)",color:"#fff",display:"block" }}>Fellowship</span>
              </h1>
            </div>

            {/* Sub-tagline */}
            <p className="animate-fade-up d-2" style={{ fontFamily:"'DM Sans'",fontSize:"clamp(15px,1.5vw,18px)",color:"rgba(232,237,245,0.6)",lineHeight:1.7,maxWidth:520,margin:0 }}>
              Shape the future with data-driven insights. A structured, hands-on research programme designed for school students across India — learn science by <em style={{ color:"rgba(232,237,245,0.85)",fontStyle:"normal" }}>doing</em> it.
            </p>

            {/* CTA row */}
            <div className="animate-fade-up d-3" style={{ display:"flex",flexWrap:"wrap",gap:14,alignItems:"center" }}>
              <button className="btn-em">
                Get Course Now <ArrowRight size={17}/>
              </button>
              <button className="btn-outline" style={{ display:"flex",alignItems:"center",gap:10 }}>
                <span style={{
                  width:42,height:42,borderRadius:"50%",
                  border:"1.5px solid rgba(255,255,255,0.25)",
                  display:"flex",alignItems:"center",justifyContent:"center",
                  background:"rgba(255,255,255,0.04)",
                }}>
                  <Play size={15} style={{ marginLeft:2 }}/>
                </span>
                Watch Overview
              </button>
            </div>

            {/* Trust logos */}
            <div className="animate-fade-up d-4" style={{ display:"flex",alignItems:"center",gap:12,flexWrap:"wrap",marginTop:4 }}>
              <span style={{ fontFamily:"'DM Mono'",fontSize:10,color:"rgba(232,237,245,0.35)",letterSpacing:"0.1em",textTransform:"uppercase" }}>Recognised by</span>
              {LOGOS.map(l=>(
                <span key={l} style={{
                  fontFamily:"'DM Mono'",fontSize:11,fontWeight:500,
                  color:"rgba(232,237,245,0.4)",
                  padding:"5px 12px",borderRadius:8,
                  border:"1px solid rgba(255,255,255,0.1)",
                  transition:"all 0.2s",
                }}>
                  {l}
                </span>
              ))}
            </div>

            {/* Stars row */}
            <div className="animate-fade-up d-5" style={{ display:"flex",alignItems:"center",gap:10 }}>
              <div style={{ display:"flex",gap:3 }}>
                {[1,2,3,4,5].map(i=>(
                  <Star key={i} size={15} style={{ fill:"#fbbf24",color:"#fbbf24" }}/>
                ))}
              </div>
              <span style={{ fontFamily:"'DM Sans'",fontSize:13,color:"rgba(232,237,245,0.55)" }}>
                4.9 / 5.0 from <strong style={{ color:"rgba(232,237,245,0.8)" }}>2,400+</strong> students
              </span>
            </div>
          </div>

          {/* RIGHT — visual card */}
          <div className="animate-fade-in d-3 hidden lg:flex" style={{ justifyContent:"flex-end", position:"relative" }}>
            {/* Main card */}
            <div style={{
              width:"100%",maxWidth:420,
              background:"linear-gradient(145deg,rgba(20,39,77,0.9),rgba(6,13,30,0.95))",
              border:"1px solid rgba(255,255,255,0.09)",
              borderRadius:28,
              padding:32,
              boxShadow:"0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(16,185,129,0.08)",
              position:"relative",overflow:"hidden",
            }}>
              {/* Card glow top */}
              <div style={{ position:"absolute",top:-60,right:-60,width:200,height:200,borderRadius:"50%",background:"rgba(16,185,129,0.08)",filter:"blur(40px)",pointerEvents:"none" }}/>

              {/* Card shimmer top edge */}
              <div style={{ position:"absolute",top:0,left:0,right:0,height:1,background:"linear-gradient(90deg,transparent,rgba(16,185,129,0.5),transparent)" }}/>

              {/* Header row */}
              <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:24 }}>
                <div>
                  <div style={{ fontFamily:"'DM Mono'",fontSize:10,color:"#34d399",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:6 }}>
                    Fellowship 2025–26
                  </div>
                  <div style={{ fontFamily:"'Plus Jakarta Sans'",fontWeight:800,fontSize:22,color:"#fff",lineHeight:1.15 }}>
                    Field Research
                  </div>
                  <div style={{ fontFamily:"'Plus Jakarta Sans'",fontWeight:600,fontSize:16,color:"rgba(232,237,245,0.55)" }}>
                    Programme
                  </div>
                </div>
                <div style={{
                  width:52,height:52,borderRadius:14,
                  background:"rgba(16,185,129,0.12)",
                  border:"1px solid rgba(16,185,129,0.25)",
                  display:"flex",alignItems:"center",justifyContent:"center",
                  boxShadow:"0 0 20px rgba(16,185,129,0.15)",
                }}>
                  <span style={{ fontSize:24 }}>🔬</span>
                </div>
              </div>

              {/* Class pills */}
              <div style={{ display:"flex",gap:8,marginBottom:22 }}>
                {[
                  { label:"Class 8",  color:"#10b981" },
                  { label:"Class 10", color:"#fbbf24" },
                  { label:"Class 12", color:"#818cf8" },
                ].map(c=>(
                  <span key={c.label} style={{
                    padding:"7px 14px",borderRadius:100,
                    fontFamily:"'Plus Jakarta Sans'",fontSize:12,fontWeight:700,
                    color:c.color,
                    background:`${c.color}18`,
                    border:`1px solid ${c.color}35`,
                  }}>
                    {c.label}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div style={{ height:1,background:"rgba(255,255,255,0.07)",marginBottom:20 }}/>

              {/* Enrolment progress */}
              <div style={{ marginBottom:6,display:"flex",justifyContent:"space-between" }}>
                <span style={{ fontFamily:"'DM Sans'",fontSize:12,color:"rgba(232,237,245,0.5)" }}>Enrolment progress</span>
                <span style={{ fontFamily:"'DM Mono'",fontSize:12,fontWeight:500,color:"#34d399" }}>78%</span>
              </div>
              <div style={{ height:5,borderRadius:99,background:"rgba(255,255,255,0.07)",overflow:"hidden",marginBottom:20 }}>
                <div style={{
                  height:"100%",width:"78%",borderRadius:99,
                  background:"linear-gradient(90deg,#10b981,#34d399)",
                  boxShadow:"0 0 12px rgba(16,185,129,0.7)",
                }}/>
              </div>

              {/* Mini stat row */}
              <div style={{ display:"flex",gap:10 }}>
                {[
                  { n:"12K+", l:"Students" },
                  { n:"98%",  l:"Completion" },
                  { n:"500+", l:"Projects" },
                ].map(s=>(
                  <div key={s.l} style={{
                    flex:1,padding:"12px 10px",borderRadius:14,textAlign:"center",
                    background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)",
                  }}>
                    <div style={{ fontFamily:"'Plus Jakarta Sans'",fontWeight:800,fontSize:18,color:"#fff" }}>{s.n}</div>
                    <div style={{ fontFamily:"'DM Sans'",fontSize:10,color:"rgba(232,237,245,0.4)",marginTop:2 }}>{s.l}</div>
                  </div>
                ))}
              </div>

              {/* Bottom CTA inside card */}
              <button className="btn-em" style={{ width:"100%",justifyContent:"center",marginTop:20 }}>
                Apply for Fellowship <ArrowRight size={16}/>
              </button>

              {/* Bottom shimmer edge */}
              <div style={{ position:"absolute",bottom:0,left:0,right:0,height:1,background:"linear-gradient(90deg,transparent,rgba(16,185,129,0.3),transparent)" }}/>
            </div>

            {/* Floating badge — seats */}
            <div className="animate-float-y" style={{
              position:"absolute",top:-16,left:-24,
              background:"linear-gradient(135deg,rgba(251,191,36,0.15),rgba(245,158,11,0.1))",
              border:"1px solid rgba(251,191,36,0.25)",
              borderRadius:14,padding:"10px 14px",
              backdropFilter:"blur(12px)",
              boxShadow:"0 8px 32px rgba(0,0,0,0.4)",
              display:"flex",alignItems:"center",gap:8,
              animationDuration:"4s",
            }}>
              <span style={{ fontSize:18 }}>🔥</span>
              <div>
                <div style={{ fontFamily:"'Plus Jakarta Sans'",fontWeight:700,fontSize:13,color:"#fbbf24" }}>Only 4 Seats Left!</div>
                <div style={{ fontFamily:"'DM Sans'",fontSize:11,color:"rgba(232,237,245,0.5)" }}>Limited intake · 2026</div>
              </div>
            </div>

            {/* Floating badge — rating */}
            <div className="animate-float-y" style={{
              position:"absolute",bottom:24,left:-32,
              background:"rgba(13,26,53,0.9)",
              border:"1px solid rgba(255,255,255,0.1)",
              borderRadius:14,padding:"10px 14px",
              backdropFilter:"blur(12px)",
              boxShadow:"0 8px 32px rgba(0,0,0,0.5)",
              display:"flex",alignItems:"center",gap:8,
              animationDuration:"5s",animationDelay:"1s",
            }}>
              <div style={{ display:"flex",gap:2 }}>
                {[1,2,3,4,5].map(i=><Star key={i} size={12} style={{ fill:"#fbbf24",color:"#fbbf24" }}/>)}
              </div>
              <div>
                <div style={{ fontFamily:"'Plus Jakarta Sans'",fontWeight:700,fontSize:13,color:"#fff" }}>4.9 Rating</div>
                <div style={{ fontFamily:"'DM Sans'",fontSize:10,color:"rgba(232,237,245,0.45)" }}>2,400+ reviews</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Stats bar ── */}
      <div style={{
        position:"absolute",bottom:0,left:0,right:0,
        borderTop:"1px solid rgba(255,255,255,0.06)",
        background:"rgba(3,6,15,0.8)",
        backdropFilter:"blur(16px)",
      }}>
        <div style={{ maxWidth:1280,margin:"0 auto",padding:"0 32px",display:"grid",gridTemplateColumns:"repeat(4,1fr)" }}>
          {STATS.map((s,i)=>{
            const Icon = s.icon;
            return (
              <div key={s.label} style={{
                padding:"18px 0",
                display:"flex",alignItems:"center",gap:12,
                borderRight: i<3 ? "1px solid rgba(255,255,255,0.06)" : "none",
                justifyContent:"center",
              }}>
                <div style={{ width:36,height:36,borderRadius:10,background:"rgba(16,185,129,0.1)",border:"1px solid rgba(16,185,129,0.2)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                  <Icon size={16} style={{ color:"#10b981" }}/>
                </div>
                <div>
                  <div style={{ fontFamily:"'Plus Jakarta Sans'",fontWeight:800,fontSize:20,color:"#fff",lineHeight:1 }}>
                    <Counter target={s.val} suffix={s.suf}/>
                  </div>
                  <div style={{ fontFamily:"'DM Sans'",fontSize:11,color:"rgba(232,237,245,0.45)",marginTop:2 }}>{s.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{ position:"absolute",bottom:80,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:6,opacity:0.35,animation:"floatY 2s ease-in-out infinite" }}>
        <ChevronDown size={20} style={{ color:"#10b981" }}/>
      </div>
    </section>
  );
}
