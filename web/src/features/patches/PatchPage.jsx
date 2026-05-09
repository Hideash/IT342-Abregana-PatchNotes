import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api/axios";
import Navbar from "../../components/Navbar";
import CreatePostModal from "../../components/CreatePostModal";

const s = {
  page: {
    minHeight: "100vh",
    background: "#000000",
    fontFamily: "var(--font-poppins)",
    color: "#ffffff",
  },
  banner: {
    height: "160px",
    background: "linear-gradient(135deg, #1a0000, #ff3e3e22)",
    position: "relative",
  },
  headerCard: {
    background: "#0a0a0a",
    border: "1px solid #1a1a1a",
    borderBottom: "none",
  },
  headerContent: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "0 32px 24px 32px",
    display: "flex",
    alignItems: "flex-end",
    gap: "20px",
    marginTop: "-50px",
  },
  patchIcon: {
    width: "100px",
    height: "100px",
    background: "#000000",
    border: "4px solid #0a0a0a",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "44px",
    flexShrink: 0,
  },
  titleArea: {
    flex: 1,
    paddingBottom: "4px",
  },
  patchName: {
    color: "#ffffff",
    fontSize: "28px",
    fontWeight: "700",
    margin: "0 0 4px 0",
  },
  patchHandle: {
    color: "#444444",
    fontSize: "13px",
    margin: "0 0 8px 0",
  },
  patchDesc: {
    color: "#888888",
    fontSize: "13px",
    margin: "0 0 12px 0",
    lineHeight: "1.5",
  },
  metaRow: {
    display: "flex",
    gap: "16px",
    alignItems: "center",
    flexWrap: "wrap",
  },
  metaTag: {
    background: "#1a1a1a",
    color: "#555555",
    padding: "4px 12px",
    borderRadius: "20px",
    fontSize: "11px",
    letterSpacing: "1px",
  },
  actionArea: {
    display: "flex",
    gap: "10px",
    paddingBottom: "4px",
    flexShrink: 0,
  },
  joinBtn: {
    background: "#ff3e3e",
    color: "#ffffff",
    border: "none",
    padding: "10px 24px",
    borderRadius: "8px",
    fontWeight: "700",
    cursor: "pointer",
    fontSize: "13px",
    fontFamily: "var(--font-poppins)",
  },
  joinedBtn: {
    background: "transparent",
    color: "#555555",
    border: "1px solid #1a1a1a",
    padding: "10px 24px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "13px",
    fontFamily: "var(--font-poppins)",
  },
  createBtn: {
    background: "#1a1a1a",
    color: "#ffffff",
    border: "1px solid #1a1a1a",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "13px",
    fontFamily: "var(--font-poppins)",
  },
  divider: {
    border: "none",
    borderTop: "1px solid #1a1a1a",
    margin: "0",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "24px 32px",
    display: "grid",
    gridTemplateColumns: "1fr 300px",
    gap: "24px",
  },
  feed: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  postCard: {
    background: "#0a0a0a",
    border: "1px solid #1a1a1a",
    borderRadius: "12px",
    padding: "20px",
  },
  postHeader: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "12px",
  },
  postAvatar: {
    width: "36px",
    height: "36px",
    background: "#ff3e3e",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    color: "#fff",
    flexShrink: 0,
  },
  postUsername: {
    color: "#ffffff",
    fontSize: "13px",
    fontWeight: "600",
    margin: 0,
    cursor: "pointer",
  },
  postTime: {
    color: "#444444",
    fontSize: "11px",
    margin: 0,
  },
  postTitle: {
    color: "#ffffff",
    fontSize: "18px",
    fontWeight: "600",
    margin: "0 0 8px 0",
  },
  postContent: {
    color: "#888888",
    fontSize: "14px",
    lineHeight: "1.7",
    margin: "0 0 16px 0",
  },
  postActions: {
    display: "flex",
    gap: "12px",
    borderTop: "1px solid #1a1a1a",
    paddingTop: "12px",
  },
  actionBtn: {
    background: "transparent",
    border: "none",
    color: "#555555",
    padding: "4px 8px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "13px",
    fontFamily: "var(--font-poppins)",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  sidebar: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  sideCard: {
    background: "#0a0a0a",
    border: "1px solid #1a1a1a",
    borderRadius: "12px",
    padding: "20px",
  },
  sideTitle: {
    color: "#444444",
    fontSize: "11px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    margin: "0 0 12px 0",
    fontWeight: "600",
  },
  memberItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "8px 0",
    borderBottom: "1px solid #111111",
    cursor: "pointer",
  },
  memberAvatar: {
    width: "30px",
    height: "30px",
    background: "#ff3e3e",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    fontWeight: "700",
    color: "#fff",
  },
  memberName: {
    color: "#888888",
    fontSize: "13px",
    margin: 0,
  },
  empty: {
    textAlign: "center",
    color: "#333333",
    padding: "40px 0",
    fontSize: "13px",
  },
  loading: {
    textAlign: "center",
    color: "#333333",
    padding: "40px 0",
    fontSize: "12px",
    letterSpacing: "2px",
  },
  backBtn: {
    background: "transparent",
    border: "none",
    color: "#555555",
    cursor: "pointer",
    fontSize: "13px",
    fontFamily: "var(--font-poppins)",
    padding: "16px 32px 0",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    maxWidth: "900px",
    margin: "0 auto",
  },
};

export default function PatchPage() {
  const { patchId } = useParams();
  const navigate = useNavigate();
  const [patch, setPatch] = useState(null);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showCreatePost, setShowCreatePost] = useState(false);

  useEffect(() => {
    loadData();
  }, [patchId]);

  const loadData = async () => {
    try {
      setLoading(true);
      const [userRes, patchRes, postsRes] = await Promise.all([
        api.get("/user/me"),
        api.get(`/patches/${patchId}`),
        api.get(`/patches/${patchId}/posts`),
      ]);
      setUser(userRes.data);
      setPatch(patchRes.data);
      setPosts(postsRes.data);
    } catch (err) {
      console.error("Failed to load patch:", err);
      navigate("/home");
    } finally {
      setLoading(false);
    }
  };

  const handleJoin = async () => {
    try {
      const res = await api.post(`/patches/${patchId}/join`);
      setPatch(res.data);
    } catch (err) {
      console.error("Error joining patch:", err);
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
      <div style={s.loading}>LOADING PATCH...</div>
    </div>
  );

  if (!patch) return (
    <div style={s.page}>
      <Navbar />
      <div style={s.loading}>PATCH NOT FOUND</div>
    </div>
  );

  const canPost = patch.member || patch.privacy === "public";

  return (
    <div style={s.page}>
      <Navbar />

      {showCreatePost && (
        <CreatePostModal
          user={user}
          onClose={() => setShowCreatePost(false)}
          onPostCreated={loadData}
        />
      )}

      {/* Back Button */}
      <button style={s.backBtn} onClick={() => navigate(-1)}>
        ← Back
      </button>

      {/* Banner */}
      <div style={s.headerCard}>
        <div style={s.banner} />
        <div style={s.headerContent}>
          <div style={s.patchIcon}>{patch.icon}</div>
          <div style={s.titleArea}>
            <h1 style={s.patchName}>{patch.name}</h1>
            <p style={s.patchHandle}>
              p/{patch.name?.toLowerCase().replace(/\s/g, "")}
            </p>
            <p style={s.patchDesc}>
              {patch.description || "No description provided."}
            </p>
            <div style={s.metaRow}>
              <span style={s.metaTag}>{patch.topic}</span>
              <span style={s.metaTag}>
                {patch.privacy === "public" ? "🌍 Public"
                  : patch.privacy === "restricted" ? "🔒 Restricted"
                  : "🔐 Private"}
              </span>
              <span style={s.metaTag}>
                {patch.memberCount} {patch.memberCount === 1 ? "member" : "members"}
              </span>
              <span style={s.metaTag}>by {patch.createdBy}</span>
            </div>
          </div>
          <div style={s.actionArea}>
            <button
              style={patch.member ? s.joinedBtn : s.joinBtn}
              onClick={handleJoin}
            >
              {patch.member ? "✓ Joined" : "+ Join Patch"}
            </button>
            {canPost && (
              <button style={s.createBtn} onClick={() => setShowCreatePost(true)}>
                + Post
              </button>
            )}
          </div>
        </div>
        <hr style={s.divider} />
      </div>

      {/* Content */}
      <div style={s.container}>

        {/* Posts Feed */}
        <div style={s.feed}>
          {posts.length === 0 ? (
            <div style={s.empty}>
              <div style={{ fontSize: "40px", marginBottom: "16px" }}>📋</div>
              <p>No posts in this patch yet.</p>
              {canPost && (
                <p style={{ marginTop: "8px" }}>
                  Be the first to post!
                </p>
              )}
            </div>
          ) : (
            posts.map(post => (
              <div key={post.id} style={s.postCard}>
                <div style={s.postHeader}>
                  <div style={s.postAvatar}>
                    {post.username?.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p
                      style={s.postUsername}
                      onClick={() => navigate(`/user/${post.email}`)}
                    >
                      {post.username}
                    </p>
                    <p style={s.postTime}>{formatDate(post.createdAt)}</p>
                  </div>
                </div>
                {post.title && <p style={s.postTitle}>{post.title}</p>}
                <p style={s.postContent}>{post.content}</p>
                <div style={s.postActions}>
                  <button style={s.actionBtn}>♥ {post.likeCount || 0}</button>
                  <button style={s.actionBtn}>💬 {post.commentCount || 0}</button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Sidebar */}
        <div style={s.sidebar}>
          <div style={s.sideCard}>
            <p style={s.sideTitle}>About this Patch</p>
            <p style={{ color: "#555555", fontSize: "13px", margin: "0 0 12px 0" }}>
              {patch.description || "No description provided."}
            </p>
            <p style={{ color: "#444444", fontSize: "12px", margin: "0 0 4px 0" }}>
              🛡️ Created by <span style={{ color: "#888888" }}>{patch.createdBy}</span>
            </p>
            <p style={{ color: "#444444", fontSize: "12px", margin: 0 }}>
              👥 {patch.memberCount} {patch.memberCount === 1 ? "member" : "members"}
            </p>
          </div>

          <div style={s.sideCard}>
            <p style={s.sideTitle}>Rules</p>
            <p style={{ color: "#333333", fontSize: "12px", margin: "0 0 8px 0" }}>
              1. Be respectful to all members
            </p>
            <p style={{ color: "#333333", fontSize: "12px", margin: "0 0 8px 0" }}>
              2. Stay on topic
            </p>
            <p style={{ color: "#333333", fontSize: "12px", margin: 0 }}>
              3. No spam or self-promotion
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}