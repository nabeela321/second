import React, { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const LINKS = ["About", "Faculty", "Curriculum", "Admissions"];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [open, setOpen]           = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "all 0.4s ease",
        background: scrolled ? "rgba(3,6,15,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        padding: scrolled ? "14px 0" : "22px 0",
      }}
    >
      <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 32px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        {/* Logo */}
        <a href="#hero" style={{ display:"flex", alignItems:"center", gap:10, textDecoration:"none" }}>
          <div style={{
            width:40, height:40, borderRadius:12,
            background:"linear-gradient(135deg,#10b981,#059669)",
            display:"flex", alignItems:"center", justifyContent:"center",
            boxShadow:"0 0 20px rgba(16,185,129,0.4)",
          }}>
            <span style={{ fontFamily:"'Plus Jakarta Sans'",fontWeight:800,color:"#fff",fontSize:14 }}>IP</span>
          </div>
          <div>
            <div style={{ fontFamily:"'Plus Jakarta Sans'",fontWeight:800,fontSize:18,color:"#fff",lineHeight:1.1,letterSpacing:"-0.01em" }}>
              IISPPR
            </div>
            <div style={{ fontFamily:"'DM Mono'",fontSize:9,fontWeight:500,color:"#34d399",letterSpacing:"0.15em",textTransform:"uppercase" }}>
              Academy
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <nav style={{ display:"flex", gap:36, listStyle:"none" }} className="hidden md:flex">
          {LINKS.map(l => (
            <a key={l} href="#" style={{ fontFamily:"'DM Sans'",fontSize:14,fontWeight:500,color:"rgba(232,237,245,0.65)",textDecoration:"none",transition:"color 0.2s" }}
              onMouseEnter={e=>e.target.style.color="#fff"}
              onMouseLeave={e=>e.target.style.color="rgba(232,237,245,0.65)"}
            >
              {l}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex" style={{ gap:12, alignItems:"center" }}>
          <button className="btn-outline" style={{ padding:"10px 22px",fontSize:13 }}>Login</button>
          <button className="btn-em" style={{ padding:"10px 22px",fontSize:13 }}>
            <Zap size={14}/> Enquire Now
          </button>
        </div>

        {/* Mobile burger */}
        <button className="md:hidden" onClick={()=>setOpen(!open)}
          style={{ background:"none",border:"none",color:"#fff",cursor:"pointer",padding:4 }}>
          {open ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background:"rgba(3,6,15,0.97)",borderTop:"1px solid rgba(255,255,255,0.07)",padding:"20px 32px 24px" }}>
          {LINKS.map(l=>(
            <div key={l} style={{ padding:"12px 0",borderBottom:"1px solid rgba(255,255,255,0.05)" }}>
              <a href="#" style={{ color:"rgba(232,237,245,0.8)",fontWeight:500,textDecoration:"none",fontFamily:"'DM Sans'" }}>{l}</a>
            </div>
          ))}
          <div style={{ marginTop:20,display:"flex",gap:10 }}>
            <button className="btn-outline" style={{ flex:1,justifyContent:"center",padding:"11px 0",fontSize:13 }}>Login</button>
            <button className="btn-em" style={{ flex:1,justifyContent:"center",padding:"11px 0",fontSize:13 }}>Enquire</button>
          </div>
        </div>
      )}
    </header>
  );
}
