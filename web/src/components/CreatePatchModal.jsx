// import { useState } from "react";
// import api from "../api/axios";

// const TOPICS = [
//   "🎯 Valorant", "⛏️ Minecraft", "⚡ League of Legends",
//   "💀 Elden Ring", "🏗️ Fortnite", "🔫 Call of Duty",
//   "⚽ FIFA", "🏎️ Gran Turismo", "🧟 Resident Evil",
//   "🌍 GTA", "🎮 General Gaming", "📱 Mobile Games",
//   "🕹️ Retro Games", "🏆 Esports", "🎲 Board Games",
// ];

// const PRIVACY_OPTIONS = [
//   {
//     value: "public",
//     label: "Public",
//     icon: "🌍",
//     description: "Everyone can view and post",
//   },
//   {
//     value: "restricted",
//     label: "Restricted",
//     icon: "🔒",
//     description: "Everyone can view, only approved users can post",
//   },
//   {
//     value: "private",
//     label: "Private",
//     icon: "🔐",
//     description: "Only approved users can view and post",
//   },
// ];

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
//         background: "#000000",
//         border: "1px solid #1a1a1a",
//         borderRadius: "12px",
//         padding: "32px",
//         width: "100%",
//         maxWidth: "560px",
//         boxShadow: "0 0 40px rgba(255, 255, 255, 0)",
//         maxHeight: "90vh",
//         overflowY: "auto",
//     },
//     header: {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-between",
//       marginBottom: "8px",
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
//     stepIndicator: {
//       display: "flex",
//       gap: "8px",
//       marginBottom: "24px",
//       alignItems: "center",
//     },
//     step: {
//       width: "28px",
//       height: "28px",
//       borderRadius: "50%",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       fontSize: "12px",
//       fontWeight: "700",
//       fontFamily: "'var(--font-poppins)",
//     },
//     stepActive: {
//       background: "#ffffff",
//       color: "#000000",
//     },
//     stepDone: {
//       background: "var(--red-bright)",
//       color: "#ffffff",
//     },
//     stepInactive: {
//       background: "#2a2a2a",
//       color: "#ffffff",
//     },
//     stepLine: {
//       flex: 1,
//       height: "1px",
//       background: "#2a2a2a",
//     },
//     stepLineDone: {
//       flex: 1,
//       height: "1px",
//       background: "var(--red-bright)",
//     },
//     label: {
//       color: "var(--text-secondary)",
//       fontSize: "11px",
//       letterSpacing: "1.5px",
//       textTransform: "uppercase",
//       marginTop: "16px",
//       marginBottom: "12px",
//       display: "block",
//       fontFamily: "var(--font-poppins)",
//       fontWeight: "600",
//     },
//     topicsGrid: {
//       display: "grid",
//       gridTemplateColumns: "repeat(3, 1fr)",
//       gap: "8px",
//       marginBottom: "24px",
//     },
//     topicBtn: {
//       background: "var(--bg-surface)",
//       border: "1px solid #1a1a1a",
//       borderRadius: "8px",
//       padding: "10px 8px",
//       color: "#d1d1d1",
//       fontSize: "12px",
//       cursor: "pointer",
//       fontFamily: "'var(--font-poppins)",
//       textAlign: "center",
//     },
//     topicBtnActive: {
//       background: "var(--red-bright)",
//       border: "1px solid var(--red-bright)",
//       borderRadius: "8px",
//       padding: "10px 8px",
//       color: "white", // White text on red background looks better
//       fontSize: "12px",
//       cursor: "pointer",
//       fontFamily: "var(--font-poppins)",
//     },
//     privacyOption: {
//       background: "var(--bg-surface)",
//       border: "1px solid #1a1a1a",
//       borderRadius: "8px",
//       padding: "16px",
//       cursor: "pointer",
//       marginBottom: "10px",
//       display: "flex",
//       alignItems: "center",
//       gap: "16px",
//     },
//     privacyOptionActive: {
//       background: "var(--red-bright)",
//       border: "1px solid var(--red-bright)",
//       borderRadius: "8px",
//       padding: "16px",
//       cursor: "pointer",
//       marginBottom: "10px",
//       display: "flex",
//       alignItems: "center",
//       gap: "16px",
//     },
//     privacyIcon: {
//       fontSize: "24px",
//       width: "40px",
//       textAlign: "center",
//     },
//     privacyLabel: {
//       color: "#ffffff",
//       fontSize: "14px",
//       fontWeight: "bold",
//       margin: "0 0 4px 0",
//       fontFamily: "'var(--font-poppins)",
//     },
//     privacyDesc: {
//       color: "#ffffff",
//       fontSize: "12px",
//       margin: 0,
//       fontFamily: "'var(--font-poppins)",
//     },
//     input: {
//       width: "100%",
//       background: "var(--bg-surface)",
//       border: "var(--text-secondary)",
//       borderRadius: "6px",
//       padding: "12px 16px",
//       color: "#ffffff",
//       fontSize: "14px",
//       fontFamily: "var(--font-poppins)",
//       outline: "none",
//       transition: "border-color 0.3s",
//     },
//     textarea: {
//       width: "100%",
//       background: "var(--bg-surface)",
//       border: "var(--text-secondary)",
//       borderRadius: "8px",
//       padding: "12px 16px",
//       color: "#ffffff",
//       fontSize: "14px",
//       fontFamily: "var(--font-poppins)",
//       outline: "none",
//       boxSizing: "border-box",
//       resize: "vertical",
//       minHeight: "100px",
//       marginBottom: "16px",
//     },
//     iconGrid: {
//       display: "grid",
//       gridTemplateColumns: "repeat(8, 1fr)",
//       gap: "8px",
//       marginBottom: "16px",
//     },
//     iconBtn: {
//       background: "var(--bg-surface)",
//       border: "1px solid #1a1a1a",
//       borderRadius: "8px",
//       padding: "8px",
//       fontSize: "18px",
//       cursor: "pointer",
//       textAlign: "center",
//     },
//     iconBtnActive: {
//       background: "var(--red-bright)",
//       border: "1px solid var(--red-bright)",
//       borderRadius: "8px",
//       padding: "8px",
//       fontSize: "18px",
//       cursor: "pointer",
//       textAlign: "center",
//     },
//     footer: {
//       display: "flex",
//       justifyContent: "space-between",
//       marginTop: "24px",
//       paddingTop: "16px",
//       borderTop: "1px solid #1a1a1a",
//     },
//     backBtn: {
//       background: "transparent",
//       border: "1px solid #1a1a1a",
//       color: "var(--text-secondary)",
//       padding: "10px 20px",
//       borderRadius: "20px",
//       cursor: "pointer",
//       fontSize: "12px",
//       fontFamily: "var(--font-poppins)",
//     },
//     nextBtn: {
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
//     nextBtnDisabled: {
//       background: "#2a2a2a",
//       border: "none",
//       color: "var(--text-secondary)",
//       padding: "10px 24px",
//       borderRadius: "20px",
//       cursor: "not-allowed",
//       fontSize: "12px",
//       fontFamily: "var(--font-poppins)",
//       letterSpacing: "2px",
//       textTransform: "uppercase",
//     },
//     error: {
//       color: "#ff6b6b",
//       fontSize: "13px",
//       marginBottom: "12px",
//       fontFamily: "var(--font-poppins)",
//     },
//     previewCard: {
//       background: "var(--bg-surface)",
//       border: "1px solid #1a1a1a",
//       borderRadius: "8px",
//       padding: "20px",
//       marginBottom: "16px",
//     },
//     previewIcon: {
//       fontSize: "40px",
//       marginBottom: "12px",
//       textAlign: "center",
//     },
//     previewName: {
//       color: "#ffffff",
//       fontSize: "20px",
//       fontWeight: "bold",
//       margin: "0 0 8px 0",
//       fontFamily: "var(--font-poppins)",
//       textAlign: "center",
//     },
//     previewDesc: {
//       color: "#888899",
//       fontSize: "13px",
//       margin: "0 0 16px 0",
//       fontFamily: "var(--font-poppins)",
//       textAlign: "center",
//     },
//     previewTags: {
//       display: "flex",
//       gap: "8px",
//       justifyContent: "center",
//       flexWrap: "wrap",
//     },
//     previewTag: {
//       background: "var(--red-bright)",
//       border: "1px solid var(--red-bright)",
//       color: "#ffffff",
//       padding: "4px 12px",
//       borderRadius: "20px",
//       fontSize: "11px",
//       fontFamily: "var(--font-poppins)",
//     },
//   };

// const ICONS = ["🎯", "⛏️", "⚡", "💀", "🏗️", "🔫", "⚽", "🏎️",
//                "🧟", "🌍", "🎮", "📱", "🕹️", "🏆", "🎲", "🛡️",
//                "⚔️", "🔥", "💎", "🌟", "🎪", "🎭", "🚀", "🌈"];

// export default function CreatePatchModal({ onClose, onPatchCreated }) {
//   const [step, setStep] = useState(1);
//   const [topic, setTopic] = useState("");
//   const [privacy, setPrivacy] = useState("public");
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [icon, setIcon] = useState("🛡️");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleNext = () => {
//     if (step === 1 && !topic) {
//       setError("Please select a topic.");
//       return;
//     }
//     if (step === 3 && !name.trim()) {
//       setError("Please enter a patch name.");
//       return;
//     }
//     setError("");
//     setStep(step + 1);
//   };

//   const handleSubmit = async () => {
//     if (!name.trim()) {
//       setError("Patch name is required.");
//       return;
//     }
//     setLoading(true);
//     try {
//       await api.post("/patches", { name, description, topic, privacy, icon });
//       onPatchCreated();
//       onClose();
//     } catch (err) {
//       setError("Failed to create patch. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getStepStyle = (s_num) => {
//     if (step > s_num) return { ...s.step, ...s.stepDone };
//     if (step === s_num) return { ...s.step, ...s.stepActive };
//     return { ...s.step, ...s.stepInactive };
//   };

//   return (
//     <div style={s.overlay} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
//       <div style={s.modal}>

//         {/* Header */}
//         <div style={s.header}>
//           <p style={s.title}>Start a Patch</p>
//           <button style={s.closeBtn} onClick={onClose}>✕</button>
//         </div>
//         <p style={s.subtitle}>Build your gaming community</p>

//         {/* Step Indicator */}
//         <div style={s.stepIndicator}>
//           <div style={getStepStyle(1)}>1</div>
//           <div style={step > 1 ? s.stepLineDone : s.stepLine} />
//           <div style={getStepStyle(2)}>2</div>
//           <div style={step > 2 ? s.stepLineDone : s.stepLine} />
//           <div style={getStepStyle(3)}>3</div>
//           <div style={step > 3 ? s.stepLineDone : s.stepLine} />
//           <div style={getStepStyle(4)}>4</div>
//         </div>

//         {error && <p style={s.error}>{error}</p>}

//         {/* Step 1: Topic */}
//         {step === 1 && (
//           <>
//             <label style={s.label}>Choose a topic or game</label>
//             <div style={s.topicsGrid}>
//               {TOPICS.map(t => (
//                 <button
//                   key={t}
//                   style={topic === t ? s.topicBtnActive : s.topicBtn}
//                   onClick={() => setTopic(t)}
//                 >
//                   {t}
//                 </button>
//               ))}
//             </div>
//           </>
//         )}

//         {/* Step 2: Privacy */}
//         {step === 2 && (
//           <>
//             <label style={s.label}>Who can join your patch?</label>
//             {PRIVACY_OPTIONS.map(opt => (
//               <div
//                 key={opt.value}
//                 style={privacy === opt.value ? s.privacyOptionActive : s.privacyOption}
//                 onClick={() => setPrivacy(opt.value)}
//               >
//                 <span style={s.privacyIcon}>{opt.icon}</span>
//                 <div>
//                   <p style={s.privacyLabel}>{opt.label}</p>
//                   <p style={s.privacyDesc}>{opt.description}</p>
//                 </div>
//               </div>
//             ))}
//           </>
//         )}

//         {/* Step 3: Name & Description */}
//         {step === 3 && (
//           <>
//             <label style={s.label}>Patch Name</label>
//             <input
//               style={s.input}
//               placeholder="e.g. Valorant Philippines"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               maxLength={50}
//             />
//             <label style={s.label}>Description</label>
//             <textarea
//               style={s.textarea}
//               placeholder="What is this patch about?"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               maxLength={200}
//             />
//             <label style={s.label}>Choose an Icon</label>
//             <div style={s.iconGrid}>
//               {ICONS.map(ic => (
//                 <button
//                   key={ic}
//                   style={icon === ic ? s.iconBtnActive : s.iconBtn}
//                   onClick={() => setIcon(ic)}
//                 >
//                   {ic}
//                 </button>
//               ))}
//             </div>
//           </>
//         )}

//         {/* Step 4: Preview */}
//         {step === 4 && (
//           <>
//             <label style={s.label}>Preview your patch</label>
//             <div style={s.previewCard}>
//               <div style={s.previewIcon}>{icon}</div>
//               <p style={s.previewName}>{name}</p>
//               <p style={s.previewDesc}>{description || "No description provided."}</p>
//               <div style={s.previewTags}>
//                 <span style={s.previewTag}>{topic}</span>
//                 <span style={s.previewTag}>
//                   {privacy === "public" ? "🌍 Public" : privacy === "restricted" ? "🔒 Restricted" : "🔐 Private"}
//                 </span>
//               </div>
//             </div>
//           </>
//         )}

//         {/* Footer */}
//         <div style={s.footer}>
//           <button
//             style={s.backBtn}
//             onClick={() => step === 1 ? onClose() : setStep(step - 1)}
//           >
//             {step === 1 ? "Cancel" : "← Back"}
//           </button>
//           {step < 4 ? (
//             <button style={s.nextBtn} onClick={handleNext}>
//               Next →
//             </button>
//           ) : (
//             <button
//               style={loading ? s.nextBtnDisabled : s.nextBtn}
//               onClick={handleSubmit}
//               disabled={loading}
//             >
//               {loading ? "Creating..." : "🛡️ Create Patch"}
//             </button>
//           )}
//         </div>

//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import api from "../api/axios";

const CATEGORIES = [
  {
    label: "🎯 Shooter Games",
    games: ["Valorant", "Call of Duty", "Counter-Strike", "Apex Legends", "Overwatch"],
  },
  {
    label: "⚡ Strategy & MOBA",
    games: ["League of Legends", "Dota 2", "Clash of Clans", "StarCraft", "Clash Royale"],
  },
  {
    label: "🌍 Open World & RPG",
    games: ["Elden Ring", "GTA", "Cyberpunk 2077", "Skyrim", "Witcher 3"],
  },
  {
    label: "🏗️ Hangout & World Building",
    games: ["Minecraft", "Terraria", "Stardew Valley", "Animal Crossing", "Roblox"],
  },
  {
    label: "⚽ Sports & Racing",
    games: ["FIFA", "Gran Turismo", "NBA 2K", "Rocket League", "F1"],
  },
  {
    label: "💀 Horror & Survival",
    games: ["Resident Evil", "Dead by Daylight", "The Forest", "Phasmophobia", "Subnautica"],
  },
  {
    label: "🎮 General",
    games: ["General Gaming", "Mobile Games", "Retro Games", "Esports", "Indie Games"],
  },
];

const PRIVACY_OPTIONS = [
  { value: "public", label: "Public", icon: "🌍", desc: "Everyone can view and post" },
  { value: "restricted", label: "Restricted", icon: "🔒", desc: "Everyone can view, members can post" },
  { value: "private", label: "Private", icon: "🔐", desc: "Only members can view and post" },
];

const ICONS = [
  "🎮", "🕹️", "👾", "🏆", "⚔️", "🛡️", "🔥", "💎",
  "🌟", "🚀", "🎯", "⚡", "🌈", "🎪", "🦊", "🐺",
  "🐉", "🦁", "🌊", "🏔️", "🌙", "☀️", "❄️", "🌺",
];

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
    marginBottom: "6px",
  },
  title: {
    color: "#ffffff",
    fontSize: "18px",
    fontWeight: "700",
    margin: 0,
    fontFamily: "'Poppins', sans-serif",
  },
  subtitle: {
    color: "#444444",
    fontSize: "13px",
    margin: "0 0 20px 0",
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
  },
  stepIndicator: {
    display: "flex",
    gap: "6px",
    marginBottom: "24px",
    alignItems: "center",
  },
  step: {
    width: "26px",
    height: "26px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "11px",
    fontWeight: "700",
    fontFamily: "'Poppins', sans-serif",
    flexShrink: 0,
  },
  stepLine: { flex: 1, height: "1px", background: "#1a1a1a" },
  stepLineDone: { flex: 1, height: "1px", background: "#59000a" },
  label: {
    color: "#444444",
    fontSize: "10px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    margin: "0 0 10px 0",
    display: "block",
    fontWeight: "600",
    fontFamily: "'Poppins', sans-serif",
  },
  categorySection: { marginBottom: "16px" },
  categoryLabel: {
    color: "#888888",
    fontSize: "12px",
    margin: "0 0 8px 0",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "600",
  },
  gamesGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    marginBottom: "4px",
  },
  gameBtn: {
    background: "#111111",
    border: "1px solid #1a1a1a",
    borderRadius: "20px",
    padding: "5px 12px",
    color: "#888888",
    fontSize: "12px",
    cursor: "pointer",
    fontFamily: "'Poppins', sans-serif",
    transition: "all 0.15s",
  },
  gameBtnActive: {
    background: "#59000a",
    border: "1px solid #59000a",
    borderRadius: "20px",
    padding: "5px 12px",
    color: "#ffffff",
    fontSize: "12px",
    cursor: "pointer",
    fontFamily: "'Poppins', sans-serif",
  },
  privacyOption: {
    background: "#111111",
    border: "1px solid #1a1a1a",
    borderRadius: "10px",
    padding: "14px",
    cursor: "pointer",
    marginBottom: "8px",
    display: "flex",
    alignItems: "center",
    gap: "14px",
    transition: "border-color 0.15s",
  },
  privacyOptionActive: {
    background: "#180008",
    border: "1px solid #59000a",
    borderRadius: "10px",
    padding: "14px",
    cursor: "pointer",
    marginBottom: "8px",
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },
  privacyIcon: { fontSize: "22px", width: "36px", textAlign: "center", flexShrink: 0 },
  privacyLabel: {
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: "600",
    margin: "0 0 2px 0",
    fontFamily: "'Poppins', sans-serif",
  },
  privacyDesc: {
    color: "#555555",
    fontSize: "12px",
    margin: 0,
    fontFamily: "'Poppins', sans-serif",
  },
  input: {
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
  textarea: {
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
    minHeight: "80px",
    marginBottom: "12px",
  },
  iconGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    gap: "6px",
    marginBottom: "12px",
  },
  iconBtn: {
    background: "#111111",
    border: "1px solid #1a1a1a",
    borderRadius: "8px",
    padding: "8px",
    fontSize: "18px",
    cursor: "pointer",
    textAlign: "center",
    transition: "border-color 0.15s",
  },
  iconBtnActive: {
    background: "#180008",
    border: "1px solid #59000a",
    borderRadius: "8px",
    padding: "8px",
    fontSize: "18px",
    cursor: "pointer",
    textAlign: "center",
  },
  previewCard: {
    background: "#111111",
    border: "1px solid #1a1a1a",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
    marginBottom: "16px",
  },
  previewIcon: { fontSize: "44px", marginBottom: "12px" },
  previewName: {
    color: "#ffffff",
    fontSize: "20px",
    fontWeight: "700",
    margin: "0 0 8px 0",
    fontFamily: "'Poppins', sans-serif",
  },
  previewDesc: {
    color: "#555555",
    fontSize: "13px",
    margin: "0 0 12px 0",
    fontFamily: "'Poppins', sans-serif",
  },
  previewTags: {
    display: "flex",
    gap: "8px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  previewTag: {
    background: "#59000a",
    color: "#ffffff",
    padding: "3px 12px",
    borderRadius: "20px",
    fontSize: "11px",
    fontFamily: "'Poppins', sans-serif",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
    paddingTop: "16px",
    borderTop: "1px solid #1a1a1a",
  },
  backBtn: {
    background: "transparent",
    border: "1px solid #1a1a1a",
    color: "#555555",
    padding: "9px 20px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "12px",
    fontFamily: "'Poppins', sans-serif",
  },
  nextBtn: {
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
  nextBtnDisabled: {
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
    marginBottom: "10px",
    fontFamily: "'Poppins', sans-serif",
  },
  selectedTopics: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    marginBottom: "12px",
  },
  selectedTopic: {
    background: "#59000a",
    color: "#ffffff",
    padding: "3px 10px",
    borderRadius: "20px",
    fontSize: "11px",
    fontFamily: "'Poppins', sans-serif",
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
};

export default function CreatePatchModal({ onClose, onPatchCreated }) {
  const [step, setStep] = useState(1);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [privacy, setPrivacy] = useState("public");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("🎮");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleTopic = (game) => {
    setSelectedTopics(prev =>
      prev.includes(game) ? prev.filter(t => t !== game) : [...prev, game]
    );
  };

  const handleNext = () => {
    if (step === 1 && selectedTopics.length === 0) {
      setError("Please select at least one topic or game.");
      return;
    }
    if (step === 3 && !name.trim()) {
      setError("Please enter a patch name.");
      return;
    }
    setError("");
    setStep(step + 1);
  };

  const handleSubmit = async () => {
    if (!name.trim()) {
      setError("Patch name is required.");
      return;
    }
    setLoading(true);
    try {
      await api.post("/patches", {
        name,
        description,
        topic: selectedTopics.join(", "),
        privacy,
        icon,
      });
      onPatchCreated();
      onClose();
    } catch (err) {
      setError("Failed to create patch. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getStepStyle = (num) => ({
    ...s.step,
    background: step > num ? "#59000a" : step === num ? "#ffffff" : "#1a1a1a",
    color: step > num ? "#ffffff" : step === num ? "#000000" : "#555555",
  });

  return (
    <div style={s.overlay} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div style={s.modal}>
        <div style={s.header}>
          <p style={s.title}>Start a Patch</p>
          <button style={s.closeBtn} onClick={onClose}><IoCloseOutline size={20} /></button>
        </div>
        <p style={s.subtitle}>Build your gaming community</p>

        <div style={s.stepIndicator}>
          <div style={getStepStyle(1)}>1</div>
          <div style={step > 1 ? s.stepLineDone : s.stepLine} />
          <div style={getStepStyle(2)}>2</div>
          <div style={step > 2 ? s.stepLineDone : s.stepLine} />
          <div style={getStepStyle(3)}>3</div>
          <div style={step > 3 ? s.stepLineDone : s.stepLine} />
          <div style={getStepStyle(4)}>4</div>
        </div>

        {error && <p style={s.error}>{error}</p>}

        {/* Step 1: Topics (multi-select) */}
        {step === 1 && (
          <>
            <label style={s.label}>Choose topics or games (select multiple)</label>
            {selectedTopics.length > 0 && (
              <div style={s.selectedTopics}>
                {selectedTopics.map(t => (
                  <span key={t} style={s.selectedTopic}>
                    {t}
                    <span style={{ cursor: "pointer" }} onClick={() => toggleTopic(t)}>✕</span>
                  </span>
                ))}
              </div>
            )}
            {CATEGORIES.map(cat => (
              <div key={cat.label} style={s.categorySection}>
                <p style={s.categoryLabel}>{cat.label}</p>
                <div style={s.gamesGrid}>
                  {cat.games.map(game => (
                    <button
                      key={game}
                      style={selectedTopics.includes(game) ? s.gameBtnActive : s.gameBtn}
                      onClick={() => toggleTopic(game)}
                    >
                      {game}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </>
        )}

        {/* Step 2: Privacy */}
        {step === 2 && (
          <>
            <label style={s.label}>Who can join your patch?</label>
            {PRIVACY_OPTIONS.map(opt => (
              <div
                key={opt.value}
                style={privacy === opt.value ? s.privacyOptionActive : s.privacyOption}
                onClick={() => setPrivacy(opt.value)}
              >
                <span style={s.privacyIcon}>{opt.icon}</span>
                <div>
                  <p style={s.privacyLabel}>{opt.label}</p>
                  <p style={s.privacyDesc}>{opt.desc}</p>
                </div>
              </div>
            ))}
          </>
        )}

        {/* Step 3: Name, Description, Icon */}
        {step === 3 && (
          <>
            <label style={s.label}>Patch Name</label>
            <input
              style={s.input}
              placeholder="e.g. Valorant Philippines"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={50}
            />
            <label style={s.label}>Description</label>
            <textarea
              style={s.textarea}
              placeholder="What is this patch about?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={200}
            />
            <label style={s.label}>Choose an Icon</label>
            <div style={s.iconGrid}>
              {ICONS.map(ic => (
                <button
                  key={ic}
                  style={icon === ic ? s.iconBtnActive : s.iconBtn}
                  onClick={() => setIcon(ic)}
                >
                  {ic}
                </button>
              ))}
            </div>
          </>
        )}

        {/* Step 4: Preview */}
        {step === 4 && (
          <>
            <label style={s.label}>Preview your patch</label>
            <div style={s.previewCard}>
              <div style={s.previewIcon}>{icon}</div>
              <p style={s.previewName}>{name}</p>
              <p style={s.previewDesc}>{description || "No description provided."}</p>
              <div style={s.previewTags}>
                {selectedTopics.slice(0, 3).map(t => (
                  <span key={t} style={s.previewTag}>{t}</span>
                ))}
                {selectedTopics.length > 3 && (
                  <span style={s.previewTag}>+{selectedTopics.length - 3} more</span>
                )}
                <span style={s.previewTag}>
                  {privacy === "public" ? "🌍 Public" : privacy === "restricted" ? "🔒 Restricted" : "🔐 Private"}
                </span>
              </div>
            </div>
          </>
        )}

        <div style={s.footer}>
          <button
            style={s.backBtn}
            onClick={() => step === 1 ? onClose() : setStep(step - 1)}
          >
            {step === 1 ? "Cancel" : "← Back"}
          </button>
          {step < 4 ? (
            <button style={s.nextBtn} onClick={handleNext}>Next →</button>
          ) : (
            <button
              style={loading ? s.nextBtnDisabled : s.nextBtn}
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Creating..." : "🎮 Create Patch"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}