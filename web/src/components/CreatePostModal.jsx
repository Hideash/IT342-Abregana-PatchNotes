// import { IoImageOutline, IoVideocamOutline, IoGameControllerOutline } from "react-icons/io5";
// import { useState } from "react";
// import api from "../api/axios";


//   const s = {
//     overlay: {
//       position: "fixed",
//       top: 0, left: 0, right: 0, bottom: 0,
//       background: "rgba(0, 0, 0, 0.8)",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       zIndex: 1000,
//     },
//     modal: {
//       background: "#000000",
//       border: "1px solid #1a1a1a",
//       borderRadius: "12px",
//       padding: "32px",
//       width: "100%",
//       maxWidth: "560px",
//       boxShadow: "0 0 40px rgba(255, 255, 255, 0)",
//       maxHeight: "90vh",
//       overflowY: "auto",
//     },
//     header: {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-between",
//       marginBottom: "24px",
//     },
//     title: {
//       color: "#FFFFFF", 
//       fontSize: "22px",
//       fontWeight: "700",
//       margin: 0,
//       fontFamily: "var(--font-poppins)",
//     },
//     closeBtn: {
//       background: "transparent",
//       border: "none",
//       color: "#ffffff",
//       fontSize: "20px",
//       cursor: "pointer",
//       padding: "4px 8px",
//       borderRadius: "50%",
//       lineHeight: 1,
//     },
//     userRow: {
//       display: "flex",
//       alignItems: "center",
//       gap: "12px",
//       marginBottom: "20px",
//     },
//     avatar: {
//       width: "40px",
//       height: "40px",
//       background: "var(--red-bright)",
//       borderRadius: "50%",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       fontSize: "16px",
//       fontWeight: "bold",
//       color: "#fff",
//       flexShrink: 0,
//     },
//     username: {
//       color: "#ffffff",
//       fontSize: "14px",
//       fontWeight: "500",
//       margin: 0,
//       fontFamily: "var(--font-poppins)",
//     },
//     label: {
//       color: "var(--text-secondary)",
//       fontSize: "11px",
//       letterSpacing: "1.5px",
//       textTransform: "uppercase",
//       marginBottom: "12px",
//       display: "block",
//       fontFamily: "var(--font-poppins)",
//       fontWeight: "600",
//     },
//     input: {
//       width: "100%",
//       background: "#050505",
//       border: "1px solid var(--red-deep)",
//       borderRadius: "6px",
//       padding: "12px 16px",
//       color: "#ffffff",
//       fontSize: "14px",
//       fontFamily: "var(--font-poppins)",
//       outline: "none",
//       transition: "border-color 0.3s",
//     },
//     titleInput: {
//       width: "100%",
//       background: "var(--bg-surface)",
//       border: "var(--text-secondary)",
//       borderRadius: "8px",
//       padding: "12px 16px",
//       color: "#ffffff",
//       fontSize: "14px",
//       fontWeight: "400",
//       fontFamily: "var(--font-poppins)",
//       outline: "none",
//       boxSizing: "border-box",
//       marginBottom: "16px",
//     },
//     bodyInput: {
//       width: "100%",
//       background: "var(--bg-surface)",
//       border: "var(--text-secondary)",
//       borderRadius: "8px",
//       padding: "12px 16px",
//       color: "#ffffff",
//       fontSize: "14px",
//       fontWeight: "400",
//       fontFamily: "var(--font-poppins)",
//       outline: "none",
//       boxSizing: "border-box",
//       resize: "vertical",
//       minHeight: "140px",
//       marginBottom: "16px",
//       lineHeight: "1.6",
//     },
//     mediaRow: {
//       display: "flex",
//       gap: "8px",
//       marginBottom: "20px",
//     },
//     mediaBtn: {
//       background: "transparent",
//       border: "1px solid #1a1a1a",
//       color: "var(--text-secondary)",
//       padding: "8px 16px",
//       borderRadius: "20px",
//       cursor: "pointer",
//       fontSize: "12px",
//       fontFamily: "var(--font-poppins)",
//       display: "flex",
//       alignItems: "center",
//       gap: "6px",
//     },
//     nextBtn: {
//       background: "var(--red-bright)",
//       border: "none",
//       color: "#ffffff",
//       padding: "10px 24px",
//       borderRadius: "4px",
//       cursor: "pointer",
//       fontSize: "12px",
//       fontWeight: "700",
//       fontFamily: "var(--font-poppins)",
//       letterSpacing: "1px",
//       textTransform: "uppercase",
//     },
//     footer: {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-between",
//       borderTop: "1px solid #1a1a1a",
//       paddingTop: "16px",
//     },
//     charCount: {
//       color: "var(--text-secondary)",
//       fontSize: "12px",
//       fontFamily: "var(--font-poppins)",
//     },
//     footerBtns: {
//       display: "flex",
//       gap: "12px",
//     },
//     cancelBtn: {
//       background: "transparent",
//       border: "1px solid #1a1a1a",
//       color: "var(--text-secondary)",
//       padding: "10px 20px",
//       borderRadius: "20px",
//       cursor: "pointer",
//       fontSize: "12px",
//       fontFamily: "var(--font-poppins)",
//       letterSpacing: "1px",
//     },
//     postBtn: {
//       background: "var(--red-bright)",
//       border: "none",
//       color: "#ffffff",
//       padding: "10px 24px",
//       borderRadius: "20px",
//       cursor: "pointer",
//       fontSize: "12px",
//       fontWeight: "700",
//       fontFamily: "var(--font-poppins)",
//       letterSpacing: "2px",
//       textTransform: "uppercase",
//     },
//     postBtnDisabled: {
//       background: "#2a2a2a",
//       border: "none",
//       color: "var(--text-secondary)",
//       padding: "10px 24px",
//       borderRadius: "20px",
//       cursor: "not-allowed",
//       fontSize: "12px",
//     fontFamily: "var(--font-poppins)",
//     letterSpacing: "2px",
//     textTransform: "uppercase",
//   },
//   error: {
//     color: "#ff6b6b",
//     fontSize: "13px",
//     marginBottom: "12px",
//     fontFamily: "var(--font-poppins)",
//   },
//   divider: {
//     border: "none",
//     borderTop: "1px solid #1a1a1a",
//     margin: "16px 0",
//   },
// };

// export default function CreatePostModal({ user, onClose, onPostCreated }) {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async () => {
//     if (!content.trim()) {
//       setError("Post body cannot be empty.");
//       return;
//     }
//     setLoading(true);
//     try {
//       await api.post("/posts", { title, content });
//       setTitle("");
//       setContent("");
//       setError("");
//       onPostCreated();
//       onClose();
//     } catch (err) {
//       setError("Failed to create post. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={s.overlay} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
//       <div style={s.modal}>

//         {/* Header */}
//         <div style={s.header}>
//           <p style={s.title}>Leave a Note</p>
//           <button style={s.closeBtn} onClick={onClose}>✕</button>
//         </div>

//         {/* User Row */}
//         <div style={s.userRow}>
//           <div style={s.avatar}>
//             {user?.firstName?.charAt(0).toUpperCase()}
//           </div>
//           <div>
//             <p style={s.username}>{user?.username || user?.firstName}</p>
//           </div>
//         </div>

//         {/* Title Input */}
//         <label style={s.label}>Title (optional)</label>
//         <input
//           style={s.titleInput}
//           placeholder="Give your note a catchy title..."
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           maxLength={100}
//         />

//         {/* Body Input */}
//         <label style={s.label}>What's your patch?</label>
//         <textarea
//           style={s.bodyInput}
//           placeholder="Share your gaming update, thoughts, or experience with the community..."
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           maxLength={1000}
//         />

//         {/* Media Buttons */}
//         <div style={s.mediaRow}>
//           <button style={s.mediaBtn}>
//             <IoImageOutline size={18} color="#ffffff" /> 
//             <span>photo</span>
//           </button>
          
//           <button style={s.mediaBtn}>
//             <IoVideocamOutline size={18} color="#ffffff" /> 
//             <span>video</span>
//           </button>
          
//           <button style={s.mediaBtn}>
//             <IoGameControllerOutline size={18} color="#ffffff" /> 
//             <span>game tag</span>
//           </button>
//         </div>

//         <hr style={s.divider} />

//         {error && <p style={s.error}>{error}</p>}

//         {/* Footer */}
//         <div style={s.footer}>
//           <span style={s.charCount}>{content.length} / 1000</span>
//           <div style={s.footerBtns}>
//             <button style={s.cancelBtn} onClick={onClose}>Cancel</button>
//             <button
//               style={content.trim() ? s.postBtn : s.postBtnDisabled}
//               onClick={handleSubmit}
//               disabled={loading || !content.trim()}
//             >
//               {loading ? "Posting..." : "Post Note"}
//             </button>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { IoImageOutline, IoVideocamOutline, IoGameControllerOutline, IoCloseOutline } from "react-icons/io5";
import api from "../api/axios";

const s = {
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
    padding: "28px",
    width: "100%",
    maxWidth: "560px",
    maxHeight: "90vh",
    overflowY: "auto",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  title: {
    color: "#ffffff",
    fontSize: "18px",
    fontWeight: "700",
    margin: 0,
    fontFamily: "'Poppins', sans-serif",
  },
  closeBtn: {
    background: "transparent",
    border: "none",
    color: "#555555",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    width: "32px",
    height: "32px",
    transition: "background 0.15s",
  },
  userRow: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "16px",
  },
  avatar: {
    width: "40px",
    height: "40px",
    background: "#59000a",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    fontWeight: "700",
    color: "#fff",
    flexShrink: 0,
  },
  username: {
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: "600",
    margin: 0,
    fontFamily: "'Poppins', sans-serif",
  },
  label: {
    color: "#444444",
    fontSize: "10px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    marginBottom: "8px",
    marginTop: "16px",
    display: "block",
    fontWeight: "600",
    fontFamily: "'Poppins', sans-serif",
  },
  titleInput: {
    width: "100%",
    background: "#111111",
    border: "1px solid #1a1a1a",
    borderRadius: "8px",
    padding: "11px 14px",
    color: "#ffffff",
    fontSize: "14px",
    fontFamily: "'Poppins', sans-serif",
    outline: "none",
    boxSizing: "border-box",
    marginBottom: "12px",
  },
  bodyInput: {
    width: "100%",
    background: "#111111",
    border: "1px solid #1a1a1a",
    borderRadius: "8px",
    padding: "11px 14px",
    color: "#ffffff",
    fontSize: "14px",
    fontFamily: "'Poppins', sans-serif",
    outline: "none",
    boxSizing: "border-box",
    resize: "vertical",
    minHeight: "120px",
    lineHeight: "1.6",
  },
  mediaRow: {
    display: "flex",
    gap: "8px",
    marginTop: "12px",
    marginBottom: "4px",
    flexWrap: "wrap",
  },
  mediaBtn: {
    background: "transparent",
    border: "1px solid #1a1a1a",
    color: "#555555",
    padding: "7px 14px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "12px",
    fontFamily: "'Poppins', sans-serif",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    transition: "border-color 0.15s",
  },
  patchSelect: {
    width: "100%",
    background: "#111111",
    border: "1px solid #1a1a1a",
    borderRadius: "8px",
    padding: "11px 14px",
    color: "#ffffff",
    fontSize: "14px",
    fontFamily: "'Poppins', sans-serif",
    outline: "none",
    cursor: "pointer",
    marginTop: "4px",
  },
  divider: {
    border: "none",
    borderTop: "1px solid #1a1a1a",
    margin: "16px 0",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  charCount: {
    color: "#444444",
    fontSize: "12px",
    fontFamily: "'Poppins', sans-serif",
  },
  footerBtns: {
    display: "flex",
    gap: "10px",
  },
  cancelBtn: {
    background: "transparent",
    border: "1px solid #1a1a1a",
    color: "#555555",
    padding: "9px 20px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "12px",
    fontFamily: "'Poppins', sans-serif",
  },
  postBtn: {
    background: "#59000a",
    border: "none",
    color: "#ffffff",
    padding: "9px 24px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "700",
    fontFamily: "'Poppins', sans-serif",
  },
  postBtnDisabled: {
    background: "#1a1a1a",
    border: "none",
    color: "#444444",
    padding: "9px 24px",
    borderRadius: "20px",
    cursor: "not-allowed",
    fontSize: "12px",
    fontFamily: "'Poppins', sans-serif",
  },
  error: {
    color: "#ff6b6b",
    fontSize: "13px",
    marginTop: "8px",
    fontFamily: "'Poppins', sans-serif",
  },
};

export default function CreatePostModal({ user, onClose, onPostCreated, defaultPatchId }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [gameTag, setGameTag] = useState("");
  const [selectedPatch, setSelectedPatch] = useState(defaultPatchId || "");
  const [myPatches, setMyPatches] = useState([]);
  const [showImageInput, setShowImageInput] = useState(false);
  const [showVideoInput, setShowVideoInput] = useState(false);
  const [showGameTagInput, setShowGameTagInput] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.get("/patches/mine").then(res => setMyPatches(res.data)).catch(() => {});
  }, []);

  const handleSubmit = async () => {
    if (!content.trim()) {
      setError("Post body cannot be empty.");
      return;
    }
    setLoading(true);
    try {
      await api.post("/posts", {
        title,
        content,
        imageUrl: imageUrl || null,
        videoUrl: videoUrl || null,
        gameTag: gameTag || null,
        patchId: selectedPatch ? parseInt(selectedPatch) : null,
      });
      onPostCreated();
      onClose();
    } catch (err) {
      setError("Failed to create post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={s.overlay} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div style={s.modal}>
        <div style={s.header}>
          <p style={s.title}>Leave a Note</p>
          <button
            style={s.closeBtn}
            onClick={onClose}
            onMouseEnter={e => { e.currentTarget.style.background = "#1a1a1a"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
          >
            <IoCloseOutline size={20} />
          </button>
        </div>

        <div style={s.userRow}>
          <div style={s.avatar}>{user?.username?.charAt(0).toUpperCase()}</div>
          <p style={s.username}>{user?.username || user?.firstName}</p>
        </div>

        <label style={s.label}>Title (optional)</label>
        <input
          style={s.titleInput}
          placeholder="Give your note a title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={100}
        />

        <label style={s.label}>What's your patch?</label>
        <textarea
          style={s.bodyInput}
          placeholder="Share your gaming update, thoughts, or experience..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          maxLength={1000}
        />

        <div style={s.mediaRow}>
          <button
            style={s.mediaBtn}
            onClick={() => setShowImageInput(!showImageInput)}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#59000a"; e.currentTarget.style.color = "#59000a"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#1a1a1a"; e.currentTarget.style.color = "#555555"; }}
          >
            <IoImageOutline size={16} /> Photo
          </button>
          <button
            style={s.mediaBtn}
            onClick={() => setShowVideoInput(!showVideoInput)}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#59000a"; e.currentTarget.style.color = "#59000a"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#1a1a1a"; e.currentTarget.style.color = "#555555"; }}
          >
            <IoVideocamOutline size={16} /> Video
          </button>
          <button
            style={s.mediaBtn}
            onClick={() => setShowGameTagInput(!showGameTagInput)}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#59000a"; e.currentTarget.style.color = "#59000a"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#1a1a1a"; e.currentTarget.style.color = "#555555"; }}
          >
            <IoGameControllerOutline size={16} /> Game Tag
          </button>
        </div>

        {showImageInput && (
          <input
            style={{ ...s.titleInput, marginTop: "8px" }}
            placeholder="Image URL..."
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        )}
        {showVideoInput && (
          <input
            style={{ ...s.titleInput, marginTop: "8px" }}
            placeholder="Video URL..."
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
          />
        )}
        {showGameTagInput && (
          <input
            style={{ ...s.titleInput, marginTop: "8px" }}
            placeholder="Game tag (e.g. Valorant, Minecraft)..."
            value={gameTag}
            onChange={(e) => setGameTag(e.target.value)}
          />
        )}

        <label style={s.label}>Post to Patch (optional)</label>
        <select
          style={s.patchSelect}
          value={selectedPatch}
          onChange={(e) => setSelectedPatch(e.target.value)}
        >
          <option value="">🌍 General Feed</option>
          {myPatches.map(patch => (
            <option key={patch.id} value={patch.id}>
              {patch.icon} {patch.name}
            </option>
          ))}
        </select>

        <hr style={s.divider} />
        {error && <p style={s.error}>{error}</p>}

        <div style={s.footer}>
          <span style={s.charCount}>{content.length} / 1000</span>
          <div style={s.footerBtns}>
            <button style={s.cancelBtn} onClick={onClose}>Cancel</button>
            <button
              style={content.trim() ? s.postBtn : s.postBtnDisabled}
              onClick={handleSubmit}
              disabled={loading || !content.trim()}
            >
              {loading ? "Posting..." : "Post Note"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}