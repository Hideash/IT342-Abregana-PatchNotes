// import { useState } from "react";
// import api from "../api/axios";
// import { useNavigate, Link } from "react-router-dom";
 
// const s = {
//   page: {
//     minHeight: "100vh",
//     background: "#000000",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontFamily: "var(--font-poppins)",
//     padding: "40px 20px",
//   },
//   card: {
//     background: "#0a0a0a",
//     border: "1px solid #1a1a1a",
//     borderRadius: "12px",
//     padding: "48px",
//     width: "100%",
//     maxWidth: "420px",
//   },
//   badge: {
//     display: "inline-block",
//     background: "#ff3e3e",
//     color: "#fff",
//     fontSize: "10px",
//     fontWeight: "700",
//     letterSpacing: "3px",
//     padding: "4px 10px",
//     borderRadius: "4px",
//     marginBottom: "20px",
//     textTransform: "uppercase",
//     fontFamily: "var(--font-poppins)",
//   },
//   title: {
//     color: "#ffffff",
//     fontSize: "28px",
//     fontWeight: "700",
//     margin: "0 0 6px 0",
//     fontFamily: "var(--font-poppins)",
//   },
//   subtitle: {
//     color: "#444444",
//     fontSize: "13px",
//     margin: "0 0 32px 0",
//     fontFamily: "var(--font-poppins)",
//   },
//   label: {
//     display: "block",
//     color: "#555555",
//     fontSize: "11px",
//     letterSpacing: "1.5px",
//     textTransform: "uppercase",
//     marginBottom: "8px",
//     fontWeight: "600",
//     fontFamily: "var(--font-poppins)",
//   },
//   input: {
//     width: "100%",
//     background: "#000000",
//     border: "1px solid #1a1a1a",
//     borderRadius: "8px",
//     padding: "12px 14px",
//     color: "#ffffff",
//     fontSize: "14px",
//     fontFamily: "var(--font-poppins)",
//     marginBottom: "20px",
//     boxSizing: "border-box",
//     outline: "none",
//     transition: "border-color 0.2s",
//   },
//   button: {
//     width: "100%",
//     background: "#ff3e3e",
//     color: "#ffffff",
//     border: "none",
//     borderRadius: "8px",
//     padding: "14px",
//     fontSize: "13px",
//     fontWeight: "700",
//     letterSpacing: "1px",
//     textTransform: "uppercase",
//     cursor: "pointer",
//     fontFamily: "var(--font-poppins)",
//     marginTop: "4px",
//     transition: "background 0.2s",
//   },
//   error: {
//     background: "#1a0000",
//     border: "1px solid #3a0000",
//     color: "#ff6b6b",
//     padding: "10px 14px",
//     borderRadius: "8px",
//     fontSize: "13px",
//     marginBottom: "20px",
//     fontFamily: "var(--font-poppins)",
//   },
//   footer: {
//     textAlign: "center",
//     marginTop: "24px",
//     color: "#444444",
//     fontSize: "13px",
//     fontFamily: "var(--font-poppins)",
//   },
//   link: {
//     color: "#ff3e3e",
//     textDecoration: "none",
//     fontWeight: "600",
//   },
//   divider: {
//     border: "none",
//     borderTop: "1px solid #1a1a1a",
//     margin: "24px 0",
//   },
// };
 
// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
 
//   const handleSubmit = async () => {
//     if (!email.trim() || !password.trim()) {
//       setError("Please enter your email and password.");
//       return;
//     }
//     setLoading(true);
//     setError("");
//     try {
//       const res = await api.post("/auth/login", { email, password });
//       localStorage.setItem("token", res.data.token);
//       navigate("/home");
//     } catch (err) {
//       const msg =
//         err.response?.data?.error ||
//         err.response?.data?.message ||
//         "Invalid email or password.";
//       setError(msg);
//     } finally {
//       setLoading(false);
//     }
//   };
 
//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") handleSubmit();
//   };
 
//   return (
//     <div style={s.page}>
//       <div style={s.card}>
//         <div style={s.badge}>Patch Notes</div>
//         <h1 style={s.title}>Welcome back</h1>
//         <p style={s.subtitle}>Sign in to your account to continue</p>
 
//         {error && <div style={s.error}>{error}</div>}
 
//         <label style={s.label}>Email</label>
//         <input
//           style={s.input}
//           placeholder="you@email.com"
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           onKeyDown={handleKeyDown}
//         />
 
//         <label style={s.label}>Password</label>
//         <input
//           style={s.input}
//           placeholder="••••••••"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           onKeyDown={handleKeyDown}
//         />
 
//         <button
//           style={{ ...s.button, opacity: loading ? 0.7 : 1 }}
//           onClick={handleSubmit}
//           disabled={loading}
//         >
//           {loading ? "Signing in..." : "Sign In"}
//         </button>
 
//         <hr style={s.divider} />
 
//         <div style={s.footer}>
//           Don't have an account?{" "}
//           <Link to="/register" style={s.link}>
//             Create one
//           </Link>
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
    fontFamily: "'Poppins', sans-serif",
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
  logo: {
    color: "#ffffff",
    fontSize: "20px",
    fontWeight: "900",
    letterSpacing: "1px",
    marginBottom: "32px",
    display: "block",
    cursor: "pointer",
    background: "none",
    border: "none",
    fontFamily: "'Poppins', sans-serif",
    padding: 0,
  },
  title: {
    color: "#ffffff",
    fontSize: "22px",
    fontWeight: "700",
    margin: "0 0 4px 0",
    fontFamily: "'Poppins', sans-serif",
  },
  subtitle: {
    color: "#555555",
    fontSize: "13px",
    margin: "0 0 28px 0",
    fontFamily: "'Poppins', sans-serif",
  },
  label: {
    display: "block",
    color: "#444444",
    fontSize: "11px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    marginBottom: "8px",
    fontWeight: "600",
    fontFamily: "'Poppins', sans-serif",
  },
  input: {
    width: "100%",
    background: "#111111",
    border: "1px solid #1a1a1a",
    borderRadius: "8px",
    padding: "12px 16px",
    color: "#ffffff",
    fontSize: "14px",
    fontFamily: "'Poppins', sans-serif",
    marginBottom: "20px",
    boxSizing: "border-box",
    outline: "none",
  },
  button: {
    width: "100%",
    background: "#59000a",
    color: "#ffffff",
    border: "none",
    borderRadius: "20px",
    padding: "14px",
    fontSize: "14px",
    fontWeight: "700",
    cursor: "pointer",
    fontFamily: "'Poppins', sans-serif",
    marginTop: "4px",
    transition: "opacity 0.15s",
  },


  error: {
    background: "#180008",
    border: "1px solid #ff3e3e44",
    color: "#ff6b6b",
    padding: "10px 14px",
    borderRadius: "8px",
    fontSize: "13px",
    marginBottom: "20px",
    fontFamily: "'Poppins', sans-serif",
  },
  footer: {
    textAlign: "center",
    marginTop: "24px",
    color: "#555555",
    fontSize: "13px",
    fontFamily: "'Poppins', sans-serif",
  },
  link: { color: "#59000a", textDecoration: "none" },
};

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await api.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      navigate("/home");
    } catch (err) {
      setError(err.response?.data?.error || err.response?.data?.message || "Invalid email or password.");
    }
  };

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  return (
    <div style={s.page}>
      <div style={s.card}>
        <button style={s.logo} onClick={() => navigate("/")}>patchnotes</button>
        <h1 style={s.title}>Welcome back</h1>
        <p style={s.subtitle}>Login to your account</p>
        {error && <div style={s.error}>{error}</div>}
        <label style={s.label}>Email</label>
        <input
          style={s.input}
          placeholder="you@email.com"
          onChange={set("email")}
          onKeyDown={(e) => { if (e.key === "Enter") handleSubmit(); }}
        />
        <label style={s.label}>Password</label>
        <input
          style={s.input}
          type="password"
          placeholder="••••••••"
          onChange={set("password")}
          onKeyDown={(e) => { if (e.key === "Enter") handleSubmit(); }}
        />
        <button
          style={s.button}
          onClick={handleSubmit}
          onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
        >
          Login
        </button>

        <div style={{ textAlign: "center", margin: "16px 0", color: "#333333", fontSize: "12px" }}>or</div>
        <button
          style={{
            width: "100%",
            background: "#111111",
            border: "1px solid #1e1e1e",
            color: "#ffffff",
            borderRadius: "20px",
            padding: "12px",
            fontSize: "14px",
            cursor: "pointer",
            fontFamily: "'Poppins', sans-serif",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
          onClick={() => { window.location.href = "http://localhost:8080/oauth2/authorization/google"; }}
        >
          <svg width="18" height="18" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          </svg>
          Continue with Google
        </button>

        <div style={s.footer}>
          Don't have an account?{" "}
          <Link to="/register" style={s.link}>Register</Link>
        </div>
      </div>
    </div>
  );
}