// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import LeftSidebar from "../components/LeftSidebar";

// const s = {
//   page: { minHeight: "100vh", background: "#000000", fontFamily: "var(--font-poppins)", color: "#ffffff" },
//   layout: { display: "flex", alignItems: "flex-start", minHeight: "calc(100vh - 56px)" },
//   container: { flex: 1, maxWidth: "680px", margin: "0 auto", padding: "32px" },
//   title: { color: "#ffffff", fontSize: "22px", fontWeight: "700", margin: "0 0 24px 0" },
//   notifItem: {
//     display: "flex",
//     alignItems: "center",
//     gap: "14px",
//     padding: "14px 16px",
//     background: "#0a0a0a",
//     border: "1px solid #1a1a1a",
//     borderRadius: "10px",
//     marginBottom: "8px",
//     cursor: "pointer",
//     transition: "border-color 0.15s",
//   },
//   notifAvatar: {
//     width: "40px",
//     height: "40px",
//     background: "#ff3e3e",
//     borderRadius: "50%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: "16px",
//     fontWeight: "700",
//     color: "#fff",
//     flexShrink: 0,
//   },
//   notifText: { color: "#ffffff", fontSize: "13px", margin: "0 0 2px 0" },
//   notifTime: { color: "#444444", fontSize: "11px", margin: 0 },
//   empty: { textAlign: "center", color: "#333333", padding: "60px 0", fontSize: "13px" },
// };

// const MOCK_NOTIFICATIONS = [
//   { id: 1, type: "like", text: "gamer_x liked your post", time: "2 minutes ago", initial: "G" },
//   { id: 2, type: "comment", text: "patchmaster commented on your post", time: "15 minutes ago", initial: "P" },
//   { id: 3, type: "follow", text: "noobslayer99 added you", time: "1 hour ago", initial: "N" },
//   { id: 4, type: "message", text: "testuser sent you a message", time: "3 hours ago", initial: "T" },
// ];

// export default function Notifications() {
//   const navigate = useNavigate();

//   return (
//     <div style={s.page}>
//       <Navbar />
//       <div style={s.layout}>
//         <LeftSidebar />
//         <div style={s.container}>
//           <h1 style={s.title}>🔔 Notifications</h1>
//           {MOCK_NOTIFICATIONS.length === 0 ? (
//             <div style={s.empty}>
//               <div style={{ fontSize: "40px", marginBottom: "16px" }}>🔔</div>
//               <p>No notifications yet.</p>
//             </div>
//           ) : (
//             MOCK_NOTIFICATIONS.map(notif => (
//               <div
//                 key={notif.id}
//                 style={s.notifItem}
//                 onMouseEnter={e => { e.currentTarget.style.borderColor = "#ff3e3e33"; }}
//                 onMouseLeave={e => { e.currentTarget.style.borderColor = "#1a1a1a"; }}
//               >
//                 <div style={s.notifAvatar}>{notif.initial}</div>
//                 <div>
//                   <p style={s.notifText}>{notif.text}</p>
//                   <p style={s.notifTime}>{notif.time}</p>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";

const s = {
  page: { minHeight: "100vh", background: "#000000", fontFamily: "'Poppins', sans-serif", color: "#ffffff" },
  layout: { display: "flex", alignItems: "flex-start", minHeight: "calc(100vh - 56px)" },
  container: { flex: 1, maxWidth: "660px", margin: "0 auto", padding: "24px", minWidth: 0 },
  title: { color: "#ffffff", fontSize: "22px", fontWeight: "700", margin: "0 0 20px 0" },
  notifItem: {
    display: "flex", alignItems: "center", gap: "12px",
    padding: "14px 16px", background: "#0a0a0a",
    border: "1px solid #1a1a1a", borderRadius: "10px",
    marginBottom: "8px", cursor: "pointer", transition: "border-color 0.15s",
  },
  notifAvatar: {
    width: "38px", height: "38px", background: "#59000a",
    borderRadius: "50%", display: "flex", alignItems: "center",
    justifyContent: "center", fontSize: "15px", fontWeight: "700",
    color: "#fff", flexShrink: 0,
  },
  notifText: { color: "#ffffff", fontSize: "13px", margin: "0 0 2px 0" },
  notifTime: { color: "#444444", fontSize: "11px", margin: 0 },
  empty: { textAlign: "center", color: "#333333", padding: "60px 0", fontSize: "13px" },
};

const MOCK_NOTIFICATIONS = [
  { id: 1, text: "gamer_x liked your post", time: "2 minutes ago", initial: "G" },
  { id: 2, text: "patchmaster commented on your post", time: "15 minutes ago", initial: "P" },
  { id: 3, text: "noobslayer99 added you as a friend", time: "1 hour ago", initial: "N" },
  { id: 4, text: "testuser sent you a message", time: "3 hours ago", initial: "T" },
];

export default function Notifications() {
  return (
    <div style={s.page}>
      <Navbar />
      <div style={s.layout}>
        <LeftSidebar />
        <div style={s.container}>
          <h1 style={s.title}>🔔 Notifications</h1>
          {MOCK_NOTIFICATIONS.length === 0 ? (
            <div style={s.empty}>
              <div style={{ fontSize: "40px", marginBottom: "16px" }}>🔔</div>
              <p>No notifications yet.</p>
            </div>
          ) : (
            MOCK_NOTIFICATIONS.map(notif => (
              <div
                key={notif.id}
                style={s.notifItem}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#ff3e3e44"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1a1a1a"; }}
              >
                <div style={s.notifAvatar}>{notif.initial}</div>
                <div>
                  <p style={s.notifText}>{notif.text}</p>
                  <p style={s.notifTime}>{notif.time}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}