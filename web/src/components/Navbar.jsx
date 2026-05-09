import { useNavigate, useLocation } from "react-router-dom";
import { IoHomeOutline, IoPersonOutline, IoAddOutline, IoChatbubbleOutline } from "react-icons/io5";

const s = {
  nav: {
    background: "#000000",
    borderBottom: "1px solid #1a1a1a",
    padding: "20px 32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "64px",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },

  logo: {
    background: "transparent",
    color: "#ffffff",
    fontSize: "24px",
    fontWeight: "900",
    letterSpacing: "1px",
    padding: "8px 1px",
    position: "relative",
    right: "15px",
    borderRadius: "4px",
    textTransform: "lowercase",
    cursor: "pointer",
    border: "none",
  },

  searchContainer: {
    flex: 1,
    maxWidth: "480px",
    margin: "0 32px",
    position: "relative",
    right: "15px",
  },

  searchInput: {
    width: "100%",
    background: "var(--bg-surface)",
    border: "1px solid #2a2a2a",
    borderRadius: "24px",
    padding: "10px 20px",
    color: "#ffffff",
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box",
  },

  navGroup: {
    display: "flex",
    gap: "20px",
  },

  navBtn: {
    background: "transparent",
    border: "none",
    color: "var(--text-secondary)",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },

  navBtnActive: {
    background: "none",
    border: "none",
    color: "#ffffff", 
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },

};

export default function Navbar({ searchValue, onSearchChange }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav style={s.nav}>
      <button style={s.logo} onClick={() => navigate("/home")}>
        PatchNotes
      </button>

      <div style={s.searchContainer}>
        <input
          style={s.searchInput}
          placeholder="🔍   Search users or patches..."
          value={searchValue || ""}
          onChange={onSearchChange}
          onFocus={() => navigate("/discover")}
        />
      </div>

      <div style={s.navGroup}>
        {/* Home */}
        <button
          style={isActive("/home") ? s.navBtnActive : s.navBtn}
          onClick={() => navigate("/home")}
          title="Home"
        >
          <IoHomeOutline size={18} color={isActive("/home") ? "#ffffff" : "#555555"} /> 
          <span></span>
        </button>

        {/* Forge (The Plus/Create Action) */}
        <button
          style={isActive("/forge") ? s.navBtnActive : s.navBtn}
          onClick={() => navigate("/forge")}
          title="Forge"
        >
          <IoAddOutline size={20} color={isActive("/forge") ? "#ff3e3e" : "#555555"} /> 
          <span></span>
        </button>

        {/* Signal (Messages) */}
        <button
          style={isActive("/signal") ? s.navBtnActive : s.navBtn}
          onClick={() => navigate("/signal")}
          title="Signal"
        >
          <IoChatbubbleOutline size={18} color={isActive("/signal") ? "#ffffff" : "#555555"} /> 
          <span></span>
        </button>

        {/* Dashboard (Profile) */}
        <button
          style={isActive("/dashboard") ? s.navBtnActive : s.navBtn}
          onClick={() => navigate("/dashboard")}
          title="Profile"
        >
          <IoPersonOutline size={18} color={isActive("/dashboard") ? "#ffffff" : "#555555"} /> 
          <span></span>
        </button>
      </div>
    </nav>
  );
}