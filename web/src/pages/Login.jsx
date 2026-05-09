// import { useState } from "react";
// import api from "../api/axios";
// import { useNavigate, Link } from "react-router-dom";

// const styles = {
//   page: {
//     minHeight: "100vh",
//     background: "#0a0a0f",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontFamily: "'Courier New', monospace",
//   },
//   card: {
//     background: "#111118",
//     border: "1px solid #2a2a3d",
//     borderRadius: "4px",
//     padding: "48px",
//     width: "100%",
//     maxWidth: "420px",
//     boxShadow: "0 0 40px rgba(99, 102, 241, 0.1)",
//   },
//   badge: {
//     display: "inline-block",
//     background: "#6366f1",
//     color: "#fff",
//     fontSize: "10px",
//     fontWeight: "bold",
//     letterSpacing: "3px",
//     padding: "4px 10px",
//     borderRadius: "2px",
//     marginBottom: "16px",
//     textTransform: "uppercase",
//   },
//   title: {
//     color: "#ffffff",
//     fontSize: "28px",
//     fontWeight: "bold",
//     margin: "0 0 6px 0",
//     letterSpacing: "-0.5px",
//   },
//   subtitle: {
//     color: "#555570",
//     fontSize: "13px",
//     margin: "0 0 32px 0",
//   },
//   label: {
//     display: "block",
//     color: "#888899",
//     fontSize: "11px",
//     letterSpacing: "2px",
//     textTransform: "uppercase",
//     marginBottom: "8px",
//   },
//   input: {
//     width: "100%",
//     background: "#0d0d14",
//     border: "1px solid #2a2a3d",
//     borderRadius: "3px",
//     padding: "12px 14px",
//     color: "#ffffff",
//     fontSize: "14px",
//     fontFamily: "'Courier New', monospace",
//     marginBottom: "20px",
//     boxSizing: "border-box",
//     outline: "none",
//   },
//   button: {
//     width: "100%",
//     background: "#6366f1",
//     color: "#ffffff",
//     border: "none",
//     borderRadius: "3px",
//     padding: "14px",
//     fontSize: "13px",
//     fontWeight: "bold",
//     letterSpacing: "2px",
//     textTransform: "uppercase",
//     cursor: "pointer",
//     fontFamily: "'Courier New', monospace",
//     marginTop: "4px",
//   },
//   error: {
//     background: "#2a0d0d",
//     border: "1px solid #5a1a1a",
//     color: "#ff6b6b",
//     padding: "10px 14px",
//     borderRadius: "3px",
//     fontSize: "13px",
//     marginBottom: "20px",
//   },
//   footer: {
//     textAlign: "center",
//     marginTop: "24px",
//     color: "#555570",
//     fontSize: "13px",
//   },
//   link: { color: "#6366f1", textDecoration: "none" },
// };

// export default function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async () => {
//     try {
//       const res = await api.post("/auth/login", form);
//       localStorage.setItem("token", res.data.token);
//       navigate("/home");
//     } catch {
//       setError("Invalid email or password.");
//     }
//   };

//   return (
//     <div style={styles.page}>
//       <div style={styles.card}>
//         <div style={styles.badge}>Patch Notes</div>
//         <h1 style={styles.title}>Welcome Back</h1>
//         <p style={styles.subtitle}>Sign in to your account</p>
//         {error && <div style={styles.error}>{error}</div>}
//         <label style={styles.label}>Email</label>
//         <input style={styles.input} placeholder="you@email.com"
//           onChange={e => setForm({...form, email: e.target.value})} />
//         <label style={styles.label}>Password</label>
//         <input style={styles.input} type="password" placeholder="••••••••"
//           onChange={e => setForm({...form, password: e.target.value})} />
//         <button style={styles.button} onClick={handleSubmit}>Login</button>
//         <div style={styles.footer}>
//           No account?{" "}
//           <Link to="/register" style={styles.link}>Register</Link>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";
 
const s = {
  page: {
    minHeight: "100vh",
    background: "#000000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-poppins)",
    padding: "40px 20px",
  },
  card: {
    background: "#0a0a0a",
    border: "1px solid #1a1a1a",
    borderRadius: "12px",
    padding: "48px",
    width: "100%",
    maxWidth: "420px",
  },
  badge: {
    display: "inline-block",
    background: "#ff3e3e",
    color: "#fff",
    fontSize: "10px",
    fontWeight: "700",
    letterSpacing: "3px",
    padding: "4px 10px",
    borderRadius: "4px",
    marginBottom: "20px",
    textTransform: "uppercase",
    fontFamily: "var(--font-poppins)",
  },
  title: {
    color: "#ffffff",
    fontSize: "28px",
    fontWeight: "700",
    margin: "0 0 6px 0",
    fontFamily: "var(--font-poppins)",
  },
  subtitle: {
    color: "#444444",
    fontSize: "13px",
    margin: "0 0 32px 0",
    fontFamily: "var(--font-poppins)",
  },
  label: {
    display: "block",
    color: "#555555",
    fontSize: "11px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    marginBottom: "8px",
    fontWeight: "600",
    fontFamily: "var(--font-poppins)",
  },
  input: {
    width: "100%",
    background: "#000000",
    border: "1px solid #1a1a1a",
    borderRadius: "8px",
    padding: "12px 14px",
    color: "#ffffff",
    fontSize: "14px",
    fontFamily: "var(--font-poppins)",
    marginBottom: "20px",
    boxSizing: "border-box",
    outline: "none",
    transition: "border-color 0.2s",
  },
  button: {
    width: "100%",
    background: "#ff3e3e",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    padding: "14px",
    fontSize: "13px",
    fontWeight: "700",
    letterSpacing: "1px",
    textTransform: "uppercase",
    cursor: "pointer",
    fontFamily: "var(--font-poppins)",
    marginTop: "4px",
    transition: "background 0.2s",
  },
  error: {
    background: "#1a0000",
    border: "1px solid #3a0000",
    color: "#ff6b6b",
    padding: "10px 14px",
    borderRadius: "8px",
    fontSize: "13px",
    marginBottom: "20px",
    fontFamily: "var(--font-poppins)",
  },
  footer: {
    textAlign: "center",
    marginTop: "24px",
    color: "#444444",
    fontSize: "13px",
    fontFamily: "var(--font-poppins)",
  },
  link: {
    color: "#ff3e3e",
    textDecoration: "none",
    fontWeight: "600",
  },
  divider: {
    border: "none",
    borderTop: "1px solid #1a1a1a",
    margin: "24px 0",
  },
};
 
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
 
  const handleSubmit = async () => {
    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/home");
    } catch (err) {
      const msg =
        err.response?.data?.error ||
        err.response?.data?.message ||
        "Invalid email or password.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };
 
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };
 
  return (
    <div style={s.page}>
      <div style={s.card}>
        <div style={s.badge}>Patch Notes</div>
        <h1 style={s.title}>Welcome back</h1>
        <p style={s.subtitle}>Sign in to your account to continue</p>
 
        {error && <div style={s.error}>{error}</div>}
 
        <label style={s.label}>Email</label>
        <input
          style={s.input}
          placeholder="you@email.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
        />
 
        <label style={s.label}>Password</label>
        <input
          style={s.input}
          placeholder="••••••••"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
        />
 
        <button
          style={{ ...s.button, opacity: loading ? 0.7 : 1 }}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
 
        <hr style={s.divider} />
 
        <div style={s.footer}>
          Don't have an account?{" "}
          <Link to="/register" style={s.link}>
            Create one
          </Link>
        </div>
      </div>
    </div>
  );
}