// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import api from "../api/axios";
// import Navbar from "../components/Navbar";
// import LeftSidebar from "../components/LeftSidebar";

// const s = {
//   page: {
//     minHeight: "100vh",
//     background: "#000000",
//     fontFamily: "var(--font-poppins)",
//     color: "#ffffff",
//   },
//   layout: {
//     display: "flex",
//     alignItems: "flex-start",
//     minHeight: "calc(100vh - 56px)",
//   },
//   container: {
//     flex: 1,
//     maxWidth: "680px",
//     margin: "0 auto",
//     padding: "24px",
//   },
//   postCard: {
//     background: "#0a0a0a",
//     border: "1px solid #1a1a1a",
//     borderRadius: "12px",
//     padding: "24px",
//     marginBottom: "16px",
//   },
//   postHeader: {
//     display: "flex",
//     alignItems: "center",
//     gap: "12px",
//     marginBottom: "16px",
//   },
//   avatar: {
//     width: "40px",
//     height: "40px",
//     background: "#ff3e3e",
//     borderRadius: "50%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: "16px",
//     fontWeight: "700",
//     color: "#fff",
//     flexShrink: 0,
//   },
//   username: {
//     color: "#ffffff",
//     fontSize: "14px",
//     fontWeight: "600",
//     margin: 0,
//     cursor: "pointer",
//   },
//   time: {
//     color: "#444444",
//     fontSize: "12px",
//     margin: 0,
//   },
//   patchTag: {
//     color: "#ff3e3e",
//     fontSize: "12px",
//     margin: 0,
//     cursor: "pointer",
//   },
//   postTitle: {
//     color: "#ffffff",
//     fontSize: "24px",
//     fontWeight: "700",
//     margin: "0 0 12px 0",
//     lineHeight: "1.3",
//   },
//   postContent: {
//     color: "#888888",
//     fontSize: "15px",
//     lineHeight: "1.8",
//     margin: "0 0 16px 0",
//   },
//   postImage: {
//     width: "100%",
//     borderRadius: "8px",
//     marginBottom: "16px",
//     maxHeight: "500px",
//     objectFit: "cover",
//   },
//   postActions: {
//     display: "flex",
//     gap: "4px",
//     borderTop: "1px solid #1a1a1a",
//     paddingTop: "12px",
//   },
//   actionBtn: {
//     background: "transparent",
//     border: "none",
//     color: "#555555",
//     padding: "6px 12px",
//     borderRadius: "20px",
//     cursor: "pointer",
//     fontSize: "13px",
//     fontFamily: "var(--font-poppins)",
//     display: "flex",
//     alignItems: "center",
//     gap: "6px",
//   },
//   actionBtnActive: {
//     background: "#1a0000",
//     border: "none",
//     color: "#ff3e3e",
//     padding: "6px 12px",
//     borderRadius: "20px",
//     cursor: "pointer",
//     fontSize: "13px",
//     fontFamily: "var(--font-poppins)",
//     display: "flex",
//     alignItems: "center",
//     gap: "6px",
//   },
//   commentsTitle: {
//     color: "#ffffff",
//     fontSize: "16px",
//     fontWeight: "600",
//     margin: "0 0 16px 0",
//   },
//   commentCard: {
//     display: "flex",
//     gap: "12px",
//     marginBottom: "16px",
//   },
//   commentAvatar: {
//     width: "32px",
//     height: "32px",
//     background: "#1a1a1a",
//     borderRadius: "50%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: "12px",
//     flexShrink: 0,
//     color: "#888888",
//   },
//   commentBubble: {
//     background: "#0a0a0a",
//     border: "1px solid #1a1a1a",
//     borderRadius: "12px",
//     padding: "12px 16px",
//     flex: 1,
//   },
//   commentUsername: {
//     color: "#ffffff",
//     fontSize: "13px",
//     fontWeight: "600",
//     margin: "0 0 4px 0",
//   },
//   commentContent: {
//     color: "#888888",
//     fontSize: "13px",
//     margin: "0 0 4px 0",
//     lineHeight: "1.5",
//   },
//   commentTime: {
//     color: "#333333",
//     fontSize: "11px",
//     margin: 0,
//   },
//   commentInputRow: {
//     display: "flex",
//     gap: "12px",
//     marginTop: "16px",
//     alignItems: "center",
//   },
//   commentInputAvatar: {
//     width: "32px",
//     height: "32px",
//     background: "#ff3e3e",
//     borderRadius: "50%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: "12px",
//     fontWeight: "700",
//     color: "#fff",
//     flexShrink: 0,
//   },
//   commentInput: {
//     flex: 1,
//     background: "#0a0a0a",
//     border: "1px solid #1a1a1a",
//     borderRadius: "24px",
//     padding: "10px 16px",
//     color: "#ffffff",
//     fontSize: "14px",
//     fontFamily: "var(--font-poppins)",
//     outline: "none",
//   },
//   sendBtn: {
//     background: "#ff3e3e",
//     border: "none",
//     color: "#ffffff",
//     width: "36px",
//     height: "36px",
//     borderRadius: "50%",
//     cursor: "pointer",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     flexShrink: 0,
//   },
// };

// export default function PostDetail() {
//   const { postId } = useParams();
//   const [post, setPost] = useState(null);
//   const [comments, setComments] = useState([]);
//   const [user, setUser] = useState(null);
//   const [commentInput, setCommentInput] = useState("");
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     loadData();
//   }, [postId]);

//   const loadData = async () => {
//     try {
//       const [userRes, postRes, commentsRes] = await Promise.all([
//         api.get("/user/me"),
//         api.get(`/posts/${postId}`),
//         api.get(`/posts/${postId}/comments`),
//       ]);
//       setUser(userRes.data);
//       setPost(postRes.data);
//       setComments(commentsRes.data);
//     } catch (err) {
//       navigate("/home");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLike = async () => {
//     const res = await api.post(`/posts/${postId}/like`);
//     setPost(res.data);
//   };

//   const handleComment = async () => {
//     if (!commentInput.trim()) return;
//     await api.post(`/posts/${postId}/comments`, { content: commentInput });
//     setCommentInput("");
//     const res = await api.get(`/posts/${postId}/comments`);
//     setComments(res.data);
//     const postRes = await api.get(`/posts/${postId}`);
//     setPost(postRes.data);
//   };

//   const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString("en-US", {
//     month: "long", day: "numeric", year: "numeric",
//     hour: "2-digit", minute: "2-digit"
//   });

//   if (loading) return (
//     <div style={{ minHeight: "100vh", background: "#000000", display: "flex", alignItems: "center", justifyContent: "center" }}>
//       <p style={{ color: "#333333" }}>LOADING...</p>
//     </div>
//   );

//   return (
//     <div style={s.page}>
//       <Navbar />
//       <div style={s.layout}>
//         <LeftSidebar />
//         <div style={s.container}>
//           <div style={s.postCard}>
//             <div style={s.postHeader}>
//               <div style={s.avatar}>{post.username?.charAt(0).toUpperCase()}</div>
//               <div>
//                 <p style={s.username} onClick={() => navigate(`/user/${post.email}`)}>
//                   {post.username}
//                 </p>
//                 <div style={{ display: "flex", gap: "8px" }}>
//                   <p style={s.time}>{formatDate(post.createdAt)}</p>
//                   {post.patchName && (
//                     <p style={s.patchTag} onClick={() => navigate(`/patch/${post.patchId}`)}>
//                       • {post.patchName}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {post.title && <p style={s.postTitle}>{post.title}</p>}
//             {post.imageUrl && <img src={post.imageUrl} alt="post" style={s.postImage} />}
//             <p style={s.postContent}>{post.content}</p>
//             {post.gameTag && (
//               <p style={{ color: "#ff3e3e", fontSize: "12px", marginBottom: "12px" }}>
//                 🎮 {post.gameTag}
//               </p>
//             )}

//             <div style={s.postActions}>
//               <button
//                 style={post.likedByCurrentUser ? s.actionBtnActive : s.actionBtn}
//                 onClick={handleLike}
//               >
//                 ♥ {post.likeCount} {post.likeCount === 1 ? "Like" : "Likes"}
//               </button>
//               <button style={s.actionBtn}>
//                 💬 {post.commentCount} {post.commentCount === 1 ? "Comment" : "Comments"}
//               </button>
//             </div>
//           </div>

//           <p style={s.commentsTitle}>Comments ({comments.length})</p>

//           <div style={s.commentInputRow}>
//             <div style={s.commentInputAvatar}>
//               {user?.firstName?.charAt(0).toUpperCase()}
//             </div>
//             <input
//               style={s.commentInput}
//               placeholder="Add a comment..."
//               value={commentInput}
//               onChange={(e) => setCommentInput(e.target.value)}
//               onKeyDown={(e) => { if (e.key === "Enter") handleComment(); }}
//             />
//             <button style={s.sendBtn} onClick={handleComment}>➤</button>
//           </div>

//           <div style={{ marginTop: "20px" }}>
//             {comments.map(comment => (
//               <div key={comment.id} style={s.commentCard}>
//                 <div style={s.commentAvatar}>
//                   {comment.username?.charAt(0).toUpperCase()}
//                 </div>
//                 <div style={s.commentBubble}>
//                   <p style={s.commentUsername}>{comment.username}</p>
//                   <p style={s.commentContent}>{comment.content}</p>
//                   <p style={s.commentTime}>{formatDate(comment.createdAt)}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
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

const s = {
  page: { minHeight: "100vh", background: "#000000", fontFamily: "'Poppins', sans-serif", color: "#ffffff" },
  layout: { display: "flex", alignItems: "flex-start", minHeight: "calc(100vh - 56px)" },
  container: { flex: 1, maxWidth: "680px", margin: "0 auto", padding: "24px", minWidth: 0 },
  postCard: { background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: "12px", padding: "24px", marginBottom: "16px" },
  postHeader: { display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" },
  avatar: {
    width: "40px", height: "40px", background: "#59000a", borderRadius: "50%",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: "16px", fontWeight: "700", color: "#fff", flexShrink: 0,
  },
  username: { color: "#ffffff", fontSize: "14px", fontWeight: "600", margin: 0, cursor: "pointer" },
  time: { color: "#444444", fontSize: "12px", margin: 0 },
  patchTag: { color: "#59000a", fontSize: "12px", margin: 0, cursor: "pointer" },
  postTitle: { color: "#ffffff", fontSize: "22px", fontWeight: "700", margin: "0 0 12px 0", lineHeight: "1.3" },
  postContent: { color: "#888888", fontSize: "14px", lineHeight: "1.8", margin: "0 0 16px 0" },
  postImage: { width: "100%", borderRadius: "8px", marginBottom: "16px", maxHeight: "500px", objectFit: "cover" },
  gameTagBadge: {
    display: "inline-block", background: "#180008", color: "#59000a",
    fontSize: "12px", padding: "3px 12px", borderRadius: "20px", marginBottom: "14px",
  },
  postActions: { display: "flex", gap: "4px", borderTop: "1px solid #1a1a1a", paddingTop: "12px" },
  actionBtn: {
    background: "transparent", border: "none", color: "#555555",
    padding: "6px 12px", borderRadius: "20px", cursor: "pointer",
    fontSize: "13px", fontFamily: "'Poppins', sans-serif",
    display: "flex", alignItems: "center", gap: "5px", transition: "all 0.15s",
  },
  actionBtnActive: {
    background: "#180008", border: "none", color: "#59000a",
    padding: "6px 12px", borderRadius: "20px", cursor: "pointer",
    fontSize: "13px", fontFamily: "'Poppins', sans-serif",
    display: "flex", alignItems: "center", gap: "5px",
  },
  commentsTitle: { color: "#ffffff", fontSize: "16px", fontWeight: "600", margin: "0 0 16px 0" },
  commentInputRow: { display: "flex", gap: "10px", marginBottom: "20px", alignItems: "center" },
  commentInputAvatar: {
    width: "32px", height: "32px", background: "#59000a", borderRadius: "50%",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: "12px", fontWeight: "700", color: "#fff", flexShrink: 0,
  },
  commentInput: {
    flex: 1, background: "#0a0a0a", border: "1px solid #1a1a1a",
    borderRadius: "24px", padding: "10px 16px", color: "#ffffff",
    fontSize: "13px", fontFamily: "'Poppins', sans-serif", outline: "none",
  },
  sendBtn: {
    background: "#59000a", border: "none", color: "#ffffff",
    width: "36px", height: "36px", borderRadius: "50%", cursor: "pointer",
    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
  },
  commentCard: { display: "flex", gap: "12px", marginBottom: "14px" },
  commentAvatar: {
    width: "32px", height: "32px", background: "#1a1a1a", borderRadius: "50%",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: "12px", flexShrink: 0, color: "#888888",
  },
  commentBubble: { background: "#0a0a0a", border: "1px solid #1a1a1a", borderRadius: "12px", padding: "10px 14px", flex: 1 },
  commentUsername: { color: "#ffffff", fontSize: "12px", fontWeight: "600", margin: "0 0 4px 0" },
  commentContent: { color: "#888888", fontSize: "13px", margin: "0 0 4px 0", lineHeight: "1.5" },
  commentTime: { color: "#333333", fontSize: "11px", margin: 0 },
};

export default function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState(null);
  const [commentInput, setCommentInput] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => { loadData(); }, [postId]);

  const loadData = async () => {
    try {
      const [userRes, postRes, commentsRes] = await Promise.all([
        api.get("/user/me"),
        api.get(`/posts/${postId}`),
        api.get(`/posts/${postId}/comments`),
      ]);
      setUser(userRes.data);
      setPost(postRes.data);
      setComments(commentsRes.data);
    } catch { navigate("/home"); }
    finally { setLoading(false); }
  };

  const handleLike = async () => {
    const res = await api.post(`/posts/${postId}/like`);
    setPost(res.data);
  };

  const handleComment = async () => {
    if (!commentInput.trim()) return;
    await api.post(`/posts/${postId}/comments`, { content: commentInput });
    setCommentInput("");
    const res = await api.get(`/posts/${postId}/comments`);
    setComments(res.data);
    const postRes = await api.get(`/posts/${postId}`);
    setPost(postRes.data);
  };

  const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString("en-US", {
    month: "long", day: "numeric", year: "numeric",
    hour: "2-digit", minute: "2-digit"
  });

  if (loading) return (
    <div style={{ minHeight: "100vh", background: "#000000", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <p style={{ color: "#333333" }}>LOADING...</p>
    </div>
  );

  return (
    <div style={s.page}>
      <Navbar />
      <div style={s.layout}>
        <LeftSidebar />
        <div style={s.container}>
          <div style={s.postCard}>
            <div style={s.postHeader}>
              <div style={s.avatar}>{post.username?.charAt(0).toUpperCase()}</div>
              <div>
                <p style={s.username} onClick={() => navigate(`/user/${post.email}`)}>{post.username}</p>
                <div style={{ display: "flex", gap: "8px" }}>
                  <p style={s.time}>{formatDate(post.createdAt)}</p>
                  {post.patchName && (
                    <p style={s.patchTag} onClick={() => navigate(`/patch/${post.patchId}`)}>
                      • {post.patchName}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {post.title && <p style={s.postTitle}>{post.title}</p>}
            {post.imageUrl && <img src={post.imageUrl} alt="post" style={s.postImage} />}
            <p style={s.postContent}>{post.content}</p>
            {post.gameTag && <span style={s.gameTagBadge}>🎮 {post.gameTag}</span>}

            <div style={s.postActions}>
              <button
                style={post.likedByCurrentUser ? s.actionBtnActive : s.actionBtn}
                onClick={handleLike}
                onMouseEnter={e => { if (!post.likedByCurrentUser) { e.currentTarget.style.background = "#180008"; e.currentTarget.style.color = "#59000a"; } }}
                onMouseLeave={e => { if (!post.likedByCurrentUser) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#555555"; } }}
              >
                ♥ {post.likeCount} {post.likeCount === 1 ? "Like" : "Likes"}
              </button>
              <button style={s.actionBtn}>💬 {post.commentCount} {post.commentCount === 1 ? "Comment" : "Comments"}</button>
            </div>
          </div>

          <p style={s.commentsTitle}>Comments ({comments.length})</p>

          <div style={s.commentInputRow}>
            <div style={s.commentInputAvatar}>{user?.firstName?.charAt(0).toUpperCase()}</div>
            <input
              style={s.commentInput}
              placeholder="Add a comment..."
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") handleComment(); }}
            />
            <button style={s.sendBtn} onClick={handleComment}>➤</button>
          </div>

          {comments.map(comment => (
            <div key={comment.id} style={s.commentCard}>
              <div style={s.commentAvatar}>{comment.username?.charAt(0).toUpperCase()}</div>
              <div style={s.commentBubble}>
                <p style={s.commentUsername}>{comment.username}</p>
                <p style={s.commentContent}>{comment.content}</p>
                <p style={s.commentTime}>{formatDate(comment.createdAt)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}