import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";
import Navbar from "../components/Navbar";

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
  backBtn: {
    background: "transparent",
    border: "none",
    color: "#555555",
    cursor: "pointer",
    fontSize: "13px",
    fontFamily: "var(--font-poppins)",
    marginBottom: "24px",
    padding: "0",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  profileCard: {
    background: "#0a0a0a",
    border: "1px solid #1a1a1a",
    borderRadius: "12px",
    padding: "32px",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    gap: "24px",
  },
  avatar: {
    width: "90px",
    height: "90px",
    background: "#ff3e3e",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "36px",
    fontWeight: "700",
    color: "#fff",
    flexShrink: 0,
  },
  profileInfo: { flex: 1 },
  username: {
    color: "#ffffff",
    fontSize: "24px",
    fontWeight: "700",
    margin: "0 0 4px 0",
  },
  email: {
    color: "#444444",
    fontSize: "13px",
    margin: "0 0 8px 0",
  },
  bio: {
    color: "#666666",
    fontSize: "13px",
    margin: "0 0 16px 0",
    lineHeight: "1.5",
  },
  tags: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
  },
  tag: {
    background: "#111111",
    border: "1px solid #1a1a1a",
    color: "#555555",
    padding: "4px 12px",
    borderRadius: "20px",
    fontSize: "11px",
  },
  actionBtns: {
    display: "flex",
    gap: "10px",
    marginTop: "16px",
    flexWrap: "wrap",
  },
  messageBtn: {
    background: "#ff3e3e",
    border: "none",
    color: "#ffffff",
    padding: "10px 24px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "12px",
    fontFamily: "var(--font-poppins)",
    fontWeight: "700",
    letterSpacing: "1px",
  },
  editBtn: {
    background: "transparent",
    border: "1px solid #1a1a1a",
    color: "#555555",
    padding: "10px 24px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "12px",
    fontFamily: "var(--font-poppins)",
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
    color: "#333333",
    fontSize: "11px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    margin: 0,
  },
  sectionTitle: {
    color: "#333333",
    fontSize: "11px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    marginBottom: "16px",
    marginTop: "0",
    fontWeight: "600",
  },
  postCard: {
    background: "#0a0a0a",
    border: "1px solid #1a1a1a",
    borderRadius: "12px",
    padding: "20px",
    marginBottom: "12px",
  },
  postTitle: {
    color: "#ffffff",
    fontSize: "17px",
    fontWeight: "600",
    margin: "0 0 8px 0",
  },
  postContent: {
    color: "#555555",
    fontSize: "14px",
    lineHeight: "1.7",
    margin: "0 0 16px 0",
  },
  postFooter: {
    display: "flex",
    gap: "16px",
    alignItems: "center",
    borderTop: "1px solid #111111",
    paddingTop: "12px",
  },
  postStat: {
    color: "#333333",
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  postTime: {
    color: "#333333",
    fontSize: "11px",
    marginLeft: "auto",
  },
  empty: {
    textAlign: "center",
    color: "#333333",
    padding: "40px 0",
    fontSize: "13px",
    background: "#0a0a0a",
    border: "1px solid #1a1a1a",
    borderRadius: "12px",
  },
  loading: {
    textAlign: "center",
    color: "#333333",
    padding: "40px 0",
    fontSize: "12px",
    letterSpacing: "2px",
  },
};

export default function UserProfile() {
  const { email } = useParams();
  const [profileUser, setProfileUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [email]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [currentUserRes, profileUserRes, allPostsRes] = await Promise.all([
        api.get("/user/me"),
        api.get(`/user/${email}`),
        api.get("/posts"),
      ]);
      setCurrentUser(currentUserRes.data);
      setProfileUser(profileUserRes.data);
      const userPosts = allPostsRes.data.filter(p => p.email === email);
      setPosts(userPosts);
    } catch (err) {
      console.log("Error fetching profile:", err);
      navigate("/home");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short", day: "numeric", year: "numeric",
    });
  };

  if (loading) return (
    <div style={s.page}>
      <Navbar />
      <div style={s.loading}>LOADING PROFILE...</div>
    </div>
  );

  if (!profileUser) return (
    <div style={s.page}>
      <Navbar />
      <div style={s.loading}>USER NOT FOUND</div>
    </div>
  );

  const isOwnProfile = currentUser?.email === email;

  return (
    <div style={s.page}>
      <Navbar />
      <div style={s.container}>

        <button style={s.backBtn} onClick={() => navigate(-1)}>
          ← Back
        </button>

        {/* Profile Card */}
        <div style={s.profileCard}>
          <div style={s.avatar}>
            {profileUser.username?.charAt(0).toUpperCase()}
          </div>
          <div style={s.profileInfo}>
            <h2 style={s.username}>{profileUser.username}</h2>
            <p style={s.email}>{profileUser.email}</p>
            <p style={s.bio}>{profileUser.bio || "No bio yet."}</p>
            <div style={s.tags}>
              {profileUser.age > 0 && (
                <span style={s.tag}>Age: {profileUser.age}</span>
              )}
              {profileUser.gender && (
                <span style={s.tag}>{profileUser.gender}</span>
              )}
            </div>
            <div style={s.actionBtns}>
              {!isOwnProfile && (
                <button
                  style={s.messageBtn}
                  onClick={() => navigate("/signal", { state: { contact: profileUser } })}
                >
                  📨 Send Message
                </button>
              )}
              {isOwnProfile && (
                <button style={s.editBtn} onClick={() => navigate("/dashboard")}>
                  ✏️ Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={s.statsRow}>
          <div style={s.statCard}>
            <p style={s.statValue}>{posts.length}</p>
            <p style={s.statLabel}>Patch Notes</p>
          </div>
          <div style={s.statCard}>
            <p style={s.statValue}>{posts.reduce((acc, p) => acc + p.likeCount, 0)}</p>
            <p style={s.statLabel}>Likes</p>
          </div>
          <div style={s.statCard}>
            <p style={s.statValue}>{posts.reduce((acc, p) => acc + p.commentCount, 0)}</p>
            <p style={s.statLabel}>Comments</p>
          </div>
        </div>

        {/* Posts */}
        <p style={s.sectionTitle}>
          {isOwnProfile ? "Your Posts" : `${profileUser.username}'s Posts`}
        </p>
        {posts.length === 0 ? (
          <div style={s.empty}>
            <div style={{ fontSize: "32px", marginBottom: "12px" }}>📋</div>
            <p>No posts yet.</p>
          </div>
        ) : (
          posts.map(post => (
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
    </div>
  );
}