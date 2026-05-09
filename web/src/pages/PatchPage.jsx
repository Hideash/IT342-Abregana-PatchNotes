// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import CreatePostModal from "../components/CreatePostModal";
// import api from "../api/axios"; // Your axios instance

// const s = {
//   page: { background: "#0a0a0f", minHeight: "100vh", color: "#fff" },
//   layout: { display: "grid", gridTemplateColumns: "280px 1fr 320px", gap: "20px", maxWidth: "1400px", margin: "0 auto", padding: "20px" },
//   headerContainer: { background: "#12121a", borderRadius: "8px", overflow: "hidden", border: "1px solid #222" },
//   banner: { height: "120px", background: "linear-gradient(45deg, #1a1a2e, #ff3e3e33)" },
//   headerContent: { padding: "0 20px 20px 20px", display: "flex", alignItems: "flex-end", marginTop: "-40px", gap: "20px" },
//   patchAvatar: { width: "100px", height: "100px", background: "#000", border: "4px solid #12121a", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "40px", color: "#ff3e3e", fontWeight: "bold" },
//   titleArea: { flex: 1 },
//   bigTitle: { fontSize: "32px", margin: 0, fontWeight: "800" },
//   subText: { color: "#666", margin: 0 },
//   actionArea: { display: "flex", gap: "10px", paddingBottom: "10px" },
//   joinBtn: { background: "#ff3e3e", color: "#white", border: "none", padding: "10px 24px", borderRadius: "20px", fontWeight: "bold", cursor: "pointer" },
//   joinedBtn: { background: "transparent", color: "#fff", border: "1px solid #444", padding: "10px 24px", borderRadius: "20px", cursor: "pointer" },
//   createBtn: { background: "#1a1a1a", color: "#fff", border: "1px solid #333", padding: "10px 24px", borderRadius: "20px", cursor: "pointer" },
//   middleFeed: { display: "flex", flexDirection: "column" },
//   postCard: { background: "#12121a", padding: "20px", borderRadius: "8px", border: "1px solid #222", marginTop: "15px" }
// };


// export default function PatchPage() {
//   const { patchId } = useParams();
//   const navigate = useNavigate();

//   const [patch, setPatch] = useState(null);
//   const [posts, setPosts] = useState([]);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadPageData = async () => {
//       try {
//         setLoading(true);
//         // 1. Get User
//         const userRes = await api.get("/user/me");
//         setUser(userRes.data);

//         // 2. Get Patch Details (The endpoint we just made)
//         const patchRes = await api.get(`/patches/${patchId}`);
//         setPatch(patchRes.data);

//         // 3. Get Patch Posts (The other endpoint we just made)
//         const postsRes = await api.get(`/patches/${patchId}/posts`);
//         setPosts(postsRes.data);
//       } catch (err) {
//         console.error("Failed to load patch page:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadPageData();
//   }, [patchId]);

//   const handleJoin = async () => {
//     try {
//       const res = await api.post(`/patches/${patchId}/join`);
//       setPatch(res.data); // Updates the 'joined' status immediately
//     } catch (err) {
//       alert("Error joining patch");
//     }
//   };

//   if (loading) return <div style={s.loading}>LOADING...</div>;

//   return (
//     <div style={s.page}>
//       <Navbar />
//       <div style={s.layout}>
        
//         {/* LEFT SIDEBAR (Reuse your Home sidebar code here) */}
//         <div style={s.leftSidebar}>
//            {/* ... paste your Home.jsx buttons and patch lists here ... */}
//         </div>

//         {/* MIDDLE FEED */}
//         <div style={s.middleFeed}>
          
//           {/* REDDIT-STYLE HEADER */}
//           <div style={s.headerContainer}>
//             <div style={s.banner}></div>
//             <div style={s.headerContent}>
//               <div style={s.patchAvatar}>
//                 {patch.name?.charAt(0).toUpperCase()}
//               </div>
//               <div style={s.titleArea}>
//                 <h1 style={s.bigTitle}>{patch.name}</h1>
//                 <p style={s.subText}>p/{patch.name?.toLowerCase().replace(/\s/g, '')}</p>
//               </div>
//               <div style={s.actionArea}>
//                 <button 
//                   style={patch.joined ? s.joinedBtn : s.joinBtn} 
//                   onClick={handleJoin}
//                 >
//                   {patch.joined ? "Joined" : "Join"}
//                 </button>

//                 {/* CONDITION: Can post if joined OR if patch is public */}
//                 {(patch.joined || patch.type === "PUBLIC") && (
//                   <button style={s.createBtn} onClick={() => {/* Trigger Modal */}}>
//                     + Create Post
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* POSTS FOR THIS PATCH */}
//           <div style={s.postsList}>
//             {posts.map(post => (
//               <div key={post.id} style={s.postCard}>
//                 <p style={s.postUser}>{post.username}</p>
//                 <p style={s.postContent}>{post.content}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT SIDEBAR (Reuse Home sidebar code here) */}
//         <div style={s.rightSidebar}>
//            {/* ... paste your Home.jsx right sidebar content here ... */}
//         </div>

//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import CreatePostModal from "../components/CreatePostModal";

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