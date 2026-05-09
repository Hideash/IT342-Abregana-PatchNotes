import { useState } from "react";
import api from "../../api/axios";
import { useNavigate, Link } from "react-router-dom";

const s = {
  page: {
    minHeight: "100vh",
    background: "#000000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'var(--font-poppins)",
    padding: "40px 20px",
  },
  card: {
    background: "#0a0a0a",
    border: "1px solid #1a1a1a",
    borderRadius: "12px",
    padding: "48px",
    width: "100%",
    maxWidth: "480px",
    //boxShadow: "0 0 40px rgba(99, 102, 241, 0.1)",
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
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
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
  select: {
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
    cursor: "pointer",
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
    background: "#2a0d0d",
    border: "1px solid #5a1a1a",
    color: "#ff6b6b",
    padding: "10px 14px",
    borderRadius: "3px",
    fontSize: "13px",
    marginBottom: "20px",
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
  link: { color: "#ff3e3e", textDecoration: "none" },
};


export default function Register() {
  const [form, setForm] = useState({
    email: "", password: "", username: "",
    firstName: "", lastName: "", age: "", gender: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await api.post("/auth/register", {
        ...form,
        age: parseInt(form.age) || 0
      });
      localStorage.setItem("token", res.data.token);
      navigate("/home");
    } catch (err) {
        console.log("Error:", err);
        const errorMessage = err.response?.data?.error || 
                            err.response?.data?.message || 
                            "Registration failed. Please try again.";
        setError(errorMessage);
    }
  };

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  return (
    <div style={s.page}>
      <div style={s.card}>
        <div style={s.badge}>Patch Notes</div>
        <h1 style={s.title}>Create Account</h1>
        <p style={s.subtitle}>Join the gaming community</p>
        {error && <div style={s.error}>{error}</div>}

        <label style={s.label}>Email</label>
        <input style={s.input} placeholder="you@email.com" onChange={set("email")} />

        <label style={s.label}>Username</label>
        <input style={s.input} placeholder="username" onChange={set("username")} />

        <div style={s.row}>
          <div>
            <label style={s.label}>First Name</label>
            <input style={s.input} placeholder="John" onChange={set("firstName")} />
          </div>
          <div>
            <label style={s.label}>Last Name</label>
            <input style={s.input} placeholder="Doe" onChange={set("lastName")} />
          </div>
        </div>

        <label style={s.label}>Password</label>
        <input style={s.input} type="password" placeholder="••••••••" min="0" onChange={set("password")} />

        <div style={s.row}>
          <div>
            <label style={s.label}>Age</label>
            <input style={s.input} type="number" placeholder="18" min="0" onChange={set("age")} />
          </div>
          <div>
            <label style={s.label}>Gender</label>
            <select style={s.select} onChange={set("gender")} defaultValue="">
              <option value="" disabled>Select...</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
        </div>

        <button style={s.button} onClick={handleSubmit}>Create Account</button>
        <div style={s.footer}>
          Already have an account?{" "}
          <Link to="/login" style={s.link}>Login</Link>
        </div>
      </div>
    </div>
  );
}