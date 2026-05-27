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
import LeftSidebar from "../components/LeftSidebar";
import CreatePostModal from "../components/CreatePostModal";

const s = {
  page: { minHeight: "100vh", background: "#000000", fontFamily: "'Poppins', sans-serif", color: "#ffffff" },
  layout: { display: "flex", alignItems: "flex-start", minHeight: "calc(100vh - 56px)" },
  main: { flex: 1, minWidth: 0 },
  bannerArea: {
    height: "80px",
    background: "linear-gradient(135deg, #180008, #ff3e3e11)",
    borderBottom: "1px solid #1a1a1a",
  },
  headerContent: {
    maxWidth: "860px", margin: "0 auto",
    padding: "0 24px 16px", display: "flex",
    alignItems: "flex-end", gap: "16px", marginTop: "-28px",
  },
  patchIcon: {
    width: "60px", height: "60px", background: "#000000",
    border: "3px solid #000000", borderRadius: "12px",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: "28px", flexShrink: 0,
  },
  titleArea: { flex: 1, paddingBottom: "4px" },
  patchName: { color: "#ffffff", fontSize: "22px", fontWeight: "700", margin: "0 0 2px 0" },
  patchHandle: { color: "#444444", fontSize: "12px", margin: "0 0 6px 0" },
  metaRow: { display: "flex", gap: "8px", flexWrap: "wrap" },
  metaTag: {
    background: "#0a0a0a", color: "#555555",
    padding: "2px 10px", borderRadius: "20px", fontSize: "11px",
    border: "1px solid #1a1a1a",
  },
  actionArea: { display: "flex", gap: "8px", paddingBottom: "4px", flexShrink: 0 },
  joinBtn: {
    background: "#59000a", color: "#ffffff", border: "none",
    padding: "8px 20px", borderRadius: "20px", fontWeight: "700",
    cursor: "pointer", fontSize: "13px", fontFamily: "'Poppins', sans-serif",
  },
  joinedBtn: {
    background: "transparent", color: "#555555",
    border: "1px solid #1a1a1a", padding: "8px 20px",
    borderRadius: "20px", cursor: "pointer", fontSize: "13px",
    fontFamily: "'Poppins', sans-serif",
  },
  createBtn: {
    background: "#0a0a0a", color: "#ffffff",
    border: "1px solid #1a1a1a", padding: "8px 16px",
    borderRadius: "20px", cursor: "pointer", fontSize: "13px",
    fontFamily: "'Poppins', sans-serif",
  },
  divider: { border: "none", borderTop: "1px solid #1a1a1a", margin: "0" },
  contentArea: { maxWidth: "860px", margin: "0 auto", padding: "20px 24px", display: "grid", gridTemplateColumns: "1fr 260px", gap: "20px" },
  feed: { display: "flex", flexDirection: "column", gap: "10px" },
  searchBar: {
    width: "100%", background: "#0a0a0a", border: "1px solid #1a1a1a",
    borderRadius: "24px", padding: "9px 16px", color: "#ffffff",
    fontSize: "13px", fontFamily: "'Poppins', sans-serif",
    outline: "none", boxSizing: "border-box", marginBottom: "12px",
  },
  postCard: {
    background: "#0a0a0a", border: "1px solid #1a1a1a",
    borderRadius: "8px", padding: "16px", cursor: "pointer",
    transition: "border-color 0.15s",
  },
  postHeader: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" },
  postAvatar: {
    width: "32px", height: "32px", background: "#59000a",
    borderRadius: "50%", display: "flex", alignItems: "center",
    justifyContent: "center", fontSize: "13px", fontWeight: "700",
    color: "#fff", flexShrink: 0,
  },
  postUsername: { color: "#ffffff", fontSize: "13px", fontWeight: "600", margin: 0, cursor: "pointer" },
  postTime: { color: "#444444", fontSize: "11px", margin: 0 },
  postTitle: { color: "#ffffff", fontSize: "16px", fontWeight: "600", margin: "0 0 6px 0" },
  postContent: { color: "#888888", fontSize: "13px", lineHeight: "1.6", margin: "0 0 12px 0" },
  postImage: { width: "100%", borderRadius: "8px", marginBottom: "10px", maxHeight: "300px", objectFit: "cover" },
  postActions: { display: "flex", gap: "4px", borderTop: "1px solid #1a1a1a", paddingTop: "10px" },
  actionBtn: {
    background: "transparent", border: "none", color: "#555555",
    padding: "4px 10px", borderRadius: "20px", cursor: "pointer",
    fontSize: "12px", fontFamily: "'Poppins', sans-serif",
    display: "flex", alignItems: "center", gap: "4px",
  },
  sidebar: { display: "flex", flexDirection: "column", gap: "14px" },
  sideCard: { background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: "12px", padding: "16px" },
  sideTitle: { color: "#444444", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 12px 0", fontWeight: "600" },
  sideText: { color: "#555555", fontSize: "13px", margin: "0 0 8px 0", lineHeight: "1.5" },
  sideMeta: { color: "#444444", fontSize: "12px", margin: "0 0 4px 0" },
  empty: { textAlign: "center", color: "#333333", padding: "40px 0", fontSize: "13px" },
  loading: { textAlign: "center", color: "#333333", padding: "40px 0", fontSize: "12px", letterSpacing: "2px" },
};

export default function PatchPage() {
  const { patchId } = useParams();
  const navigate = useNavigate();
  const [patch, setPatch] = useState(null);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => { loadData(); }, [patchId]);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredPosts(posts);
    } else {
      const q = searchQuery.toLowerCase();
      setFilteredPosts(posts.filter(p =>
        p.title?.toLowerCase().includes(q) ||
        p.content?.toLowerCase().includes(q) ||
        p.username?.toLowerCase().includes(q) ||
        p.email?.toLowerCase().includes(q)
      ));
    }
  }, [searchQuery, posts]);

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
      setFilteredPosts(postsRes.data);
    } catch (err) {
      navigate("/home");
    } finally { setLoading(false); }
  };

  const handleJoin = async () => {
    const res = await api.post(`/patches/${patchId}/join`);
    setPatch(res.data);
  };

  const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric"
  });

  if (loading) return (
    <div style={s.page}>
      <Navbar />
      <div style={{ display: "flex" }}>
        <LeftSidebar />
        <div style={s.loading}>LOADING PATCH...</div>
      </div>
    </div>
  );

  if (!patch) return (
    <div style={s.page}>
      <Navbar />
      <div style={{ display: "flex" }}>
        <LeftSidebar />
        <div style={s.loading}>PATCH NOT FOUND</div>
      </div>
    </div>
  );

  // const canPost = patch.member || patch.privacy === "public";
  // Public: anyone can post
  // Restricted: only members can post
  // Private: only members can post
  const canPost = patch.privacy === "public" || patch.member;

  return (
    <div style={s.page}>
      <Navbar />

      {showCreatePost && (
        <CreatePostModal
          user={user}
          onClose={() => setShowCreatePost(false)}
          onPostCreated={loadData}
          defaultPatchId={patchId}
        />
      )}

      <div style={s.layout}>
        <LeftSidebar />
        <div style={s.main}>
          {/* Banner */}
          <div style={s.bannerArea} />

          {/* Header */}
          <div style={s.headerContent}>
            <div style={s.patchIcon}>{patch.icon}</div>
            <div style={s.titleArea}>
              <h1 style={s.patchName}>{patch.name}</h1>
              <p style={s.patchHandle}>p/{patch.name?.toLowerCase().replace(/\s/g, "")}</p>
              <div style={s.metaRow}>
                <span style={s.metaTag}>{patch.topic}</span>
                <span style={s.metaTag}>
                  {patch.privacy === "public" ? "🌍 Public"
                    : patch.privacy === "restricted" ? "🔒 Restricted"
                    : "🔐 Private"}
                </span>
                <span style={s.metaTag}>{patch.memberCount} members</span>
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

          {/* Content */}
          <div style={s.contentArea}>
            <div style={s.feed}>
              <input
                style={s.searchBar}
                placeholder="Search posts or users in this patch..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />

              {filteredPosts.length === 0 ? (
                <div style={s.empty}>
                  <div style={{ fontSize: "36px", marginBottom: "12px" }}>📋</div>
                  <p>{searchQuery ? "No posts match your search." : "No posts in this patch yet."}</p>
                </div>
              ) : (
                filteredPosts.map(post => (
                  <div
                    key={post.id}
                    style={s.postCard}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "#ff3e3e33"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "#1a1a1a"; }}
                    onClick={() => navigate(`/post/${post.id}`)}
                  >
                    <div style={s.postHeader}>
                      <div style={s.postAvatar}>{post.username?.charAt(0).toUpperCase()}</div>
                      <div>
                        <p style={s.postUsername} onClick={(e) => { e.stopPropagation(); navigate(`/user/${post.email}`); }}>
                          {post.username}
                        </p>
                        <p style={s.postTime}>{formatDate(post.createdAt)}</p>
                      </div>
                    </div>
                    {post.title && <p style={s.postTitle}>{post.title}</p>}
                    {post.imageUrl && <img src={post.imageUrl} alt="post" style={s.postImage} />}
                    <p style={s.postContent}>{post.content}</p>
                    <div style={s.postActions}>
                      <button style={s.actionBtn} onClick={(e) => e.stopPropagation()}>♥ {post.likeCount || 0}</button>
                      <button style={s.actionBtn} onClick={(e) => e.stopPropagation()}>💬 {post.commentCount || 0}</button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Sidebar */}
            <div style={s.sidebar}>
              <div style={s.sideCard}>
                <p style={s.sideTitle}>About</p>
                <p style={s.sideText}>{patch.description || "No description provided."}</p>
                <p style={s.sideMeta}>🛡️ Created by <span style={{ color: "#888888" }}>{patch.createdBy}</span></p>
                <p style={s.sideMeta}>👥 {patch.memberCount} {patch.memberCount === 1 ? "member" : "members"}</p>
              </div>
              <div style={s.sideCard}>
                <p style={s.sideTitle}>Community Rules</p>
                <p style={{ color: "#333333", fontSize: "12px", margin: "0 0 6px 0" }}>1. Be respectful</p>
                <p style={{ color: "#333333", fontSize: "12px", margin: "0 0 6px 0" }}>2. Stay on topic</p>
                <p style={{ color: "#333333", fontSize: "12px", margin: 0 }}>3. No spam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}