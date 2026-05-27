// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../api/axios";
// import Navbar from "../components/Navbar";
// import LeftSidebar from "../components/LeftSidebar";

// const s = {
//   page: { minHeight: "100vh", background: "#000000", fontFamily: "var(--font-poppins)", color: "#ffffff" },
//   layout: { display: "flex", alignItems: "flex-start", minHeight: "calc(100vh - 56px)" },
//   container: { flex: 1, maxWidth: "680px", margin: "0 auto", padding: "32px" },
//   title: { color: "#ffffff", fontSize: "22px", fontWeight: "700", margin: "0 0 24px 0" },
//   section: { background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: "12px", padding: "20px", marginBottom: "16px" },
//   sectionTitle: { color: "#444444", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 16px 0", fontWeight: "600" },
//   settingRow: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid #111111" },
//   settingLabel: { color: "#ffffff", fontSize: "14px", margin: 0 },
//   settingDesc: { color: "#444444", fontSize: "12px", margin: "2px 0 0 0" },
//   toggle: { width: "44px", height: "24px", background: "#1a1a1a", borderRadius: "12px", cursor: "pointer", position: "relative", border: "none" },
//   toggleActive: { width: "44px", height: "24px", background: "#ff3e3e", borderRadius: "12px", cursor: "pointer", position: "relative", border: "none" },
//   dangerBtn: { background: "transparent", border: "1px solid #ff3e3e", color: "#ff3e3e", padding: "8px 20px", borderRadius: "20px", cursor: "pointer", fontSize: "13px", fontFamily: "var(--font-poppins)" },
// };

// export default function Settings() {
//   const navigate = useNavigate();
//   const [notifications, setNotifications] = useState(true);
//   const [darkMode, setDarkMode] = useState(true);
//   const [privateAccount, setPrivateAccount] = useState(false);

//   const handleDeleteAccount = () => {
//     if (window.confirm("Are you sure you want to delete your account? This cannot be undone.")) {
//       localStorage.removeItem("token");
//       navigate("/register");
//     }
//   };

//   return (
//     <div style={s.page}>
//       <Navbar />
//       <div style={s.layout}>
//         <LeftSidebar />
//         <div style={s.container}>
//           <h1 style={s.title}>⚙️ Settings</h1>

//           <div style={s.section}>
//             <p style={s.sectionTitle}>Notifications</p>
//             <div style={s.settingRow}>
//               <div>
//                 <p style={s.settingLabel}>Push Notifications</p>
//                 <p style={s.settingDesc}>Get notified about likes, comments and messages</p>
//               </div>
//               <button
//                 style={notifications ? s.toggleActive : s.toggle}
//                 onClick={() => setNotifications(!notifications)}
//               />
//             </div>
//           </div>

//           <div style={s.section}>
//             <p style={s.sectionTitle}>Privacy</p>
//             <div style={s.settingRow}>
//               <div>
//                 <p style={s.settingLabel}>Private Account</p>
//                 <p style={s.settingDesc}>Only your followers can see your posts</p>
//               </div>
//               <button
//                 style={privateAccount ? s.toggleActive : s.toggle}
//                 onClick={() => setPrivateAccount(!privateAccount)}
//               />
//             </div>
//           </div>

//           <div style={s.section}>
//             <p style={s.sectionTitle}>Appearance</p>
//             <div style={s.settingRow}>
//               <div>
//                 <p style={s.settingLabel}>Dark Mode</p>
//                 <p style={s.settingDesc}>Use dark theme across the app</p>
//               </div>
//               <button
//                 style={darkMode ? s.toggleActive : s.toggle}
//                 onClick={() => setDarkMode(!darkMode)}
//               />
//             </div>
//           </div>

//           <div style={s.section}>
//             <p style={s.sectionTitle}>Account</p>
//             <div style={s.settingRow}>
//               <div>
//                 <p style={s.settingLabel}>Delete Account</p>
//                 <p style={s.settingDesc}>Permanently delete your account and all data</p>
//               </div>
//               <button style={s.dangerBtn} onClick={handleDeleteAccount}>Delete</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";

const s = {
  page: { minHeight: "100vh", background: "#000000", fontFamily: "'Poppins', sans-serif", color: "#ffffff" },
  layout: { display: "flex", alignItems: "flex-start", minHeight: "calc(100vh - 56px)" },
  container: { flex: 1, maxWidth: "660px", margin: "0 auto", padding: "24px", minWidth: 0 },
  title: { color: "#ffffff", fontSize: "22px", fontWeight: "700", margin: "0 0 20px 0" },
  section: { background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: "12px", padding: "18px 20px", marginBottom: "12px" },
  sectionTitle: { color: "#444444", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 12px 0", fontWeight: "600" },
  row: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #111111" },
  rowLast: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0" },
  rowLabel: { color: "#ffffff", fontSize: "13px", margin: 0 },
  rowDesc: { color: "#444444", fontSize: "11px", margin: "2px 0 0 0" },
  toggle: {
    width: "42px", height: "22px", background: "#1a1a1a", borderRadius: "11px",
    cursor: "pointer", position: "relative", border: "none", transition: "background 0.2s",
  },
  toggleActive: {
    width: "42px", height: "22px", background: "#59000a", borderRadius: "11px",
    cursor: "pointer", position: "relative", border: "none",
  },
  dangerBtn: {
    background: "transparent", border: "1px solid #59000a", color: "#59000a",
    padding: "7px 18px", borderRadius: "20px", cursor: "pointer",
    fontSize: "12px", fontFamily: "'Poppins', sans-serif",
  },
};

export default function Settings() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [privateAccount, setPrivateAccount] = useState(false);

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This cannot be undone.")) {
      localStorage.removeItem("token");
      navigate("/register");
    }
  };

  return (
    <div style={s.page}>
      <Navbar />
      <div style={s.layout}>
        <LeftSidebar />
        <div style={s.container}>
          <h1 style={s.title}>⚙️ Settings</h1>

          <div style={s.section}>
            <p style={s.sectionTitle}>Notifications</p>
            <div style={s.rowLast}>
              <div>
                <p style={s.rowLabel}>Push Notifications</p>
                <p style={s.rowDesc}>Get notified about likes, comments and messages</p>
              </div>
              <button
                style={notifications ? s.toggleActive : s.toggle}
                onClick={() => setNotifications(!notifications)}
              />
            </div>
          </div>

          <div style={s.section}>
            <p style={s.sectionTitle}>Privacy</p>
            <div style={s.rowLast}>
              <div>
                <p style={s.rowLabel}>Private Account</p>
                <p style={s.rowDesc}>Only your followers can see your posts</p>
              </div>
              <button
                style={privateAccount ? s.toggleActive : s.toggle}
                onClick={() => setPrivateAccount(!privateAccount)}
              />
            </div>
          </div>

          <div style={s.section}>
            <p style={s.sectionTitle}>Appearance</p>
            <div style={s.rowLast}>
              <div>
                <p style={s.rowLabel}>Dark Mode</p>
                <p style={s.rowDesc}>Use dark theme across the app</p>
              </div>
              <button
                style={darkMode ? s.toggleActive : s.toggle}
                onClick={() => setDarkMode(!darkMode)}
              />
            </div>
          </div>

          <div style={s.section}>
            <p style={s.sectionTitle}>Account</p>
            <div style={s.rowLast}>
              <div>
                <p style={s.rowLabel}>Delete Account</p>
                <p style={s.rowDesc}>Permanently delete your account and all data</p>
              </div>
              <button style={s.dangerBtn} onClick={handleDeleteAccount}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}