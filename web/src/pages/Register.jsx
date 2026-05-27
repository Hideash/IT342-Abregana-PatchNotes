// import { useState } from "react";
// import api from "../api/axios";
// import { useNavigate, Link } from "react-router-dom";

// const s = {
//   page: {
//     minHeight: "100vh",
//     background: "#0a0a0f",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontFamily: "'Courier New', monospace",
//     padding: "40px 20px",
//   },
//   card: {
//     background: "#111118",
//     border: "1px solid #2a2a3d",
//     borderRadius: "4px",
//     padding: "48px",
//     width: "100%",
//     maxWidth: "480px",
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
//   },
//   subtitle: {
//     color: "#555570",
//     fontSize: "13px",
//     margin: "0 0 32px 0",
//   },
//   row: {
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr",
//     gap: "16px",
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
//   select: {
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
//     cursor: "pointer",
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


// export default function Register() {
//   const [form, setForm] = useState({
//     email: "", password: "", username: "",
//     firstName: "", lastName: "", age: "", gender: ""
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async () => {
//     try {
//       const res = await api.post("/auth/register", {
//         ...form,
//         age: parseInt(form.age) || 0
//       });
//       localStorage.setItem("token", res.data.token);
//       navigate("/home");
//     } catch (err) {
//         console.log("Error:", err);
//         const errorMessage = err.response?.data?.error || 
//                             err.response?.data?.message || 
//                             "Registration failed. Please try again.";
//         setError(errorMessage);
//     }
//   };

//   const set = (field) => (e) => setForm({ ...form, [field]: e.target.value });

//   return (
//     <div style={s.page}>
//       <div style={s.card}>
//         <div style={s.badge}>Patch Notes</div>
//         <h1 style={s.title}>Create Account</h1>
//         <p style={s.subtitle}>Join the gaming community</p>
//         {error && <div style={s.error}>{error}</div>}

//         <label style={s.label}>Email</label>
//         <input style={s.input} placeholder="you@email.com" onChange={set("email")} />

//         <label style={s.label}>Username</label>
//         <input style={s.input} placeholder="username" onChange={set("username")} />

//         <div style={s.row}>
//           <div>
//             <label style={s.label}>First Name</label>
//             <input style={s.input} placeholder="John" onChange={set("firstName")} />
//           </div>
//           <div>
//             <label style={s.label}>Last Name</label>
//             <input style={s.input} placeholder="Doe" onChange={set("lastName")} />
//           </div>
//         </div>

//         <label style={s.label}>Password</label>
//         <input style={s.input} type="password" placeholder="••••••••" min="0" onChange={set("password")} />

//         <div style={s.row}>
//           <div>
//             <label style={s.label}>Age</label>
//             <input style={s.input} type="number" placeholder="18" min="0" onChange={set("age")} />
//           </div>
//           <div>
//             <label style={s.label}>Gender</label>
//             <select style={s.select} onChange={set("gender")} defaultValue="">
//               <option value="" disabled>Select...</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//               <option value="Prefer not to say">Prefer not to say</option>
//             </select>
//           </div>
//         </div>

//         <button style={s.button} onClick={handleSubmit}>Create Account</button>
//         <div style={s.footer}>
//           Already have an account?{" "}
//           <Link to="/login" style={s.link}>Login</Link>
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
    maxWidth: "480px",
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
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
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
  select: {
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
    cursor: "pointer",
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
  },
  error: {
    background: "#180008",
    border: "1px solid #ff3e3e44",
    color: "#59000a",
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

export default function Register() {
  const [form, setForm] = useState({
    email: "", password: "", username: "",
    firstName: "", lastName: "", age: "", gender: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (parseInt(form.age) < 15) {
      setError("You must be at least 15 years old to register.");
      return;
    }
    try {
      const res = await api.post("/auth/register", { ...form, age: parseInt(form.age) || 0 });
      localStorage.setItem("token", res.data.token);
      navigate("/home");
    } catch (err) {
      setError(err.response?.data?.error || err.response?.data?.message || "Registration failed.");
    }
  };

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  return (
    <div style={s.page}>
      <div style={s.card}>
        <button style={s.logo} onClick={() => navigate("/")}>patchnotes</button>
        <h1 style={s.title}>Create Account</h1>
        <p style={s.subtitle}>Join the gaming community</p>
        {error && <div style={s.error}>{error}</div>}
{/* 
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
        <input style={s.input} type="password" placeholder="••••••••" onChange={set("password")} />

        <div style={s.row}>
          <div>
            <label style={s.label}>Age (min. 15)</label>
            <input style={s.input} type="number" placeholder="15" min="15" onChange={set("age")} />
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
        </div> */}

        <label style={s.label}>Email</label>
        <input
          style={s.input}
          placeholder="you@email.com"
          onChange={set("email")}
          autoComplete="off"
        />

        <label style={s.label}>Username</label>
        <input
          style={s.input}
          placeholder="username"
          onChange={set("username")}
          autoComplete="off"
        />

        <div style={s.row}>
          <div>
            <label style={s.label}>First Name</label>
            <input style={s.input} placeholder="John" onChange={set("firstName")} autoComplete="off" />
          </div>
          <div>
            <label style={s.label}>Last Name</label>
            <input style={s.input} placeholder="Doe" onChange={set("lastName")} autoComplete="off" />
          </div>
        </div>

        <label style={s.label}>Password</label>
        <input
          style={s.input}
          type="password"
          placeholder="••••••••"
          onChange={set("password")}
          autoComplete="new-password"
        />

        <div style={s.row}>
          <div>
            <label style={s.label}>Age (min. 15)</label>
            <input style={s.input} type="number" placeholder="15" min="15" onChange={set("age")} autoComplete="off" />
          </div>
          <div>
            <label style={s.label}>Gender</label>
            <select style={s.select} onChange={set("gender")} defaultValue="" autoComplete="off">
              <option value="" disabled>Select...</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
        </div>

        <button style={s.button} onClick={handleSubmit}>Create Account</button>

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
          Already have an account?{" "}
          <Link to="/login" style={s.link}>Login</Link>
        </div>
      </div>

      <style>{`
        select option { background: #111111; color: #ffffff; }
        select option:hover { background: #59000a !important; color: #ffffff !important; }
      `}</style>
    </div>
  );
}