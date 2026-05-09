import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import Navbar from "../../components/Navbar";

const s = {
  page: {
    minHeight: "100vh",
    background: "#000000",
    fontFamily: "var(--font-poppins)",
    color: "#ffffff",
  },
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "32px",
  },
  headerRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "24px",
  },
  pageTitle: {
    color: "#ffffff",
    fontSize: "24px",
    fontWeight: "700",
    margin: 0,
  },
  editBtn: {
    background: "#ff3e3e",
    border: "none",
    color: "#ffffff",
    padding: "10px 24px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "600",
    fontFamily: "var(--font-poppins)",
  },
  saveBtn: {
    background: "#22c55e",
    border: "none",
    color: "#ffffff",
    padding: "10px 24px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "600",
    fontFamily: "var(--font-poppins)",
  },
  cancelBtn: {
    background: "transparent",
    border: "1px solid #1a1a1a",
    color: "#555555",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "13px",
    fontFamily: "var(--font-poppins)",
    marginRight: "8px",
  },
  profileCard: {
    background: "#0a0a0a",
    border: "1px solid #1a1a1a",
    borderRadius: "12px",
    padding: "32px",
    marginBottom: "20px",
  },
  avatarRow: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "24px",
  },
  avatar: {
    width: "80px",
    height: "80px",
    background: "#ff3e3e",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "32px",
    fontWeight: "700",
    color: "#fff",
    flexShrink: 0,
  },
  avatarInfo: {},
  avatarName: {
    color: "#ffffff",
    fontSize: "20px",
    fontWeight: "700",
    margin: "0 0 4px 0",
  },
  avatarEmail: {
    color: "#555555",
    fontSize: "13px",
    margin: 0,
  },
  sectionTitle: {
    color: "#444444",
    fontSize: "11px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    marginBottom: "16px",
    marginTop: "0",
    fontWeight: "600",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    marginBottom: "16px",
  },
  label: {
    display: "block",
    color: "#555555",
    fontSize: "11px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    marginBottom: "8px",
    fontWeight: "600",
  },
  value: {
    background: "#000000",
    border: "1px solid #1a1a1a",
    borderRadius: "8px",
    padding: "12px 14px",
    color: "#ffffff",
    fontSize: "14px",
    marginBottom: "0",
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
    outline: "none",
    boxSizing: "border-box",
  },
  textarea: {
    width: "100%",
    background: "#000000",
    border: "1px solid #1a1a1a",
    borderRadius: "8px",
    padding: "12px 14px",
    color: "#ffffff",
    fontSize: "14px",
    fontFamily: "var(--font-poppins)",
    outline: "none",
    boxSizing: "border-box",
    resize: "vertical",
    minHeight: "80px",
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
    outline: "none",
    cursor: "pointer",
  },
  statsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    marginBottom: "20px",
  },
  statCard: {
    background: "#0a0a0a",
    border: "1px solid #1a1a1a",
    borderRadius: "12px",
    padding: "20px",
    textAlign: "center",
  },
  statValue: {
    color: "#ff3e3e",
    fontSize: "28px",
    fontWeight: "700",
    margin: "0 0 4px 0",
  },
  statLabel: {
    color: "#444444",
    fontSize: "11px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    margin: 0,
  },
  postsSection: {
    background: "#0a0a0a",
    border: "1px solid #1a1a1a",
    borderRadius: "12px",
    padding: "24px",
  },
  postCard: {
    background: "#000000",
    border: "1px solid #1a1a1a",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "12px",
  },
  postTitle: {
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "600",
    margin: "0 0 8px 0",
  },
  postContent: {
    color: "#555555",
    fontSize: "13px",
    lineHeight: "1.6",
    margin: "0 0 12px 0",
  },
  postFooter: {
    display: "flex",
    gap: "16px",
    alignItems: "center",
    borderTop: "1px solid #1a1a1a",
    paddingTop: "10px",
  },
  postStat: {
    color: "#444444",
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
  postTime: {
    color: "#333333",
    fontSize: "11px",
    marginLeft: "auto",
  },
  emptyPosts: {
    textAlign: "center",
    color: "#333333",
    padding: "40px 0",
    fontSize: "13px",
  },
  logoutSection: {
    marginTop: "20px",
    padding: "20px",
    background: "#0a0a0a",
    border: "1px solid #1a1a1a",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoutText: {
    color: "#555555",
    fontSize: "13px",
    margin: 0,
  },
  logoutBtn: {
    background: "transparent",
    border: "1px solid #ff3e3e",
    color: "#ff3e3e",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "13px",
    fontFamily: "var(--font-poppins)",
  },
  overlay: {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    background: "rgba(0,0,0,0.85)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modal: {
    background: "#0a0a0a",
    border: "1px solid #1a1a1a",
    borderRadius: "12px",
    padding: "40px",
    width: "100%",
    maxWidth: "360px",
    textAlign: "center",
  },
  modalTitle: {
    color: "#ffffff",
    fontSize: "18px",
    fontWeight: "700",
    marginBottom: "10px",
  },
  modalSubtitle: {
    color: "#555555",
    fontSize: "13px",
    marginBottom: "32px",
  },
  modalButtons: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
  },
  modalCancelBtn: {
    background: "transparent",
    border: "1px solid #1a1a1a",
    color: "#555555",
    padding: "12px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "13px",
    fontFamily: "var(--font-poppins)",
  },
  modalConfirmBtn: {
    background: "#ff3e3e",
    border: "none",
    color: "#ffffff",
    padding: "12px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "13px",
    fontFamily: "var(--font-poppins)",
    fontWeight: "700",
  },
  successMsg: {
    color: "#22c55e",
    fontSize: "13px",
    marginTop: "8px",
    textAlign: "center",
  },
  errorMsg: {
    color: "#ff6b6b",
    fontSize: "13px",
    marginTop: "8px",
    textAlign: "center",
  },
};

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [saveMsg, setSaveMsg] = useState("");
  const [saveError, setSaveError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/user/me")
      .then(res => {
        setUser(res.data);
        setFormData(res.data);
      })
      .catch(() => navigate("/login"));

    api.get("/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.log(err));
  }, []);

  const userPosts = posts.filter(p => p.email === user?.email);

  const handleSave = async () => {
    try {
      const res = await api.put("/user/me", {
        username: formData.username,
        bio: formData.bio,
        firstName: formData.firstName,
        lastName: formData.lastName,
        age: parseInt(formData.age),
        gender: formData.gender,
      });
      setUser(res.data);
      setFormData(res.data);
      setEditing(false);
      setSaveMsg("Profile updated successfully!");
      setTimeout(() => setSaveMsg(""), 3000);
    } catch (err) {
      setSaveError("Failed to update profile.");
      setTimeout(() => setSaveError(""), 3000);
    }
  };

  const confirmLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short", day: "numeric", year: "numeric",
    });
  };

  if (!user) return (
    <div style={{ minHeight: "100vh", background: "#000000", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <p style={{ color: "#555555", fontSize: "12px" }}>LOADING...</p>
    </div>
  );

  return (
    <div style={s.page}>
      <Navbar />

      {showLogoutModal && (
        <div style={s.overlay}>
          <div style={s.modal}>
            <div style={{ fontSize: "32px", marginBottom: "16px" }}>👋</div>
            <h2 style={s.modalTitle}>Logging Out?</h2>
            <p style={s.modalSubtitle}>Are you sure you want to logout of Patch Notes?</p>
            <div style={s.modalButtons}>
              <button style={s.modalCancelBtn} onClick={() => setShowLogoutModal(false)}>Cancel</button>
              <button style={s.modalConfirmBtn} onClick={confirmLogout}>Logout</button>
            </div>
          </div>
        </div>
      )}

      <div style={s.container}>
        <div style={s.headerRow}>
          <h1 style={s.pageTitle}>👤 Headquarters</h1>
          <div style={{ display: "flex", gap: "8px" }}>
            {editing ? (
              <>
                <button style={s.cancelBtn} onClick={() => { setEditing(false); setFormData(user); }}>
                  Cancel
                </button>
                <button style={s.saveBtn} onClick={handleSave}>
                  💾 Save Changes
                </button>
              </>
            ) : (
              <button style={s.editBtn} onClick={() => setEditing(true)}>
                ✏️ Edit Profile
              </button>
            )}
          </div>
        </div>

        {saveMsg && <p style={s.successMsg}>{saveMsg}</p>}
        {saveError && <p style={s.errorMsg}>{saveError}</p>}

        {/* Profile Card */}
        <div style={s.profileCard}>
          <div style={s.avatarRow}>
            <div style={s.avatar}>
              {user.firstName?.charAt(0).toUpperCase()}
            </div>
            <div style={s.avatarInfo}>
              <p style={s.avatarName}>{user.firstName} {user.lastName}</p>
              <p style={s.avatarEmail}>{user.email}</p>
            </div>
          </div>

          <p style={s.sectionTitle}>About Me</p>

          <label style={s.label}>Bio</label>
          {editing ? (
            <textarea
              style={s.textarea}
              value={formData.bio || ""}
              onChange={e => setFormData({ ...formData, bio: e.target.value })}
              placeholder="Tell the community about yourself..."
              maxLength={200}
            />
          ) : (
            <div style={s.value}>{user.bio || "No bio set yet."}</div>
          )}

          <div style={{ ...s.row, marginTop: "16px" }}>
            <div>
              <label style={s.label}>Username</label>
              {editing ? (
                <input
                  style={s.input}
                  value={formData.username || ""}
                  onChange={e => setFormData({ ...formData, username: e.target.value })}
                />
              ) : (
                <div style={s.value}>{user.username || "—"}</div>
              )}
            </div>
            <div>
              <label style={s.label}>Email</label>
              <div style={s.value}>{user.email}</div>
            </div>
          </div>

          <div style={s.row}>
            <div>
              <label style={s.label}>First Name</label>
              {editing ? (
                <input
                  style={s.input}
                  value={formData.firstName || ""}
                  onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                />
              ) : (
                <div style={s.value}>{user.firstName || "—"}</div>
              )}
            </div>
            <div>
              <label style={s.label}>Last Name</label>
              {editing ? (
                <input
                  style={s.input}
                  value={formData.lastName || ""}
                  onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                />
              ) : (
                <div style={s.value}>{user.lastName || "—"}</div>
              )}
            </div>
          </div>

          <div style={s.row}>
            <div>
              <label style={s.label}>Age</label>
              {editing ? (
                <input
                  style={s.input}
                  type="number"
                  value={formData.age || ""}
                  onChange={e => setFormData({ ...formData, age: e.target.value })}
                />
              ) : (
                <div style={s.value}>{user.age > 0 ? user.age : "—"}</div>
              )}
            </div>
            <div>
              <label style={s.label}>Gender</label>
              {editing ? (
                <select
                  style={s.select}
                  value={formData.gender || ""}
                  onChange={e => setFormData({ ...formData, gender: e.target.value })}
                >
                  <option value="">Select...</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              ) : (
                <div style={s.value}>{user.gender || "—"}</div>
              )}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={s.statsRow}>
          <div style={s.statCard}>
            <p style={s.statValue}>{userPosts.length}</p>
            <p style={s.statLabel}>Patch Notes</p>
          </div>
          <div style={s.statCard}>
            <p style={s.statValue}>
              {userPosts.reduce((acc, p) => acc + p.likeCount, 0)}
            </p>
            <p style={s.statLabel}>Likes</p>
          </div>
          <div style={s.statCard}>
            <p style={s.statValue}>
              {userPosts.reduce((acc, p) => acc + p.commentCount, 0)}
            </p>
            <p style={s.statLabel}>Comments</p>
          </div>
        </div>

        {/* Post History */}
        <div style={s.postsSection}>
          <p style={s.sectionTitle}>Your Posts</p>
          {userPosts.length === 0 ? (
            <div style={s.emptyPosts}>
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>📋</div>
              <p>No posts yet. Leave a note!</p>
            </div>
          ) : (
            userPosts.map(post => (
              <div key={post.id} style={s.postCard}>
                {post.title && <p style={s.postTitle}>{post.title}</p>}
                <p style={s.postContent}>{post.content}</p>
                <div style={s.postFooter}>
                  <span style={s.postStat}>♥ {post.likeCount}</span>
                  <span style={s.postStat}>💬 {post.commentCount}</span>
                  <span style={s.postTime}>{formatDate(post.createdAt)}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Logout */}
        <div style={s.logoutSection}>
          <p style={s.logoutText}>Ready to leave? You can always come back.</p>
          <button style={s.logoutBtn} onClick={() => setShowLogoutModal(true)}>
            👋 Logout
          </button>
        </div>

      </div>
    </div>
  );
}