// import { useNavigate } from "react-router-dom";

// const s = {
//   page: {
//     minHeight: "100vh",
//     background: "#0a0a0f",
//     fontFamily: "'Courier New', monospace",
//     color: "#ffffff",
//   },
//   nav: {
//     background: "#111118",
//     borderBottom: "1px solid #2a2a3d",
//     padding: "0 32px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     height: "60px",
//   },
//   navBrand: {
//     background: "#6366f1",
//     color: "#fff",
//     fontSize: "10px",
//     fontWeight: "bold",
//     letterSpacing: "3px",
//     padding: "4px 10px",
//     borderRadius: "2px",
//     textTransform: "uppercase",
//   },
//   navRight: {
//     display: "flex",
//     gap: "12px",
//     alignItems: "center",
//   },
//   navBtn: {
//     background: "transparent",
//     border: "1px solid #2a2a3d",
//     color: "#888899",
//     padding: "8px 16px",
//     borderRadius: "3px",
//     cursor: "pointer",
//     fontSize: "11px",
//     letterSpacing: "2px",
//     textTransform: "uppercase",
//     fontFamily: "'Courier New', monospace",
//   },
//   navBtnPrimary: {
//     background: "#6366f1",
//     border: "none",
//     color: "#fff",
//     padding: "8px 16px",
//     borderRadius: "3px",
//     cursor: "pointer",
//     fontSize: "11px",
//     letterSpacing: "2px",
//     textTransform: "uppercase",
//     fontFamily: "'Courier New', monospace",
//     fontWeight: "bold",
//   },
//   hero: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     minHeight: "calc(100vh - 60px)",
//     textAlign: "center",
//     padding: "40px 32px",
//   },
//   tag: {
//     display: "inline-block",
//     background: "#1a1a2e",
//     border: "1px solid #2a2a3d",
//     color: "#6366f1",
//     fontSize: "11px",
//     letterSpacing: "3px",
//     padding: "6px 16px",
//     borderRadius: "20px",
//     marginBottom: "32px",
//     textTransform: "uppercase",
//   },
//   title: {
//     fontSize: "64px",
//     fontWeight: "bold",
//     margin: "0 0 16px 0",
//     lineHeight: 1.1,
//     letterSpacing: "-2px",
//   },
//   titleAccent: {
//     color: "#6366f1",
//   },
//   subtitle: {
//     color: "#555570",
//     fontSize: "16px",
//     maxWidth: "480px",
//     lineHeight: 1.6,
//     margin: "0 0 48px 0",
//   },
//   ctaRow: {
//     display: "flex",
//     gap: "16px",
//     justifyContent: "center",
//     flexWrap: "wrap",
//   },
//   ctaPrimary: {
//     background: "#6366f1",
//     border: "none",
//     color: "#fff",
//     padding: "16px 32px",
//     borderRadius: "3px",
//     cursor: "pointer",
//     fontSize: "12px",
//     letterSpacing: "3px",
//     textTransform: "uppercase",
//     fontFamily: "'Courier New', monospace",
//     fontWeight: "bold",
//   },
//   ctaSecondary: {
//     background: "transparent",
//     border: "1px solid #2a2a3d",
//     color: "#888899",
//     padding: "16px 32px",
//     borderRadius: "3px",
//     cursor: "pointer",
//     fontSize: "12px",
//     letterSpacing: "3px",
//     textTransform: "uppercase",
//     fontFamily: "'Courier New', monospace",
//   },
//   featuresRow: {
//     display: "grid",
//     gridTemplateColumns: "repeat(3, 1fr)",
//     gap: "16px",
//     maxWidth: "700px",
//     margin: "64px auto 0",
//   },
//   featureCard: {
//     background: "#111118",
//     border: "1px solid #2a2a3d",
//     borderRadius: "4px",
//     padding: "24px",
//     textAlign: "left",
//   },
//   featureIcon: {
//     fontSize: "24px",
//     marginBottom: "12px",
//   },
//   featureTitle: {
//     color: "#ffffff",
//     fontSize: "13px",
//     fontWeight: "bold",
//     marginBottom: "8px",
//     letterSpacing: "1px",
//   },
//   featureDesc: {
//     color: "#555570",
//     fontSize: "12px",
//     lineHeight: 1.6,
//   },
// };


// export default function Landing() {
//   const navigate = useNavigate();

//   return (
//     <div style={s.page}>
//       <nav style={s.nav}>
//         <div style={s.navBrand}>Patch Notes</div>
//         <div style={s.navRight}>
//           <button style={s.navBtn} onClick={() => navigate("/login")}>Login</button>
//           <button style={s.navBtnPrimary} onClick={() => navigate("/register")}>Register</button>
//         </div>
//       </nav>

//       <div style={s.hero}>
//         <div style={s.tag}>🎮 Gaming Social Platform</div>
//         <h1 style={s.title}>
//           Share Your<br />
//           <span style={s.titleAccent}>Patch Notes</span>
//         </h1>
//         <p style={s.subtitle}>
//           A lightweight platform for gamers and developers to share game updates,
//           patch notes, and connect with the community.
//         </p>
//         <div style={s.ctaRow}>
//           <button style={s.ctaPrimary} onClick={() => navigate("/register")}>
//             Get Started
//           </button>
//           <button style={s.ctaSecondary} onClick={() => navigate("/login")}>
//             Sign In
//           </button>
//         </div>

//         <div style={s.featuresRow}>
//           <div style={s.featureCard}>
//             <div style={s.featureIcon}>📋</div>
//             <div style={s.featureTitle}>Patch Notes</div>
//             <div style={s.featureDesc}>Post and share game updates with the community.</div>
//           </div>
//           <div style={s.featureCard}>
//             <div style={s.featureIcon}>💬</div>
//             <div style={s.featureTitle}>Messaging</div>
//             <div style={s.featureDesc}>Direct message other gamers and developers.</div>
//           </div>
//           <div style={s.featureCard}>
//             <div style={s.featureIcon}>👤</div>
//             <div style={s.featureTitle}>Profiles</div>
//             <div style={s.featureDesc}>Manage your gamer profile and bio.</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";

const s = {
  page: {
    minHeight: "100vh",
    background: "#000000",
    fontFamily: "'Poppins', sans-serif",
    color: "#ffffff",
  },
  nav: {
    background: "#000000",
    borderBottom: "1px solid #1a1a1a",
    padding: "0 32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "56px",
  },
  logo: {
    color: "#ffffff",
    fontSize: "20px",
    fontWeight: "900",
    letterSpacing: "1px",
    cursor: "pointer",
    background: "none",
    border: "none",
    fontFamily: "'Poppins', sans-serif",
  },
  navRight: { display: "flex", gap: "12px", alignItems: "center" },
  navBtn: {
    background: "transparent",
    border: "1px solid #1a1a1a",
    color: "#888888",
    padding: "8px 20px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "13px",
    fontFamily: "'Poppins', sans-serif",
    transition: "all 0.15s",
  },
  navBtnPrimary: {
    background: "#59000a",
    border: "none",
    color: "#fff",
    padding: "8px 20px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "13px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "700",
  },
  hero: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "calc(100vh - 56px)",
    textAlign: "center",
    padding: "40px 32px",
  },
  tag: {
    display: "inline-block",
    background: "#180008 ",
    border: "1px solid #ff3e3e22",
    color: "#59000a",
    fontSize: "11px",
    letterSpacing: "3px",
    padding: "6px 16px",
    borderRadius: "20px",
    marginBottom: "28px",
    textTransform: "uppercase",
    fontFamily: "'Poppins', sans-serif",
  },
  title: {
    fontSize: "56px",
    fontWeight: "900",
    margin: "0 0 16px 0",
    lineHeight: 1.1,
    letterSpacing: "-1px",
    fontFamily: "'Poppins', sans-serif",
  },
  subtitle: {
    color: "#555555",
    fontSize: "16px",
    maxWidth: "460px",
    lineHeight: 1.6,
    margin: "0 0 40px 0",
    fontFamily: "'Poppins', sans-serif",
  },
  ctaRow: {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  ctaPrimary: {
    background: "#59000a",
    border: "none",
    color: "#fff",
    padding: "14px 32px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "14px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "700",
    transition: "opacity 0.15s",
  },
  ctaSecondary: {
    background: "transparent",
    border: "1px solid #1a1a1a",
    color: "#888888",
    padding: "14px 32px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "14px",
    fontFamily: "'Poppins', sans-serif",
  },
  featuresRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    maxWidth: "680px",
    margin: "60px auto 0",
  },
  featureCard: {
    background: "#0a0a0a",
    border: "1px solid #1a1a1a",
    borderRadius: "12px",
    padding: "24px",
    textAlign: "left",
  },
  featureIcon: { fontSize: "24px", marginBottom: "12px" },
  featureTitle: {
    color: "#ffffff",
    fontSize: "13px",
    fontWeight: "600",
    marginBottom: "8px",
    fontFamily: "'Poppins', sans-serif",
  },
  featureDesc: {
    color: "#444444",
    fontSize: "12px",
    lineHeight: 1.6,
    fontFamily: "'Poppins', sans-serif",
  },
};

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div style={s.page}>
      <nav style={s.nav}>
        <button style={s.logo} onClick={() => navigate("/")}>patchnotes</button>
        <div style={s.navRight}>
          <button
            style={s.navBtn}
            onClick={() => navigate("/login")}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#59000a"; e.currentTarget.style.color = "#ffffff"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#1a1a1a"; e.currentTarget.style.color = "#888888"; }}
          >
            Login
          </button>
          <button style={s.navBtnPrimary} onClick={() => navigate("/register")}>
            Register
          </button>
        </div>
      </nav>

      <div style={s.hero}>
        <div style={s.tag}>🎮 Gaming Social Platform</div>
        <h1 style={s.title}>Share Your<br />Patch Notes</h1>
        <p style={s.subtitle}>
          A community platform for gamers to share updates, connect with allies, and build gaming communities.
        </p>
        <div style={s.ctaRow}>
          <button style={s.ctaPrimary} onClick={() => navigate("/register")}>
            Get Started
          </button>
          <button style={s.ctaSecondary} onClick={() => navigate("/login")}>
            Sign In
          </button>
        </div>

        <div style={s.featuresRow}>
          <div style={s.featureCard}>
            <div style={s.featureIcon}>📋</div>
            <div style={s.featureTitle}>Patch Notes</div>
            <div style={s.featureDesc}>Post and share game updates with your community.</div>
          </div>
          <div style={s.featureCard}>
            <div style={s.featureIcon}>💬</div>
            <div style={s.featureTitle}>Signal</div>
            <div style={s.featureDesc}>Direct message your gaming allies instantly.</div>
          </div>
          <div style={s.featureCard}>
            <div style={s.featureIcon}>🛡️</div>
            <div style={s.featureTitle}>Patches</div>
            <div style={s.featureDesc}>Build and join gaming communities around your favorite games.</div>
          </div>
        </div>
      </div>
    </div>
  );
}