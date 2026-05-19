import React from "react";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const LINKS = {
  Programmes: ["Class 8 Fellowship","Class 10 Fellowship","Extended Track","Research Mentorship"],
  Resources: ["Apply Now","Download Brochure","FAQ","Success Stories"],
  Organisation: ["About IISPPR","Our Mission","Academic Team","Partner Institutions"],
};

export default function Footer() {
  return (
    <footer style={{ background:"#020509",borderTop:"1px solid rgba(255,255,255,0.05)",padding:"64px 0 32px" }}>
      <div style={{ maxWidth:1280,margin:"0 auto",padding:"0 32px" }}>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:48,marginBottom:48 }}>

          {/* Brand */}
          <div style={{ gridColumn:"span 1" }}>
            <div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:16 }}>
              <div style={{ width:36,height:36,borderRadius:10,background:"linear-gradient(135deg,#10b981,#059669)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 16px rgba(16,185,129,0.35)" }}>
                <span style={{ fontFamily:"'Plus Jakarta Sans'",fontWeight:800,color:"#fff",fontSize:12 }}>IP</span>
              </div>
              <div>
                <div style={{ fontFamily:"'Plus Jakarta Sans'",fontWeight:800,fontSize:15,color:"#fff" }}>IISPPR Academy</div>
                <div style={{ fontFamily:"'DM Mono'",fontSize:8,color:"#34d399",letterSpacing:"0.15em",textTransform:"uppercase" }}>Academic Excellence</div>
              </div>
            </div>
            <p style={{ fontFamily:"'DM Sans'",fontSize:13,color:"rgba(232,237,245,0.4)",lineHeight:1.7,marginBottom:20,maxWidth:240 }}>
              Empowering India's next generation of researchers through real-world field fellowship programmes.
            </p>
            <div style={{ display:"flex",flexDirection:"column",gap:8 }}>
              {[
                { icon: Mail,  text:"info@iisppracademy.com" },
                { icon: Phone, text:"+91 98765 43210" },
                { icon: MapPin,text:"New Delhi, India" },
              ].map(({ icon: Icon, text })=>(
                <div key={text} style={{ display:"flex",alignItems:"center",gap:8 }}>
                  <Icon size={13} style={{ color:"#10b981",flexShrink:0 }}/>
                  <span style={{ fontFamily:"'DM Sans'",fontSize:12,color:"rgba(232,237,245,0.4)" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading,items])=>(
            <div key={heading}>
              <div style={{ fontFamily:"'Plus Jakarta Sans'",fontWeight:700,fontSize:13,color:"rgba(232,237,245,0.8)",marginBottom:16,letterSpacing:"0.02em" }}>{heading}</div>
              <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
                {items.map(item=>(
                  <a key={item} href="#" style={{ fontFamily:"'DM Sans'",fontSize:13,color:"rgba(232,237,245,0.4)",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:4,transition:"color 0.2s" }}
                    onMouseEnter={e=>{e.currentTarget.style.color="rgba(232,237,245,0.85)"}}
                    onMouseLeave={e=>{e.currentTarget.style.color="rgba(232,237,245,0.4)"}}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop:"1px solid rgba(255,255,255,0.06)",paddingTop:24,display:"flex",flexWrap:"wrap",justifyContent:"space-between",gap:12,alignItems:"center" }}>
          <span style={{ fontFamily:"'DM Sans'",fontSize:12,color:"rgba(232,237,245,0.3)" }}>
            © {new Date().getFullYear()} IISPPR Academy. All rights reserved.
          </span>
          <div style={{ display:"flex",gap:20 }}>
            {["Privacy Policy","Terms of Use","Refund Policy"].map(l=>(
              <a key={l} href="#" style={{ fontFamily:"'DM Sans'",fontSize:12,color:"rgba(232,237,245,0.3)",textDecoration:"none",transition:"color 0.2s" }}
                onMouseEnter={e=>e.currentTarget.style.color="rgba(232,237,245,0.7)"}
                onMouseLeave={e=>e.currentTarget.style.color="rgba(232,237,245,0.3)"}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
