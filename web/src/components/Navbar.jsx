// import { useNavigate, useLocation } from "react-router-dom";
// import { IoHomeOutline, IoPersonOutline, IoAddOutline, IoChatbubbleOutline } from "react-icons/io5";

// const s = {
//   nav: {
//     background: "#000000",
//     borderBottom: "1px solid #1a1a1a",
//     padding: "20px 32px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     height: "64px",
//     position: "sticky",
//     top: 0,
//     zIndex: 100,
//   },

//   logo: {
//     background: "transparent",
//     color: "#ffffff",
//     fontSize: "24px",
//     fontWeight: "900",
//     letterSpacing: "1px",
//     padding: "8px 1px",
//     position: "relative",
//     right: "15px",
//     borderRadius: "4px",
//     textTransform: "lowercase",
//     cursor: "pointer",
//     border: "none",
//   },

//   searchContainer: {
//     flex: 1,
//     maxWidth: "480px",
//     margin: "0 32px",
//     position: "relative",
//     right: "15px",
//   },

//   searchInput: {
//     width: "100%",
//     background: "var(--bg-surface)",
//     border: "1px solid #2a2a2a",
//     borderRadius: "24px",
//     padding: "10px 20px",
//     color: "#ffffff",
//     fontSize: "14px",
//     outline: "none",
//     boxSizing: "border-box",
//   },

//   navGroup: {
//     display: "flex",
//     gap: "20px",
//   },

//   navBtn: {
//     background: "transparent",
//     border: "none",
//     color: "var(--text-secondary)",
//     display: "flex",
//     alignItems: "center",
//     cursor: "pointer",
//     transition: "all 0.2s ease",
//   },

//   navBtnActive: {
//     background: "none",
//     border: "none",
//     color: "#ffffff", 
//     display: "flex",
//     alignItems: "center",
//     cursor: "pointer",
//   },

// };

// export default function Navbar({ searchValue, onSearchChange }) {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const isActive = (path) => location.pathname === path;

//   return (
//     <nav style={s.nav}>
//       <button style={s.logo} onClick={() => navigate("/home")}>
//         PatchNotes
//       </button>

//       <div style={s.searchContainer}>
//         <input
//           style={s.searchInput}
//           placeholder="🔍   Search users or patches..."
//           value={searchValue || ""}
//           onChange={onSearchChange}
//           onFocus={() => navigate("/discover")}
//         />
//       </div>

//       <div style={s.navGroup}>
//         {/* Home */}
//         <button
//           style={isActive("/home") ? s.navBtnActive : s.navBtn}
//           onClick={() => navigate("/home")}
//           title="Home"
//         >
//           <IoHomeOutline size={18} color={isActive("/home") ? "#ffffff" : "#555555"} /> 
//           <span></span>
//         </button>

//         {/* Forge (The Plus/Create Action) */}
//         <button
//           style={isActive("/forge") ? s.navBtnActive : s.navBtn}
//           onClick={() => navigate("/forge")}
//           title="Forge"
//         >
//           <IoAddOutline size={20} color={isActive("/forge") ? "#ff3e3e" : "#555555"} /> 
//           <span></span>
//         </button>

//         {/* Signal (Messages) */}
//         <button
//           style={isActive("/signal") ? s.navBtnActive : s.navBtn}
//           onClick={() => navigate("/signal")}
//           title="Signal"
//         >
//           <IoChatbubbleOutline size={18} color={isActive("/signal") ? "#ffffff" : "#555555"} /> 
//           <span></span>
//         </button>

//         {/* Dashboard (Profile) */}
//         <button
//           style={isActive("/dashboard") ? s.navBtnActive : s.navBtn}
//           onClick={() => navigate("/dashboard")}
//           title="Profile"
//         >
//           <IoPersonOutline size={18} color={isActive("/dashboard") ? "#ffffff" : "#555555"} /> 
//           <span></span>
//         </button>
//       </div>
//     </nav>
//   );
// }


import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  IoHomeOutline, IoAddOutline, IoChatbubbleOutline,
  IoPersonOutline, IoNotificationsOutline, IoSettingsOutline, IoLogOutOutline
} from "react-icons/io5";
import api from "../api/axios";

const s = {
  nav: {
    background: "#000000",
    borderBottom: "1px solid #1a1a1a",
    padding: "0 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "56px",
    position: "sticky",
    top: 0,
    zIndex: 200,
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
  searchContainer: {
    flex: 1,
    maxWidth: "480px",
    margin: "0 24px",
  },
  searchInput: {
    width: "100%",
    background: "#111111",
    border: "1px solid #1a1a1a",
    borderRadius: "24px",
    padding: "8px 18px",
    color: "#ffffff",
    fontSize: "13px",
    fontFamily: "'Poppins', sans-serif",
    outline: "none",
    boxSizing: "border-box",
  },
  navGroup: {
    display: "flex",
    gap: "4px",
    alignItems: "center",
  },
  iconBtn: {
    background: "transparent",
    border: "none",
    color: "#555555",
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background 0.2s",
  },
  iconBtnActive: {
    background: "#180008 ",
    border: "none",
    color: "#59000a",
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  profileBtn: {
    background: "#59000a",
    border: "none",
    color: "#ffffff",
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "13px",
    fontWeight: "700",
    fontFamily: "'Poppins', sans-serif",
  },
  dropdownWrap: {
    position: "relative",
  },
  dropdown: {
    position: "absolute",
    top: "44px",
    right: 0,
    background: "#0a0a0a",
    border: "1px solid #1a1a1a",
    borderRadius: "12px",
    padding: "8px",
    minWidth: "200px",
    zIndex: 1000,
    boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
  },
  dropdownUsername: {
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: "600",
    padding: "8px 12px 4px",
    display: "block",
  },
  dropdownEmail: {
    color: "#444444",
    fontSize: "11px",
    padding: "0 12px 8px",
    display: "block",
  },
  dropdownDivider: {
    border: "none",
    borderTop: "1px solid #1a1a1a",
    margin: "4px 0",
  },
  dropdownItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "10px 12px",
    borderRadius: "8px",
    cursor: "pointer",
    color: "#888888",
    fontSize: "13px",
    fontFamily: "'Poppins', sans-serif",
    border: "none",
    background: "transparent",
    width: "100%",
    textAlign: "left",
    transition: "background 0.15s",
  },
};

export default function Navbar({ searchValue, onSearchChange }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState(null);
  const dropdownRef = useRef(null);
  const isActive = (path) => location.pathname === path;
  const isDiscover = location.pathname === "/discover";

  useEffect(() => {
    api.get("/user/me").then(res => setUser(res.data)).catch(() => {});
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const navBtn = (path, Icon) => (
    <button
      style={isActive(path) ? s.iconBtnActive : s.iconBtn}
      onClick={() => navigate(path)}
      onMouseEnter={e => { if (!isActive(path)) e.currentTarget.style.background = "rgba(255,62,62,0.1)"; }}
      onMouseLeave={e => { if (!isActive(path)) e.currentTarget.style.background = "transparent"; }}
    >
      <Icon size={18} color={isActive(path) ? "#59000a" : "#555555"} />
    </button>
  );

  return (
    <nav style={s.nav}>
      <button style={s.logo} onClick={() => navigate("/home")}>patchnotes</button>

      {!isDiscover && (
        <div style={s.searchContainer}>
          <input
            style={s.searchInput}
            placeholder="Search users or patches..."
            value={searchValue || ""}
            onChange={onSearchChange}
            onFocus={() => navigate("/discover")}
          />
        </div>
      )}
      {isDiscover && <div style={{ flex: 1 }} />}

      <div style={s.navGroup}>
        {navBtn("/home", IoHomeOutline)}
        {navBtn("/forge", IoAddOutline)}
        {navBtn("/signal", IoChatbubbleOutline)}

        <div style={s.dropdownWrap} ref={dropdownRef}>
          <button style={s.profileBtn} onClick={() => setShowDropdown(!showDropdown)}>
            {user?.username?.charAt(0).toUpperCase() || user?.firstName?.charAt(0).toUpperCase() || "U"}
          </button>

          {showDropdown && (
            <div style={s.dropdown}>
              <span style={s.dropdownUsername}>{user?.username || user?.firstName}</span>
              <span style={s.dropdownEmail}>{user?.email}</span>
              <hr style={s.dropdownDivider} />
              <button
                style={s.dropdownItem}
                onClick={() => { navigate("/dashboard"); setShowDropdown(false); }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,62,62,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
              >
                <IoPersonOutline size={16} /> Headquarters
              </button>
              <button
                style={s.dropdownItem}
                onClick={() => { navigate("/notifications"); setShowDropdown(false); }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,62,62,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
              >
                <IoNotificationsOutline size={16} /> Notifications
              </button>
              <button
                style={s.dropdownItem}
                onClick={() => { navigate("/settings"); setShowDropdown(false); }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,62,62,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
              >
                <IoSettingsOutline size={16} /> Settings
              </button>
              <hr style={s.dropdownDivider} />
              <button
                style={{ ...s.dropdownItem, color: "#59000a" }}
                onClick={handleLogout}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,62,62,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
              >
                <IoLogOutOutline size={16} /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}