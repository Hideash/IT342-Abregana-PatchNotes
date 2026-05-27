// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { IoImageOutline, IoVideocamOutline, IoGameControllerOutline } from "react-icons/io5";
// import api from "../api/axios";
// import Navbar from "../components/Navbar";

// const s = {
//   page: {
//     minHeight: "100vh",
//     background: "#000000",
//     fontFamily: "var(--font-poppins)",
//     color: "#ffffff",
//   },
//   container: {
//     maxWidth: "680px",
//     margin: "0 auto",
//     padding: "32px",
//   },
//   header: {
//     marginBottom: "24px",
//   },
//   title: {
//     color: "#ffffff",
//     fontSize: "24px",
//     fontWeight: "700",
//     margin: "0 0 4px 0",
//   },
//   subtitle: {
//     color: "#555555",
//     fontSize: "13px",
//     margin: 0,
//   },
//   card: {
//     background: "#0a0a0a",
//     border: "1px solid #1a1a1a",
//     borderRadius: "12px",
//     padding: "32px",
//     marginBottom: "16px",
//   },
//   userRow: {
//     display: "flex",
//     alignItems: "center",
//     gap: "12px",
//     marginBottom: "24px",
//   },
//   avatar: {
//     width: "44px",
//     height: "44px",
//     background: "#ff3e3e",
//     borderRadius: "50%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: "18px",
//     fontWeight: "700",
//     color: "#fff",
//     flexShrink: 0,
//   },
//   userInfo: {},
//   username: {
//     color: "#ffffff",
//     fontSize: "14px",
//     fontWeight: "600",
//     margin: 0,
//   },
//   posting: {
//     color: "#555555",
//     fontSize: "12px",
//     margin: 0,
//   },
//   label: {
//     color: "#555555",
//     fontSize: "11px",
//     letterSpacing: "1.5px",
//     textTransform: "uppercase",
//     marginBottom: "8px",
//     marginTop: "20px",
//     display: "block",
//     fontWeight: "600",
//   },
//   titleInput: {
//     width: "100%",
//     background: "transparent",
//     border: "none",
//     borderBottom: "1px solid #1a1a1a",
//     padding: "12px 0",
//     color: "#ffffff",
//     fontSize: "22px",
//     fontWeight: "700",
//     fontFamily: "var(--font-poppins)",
//     outline: "none",
//     boxSizing: "border-box",
//     marginBottom: "8px",
//   },
//   bodyInput: {
//     width: "100%",
//     background: "transparent",
//     border: "none",
//     padding: "12px 0",
//     color: "#888888",
//     fontSize: "15px",
//     fontFamily: "var(--font-poppins)",
//     outline: "none",
//     boxSizing: "border-box",
//     resize: "none",
//     minHeight: "200px",
//     lineHeight: "1.7",
//   },
//   divider: {
//     border: "none",
//     borderTop: "1px solid #1a1a1a",
//     margin: "16px 0",
//   },
//   mediaRow: {
//     display: "flex",
//     gap: "8px",
//     marginBottom: "8px",
//     flexWrap: "wrap",
//   },
//   mediaBtn: {
//     background: "transparent",
//     border: "1px solid #1a1a1a",
//     color: "#555555",
//     padding: "8px 16px",
//     borderRadius: "20px",
//     cursor: "pointer",
//     fontSize: "12px",
//     fontFamily: "var(--font-poppins)",
//     display: "flex",
//     alignItems: "center",
//     gap: "8px",
//   },
//   patchSelect: {
//     width: "100%",
//     background: "#0a0a0a",
//     border: "1px solid #1a1a1a",
//     borderRadius: "8px",
//     padding: "12px 16px",
//     color: "#ffffff",
//     fontSize: "14px",
//     fontFamily: "var(--font-poppins)",
//     outline: "none",
//     marginTop: "8px",
//     cursor: "pointer",
//   },
//   footer: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginTop: "24px",
//   },
//   charCount: {
//     color: "#555555",
//     fontSize: "12px",
//   },
//   footerBtns: {
//     display: "flex",
//     gap: "12px",
//     alignItems: "center",
//   },
//   draftBtn: {
//     background: "transparent",
//     border: "1px solid #1a1a1a",
//     color: "#555555",
//     padding: "10px 20px",
//     borderRadius: "8px",
//     cursor: "pointer",
//     fontSize: "12px",
//     fontFamily: "var(--font-poppins)",
//   },
//   postBtn: {
//     background: "#ff3e3e",
//     border: "none",
//     color: "#ffffff",
//     padding: "10px 28px",
//     borderRadius: "8px",
//     cursor: "pointer",
//     fontSize: "13px",
//     fontWeight: "700",
//     fontFamily: "var(--font-poppins)",
//     letterSpacing: "1px",
//   },
//   postBtnDisabled: {
//     background: "#1a1a1a",
//     border: "none",
//     color: "#555555",
//     padding: "10px 28px",
//     borderRadius: "8px",
//     cursor: "not-allowed",
//     fontSize: "13px",
//     fontFamily: "var(--font-poppins)",
//     letterSpacing: "1px",
//   },
//   error: {
//     color: "#ff6b6b",
//     fontSize: "13px",
//     marginTop: "8px",
//   },
//   success: {
//     color: "#22c55e",
//     fontSize: "13px",
//     marginTop: "8px",
//   },
//   tipCard: {
//     background: "#0a0a0a",
//     border: "1px solid #1a1a1a",
//     borderRadius: "12px",
//     padding: "20px",
//   },
//   tipTitle: {
//     color: "#555555",
//     fontSize: "11px",
//     letterSpacing: "2px",
//     textTransform: "uppercase",
//     margin: "0 0 12px 0",
//     fontWeight: "600",
//   },
//   tipItem: {
//     color: "#444444",
//     fontSize: "12px",
//     margin: "0 0 8px 0",
//     display: "flex",
//     alignItems: "center",
//     gap: "8px",
//   },
// };

// export default function Forge() {
//   const [user, setUser] = useState(null);
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [selectedPatch, setSelectedPatch] = useState("");
//   const [myPatches, setMyPatches] = useState([]);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     api.get("/user/me")
//       .then(res => setUser(res.data))
//       .catch(() => navigate("/login"));

//     api.get("/patches/mine")
//       .then(res => setMyPatches(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   const handleSubmit = async () => {
//     if (!content.trim()) {
//       setError("Post body cannot be empty.");
//       return;
//     }
//     setLoading(true);
//     setError("");
//     try {
//       await api.post("/posts", {
//         title,
//         content,
//         patchId: selectedPatch || null,
//       });
//       setSuccess("Note posted successfully!");
//       setTitle("");
//       setContent("");
//       setSelectedPatch("");
//       setTimeout(() => {
//         navigate("/home");
//       }, 1200);
//     } catch (err) {
//       setError("Failed to post note. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!user) return (
//     <div style={{ minHeight: "100vh", background: "#000000", display: "flex", alignItems: "center", justifyContent: "center" }}>
//       <p style={{ color: "#555555", fontSize: "12px" }}>LOADING...</p>
//     </div>
//   );

//   return (
//     <div style={s.page}>
//       <Navbar />
//       <div style={s.container}>

//         <div style={s.header}>
//           <h1 style={s.title}>⚔️ Forge</h1>
//           <p style={s.subtitle}>Craft your gaming update and share it with the community</p>
//         </div>

//         <div style={s.card}>
//           <div style={s.userRow}>
//             <div style={s.avatar}>
//               {user.firstName?.charAt(0).toUpperCase()}
//             </div>
//             <div style={s.userInfo}>
//               <p style={s.username}>{user.username || user.firstName}</p>
//               <p style={s.posting}>Posting to community</p>
//             </div>
//           </div>

//           <input
//             style={s.titleInput}
//             placeholder="Title (optional)"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             maxLength={100}
//           />

//           <textarea
//             style={s.bodyInput}
//             placeholder="What's your patch? Share your gaming update, thoughts, or experience..."
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             maxLength={2000}
//           />

//           <hr style={s.divider} />

//           <div style={s.mediaRow}>
//             <button style={s.mediaBtn}>
//               <IoImageOutline size={16} /> Photo
//             </button>
//             <button style={s.mediaBtn}>
//               <IoVideocamOutline size={16} /> Video
//             </button>
//             <button style={s.mediaBtn}>
//               <IoGameControllerOutline size={16} /> Game Tag
//             </button>
//           </div>

//           <label style={s.label}>Post to a Patch (optional)</label>
//           <select
//             style={s.patchSelect}
//             value={selectedPatch}
//             onChange={(e) => setSelectedPatch(e.target.value)}
//           >
//             <option value="">🌍 Everyone (General Feed)</option>
//             {myPatches.map(patch => (
//               <option key={patch.id} value={patch.id}>
//                 {patch.icon} {patch.name}
//               </option>
//             ))}
//           </select>

//           {error && <p style={s.error}>{error}</p>}
//           {success && <p style={s.success}>✓ {success}</p>}

//           <div style={s.footer}>
//             <span style={s.charCount}>{content.length} / 2000</span>
//             <div style={s.footerBtns}>
//               <button style={s.draftBtn} onClick={() => navigate("/home")}>
//                 Cancel
//               </button>
//               <button
//                 style={content.trim() ? s.postBtn : s.postBtnDisabled}
//                 onClick={handleSubmit}
//                 disabled={loading || !content.trim()}
//               >
//                 {loading ? "Posting..." : "⚔️ Post Note"}
//               </button>
//             </div>
//           </div>
//         </div>

//         <div style={s.tipCard}>
//           <p style={s.tipTitle}>Tips for a great note</p>
//           <p style={s.tipItem}>📋 Add a clear title so people know what your note is about</p>
//           <p style={s.tipItem}>🎮 Tag a patch/community to reach the right audience</p>
//           <p style={s.tipItem}>💬 Be specific about what changed or what you experienced</p>
//           <p style={s.tipItem}>🔥 Keep it concise — the best notes are short and clear</p>
//         </div>

//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoImageOutline, IoVideocamOutline, IoGameControllerOutline } from "react-icons/io5";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";

const s = {
  page: { minHeight: "100vh", background: "#000000", fontFamily: "'Poppins', sans-serif", color: "#ffffff" },
  layout: { display: "flex", alignItems: "flex-start", minHeight: "calc(100vh - 56px)" },
  container: { flex: 1, maxWidth: "680px", margin: "0 auto", padding: "24px" },
  header: { marginBottom: "20px" },
  title: { color: "#ffffff", fontSize: "22px", fontWeight: "700", margin: "0 0 4px 0" },
  subtitle: { color: "#555555", fontSize: "13px", margin: 0 },
  card: {
    background: "#0a0a0a", border: "1px solid #1a1a1a",
    borderRadius: "12px", padding: "24px", marginBottom: "16px",
  },
  userRow: { display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" },
  avatar: {
    width: "40px", height: "40px", background: "#59000a", borderRadius: "50%",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: "16px", fontWeight: "700", color: "#fff", flexShrink: 0,
  },
  username: { color: "#ffffff", fontSize: "14px", fontWeight: "600", margin: 0 },
  postingTo: { color: "#444444", fontSize: "12px", margin: 0 },
  titleInput: {
    width: "100%", background: "transparent", border: "none",
    borderBottom: "1px solid #1a1a1a", padding: "10px 0",
    color: "#ffffff", fontSize: "20px", fontWeight: "600",
    fontFamily: "'Poppins', sans-serif", outline: "none",
    boxSizing: "border-box", marginBottom: "8px",
  },
  bodyInput: {
    width: "100%", background: "transparent", border: "none",
    padding: "10px 0", color: "#888888", fontSize: "14px",
    fontFamily: "'Poppins', sans-serif", outline: "none",
    boxSizing: "border-box", resize: "none", minHeight: "180px", lineHeight: "1.7",
  },
  divider: { border: "none", borderTop: "1px solid #1a1a1a", margin: "14px 0" },
  mediaRow: { display: "flex", gap: "8px", flexWrap: "wrap" },
  mediaBtn: {
    background: "transparent", border: "1px solid #1a1a1a", color: "#555555",
    padding: "7px 14px", borderRadius: "20px", cursor: "pointer",
    fontSize: "12px", fontFamily: "'Poppins', sans-serif",
    display: "flex", alignItems: "center", gap: "6px", transition: "all 0.15s",
  },
  urlInput: {
    width: "100%", background: "#111111", border: "1px solid #1a1a1a",
    borderRadius: "8px", padding: "10px 14px", color: "#ffffff",
    fontSize: "13px", fontFamily: "'Poppins', sans-serif",
    outline: "none", boxSizing: "border-box", marginTop: "8px",
  },
  label: {
    color: "#444444", fontSize: "10px", letterSpacing: "1.5px",
    textTransform: "uppercase", marginBottom: "8px", marginTop: "14px",
    display: "block", fontWeight: "600",
  },
  patchSelect: {
    width: "100%", background: "#111111", border: "1px solid #1a1a1a",
    borderRadius: "8px", padding: "10px 14px", color: "#ffffff",
    fontSize: "13px", fontFamily: "'Poppins', sans-serif",
    outline: "none", cursor: "pointer",
  },
  footer: { display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "20px" },
  charCount: { color: "#444444", fontSize: "12px" },
  footerBtns: { display: "flex", gap: "10px" },
  cancelBtn: {
    background: "transparent", border: "1px solid #1a1a1a", color: "#555555",
    padding: "9px 20px", borderRadius: "20px", cursor: "pointer",
    fontSize: "12px", fontFamily: "'Poppins', sans-serif",
  },
  postBtn: {
    background: "#59000a", border: "none", color: "#ffffff",
    padding: "9px 24px", borderRadius: "20px", cursor: "pointer",
    fontSize: "13px", fontWeight: "700", fontFamily: "'Poppins', sans-serif",
  },
  postBtnDisabled: {
    background: "#1a1a1a", border: "none", color: "#444444",
    padding: "9px 24px", borderRadius: "20px", cursor: "not-allowed",
    fontSize: "13px", fontFamily: "'Poppins', sans-serif",
  },
  error: { color: "#ff6b6b", fontSize: "13px", marginTop: "8px" },
  success: { color: "#22c55e", fontSize: "13px", marginTop: "8px" },
};

export default function Forge() {
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [gameTag, setGameTag] = useState("");
  const [selectedPatch, setSelectedPatch] = useState("");
  const [myPatches, setMyPatches] = useState([]);
  const [showImage, setShowImage] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showGameTag, setShowGameTag] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/user/me").then(res => setUser(res.data)).catch(() => navigate("/login"));
    api.get("/patches/mine").then(res => setMyPatches(res.data)).catch(() => {});
  }, []);

  const handleSubmit = async () => {
    if (!content.trim()) { setError("Post body cannot be empty."); return; }
    setLoading(true);
    setError("");
    try {
      await api.post("/posts", {
        title,
        content,
        imageUrl: imageUrl || null,
        videoUrl: videoUrl || null,
        gameTag: gameTag || null,
        patchId: selectedPatch ? parseInt(selectedPatch) : null,
      });
      setSuccess("Note posted successfully!");
      setTitle(""); setContent(""); setSelectedPatch("");
      setImageUrl(""); setVideoUrl(""); setGameTag("");
      setTimeout(() => navigate("/home"), 1200);
    } catch (err) {
      setError("Failed to post note.");
    } finally { setLoading(false); }
  };

  if (!user) return (
    <div style={{ minHeight: "100vh", background: "#000000", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <p style={{ color: "#333333", fontSize: "12px" }}>LOADING...</p>
    </div>
  );

  return (
    <div style={s.page}>
      <Navbar />
      <div style={s.layout}>
        <LeftSidebar />
        <div style={s.container}>
          <div style={s.header}>
            <h1 style={s.title}>⚔️ Forge</h1>
            <p style={s.subtitle}>Craft your gaming update and share it</p>
          </div>

          <div style={s.card}>
            <div style={s.userRow}>
              <div style={s.avatar}>{user.firstName?.charAt(0).toUpperCase()}</div>
              <div>
                <p style={s.username}>{user.username || user.firstName}</p>
                <p style={s.postingTo}>
                  {selectedPatch
                    ? `Posting to: ${myPatches.find(p => p.id == selectedPatch)?.name}`
                    : "Posting to: General Feed"}
                </p>
              </div>
            </div>

            <input
              style={s.titleInput}
              placeholder="Title (optional)"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={100}
            />

            <textarea
              style={s.bodyInput}
              placeholder="What's your patch? Share your gaming update..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              maxLength={2000}
            />

            <hr style={s.divider} />

            <div style={s.mediaRow}>
              <button
                style={s.mediaBtn}
                onClick={() => setShowImage(!showImage)}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#59000a"; e.currentTarget.style.color = "#59000a"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1a1a1a"; e.currentTarget.style.color = "#555555"; }}
              >
                <IoImageOutline size={15} /> Photo
              </button>
              <button
                style={s.mediaBtn}
                onClick={() => setShowVideo(!showVideo)}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#59000a"; e.currentTarget.style.color = "#59000a"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1a1a1a"; e.currentTarget.style.color = "#555555"; }}
              >
                <IoVideocamOutline size={15} /> Video
              </button>
              <button
                style={s.mediaBtn}
                onClick={() => setShowGameTag(!showGameTag)}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#59000a"; e.currentTarget.style.color = "#59000a"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1a1a1a"; e.currentTarget.style.color = "#555555"; }}
              >
                <IoGameControllerOutline size={15} /> Game Tag
              </button>
            </div>

            {showImage && (
              <input style={s.urlInput} placeholder="Image URL..." value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
            )}
            {showVideo && (
              <input style={s.urlInput} placeholder="Video URL..." value={videoUrl} onChange={e => setVideoUrl(e.target.value)} />
            )}
            {showGameTag && (
              <input style={s.urlInput} placeholder="Game tag (e.g. Valorant)..." value={gameTag} onChange={e => setGameTag(e.target.value)} />
            )}

            <label style={s.label}>Post to a Patch (optional)</label>
            <select
              style={s.patchSelect}
              value={selectedPatch}
              onChange={(e) => setSelectedPatch(e.target.value)}
            >
              <option value="">🌍 General Feed</option>
              {myPatches.map(patch => (
                <option key={patch.id} value={patch.id}>{patch.icon} {patch.name}</option>
              ))}
            </select>

            {error && <p style={s.error}>{error}</p>}
            {success && <p style={s.success}>✓ {success}</p>}

            <div style={s.footer}>
              <span style={s.charCount}>{content.length} / 2000</span>
              <div style={s.footerBtns}>
                <button style={s.cancelBtn} onClick={() => navigate("/home")}>Cancel</button>
                <button
                  style={content.trim() ? s.postBtn : s.postBtnDisabled}
                  onClick={handleSubmit}
                  disabled={loading || !content.trim()}
                >
                  {loading ? "Posting..." : "⚔️ Post Note"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}