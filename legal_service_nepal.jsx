import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight, Menu, X, Scale, Heart, MapPin, FileText, Landmark, Users } from "lucide-react";

const SERVICES = [
  { icon: Scale, title: "Divorce Proceedings", desc: "Expert guidance through separation, asset division, and child custody with compassion and discretion." },
  { icon: Heart, title: "Court Marriage", desc: "Seamless registration and legal formalization of marriages under Nepalese civil law." },
  { icon: MapPin, title: "Land Acquisition", desc: "Navigate complex property laws, title transfers, and land documentation with precision." },
  { icon: FileText, title: "Contract Drafting", desc: "Legally binding agreements crafted to protect your interests in every transaction." },
  { icon: Landmark, title: "Civil Litigation", desc: "Aggressive courtroom representation backed by decades of Nepalese judicial experience." },
  { icon: Users, title: "Family Law", desc: "Inheritance, guardianship, adoption, and all matters involving family legal rights." },
];

const FAQS = [
  { q: "How long does a court marriage registration take?", a: "Typically 7–15 working days after all documents are submitted. We handle all filings on your behalf." },
  { q: "What documents are needed for land transfer in Nepal?", a: "Lalpurja (ownership certificate), citizenship certificates, tax clearance, and municipality approval. Our team guides you through every step." },
  { q: "Can I get a free initial consultation?", a: "Yes. We offer a complimentary 30-minute consultation to assess your case before any commitment." },
  { q: "How are legal fees structured?", a: "We offer transparent flat-fee packages for standard matters and hourly billing for complex litigation. No hidden costs." },
];

const TESTIMONIALS = [
  { name: "Priya Shrestha", role: "Business Owner, Kathmandu", text: "Legal Service Nepal handled our land acquisition with complete professionalism. Every step was clear and stress-free." },
  { name: "Rajesh Thapa", role: "Civil Engineer, Pokhara", text: "They made the divorce process as smooth as possible during a difficult time. Compassionate and efficient." },
  { name: "Anita Gurung", role: "Teacher, Lalitpur", text: "Court marriage done in two weeks. Exceptional service and genuinely caring staff." },
];

const VIDEO_SRC = "https://v1.pinimg.com/videos/mc/720p/fb/3d/1c/fb3d1c70e4969f2df7555cfe4095c753.mp4";

function NavBar({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = ["Services", "About", "Rates", "Testimonials", "FAQ"];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? "rgba(0,0,0,0.88)" : "transparent",
      backdropFilter: scrolled ? "blur(18px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      transition: "all 0.4s ease",
      padding: "0 1.5rem",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14.4 9.6H22L16.2 14.4L18.6 22L12 17.2L5.4 22L7.8 14.4L2 9.6H9.6L12 2Z" fill="white" />
          </svg>
          <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 17, fontWeight: 600, color: "#fff", letterSpacing: "-0.01em" }}>
            Legal Service Nepal
          </span>
        </div>

        <div className="desktop-nav" style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.65)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "#fff"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.65)"}
            >{l}</a>
          ))}
        </div>

        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <a href="#book"
            style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.55)", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = "#fff"}
            onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.55)"}
          >Book a Consult</a>
          <a href="#book" style={{
            fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, fontWeight: 600,
            color: "#000", background: "#fff", padding: "8px 22px", borderRadius: 999, textDecoration: "none", transition: "opacity 0.2s"
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >Get Started</a>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: "#fff", padding: 4 }}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div style={{ background: "rgba(0,0,0,0.96)", backdropFilter: "blur(20px)", padding: "1rem 1.5rem 1.5rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          {[...links, "Get Started"].map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(" ", "")}`} onClick={() => setMenuOpen(false)}
              style={{ display: "block", padding: "12px 0", fontFamily: "'Instrument Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.75)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
            >{l}</a>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.src = VIDEO_SRC;
    video.play().catch(() => { });
  }, []);

  return (
    <section style={{ position: "relative", width: "100%", minHeight: "100vh", background: "#000", color: "#fff", overflow: "hidden" }}>
      <video ref={videoRef} muted loop playsInline
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.45, zIndex: 0 }} />
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.58)", backdropFilter: "blur(2px)", zIndex: 1 }} />
      <div style={{ position: "absolute", top: "-20%", left: "15%", width: 600, height: 600, background: "rgba(30,58,138,0.16)", filter: "blur(120px)", mixBlendMode: "screen", zIndex: 2, borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-10%", right: "15%", width: 500, height: 500, background: "rgba(55,48,163,0.16)", filter: "blur(120px)", mixBlendMode: "screen", zIndex: 2, borderRadius: "50%", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: 920, margin: "0 auto", padding: "0 1.5rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", paddingTop: "calc(72px + 88px)", paddingBottom: 100 }}>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(26px, 4vw, 48px)", lineHeight: 1.1, color: "#fff", marginBottom: 10, fontStyle: "italic" }}
        >
          When it matters most,
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            fontFamily: "'Instrument Sans', sans-serif", fontWeight: 700,
            fontSize: "clamp(52px, 9vw, 120px)", lineHeight: 0.92, letterSpacing: "-0.04em",
            background: "linear-gradient(to bottom, #ffffff 30%, #ffffff 55%, #b4c0ff 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            marginBottom: 30,
          }}
        >
          you need the right lawyer.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 0.65 }} transition={{ delay: 0.4, duration: 0.6 }}
          style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: "clamp(15px, 2vw, 20px)", lineHeight: 1.65, color: "#fff", maxWidth: 520, marginBottom: 48 }}
        >
          Divorce, land disputes, court marriage — we handle Nepal's toughest legal cases with clarity and care. No jargon. No runaround.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}
          style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center", justifyContent: "center" }}
        >
          <a href="#book"
            style={{ display: "flex", alignItems: "center", paddingLeft: 22, paddingRight: 6, paddingTop: 6, paddingBottom: 6, borderRadius: 999, background: "#fff", textDecoration: "none", transition: "all 0.22s" }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 0 28px rgba(255,255,255,0.22)"; e.currentTarget.style.transform = "scale(1.04)"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "scale(1)"; }}
          >
            <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontWeight: 600, fontSize: 16, color: "#0a0a0a", marginRight: 14 }}>Book Free Consultation</span>
            <span style={{ width: 40, height: 40, borderRadius: "50%", background: "#3054ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <ArrowRight size={18} color="#fff" />
            </span>
          </a>

          <a href="#services"
            style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 20px", borderRadius: 10, color: "rgba(255,255,255,0.65)", textDecoration: "none", fontFamily: "'Instrument Sans', sans-serif", fontSize: 15, fontWeight: 500, transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.background = "rgba(255,255,255,0.07)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.65)"; e.currentTarget.style.background = "transparent"; }}
          >
            See Our Services <ArrowRight size={15} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 1, duration: 0.7 }}
          style={{ marginTop: 64, display: "flex", flexWrap: "wrap", gap: 36, alignItems: "center", justifyContent: "center" }}
        >
          {["500+ Cases Resolved", "20+ Years Combined Experience", "Kathmandu & Pokhara"].map(t => (
            <span key={t} style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", letterSpacing: "0.03em" }}>{t}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" style={{ padding: "100px 1.5rem", background: "#050508" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 11, letterSpacing: "0.18em", color: "rgba(255,255,255,0.28)", textTransform: "uppercase", marginBottom: 14 }}>What We Handle</p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(34px, 5vw, 54px)", color: "#fff", marginBottom: 56, lineHeight: 1.1, maxWidth: 480, fontStyle: "italic" }}>
            Legal services built for every Nepali.
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, overflow: "hidden" }}>
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={i}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5 }}
                style={{ background: "#0a0a0f", padding: "32px 28px", borderRight: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)", transition: "background 0.25s", cursor: "default" }}
                onMouseEnter={e => e.currentTarget.style.background = "#10101a"}
                onMouseLeave={e => e.currentTarget.style.background = "#0a0a0f"}
              >
                <div style={{ width: 42, height: 42, borderRadius: 11, background: "rgba(48,84,255,0.12)", border: "1px solid rgba(48,84,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  <Icon size={18} color="#7090ff" />
                </div>
                <h3 style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 17, fontWeight: 600, color: "#fff", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.72, margin: 0 }}>{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AskLawyer() {
  const [mode, setMode] = useState("ask");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", date: "", note: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true); setAnswer("");
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514", max_tokens: 1000,
          system: "You are a senior legal advisor at Legal Service Nepal. Help clients understand Nepali law — divorce, court marriage, land acquisition, contracts, civil litigation, family law. Clear, empathetic answers in plain language. End by recommending a consultation for case-specific advice. Under 200 words.",
          messages: [{ role: "user", content: question }],
        }),
      });
      const data = await res.json();
      setAnswer(data?.content?.find(b => b.type === "text")?.text || "Unable to get a response. Please try again.");
    } catch { setAnswer("Something went wrong. Please call our office directly."); }
    finally { setLoading(false); }
  };

  const inputStyle = {
    width: "100%", fontFamily: "'Instrument Sans', sans-serif", fontSize: 15, color: "#fff",
    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 11,
    padding: "12px 16px", outline: "none", boxSizing: "border-box", transition: "border-color 0.2s",
  };

  return (
    <section id="book" style={{ padding: "100px 1.5rem", background: "#000", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)", width: 700, height: 350, background: "rgba(48,84,255,0.07)", filter: "blur(100px)", borderRadius: "50%", pointerEvents: "none" }} />

      <div style={{ maxWidth: 720, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 11, letterSpacing: "0.18em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", marginBottom: 14 }}>Expert Guidance</p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(34px, 5vw, 52px)", color: "#fff", marginBottom: 36, lineHeight: 1.1, fontStyle: "italic" }}>
            Speak to a lawyer, today.
          </h2>
        </motion.div>

        <div style={{ display: "inline-flex", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 999, padding: 4, marginBottom: 36 }}>
          {["ask", "book"].map(m => (
            <button key={m} onClick={() => setMode(m)} style={{
              fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, fontWeight: 500,
              padding: "8px 28px", borderRadius: 999, border: "none", cursor: "pointer", transition: "all 0.2s",
              background: mode === m ? "#fff" : "transparent",
              color: mode === m ? "#000" : "rgba(255,255,255,0.45)",
            }}>
              {m === "ask" ? "Ask a Doubt" : "Book Appointment"}
            </button>
          ))}
        </div>

        {mode === "ask" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            <textarea value={question} onChange={e => setQuestion(e.target.value)}
              placeholder="e.g. What documents do I need for a court marriage in Nepal?"
              rows={4}
              style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
              onFocus={e => e.target.style.borderColor = "rgba(48,84,255,0.45)"}
              onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.09)"}
            />
            <button onClick={handleAsk} disabled={loading}
              style={{ marginTop: 12, display: "flex", alignItems: "center", paddingLeft: 20, paddingRight: 6, paddingTop: 6, paddingBottom: 6, borderRadius: 999, background: "#fff", border: "none", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1, transition: "all 0.2s" }}
            >
              <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontWeight: 600, fontSize: 15, color: "#000", marginRight: 14 }}>
                {loading ? "Consulting advisor..." : "Get Legal Guidance"}
              </span>
              <span style={{ width: 38, height: 38, borderRadius: "50%", background: "#3054ff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ArrowRight size={16} color="#fff" />
              </span>
            </button>

            {answer && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}
                style={{ marginTop: 28, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "24px" }}>
                <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 11, letterSpacing: "0.15em", color: "rgba(255,255,255,0.28)", textTransform: "uppercase", marginBottom: 12 }}>Legal Advisor Response</p>
                <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.72)", lineHeight: 1.75, margin: 0, whiteSpace: "pre-wrap" }}>{answer}</p>
              </motion.div>
            )}
          </motion.div>
        )}

        {mode === "book" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            {submitted ? (
              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, padding: "52px 32px", textAlign: "center" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(48,84,255,0.14)", border: "1px solid rgba(48,84,255,0.28)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 22 }}>✓</div>
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 28, color: "#fff", marginBottom: 8 }}>Appointment Requested</h3>
                <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.45)" }}>Our team will confirm your slot within 2 working hours.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", date: "", note: "" }); }}
                  style={{ marginTop: 24, fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.45)", background: "transparent", border: "1px solid rgba(255,255,255,0.1)", padding: "8px 22px", borderRadius: 999, cursor: "pointer" }}>
                  Book another
                </button>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ display: "grid", gap: 14 }}>
                {[
                  { key: "name", label: "Full Name", type: "text", placeholder: "Raju Shrestha" },
                  { key: "email", label: "Email", type: "email", placeholder: "raju@email.com" },
                  { key: "phone", label: "Phone", type: "tel", placeholder: "+977-98XXXXXXXX" },
                ].map(({ key, label, type, placeholder }) => (
                  <div key={key}>
                    <label style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.32)", letterSpacing: "0.05em", display: "block", marginBottom: 6 }}>{label}</label>
                    <input type={type} required placeholder={placeholder} value={form[key]} onChange={e => setForm({ ...form, [key]: e.target.value })}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = "rgba(48,84,255,0.45)"}
                      onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.09)"}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.32)", letterSpacing: "0.05em", display: "block", marginBottom: 6 }}>Service Required</label>
                  <select required value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                    style={{ ...inputStyle, color: form.service ? "#fff" : "rgba(255,255,255,0.28)", background: "#0d0d14" }}>
                    <option value="">Select a service</option>
                    {SERVICES.map(s => <option key={s.title} value={s.title} style={{ background: "#0d0d14" }}>{s.title}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.32)", letterSpacing: "0.05em", display: "block", marginBottom: 6 }}>Preferred Date</label>
                  <input type="date" required value={form.date} onChange={e => setForm({ ...form, date: e.target.value })}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "rgba(48,84,255,0.45)"}
                    onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.09)"}
                  />
                </div>
                <div>
                  <label style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.32)", letterSpacing: "0.05em", display: "block", marginBottom: 6 }}>Brief Note (optional)</label>
                  <textarea rows={3} value={form.note} placeholder="Describe your situation briefly..." onChange={e => setForm({ ...form, note: e.target.value })}
                    style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
                    onFocus={e => e.target.style.borderColor = "rgba(48,84,255,0.45)"}
                    onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.09)"}
                  />
                </div>
                <button type="submit"
                  style={{ display: "flex", alignItems: "center", paddingLeft: 20, paddingRight: 6, paddingTop: 6, paddingBottom: 6, borderRadius: 999, background: "#fff", border: "none", cursor: "pointer", width: "fit-content", transition: "all 0.22s" }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 0 28px rgba(255,255,255,0.2)"; e.currentTarget.style.transform = "scale(1.03)"; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "scale(1)"; }}
                >
                  <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontWeight: 600, fontSize: 15, color: "#000", marginRight: 14 }}>Confirm Appointment</span>
                  <span style={{ width: 38, height: 38, borderRadius: "50%", background: "#3054ff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <ArrowRight size={16} color="#fff" />
                  </span>
                </button>
              </form>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "100px 1.5rem", background: "#050508" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 11, letterSpacing: "0.18em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", marginBottom: 14 }}>Client Stories</p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(34px, 5vw, 52px)", color: "#fff", marginBottom: 52, lineHeight: 1.1, fontStyle: "italic" }}>
            Trusted across Nepal.
          </h2>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 18 }}>
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 18, padding: "28px 24px" }}
            >
              <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.65, marginBottom: 24, fontStyle: "italic" }}>"{t.text}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 38, height: 38, borderRadius: "50%", background: "rgba(48,84,255,0.18)", border: "1px solid rgba(48,84,255,0.28)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, color: "#7090ff", fontWeight: 600 }}>{t.name.split(" ").map(n => n[0]).join("")}</span>
                </div>
                <div>
                  <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, fontWeight: 600, color: "#fff", margin: 0 }}>{t.name}</p>
                  <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.32)", margin: 0 }}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" style={{ padding: "100px 1.5rem", background: "#000" }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 11, letterSpacing: "0.18em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", marginBottom: 14 }}>FAQ</p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(34px, 5vw, 52px)", color: "#fff", marginBottom: 48, lineHeight: 1.1, fontStyle: "italic" }}>Common questions.</h2>
        </motion.div>
        {FAQS.map((f, i) => (
          <div key={i} style={{ borderTop: "1px solid rgba(255,255,255,0.07)", ...(i === FAQS.length - 1 && { borderBottom: "1px solid rgba(255,255,255,0.07)" }) }}>
            <button onClick={() => setOpen(open === i ? null : i)}
              style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: 16 }}>
              <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 15, fontWeight: 500, color: "#fff", lineHeight: 1.4 }}>{f.q}</span>
              <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 22, lineHeight: 1, flexShrink: 0, transition: "transform 0.2s", transform: open === i ? "rotate(45deg)" : "rotate(0)" }}>+</span>
            </button>
            {open === i && (
              <motion.p initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22 }}
                style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.42)", lineHeight: 1.75, paddingBottom: 20, margin: 0 }}>
                {f.a}
              </motion.p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#050508", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "60px 1.5rem 40px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 48, justifyContent: "space-between", marginBottom: 56 }}>
          <div style={{ maxWidth: 260 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2L14.4 9.6H22L16.2 14.4L18.6 22L12 17.2L5.4 22L7.8 14.4L2 9.6H9.6L12 2Z" fill="white" /></svg>
              <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 16, fontWeight: 600, color: "#fff" }}>Legal Service Nepal</span>
            </div>
            <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.3)", lineHeight: 1.7, margin: 0 }}>Legal representation for every Nepali citizen. Offices in Kathmandu & Pokhara.</p>
          </div>
          <div>
            <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 11, letterSpacing: "0.15em", color: "rgba(255,255,255,0.2)", textTransform: "uppercase", marginBottom: 16 }}>Services</p>
            {SERVICES.map(s => <p key={s.title} style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.38)", marginBottom: 8 }}>{s.title}</p>)}
          </div>
          <div>
            <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 11, letterSpacing: "0.15em", color: "rgba(255,255,255,0.2)", textTransform: "uppercase", marginBottom: 16 }}>Contact</p>
            {["+977-1-4XXXXXX", "info@legalservicenepal.com", "New Baneshwor, Kathmandu"].map(c => (
              <p key={c} style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.38)", marginBottom: 8 }}>{c}</p>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24 }}>
          <p style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.16)", margin: 0, textAlign: "center" }}>© 2025 Legal Service Nepal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Instrument+Serif:ital@0;1&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #000; font-family: 'Instrument Sans', sans-serif; color: #fff; -webkit-font-smoothing: antialiased; }
        input, textarea, select { font-family: 'Instrument Sans', sans-serif; }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.2) !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <Services />
      <AskLawyer />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}
