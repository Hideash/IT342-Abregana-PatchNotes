// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import api from "../api/axios";
// import Navbar from "../components/Navbar";

//   const s = {
//     page: {
//       minHeight: "100vh",
//       background: "#0a0a0f",
//       fontFamily: "'Courier New', monospace",
//       color: "#ffffff",
//     },
//     container: {
//       maxWidth: "800px",
//       margin: "0 auto",
//       padding: "32px",
//     },
//     profileCard: {
//       background: "#111118",
//       border: "1px solid #2a2a3d",
//       borderRadius: "12px",
//       padding: "32px",
//       marginBottom: "24px",
//       display: "flex",
//       alignItems: "center",
//       gap: "24px",
//     },
//     avatar: {
//       width: "90px",
//       height: "90px",
//       background: "#6366f1",
//       borderRadius: "50%",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       fontSize: "36px",
//       fontWeight: "bold",
//       color: "#fff",
//       flexShrink: 0,
//     },
//     profileInfo: {
//       flex: 1,
//     },
//     username: {
//       color: "#ffffff",
//       fontSize: "24px",
//       fontWeight: "bold",
//       margin: "0 0 4px 0",
//     },
//     email: {
//       color: "#555570",
//       fontSize: "13px",
//       margin: "0 0 8px 0",
//     },
//     bio: {
//       color: "#888899",
//       fontSize: "13px",
//       margin: "0 0 16px 0",
//     },
//     tags: {
//       display: "flex",
//       gap: "8px",
//       flexWrap: "wrap",
//     },
//     tag: {
//       background: "#0d0d14",
//       border: "1px solid #2a2a3d",
//       color: "#888899",
//       padding: "4px 12px",
//       borderRadius: "20px",
//       fontSize: "11px",
//     },
//     messageBtn: {
//       background: "#6366f1",
//       border: "none",
//       color: "#ffffff",
//       padding: "10px 24px",
//       borderRadius: "20px",
//       cursor: "pointer",
//       fontSize: "12px",
//       fontFamily: "'Courier New', monospace",
//       fontWeight: "bold",
//       letterSpacing: "1px",
//       marginTop: "16px",
//     },
//     statsRow: {
//       display: "grid",
//       gridTemplateColumns: "repeat(3, 1fr)",
//       gap: "16px",
//       marginBottom: "24px",
//     },
//     statCard: {
//       background: "#111118",
//       border: "1px solid #2a2a3d",
//       borderRadius: "12px",
//       padding: "20px",
//       textAlign: "center",
//     },
//     statValue: {
//       color: "#6366f1",
//       fontSize: "28px",
//       fontWeight: "bold",
//       margin: "0 0 4px 0",
//     },
//     statLabel: {
//       color: "#555570",
//       fontSize: "11px",
//       letterSpacing: "2px",
//       textTransform: "uppercase",
//       margin: 0,
//     },
//     sectionTitle: {
//       color: "#888899",
//       fontSize: "11px",
//       letterSpacing: "3px",
//       textTransform: "uppercase",
//       marginBottom: "16px",
//       marginTop: "0",
//     },
//     postCard: {
//       background: "#111118",
//       border: "1px solid #2a2a3d",
//       borderRadius: "12px",
//       padding: "20px",
//       marginBottom: "16px",
//     },
//     postTitle: {
//       color: "#ffffff",
//       fontSize: "18px",
//       fontWeight: "bold",
//       margin: "0 0 8px 0",
//     },
//     postContent: {
//       color: "#888899",
//       fontSize: "14px",
//       lineHeight: "1.7",
//       margin: "0 0 16px 0",
//     },
//     postFooter: {
//       display: "flex",
//       gap: "16px",
//       alignItems: "center",
//       borderTop: "1px solid #2a2a3d",
//       paddingTop: "12px",
//     },
//     postStat: {
//       color: "#555570",
//       fontSize: "12px",
//       display: "flex",
//       alignItems: "center",
//       gap: "6px",
//     },
//     postTime: {
//       color: "#555570",
//       fontSize: "11px",
//       marginLeft: "auto",
//     },
//     empty: {
//       textAlign: "center",
//       color: "#555570",
//       padding: "40px 0",
//       fontSize: "13px",
//       background: "#111118",
//       border: "1px solid #2a2a3d",
//       borderRadius: "12px",
//     },
//     loading: {
//       textAlign: "center",
//       color: "#555570",
//       padding: "40px 0",
//       fontSize: "12px",
//       letterSpacing: "2px",
//     },
//     backBtn: {
//       background: "transparent",
//       border: "none",
//       color: "#6366f1",
//       cursor: "pointer",
//       fontSize: "13px",
//       fontFamily: "'Courier New', monospace",
//       marginBottom: "24px",
//       padding: "0",
//       display: "flex",
//       alignItems: "center",
//       gap: "8px",
//     },
//   };

// export default function UserProfile() {
//   const { email } = useParams();
//   const [profileUser, setProfileUser] = useState(null);
//   const [posts, setPosts] = useState([]);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchData();
//   }, [email]);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const [currentUserRes, profileUserRes, allPostsRes] = await Promise.all([
//         api.get("/user/me"),
//         api.get(`/user/${email}`),
//         api.get("/posts"),
//       ]);
//       setCurrentUser(currentUserRes.data);
//       setProfileUser(profileUserRes.data);
//       const userPosts = allPostsRes.data.filter(p => p.email === email);
//       setPosts(userPosts);
//     } catch (err) {
//       console.log("Error fetching profile:", err);
//       navigate("/home");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const formatDate = (dateStr) => {
//     const date = new Date(dateStr);
//     return date.toLocaleDateString("en-US", {
//       month: "short", day: "numeric", year: "numeric",
//     });
//   };

//   if (loading) return (
//     <div style={s.page}>
//       <Navbar />
//       <div style={s.loading}>LOADING PROFILE...</div>
//     </div>
//   );

//   if (!profileUser) return (
//     <div style={s.page}>
//       <Navbar />
//       <div style={s.loading}>USER NOT FOUND</div>
//     </div>
//   );

//   const isOwnProfile = currentUser?.email === email;

//   return (
//     <div style={s.page}>
//       <Navbar />
//       <div style={s.container}>

//         {/* Back Button */}
//         <button style={s.backBtn} onClick={() => navigate(-1)}>
//           ← Back
//         </button>

//         {/* Profile Card */}
//         <div style={s.profileCard}>
//           <div style={s.avatar}>
//             {profileUser.username?.charAt(0).toUpperCase()}
//           </div>
//           <div style={s.profileInfo}>
//             <h2 style={s.username}>{profileUser.username}</h2>
//             <p style={s.email}>{profileUser.email}</p>
//             <p style={s.bio}>{profileUser.bio || "No bio yet."}</p>
//             <div style={s.tags}>
//               {profileUser.age > 0 && (
//                 <span style={s.tag}>Age: {profileUser.age}</span>
//               )}
//               {profileUser.gender && (
//                 <span style={s.tag}>{profileUser.gender}</span>
//               )}
//             </div>
//             {!isOwnProfile && (
//               // <button
//               //   style={s.messageBtn}
//               //   onClick={() => navigate("/signal")}
//               // >
//               //   📨 Send Message
//               // </button>
//               <button 
//                 style={s.messageBtn} 
//                 onClick={() => navigate("/signal", { state: { contact: profileUser } })}
//               >
//                 📨 Send Message
//               </button>
//             )}
//             {isOwnProfile && (
//               <button
//                 style={s.messageBtn}
//                 onClick={() => navigate("/dashboard")}
//               >
//                 ✏️ Edit Profile
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Stats */}
//         <div style={s.statsRow}>
//           <div style={s.statCard}>
//             <p style={s.statValue}>{posts.length}</p>
//             <p style={s.statLabel}>Patch Notes</p>
//           </div>
//           <div style={s.statCard}>
//             <p style={s.statValue}>
//               {posts.reduce((acc, p) => acc + p.likeCount, 0)}
//             </p>
//             <p style={s.statLabel}>Likes</p>
//           </div>
//           <div style={s.statCard}>
//             <p style={s.statValue}>
//               {posts.reduce((acc, p) => acc + p.commentCount, 0)}
//             </p>
//             <p style={s.statLabel}>Comments</p>
//           </div>
//         </div>

//         {/* Posts */}
//         <p style={s.sectionTitle}>
//           {isOwnProfile ? "Your Posts" : `${profileUser.username}'s Posts`}
//         </p>
//         {posts.length === 0 ? (
//           <div style={s.empty}>
//             <div style={{ fontSize: "32px", marginBottom: "12px" }}>📋</div>
//             <p>No posts yet.</p>
//           </div>
//         ) : (
//           posts.map(post => (
//             <div key={post.id} style={s.postCard}>
//               {post.title && (
//                 <p style={s.postTitle}>{post.title}</p>
//               )}
//               <p style={s.postContent}>{post.content}</p>
//               <div style={s.postFooter}>
//                 <span style={s.postStat}>♥ {post.likeCount}</span>
//                 <span style={s.postStat}>💬 {post.commentCount}</span>
//                 <span style={s.postTime}>{formatDate(post.createdAt)}</span>
//               </div>
//             </div>
//           ))
//         )}

//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";

const s = {
  page: { minHeight: "100vh", background: "#000000", fontFamily: "'Poppins', sans-serif", color: "#ffffff" },
  layout: { display: "flex", alignItems: "flex-start", minHeight: "calc(100vh - 56px)" },
  container: { flex: 1, maxWidth: "760px", margin: "0 auto", padding: "24px", minWidth: 0 },
  profileCard: { background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: "12px", padding: "24px", marginBottom: "16px", display: "flex", alignItems: "center", gap: "20px" },
  avatar: {
    width: "80px", height: "80px", background: "#59000a", borderRadius: "50%",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: "32px", fontWeight: "700", color: "#fff", flexShrink: 0,
  },
  profileInfo: { flex: 1 },
  username: { color: "#ffffff", fontSize: "22px", fontWeight: "700", margin: "0 0 4px 0" },
  email: { color: "#555555", fontSize: "13px", margin: "0 0 6px 0" },
  bio: { color: "#888888", fontSize: "13px", margin: "0 0 12px 0" },
  tags: { display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "12px" },
  tag: { background: "#0a0a0a", border: "1px solid #1a1a1a", color: "#555555", padding: "3px 12px", borderRadius: "20px", fontSize: "11px" },
  btnRow: { display: "flex", gap: "8px", flexWrap: "wrap" },
  messageBtn: {
    background: "#59000a", border: "none", color: "#ffffff",
    padding: "9px 20px", borderRadius: "20px", cursor: "pointer",
    fontSize: "12px", fontFamily: "'Poppins', sans-serif", fontWeight: "600",
  },
  followBtn: {
    background: "transparent", border: "1px solid #59000a", color: "#59000a",
    padding: "9px 20px", borderRadius: "20px", cursor: "pointer",
    fontSize: "12px", fontFamily: "'Poppins', sans-serif",
  },
  followingBtn: {
    background: "transparent", border: "1px solid #1a1a1a", color: "#555555",
    padding: "9px 20px", borderRadius: "20px", cursor: "pointer",
    fontSize: "12px", fontFamily: "'Poppins', sans-serif",
  },
  editBtn: {
    background: "transparent", border: "1px solid #1a1a1a", color: "#888888",
    padding: "9px 20px", borderRadius: "20px", cursor: "pointer",
    fontSize: "12px", fontFamily: "'Poppins', sans-serif",
  },
  statsRow: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "16px" },
  statCard: { background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: "12px", padding: "16px", textAlign: "center" },
  statValue: { color: "#59000a", fontSize: "24px", fontWeight: "700", margin: "0 0 4px 0" },
  statLabel: { color: "#444444", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", margin: 0 },
  sectionTitle: { color: "#444444", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px", fontWeight: "600" },
  postCard: { background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: "8px", padding: "16px", marginBottom: "10px", cursor: "pointer", transition: "border-color 0.15s" },
  postTitle: { color: "#ffffff", fontSize: "16px", fontWeight: "600", margin: "0 0 6px 0" },
  postContent: { color: "#555555", fontSize: "13px", lineHeight: "1.6", margin: "0 0 12px 0" },
  postFooter: { display: "flex", gap: "14px", alignItems: "center", borderTop: "1px solid #1a1a1a", paddingTop: "8px" },
  postStat: { color: "#444444", fontSize: "12px" },
  postTime: { color: "#333333", fontSize: "11px", marginLeft: "auto" },
  empty: { textAlign: "center", color: "#333333", padding: "40px 0", fontSize: "13px", background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: "12px" },
  loading: { textAlign: "center", color: "#333333", padding: "40px 0", fontSize: "12px" },
};

export default function UserProfile() {
  const { email } = useParams();
  const [profileUser, setProfileUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [following, setFollowing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => { fetchData(); }, [email]);

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
      setFollowing(profileUserRes.data.following || false);
      setPosts(allPostsRes.data.filter(p => p.email === email));
    } catch { navigate("/home"); }
    finally { setLoading(false); }
  };

  const handleFollow = async () => {
    await api.post(`/user/${email}/follow`);
    setFollowing(!following);
  };

  const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric"
  });

  if (loading) return (
    <div style={s.page}>
      <Navbar />
      <div style={{ display: "flex" }}>
        <LeftSidebar />
        <div style={s.loading}>LOADING PROFILE...</div>
      </div>
    </div>
  );

  if (!profileUser) return null;

  const isOwnProfile = currentUser?.email === email;

  return (
    <div style={s.page}>
      <Navbar />
      <div style={s.layout}>
        <LeftSidebar />
        <div style={s.container}>
          <div style={s.profileCard}>
            <div style={s.avatar}>{profileUser.username?.charAt(0).toUpperCase()}</div>
            <div style={s.profileInfo}>
              <h2 style={s.username}>{profileUser.username}</h2>
              <p style={s.email}>{profileUser.email}</p>
              <p style={s.bio}>{profileUser.bio || "No bio yet."}</p>
              <div style={s.tags}>
                {profileUser.age > 0 && <span style={s.tag}>Age: {profileUser.age}</span>}
                {profileUser.gender && <span style={s.tag}>{profileUser.gender}</span>}
              </div>
              <div style={s.btnRow}>
                {!isOwnProfile && (
                  <>
                    <button
                      style={s.messageBtn}
                      onClick={() => navigate("/signal", { state: { contact: profileUser } })}
                    >
                      💬 Message
                    </button>
                    <button
                      style={following ? s.followingBtn : s.followBtn}
                      onClick={handleFollow}
                    >
                      {following ? "✓ Following" : "+ Follow"}
                    </button>
                  </>
                )}
                {isOwnProfile && (
                  <button style={s.editBtn} onClick={() => navigate("/dashboard")}>
                    ✏️ Edit Profile
                  </button>
                )}
              </div>
            </div>
          </div>

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

          <p style={s.sectionTitle}>{isOwnProfile ? "Your Posts" : `${profileUser.username}'s Posts`}</p>
          {posts.length === 0 ? (
            <div style={s.empty}>
              <div style={{ fontSize: "32px", marginBottom: "10px" }}>📋</div>
              <p>No posts yet.</p>
            </div>
          ) : (
            posts.map(post => (
              <div
                key={post.id}
                style={s.postCard}
                onClick={() => navigate(`/post/${post.id}`)}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#ff3e3e33"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1a1a1a"; }}
              >
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
    </div>
  );
}