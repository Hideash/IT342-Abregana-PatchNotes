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