// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { IoHomeOutline, IoCompassOutline, IoAddOutline, IoShieldOutline } from "react-icons/io5";
// import api from "../api/axios";
// import CreatePostModal from "./CreatePostModal";
// import CreatePatchModal from "./CreatePatchModal";

// const s = {
//   sidebar: {
//     width: "240px",
//     minWidth: "240px",
//     borderRight: "1px solid #1a1a1a",
//     padding: "16px 12px",
//     position: "sticky",
//     top: "56px",
//     height: "calc(100vh - 56px)",
//     overflowY: "auto",
//     display: "flex",
//     flexDirection: "column",
//     background: "#000000",
//   },
//   navItem: {
//     display: "flex",
//     alignItems: "center",
//     gap: "12px",
//     padding: "9px 12px",
//     borderRadius: "20px",
//     cursor: "pointer",
//     marginBottom: "2px",
//     color: "#888888",
//     fontSize: "14px",
//     background: "transparent",
//     border: "none",
//     width: "100%",
//     textAlign: "left",
//     fontFamily: "var(--font-poppins)",
//     transition: "background 0.15s",
//   },
//   navItemActive: {
//     display: "flex",
//     alignItems: "center",
//     gap: "12px",
//     padding: "9px 12px",
//     borderRadius: "20px",
//     cursor: "pointer",
//     marginBottom: "2px",
//     color: "#ffffff",
//     fontSize: "14px",
//     background: "#1a0000",
//     border: "none",
//     width: "100%",
//     textAlign: "left",
//     fontFamily: "var(--font-poppins)",
//     fontWeight: "600",
//   },
//   divider: {
//     border: "none",
//     borderTop: "1px solid #1a1a1a",
//     margin: "12px 0",
//   },
//   sectionHeader: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     cursor: "pointer",
//     padding: "4px 8px",
//     marginBottom: "4px",
//   },
//   sectionTitle: {
//     color: "#333333",
//     fontSize: "10px",
//     letterSpacing: "2px",
//     textTransform: "uppercase",
//     margin: 0,
//     fontWeight: "600",
//   },
//   collapseIcon: {
//     color: "#333333",
//     fontSize: "10px",
//     background: "none",
//     border: "none",
//     cursor: "pointer",
//   },
//   patchItem: {
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//     padding: "7px 12px",
//     borderRadius: "20px",
//     cursor: "pointer",
//     marginBottom: "2px",
//     transition: "background 0.15s",
//   },
//   patchAvatar: {
//     width: "28px",
//     height: "28px",
//     background: "#1a1a1a",
//     borderRadius: "50%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: "13px",
//     flexShrink: 0,
//   },
//   patchName: {
//     color: "#888888",
//     fontSize: "13px",
//     margin: 0,
//     overflow: "hidden",
//     textOverflow: "ellipsis",
//     whiteSpace: "nowrap",
//   },
//   emptyPatches: {
//     color: "#333333",
//     fontSize: "12px",
//     padding: "4px 12px",
//   },
// };

// export default function LeftSidebar() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [myPatches, setMyPatches] = useState([]);
//   const [trendingPatches, setTrendingPatches] = useState([]);
//   const [trendingCollapsed, setTrendingCollapsed] = useState(false);
//   const [myPatchesCollapsed, setMyPatchesCollapsed] = useState(false);
//   const [showCreatePost, setShowCreatePost] = useState(false);
//   const [showCreatePatch, setShowCreatePatch] = useState(false);
//   const [user, setUser] = useState(null);
//   const isActive = (path) => location.pathname === path;

//   useEffect(() => {
//     api.get("/user/me").then(res => setUser(res.data)).catch(() => {});
//     api.get("/patches/mine").then(res => setMyPatches(res.data)).catch(() => {});
//     api.get("/patches/trending").then(res => setTrendingPatches(res.data)).catch(() => {});
//   }, []);

//   return (
//     <>
//       {showCreatePost && user && (
//         <CreatePostModal
//           user={user}
//           onClose={() => setShowCreatePost(false)}
//           onPostCreated={() => window.location.reload()}
//         />
//       )}
//       {showCreatePatch && (
//         <CreatePatchModal
//           onClose={() => setShowCreatePatch(false)}
//           onPatchCreated={() => {
//             setShowCreatePatch(false);
//             api.get("/patches/mine").then(res => setMyPatches(res.data)).catch(() => {});
//           }}
//         />
//       )}

//       <div style={s.sidebar}>
//         <button
//           style={isActive("/home") ? s.navItemActive : s.navItem}
//           onClick={() => navigate("/home")}
//           onMouseEnter={e => { if (!isActive("/home")) e.currentTarget.style.background = "rgba(255,62,62,0.08)"; }}
//           onMouseLeave={e => { if (!isActive("/home")) e.currentTarget.style.background = "transparent"; }}
//           onMouseDown={e => { e.currentTarget.style.background = "rgba(255,62,62,0.15)"; }}
//           onMouseUp={e => { e.currentTarget.style.background = "rgba(255,62,62,0.08)"; }}
//         >
//           <IoHomeOutline size={18} color={isActive("/home") ? "#ff3e3e" : "#555555"} />
//           Home
//         </button>

//         <button
//           style={isActive("/discover") ? s.navItemActive : s.navItem}
//           onClick={() => navigate("/discover")}
//           onMouseEnter={e => { if (!isActive("/discover")) e.currentTarget.style.background = "rgba(255,62,62,0.08)"; }}
//           onMouseLeave={e => { if (!isActive("/discover")) e.currentTarget.style.background = "transparent"; }}
//         >
//           <IoCompassOutline size={18} color={isActive("/discover") ? "#ff3e3e" : "#555555"} />
//           Explore
//         </button>

//         <button
//           style={s.navItem}
//           onClick={() => setShowCreatePost(true)}
//           onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,62,62,0.08)"; }}
//           onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
//           onMouseDown={e => { e.currentTarget.style.background = "rgba(255,62,62,0.15)"; }}
//           onMouseUp={e => { e.currentTarget.style.background = "rgba(255,62,62,0.08)"; }}
//         >
//           <IoAddOutline size={18} color="#555555" />
//           Leave a Note
//         </button>

//         <button
//           style={s.navItem}
//           onClick={() => setShowCreatePatch(true)}
//           onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,62,62,0.08)"; }}
//           onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
//           onMouseDown={e => { e.currentTarget.style.background = "rgba(255,62,62,0.15)"; }}
//           onMouseUp={e => { e.currentTarget.style.background = "rgba(255,62,62,0.08)"; }}
//         >
//           <IoShieldOutline size={18} color="#555555" />
//           Start a Patch
//         </button>

//         <hr style={s.divider} />

//         <div style={s.sectionHeader} onClick={() => setTrendingCollapsed(!trendingCollapsed)}>
//           <p style={s.sectionTitle}>Trending Patches</p>
//           <span style={s.collapseIcon}>{trendingCollapsed ? "▶" : "▼"}</span>
//         </div>
//         {!trendingCollapsed && trendingPatches.map(patch => (
//           <div
//             key={patch.id}
//             style={s.patchItem}
//             onClick={() => navigate(`/patch/${patch.id}`)}
//             onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,62,62,0.08)"; }}
//             onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
//           >
//             <div style={s.patchAvatar}>{patch.icon}</div>
//             <p style={s.patchName}>{patch.name}</p>
//           </div>
//         ))}

//         <hr style={s.divider} />

//         <div style={s.sectionHeader} onClick={() => setMyPatchesCollapsed(!myPatchesCollapsed)}>
//           <p style={s.sectionTitle}>Patch Together</p>
//           <span style={s.collapseIcon}>{myPatchesCollapsed ? "▶" : "▼"}</span>
//         </div>
//         {!myPatchesCollapsed && (
//           myPatches.length === 0
//             ? <p style={s.emptyPatches}>No patches joined yet</p>
//             : myPatches.map(patch => (
//               <div
//                 key={patch.id}
//                 style={s.patchItem}
//                 onClick={() => navigate(`/patch/${patch.id}`)}
//                 onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,62,62,0.08)"; }}
//                 onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
//               >
//                 <div style={s.patchAvatar}>{patch.icon}</div>
//                 <p style={s.patchName}>{patch.name}</p>
//               </div>
//             ))
//         )}
//       </div>
//     </>
//   );
// }

import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoHomeOutline, IoCompassOutline, IoAddOutline, IoShieldOutline } from "react-icons/io5";
import api from "../api/axios";
import CreatePostModal from "./CreatePostModal";
import CreatePatchModal from "./CreatePatchModal";

const s = {
  sidebar: {
    width: "240px",
    minWidth: "240px",
    borderRight: "1px solid #1a1a1a",
    padding: "12px 8px",
    position: "sticky",
    top: "56px",
    height: "calc(100vh - 56px)",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    background: "#000000",
    flexShrink: 0,
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "9px 12px",
    borderRadius: "20px",
    cursor: "pointer",
    marginBottom: "2px",
    color: "#888888",
    fontSize: "14px",
    background: "transparent",
    border: "none",
    width: "100%",
    textAlign: "left",
    fontFamily: "'Poppins', sans-serif",
    transition: "background 0.15s",
  },
  navItemActive: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "9px 12px",
    borderRadius: "20px",
    cursor: "pointer",
    marginBottom: "2px",
    color: "#ffffff",
    fontSize: "14px",
    background: "rgba(255,62,62,0.15)",
    border: "none",
    width: "100%",
    textAlign: "left",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "600",
  },
  divider: {
    border: "none",
    borderTop: "1px solid #1a1a1a",
    margin: "10px 0",
  },
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "4px 8px",
    marginBottom: "4px",
    cursor: "pointer",
    background: "none",
    border: "none",
    width: "100%",
  },
  sectionTitle: {
    color: "#333333",
    fontSize: "10px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    margin: 0,
    fontWeight: "600",
    fontFamily: "'Poppins', sans-serif",
  },
  collapseIcon: {
    color: "#333333",
    fontSize: "10px",
  },
  patchItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "7px 12px",
    borderRadius: "20px",
    cursor: "pointer",
    marginBottom: "2px",
    transition: "background 0.15s",
    border: "none",
    background: "transparent",
    width: "100%",
    textAlign: "left",
  },
  patchAvatar: {
    width: "24px",
    height: "24px",
    background: "#1a1a1a",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    flexShrink: 0,
  },
  patchName: {
    color: "#888888",
    fontSize: "13px",
    margin: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontFamily: "'Poppins', sans-serif",
  },
  emptyText: {
    color: "#333333",
    fontSize: "12px",
    padding: "4px 12px",
    fontFamily: "'Poppins', sans-serif",
  },
};

const hoverOn = (e) => { e.currentTarget.style.background = "rgba(255,62,62,0.08)"; };
const hoverOff = (e) => { e.currentTarget.style.background = "transparent"; };
const pressOn = (e) => { e.currentTarget.style.background = "rgba(255,62,62,0.15)"; };
const pressOff = (e) => { e.currentTarget.style.background = "rgba(255,62,62,0.08)"; };

export default function LeftSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [myPatches, setMyPatches] = useState([]);
  const [trendingPatches, setTrendingPatches] = useState([]);
  const [trendingCollapsed, setTrendingCollapsed] = useState(false);
  const [myPatchesCollapsed, setMyPatchesCollapsed] = useState(false);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [showCreatePatch, setShowCreatePatch] = useState(false);
  const [user, setUser] = useState(null);
  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    api.get("/user/me").then(res => setUser(res.data)).catch(() => {});
    api.get("/patches/mine").then(res => setMyPatches(res.data)).catch(() => {});
    api.get("/patches/trending").then(res => setTrendingPatches(res.data)).catch(() => {});
  }, []);

  const refreshPatches = () => {
    api.get("/patches/mine").then(res => setMyPatches(res.data)).catch(() => {});
    api.get("/patches/trending").then(res => setTrendingPatches(res.data)).catch(() => {});
  };

  return (
    <>
      {showCreatePost && user && (
        <CreatePostModal
          user={user}
          onClose={() => setShowCreatePost(false)}
          onPostCreated={() => { setShowCreatePost(false); window.location.reload(); }}
        />
      )}
      {showCreatePatch && (
        <CreatePatchModal
          onClose={() => setShowCreatePatch(false)}
          onPatchCreated={() => { setShowCreatePatch(false); refreshPatches(); }}
        />
      )}

      <div style={s.sidebar}>
        <button
          style={isActive("/home") ? s.navItemActive : s.navItem}
          onClick={() => navigate("/home")}
          onMouseEnter={e => { if (!isActive("/home")) hoverOn(e); }}
          onMouseLeave={e => { if (!isActive("/home")) hoverOff(e); }}
          onMouseDown={pressOn}
          onMouseUp={e => { e.currentTarget.style.background = isActive("/home") ? "rgba(255,62,62,0.15)" : "rgba(255,62,62,0.08)"; }}
        >
          <IoHomeOutline size={17} color={isActive("/home") ? "#59000a" : "#555555"} />
          Home
        </button>

        <button
          style={isActive("/discover") ? s.navItemActive : s.navItem}
          onClick={() => navigate("/discover")}
          onMouseEnter={e => { if (!isActive("/discover")) hoverOn(e); }}
          onMouseLeave={e => { if (!isActive("/discover")) hoverOff(e); }}
          onMouseDown={pressOn}
          onMouseUp={e => { e.currentTarget.style.background = isActive("/discover") ? "rgba(255,62,62,0.15)" : "rgba(255,62,62,0.08)"; }}
        >
          <IoCompassOutline size={17} color={isActive("/discover") ? "#59000a" : "#555555"} />
          Explore
        </button>

        <button
          style={s.navItem}
          onClick={() => setShowCreatePost(true)}
          onMouseEnter={hoverOn}
          onMouseLeave={hoverOff}
          onMouseDown={pressOn}
          onMouseUp={pressOff}
        >
          <IoAddOutline size={17} color="#555555" />
          Leave a Note
        </button>

        <button
          style={s.navItem}
          onClick={() => setShowCreatePatch(true)}
          onMouseEnter={hoverOn}
          onMouseLeave={hoverOff}
          onMouseDown={pressOn}
          onMouseUp={pressOff}
        >
          <IoShieldOutline size={17} color="#555555" />
          Start a Patch
        </button>

        <hr style={s.divider} />

        <button style={s.sectionHeader} onClick={() => setTrendingCollapsed(!trendingCollapsed)}>
          <span style={s.sectionTitle}>Trending Patches</span>
          <span style={s.collapseIcon}>{trendingCollapsed ? "▶" : "▼"}</span>
        </button>
        {!trendingCollapsed && (
          trendingPatches.length === 0
            ? <p style={s.emptyText}>No trending patches yet</p>
            : trendingPatches.map(patch => (
              <button
                key={patch.id}
                style={s.patchItem}
                onClick={() => navigate(`/patch/${patch.id}`)}
                onMouseEnter={hoverOn}
                onMouseLeave={hoverOff}
              >
                <div style={s.patchAvatar}>{patch.icon}</div>
                <p style={s.patchName}>{patch.name}</p>
              </button>
            ))
        )}

        <hr style={s.divider} />

        <button style={s.sectionHeader} onClick={() => setMyPatchesCollapsed(!myPatchesCollapsed)}>
          <span style={s.sectionTitle}>Patch Together</span>
          <span style={s.collapseIcon}>{myPatchesCollapsed ? "▶" : "▼"}</span>
        </button>
        {!myPatchesCollapsed && (
          myPatches.length === 0
            ? <p style={s.emptyText}>No patches joined yet</p>
            : myPatches.map(patch => (
              <button
                key={patch.id}
                style={s.patchItem}
                onClick={() => navigate(`/patch/${patch.id}`)}
                onMouseEnter={hoverOn}
                onMouseLeave={hoverOff}
              >
                <div style={s.patchAvatar}>{patch.icon}</div>
                <p style={s.patchName}>{patch.name}</p>
              </button>
            ))
        )}
      </div>
    </>
  );
}