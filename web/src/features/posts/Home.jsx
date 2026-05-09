import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import Navbar from "../../components/Navbar";
import CreatePostModal from "../../components/CreatePostModal";
import CreatePatchModal from "../../components/CreatePatchModal";
 
const s = {
  page: {
    minHeight: "100vh",
    background: "#000000",
    fontFamily: "var(--font-poppins)",
    color: "#ffffff",
  },
  layout: {
    display: "flex",
    alignItems: "flex-start",
    minHeight: "calc(100vh - 64px)",
  },
 
  // LEFT SIDEBAR
  leftSidebar: {
    width: "260px",
    minWidth: "260px",
    borderRight: "1px solid #1a1a1a",
    padding: "24px 16px",
    position: "sticky",
    top: "64px",
    height: "calc(100vh - 64px)",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "10px 12px",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "4px",
    color: "#555555",
    fontSize: "13px",
    background: "transparent",
    border: "none",
    width: "100%",
    textAlign: "left",
    fontFamily: "var(--font-poppins)",
    transition: "color 0.15s",
  },
  navItemActive: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "10px 12px",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "4px",
    color: "#ffffff",
    fontSize: "13px",
    background: "#0a0a0a",
    border: "1px solid #1a1a1a",
    width: "100%",
    textAlign: "left",
    fontFamily: "var(--font-poppins)",
    fontWeight: "600",
  },
  divider: {
    border: "none",
    borderTop: "1px solid #1a1a1a",
    margin: "16px 0",
  },
  sectionTitle: {
    color: "#333333",
    fontSize: "11px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    margin: "0 0 8px 8px",
    fontWeight: "600",
  },
  patchItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "8px 12px",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "2px",
    transition: "background 0.15s",
  },
  patchAvatar: {
    width: "28px",
    height: "28px",
    background: "transparent",
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    flexShrink: 0,
  },
  patchName: {
    color: "#666666",
    fontSize: "13px",
    margin: 0,
    fontFamily: "var(--font-poppins)",
  },
  patchMembers: {
    color: "#333333",
    fontSize: "11px",
    margin: 0,
    fontFamily: "var(--font-poppins)",
  },
  emptyPatches: {
    color: "#333333",
    fontSize: "12px",
    padding: "4px 12px",
    fontFamily: "var(--font-poppins)",
  },
 
  // MIDDLE FEED
  middleFeed: {
    flex: 1,
    padding: "24px 32px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    maxWidth: "680px",
    margin: "0 auto",
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
    marginBottom: "8px",
  },
  postAvatar: {
    width: "40px",
    height: "40px",
    background: "#1a1a1a",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    fontWeight: "700",
    color: "#ff3e3e",
    flexShrink: 0,
    fontFamily: "var(--font-poppins)",
  },
  postUsername: {
    color: "#ffffff",
    fontSize: "13px",
    fontWeight: "600",
    margin: 0,
    cursor: "pointer",
    fontFamily: "var(--font-poppins)",
  },
  postTime: {
    color: "#333333",
    fontSize: "11px",
    margin: 0,
    fontFamily: "var(--font-poppins)",
  },
  postTitle: {
    color: "#ffffff",
    fontSize: "18px",
    fontWeight: "600",
    margin: "12px 0 8px 0",
    lineHeight: "1.3",
    fontFamily: "var(--font-poppins)",
  },
  postContent: {
    color: "#555555",
    fontSize: "14px",
    lineHeight: "1.7",
    margin: "0 0 16px 0",
    fontFamily: "var(--font-poppins)",
  },
  postActions: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    borderTop: "1px solid #111111",
    paddingTop: "12px",
  },
  likeBtn: {
    background: "transparent",
    border: "none",
    color: "#444444",
    padding: "6px 10px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "13px",
    fontFamily: "var(--font-poppins)",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  likeBtnActive: {
    background: "#ff3e3e",
    border: "none",
    color: "#ffffff",
    padding: "6px 10px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "13px",
    fontFamily: "var(--font-poppins)",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  commentBtn: {
    background: "transparent",
    border: "none",
    color: "#444444",
    padding: "6px 10px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "13px",
    fontFamily: "var(--font-poppins)",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  commentsSection: {
    marginTop: "16px",
    borderTop: "1px solid #111111",
    paddingTop: "16px",
  },
  commentCard: {
    display: "flex",
    gap: "10px",
    marginBottom: "12px",
  },
  commentAvatar: {
    width: "30px",
    height: "30px",
    background: "#1a1a1a",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    flexShrink: 0,
    color: "#555555",
    fontFamily: "var(--font-poppins)",
  },
  commentBubble: {
    background: "#000000",
    border: "1px solid #1a1a1a",
    borderRadius: "12px",
    padding: "10px 14px",
    flex: 1,
  },
  commentUsername: {
    color: "#ffffff",
    fontSize: "12px",
    fontWeight: "600",
    margin: "0 0 4px 0",
    fontFamily: "var(--font-poppins)",
  },
  commentContent: {
    color: "#888888",
    fontSize: "13px",
    margin: "0 0 4px 0",
    fontFamily: "var(--font-poppins)",
  },
  commentTime: {
    color: "#333333",
    fontSize: "11px",
    margin: 0,
    fontFamily: "var(--font-poppins)",
  },
  commentInputRow: {
    display: "flex",
    gap: "10px",
    marginTop: "12px",
    alignItems: "center",
  },
  commentInputAvatar: {
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
    flexShrink: 0,
    fontFamily: "var(--font-poppins)",
  },
  commentInput: {
    flex: 1,
    background: "#000000",
    border: "1px solid #1a1a1a",
    borderRadius: "20px",
    padding: "8px 16px",
    color: "#ffffff",
    fontSize: "13px",
    fontFamily: "var(--font-poppins)",
    outline: "none",
  },
  commentSubmitBtn: {
    background: "#ff3e3e",
    color: "#ffffff",
    border: "none",
    borderRadius: "50%",
    width: "32px",
    height: "32px",
    fontSize: "14px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  emptyFeed: {
    textAlign: "center",
    color: "#333333",
    padding: "60px 0",
    fontSize: "13px",
    fontFamily: "var(--font-poppins)",
  },
 
  // RIGHT SIDEBAR
  rightSidebar: {
    width: "260px",
    minWidth: "260px",
    borderLeft: "1px solid #1a1a1a",
    padding: "24px 16px",
    position: "sticky",
    top: "64px",
    height: "calc(100vh - 64px)",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
  },
  rightSectionTitle: {
    color: "#333333",
    fontSize: "11px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    margin: "0 0 12px 0",
    fontWeight: "600",
    fontFamily: "var(--font-poppins)",
  },
  recentPost: {
    padding: "8px",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "4px",
  },
  recentPostName: {
    color: "#555555",
    fontSize: "12px",
    margin: "0 0 2px 0",
    fontWeight: "600",
    fontFamily: "var(--font-poppins)",
  },
  recentPostContent: {
    color: "#333333",
    fontSize: "12px",
    margin: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontFamily: "var(--font-poppins)",
  },
  onlineUser: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "8px",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "4px",
  },
  onlineAvatarWrap: {
    position: "relative",
    flexShrink: 0,
  },
  onlineAvatar: {
    width: "30px",
    height: "30px",
    background: "#ff3e3e",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    fontWeight: "700",
    color: "#ffffff",
    fontFamily: "var(--font-poppins)",
  },
  onlineDot: {
    width: "8px",
    height: "8px",
    background: "#22c55e",
    borderRadius: "50%",
    position: "absolute",
    bottom: "0px",
    right: "0px",
    border: "2px solid #000000",
  },
  onlineUsername: {
    color: "#555555",
    fontSize: "12px",
    margin: 0,
    flex: 1,
    fontFamily: "var(--font-poppins)",
  },
};
 
export default function Home() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [expandedComments, setExpandedComments] = useState({});
  const [comments, setComments] = useState({});
  const [commentInputs, setCommentInputs] = useState({});
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [showCreatePatch, setShowCreatePatch] = useState(false);
  const [trendingPatches, setTrendingPatches] = useState([]);
  const [myPatches, setMyPatches] = useState([]);
  const navigate = useNavigate();
 
  useEffect(() => {
    api.get("/user/me")
      .then(res => setUser(res.data))
      .catch(() => navigate("/login"));
    fetchPosts();
  }, []);
 
  useEffect(() => {
    if (!user) return;
    fetchSidebarData();
  }, [user]);
 
  const fetchSidebarData = async () => {
    try {
      const [myPatchesRes, trendingRes] = await Promise.all([
        api.get("/patches/mine"),
        api.get("/patches/trending"),
      ]);
      setMyPatches(myPatchesRes.data);
      setTrendingPatches(trendingRes.data.slice(0, 5));
    } catch (err) {
      console.log("Sidebar fetch error:", err);
    }
  };
 
  const fetchPosts = () => {
    api.get("/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.log("Error fetching posts:", err));
  };
 
  const handleLike = async (postId) => {
    try {
      const res = await api.post(`/posts/${postId}/like`);
      setPosts(posts.map(p => p.id === postId ? res.data : p));
    } catch (err) {
      console.log("Error liking post:", err);
    }
  };
 
  const toggleComments = async (postId) => {
    const isExpanded = expandedComments[postId];
    setExpandedComments({ ...expandedComments, [postId]: !isExpanded });
    if (!isExpanded) {
      try {
        const res = await api.get(`/posts/${postId}/comments`);
        setComments({ ...comments, [postId]: res.data });
      } catch (err) {
        console.log("Error fetching comments:", err);
      }
    }
  };
 
  const handleAddComment = async (postId) => {
    const content = commentInputs[postId];
    if (!content || !content.trim()) return;
    try {
      await api.post(`/posts/${postId}/comments`, { content });
      setCommentInputs({ ...commentInputs, [postId]: "" });
      const res = await api.get(`/posts/${postId}/comments`);
      setComments({ ...comments, [postId]: res.data });
      fetchPosts();
    } catch (err) {
      console.log("Error adding comment:", err);
    }
  };
 
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short", day: "numeric", year: "numeric",
      hour: "2-digit", minute: "2-digit",
    });
  };
 
  if (!user) return (
    <div style={{ minHeight: "100vh", background: "#000000", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <p style={{ color: "#333333", letterSpacing: "2px", fontSize: "12px", fontFamily: "var(--font-poppins)" }}>LOADING...</p>
    </div>
  );
 
  return (
    <div style={s.page}>
      {showCreatePost && (
        <CreatePostModal
          user={user}
          onClose={() => setShowCreatePost(false)}
          onPostCreated={fetchPosts}
        />
      )}
      {showCreatePatch && (
        <CreatePatchModal
          onClose={() => setShowCreatePatch(false)}
          onPatchCreated={() => {
            setShowCreatePatch(false);
            fetchSidebarData();
          }}
        />
      )}
 
      <Navbar />
      <div style={s.layout}>
 
        {/* LEFT SIDEBAR */}
        <div style={s.leftSidebar}>
          <button style={s.navItemActive} onClick={() => navigate("/home")}>
            🏠 Home
          </button>
          <button style={s.navItem} onClick={() => navigate("/discover")}>
            🧭 Explore
          </button>
          <button style={s.navItem} onClick={() => setShowCreatePost(true)}>
            📝 Leave a Note
          </button>
          <button style={s.navItem} onClick={() => setShowCreatePatch(true)}>
            🛡️ Start a Patch
          </button>
 
          <hr style={s.divider} />
 
          <p style={s.sectionTitle}>Trending Patches</p>
          {trendingPatches.length === 0 ? (
            <p style={s.emptyPatches}>No patches yet</p>
          ) : (
            trendingPatches.map(patch => (
              <div
                key={patch.id}
                style={s.patchItem}
                onClick={() => navigate(`/patch/${patch.id}`)}
                onMouseEnter={e => e.currentTarget.style.background = "#0a0a0a"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                <div style={s.patchAvatar}>{patch.icon || "🛡️"}</div>
                <div>
                  <p style={s.patchName}>{patch.name}</p>
                  <p style={s.patchMembers}>{patch.memberCount?.toLocaleString() || 0} members</p>
                </div>
              </div>
            ))
          )}
 
          <hr style={s.divider} />
 
          <p style={s.sectionTitle}>Patch Together</p>
          {myPatches.length === 0 ? (
            <p style={s.emptyPatches}>No patches joined yet</p>
          ) : (
            myPatches.map(patch => (
              <div
                key={patch.id}
                style={s.patchItem}
                onClick={() => navigate(`/patch/${patch.id}`)}
                onMouseEnter={e => e.currentTarget.style.background = "#0a0a0a"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                <div style={s.patchAvatar}>{patch.icon || "🛡️"}</div>
                <p style={s.patchName}>{patch.name}</p>
              </div>
            ))
          )}
        </div>
 
        {/* MIDDLE FEED */}
        <div style={s.middleFeed}>
          {posts.length === 0 ? (
            <div style={s.emptyFeed}>
              <div style={{ fontSize: "40px", marginBottom: "16px" }}>📋</div>
              <p style={{ fontSize: "16px", marginBottom: "8px", color: "#555555" }}>No patch notes yet.</p>
              <p>Start sharing game updates with the community!</p>
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
                  <button
                    style={post.likedByCurrentUser ? s.likeBtnActive : s.likeBtn}
                    onClick={() => handleLike(post.id)}
                  >
                    ♥ {post.likeCount} {post.likeCount === 1 ? "Like" : "Likes"}
                  </button>
                  <button style={s.commentBtn} onClick={() => toggleComments(post.id)}>
                    💬 {post.commentCount} {post.commentCount === 1 ? "Comment" : "Comments"}
                  </button>
                </div>
 
                {expandedComments[post.id] && (
                  <div style={s.commentsSection}>
                    {comments[post.id]?.length === 0 && (
                      <p style={{ color: "#333333", fontSize: "12px", marginBottom: "12px", fontFamily: "var(--font-poppins)" }}>
                        No comments yet. Be the first!
                      </p>
                    )}
                    {comments[post.id]?.map(comment => (
                      <div key={comment.id} style={s.commentCard}>
                        <div style={s.commentAvatar}>
                          {comment.username?.charAt(0).toUpperCase()}
                        </div>
                        <div style={s.commentBubble}>
                          <p style={s.commentUsername}>{comment.username}</p>
                          <p style={s.commentContent}>{comment.content}</p>
                          <p style={s.commentTime}>{formatDate(comment.createdAt)}</p>
                        </div>
                      </div>
                    ))}
                    <div style={s.commentInputRow}>
                      <div style={s.commentInputAvatar}>
                        {user.firstName?.charAt(0).toUpperCase()}
                      </div>
                      <input
                        style={s.commentInput}
                        placeholder="Write a comment..."
                        value={commentInputs[post.id] || ""}
                        onChange={(e) =>
                          setCommentInputs({ ...commentInputs, [post.id]: e.target.value })
                        }
                        onKeyDown={(e) => { if (e.key === "Enter") handleAddComment(post.id); }}
                      />
                      <button style={s.commentSubmitBtn} onClick={() => handleAddComment(post.id)}>
                        ➤
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
 
        {/* RIGHT SIDEBAR */}
        <div style={s.rightSidebar}>
          <p style={s.rightSectionTitle}>From Your Patches</p>
          {posts.slice(0, 5).map((post, index) => (
            <div key={index} style={s.recentPost}>
              <p style={s.recentPostName}>{post.username}</p>
              <p style={s.recentPostContent}>{post.title || post.content}</p>
            </div>
          ))}
 
          <hr style={s.divider} />
 
          <p style={s.rightSectionTitle}>Online Allies</p>
          {posts.slice(0, 4).map((post, index) => (
            <div
              key={index}
              style={s.onlineUser}
              onClick={() => navigate("/signal")}
            >
              <div style={s.onlineAvatarWrap}>
                <div style={s.onlineAvatar}>
                  {post.username?.charAt(0).toUpperCase()}
                </div>
                <div style={s.onlineDot} />
              </div>
              <p style={s.onlineUsername}>{post.username}</p>
            </div>
          ))}
        </div>
 
      </div>
    </div>
  );
}