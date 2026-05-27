// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
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
//     maxWidth: "960px",
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
//     color: "#444444",
//     fontSize: "13px",
//     margin: 0,
//   },
//   searchBar: {
//     width: "100%",
//     background: "#0a0a0a",
//     border: "1px solid #1a1a1a",
//     borderRadius: "24px",
//     padding: "14px 24px",
//     color: "#ffffff",
//     fontSize: "14px",
//     fontFamily: "var(--font-poppins)",
//     outline: "none",
//     boxSizing: "border-box",
//     marginBottom: "24px",
//   },
//   tabs: {
//     display: "flex",
//     gap: "0",
//     marginBottom: "24px",
//     borderBottom: "1px solid #1a1a1a",
//   },
//   tab: {
//     background: "transparent",
//     border: "none",
//     color: "#444444",
//     padding: "10px 24px",
//     cursor: "pointer",
//     fontSize: "13px",
//     fontFamily: "var(--font-poppins)",
//     borderBottom: "2px solid transparent",
//     marginBottom: "-1px",
//     transition: "color 0.15s",
//   },
//   tabActive: {
//     background: "transparent",
//     border: "none",
//     color: "#ff3e3e",
//     padding: "10px 24px",
//     cursor: "pointer",
//     fontSize: "13px",
//     fontFamily: "var(--font-poppins)",
//     fontWeight: "600",
//     borderBottom: "2px solid #ff3e3e",
//     marginBottom: "-1px",
//   },
//   sectionTitle: {
//     color: "#333333",
//     fontSize: "11px",
//     letterSpacing: "2px",
//     textTransform: "uppercase",
//     marginBottom: "16px",
//     marginTop: "0",
//     fontWeight: "600",
//   },
//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
//     gap: "16px",
//     marginBottom: "32px",
//   },

//   // User cards
//   userCard: {
//     background: "#0a0a0a",
//     border: "1px solid #1a1a1a",
//     borderRadius: "12px",
//     padding: "24px 20px",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     textAlign: "center",
//     gap: "10px",
//     transition: "border-color 0.2s",
//   },
//   userAvatar: {
//     width: "60px",
//     height: "60px",
//     background: "#ff3e3e",
//     borderRadius: "50%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: "24px",
//     fontWeight: "700",
//     color: "#fff",
//   },
//   userName: {
//     color: "#ffffff",
//     fontSize: "15px",
//     fontWeight: "600",
//     margin: 0,
//   },
//   userEmail: {
//     color: "#444444",
//     fontSize: "12px",
//     margin: 0,
//   },
//   userBio: {
//     color: "#555555",
//     fontSize: "12px",
//     margin: 0,
//     overflow: "hidden",
//     textOverflow: "ellipsis",
//     whiteSpace: "nowrap",
//     width: "100%",
//   },
//   viewBtn: {
//     background: "transparent",
//     border: "1px solid #1a1a1a",
//     color: "#555555",
//     padding: "8px 20px",
//     borderRadius: "20px",
//     cursor: "pointer",
//     fontSize: "12px",
//     fontFamily: "var(--font-poppins)",
//     width: "100%",
//     transition: "border-color 0.2s, color 0.2s",
//   },

//   // Patch cards
//   patchCard: {
//     background: "#0a0a0a",
//     border: "1px solid #1a1a1a",
//     borderRadius: "12px",
//     padding: "24px 20px",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     textAlign: "center",
//     gap: "10px",
//     transition: "border-color 0.2s",
//   },
//   patchIconWrap: {
//     width: "64px",
//     height: "64px",
//     background: "#111111",
//     borderRadius: "12px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: "30px",
//   },
//   patchName: {
//     color: "#ffffff",
//     fontSize: "15px",
//     fontWeight: "600",
//     margin: 0,
//   },
//   patchDesc: {
//     color: "#555555",
//     fontSize: "12px",
//     margin: 0,
//     overflow: "hidden",
//     textOverflow: "ellipsis",
//     display: "-webkit-box",
//     WebkitLineClamp: 2,
//     WebkitBoxOrient: "vertical",
//     lineHeight: "1.5",
//   },
//   patchMeta: {
//     display: "flex",
//     gap: "6px",
//     justifyContent: "center",
//     flexWrap: "wrap",
//   },
//   patchTag: {
//     background: "#111111",
//     border: "1px solid #1a1a1a",
//     color: "#444444",
//     padding: "3px 10px",
//     borderRadius: "20px",
//     fontSize: "10px",
//     letterSpacing: "0.5px",
//   },
//   membersCount: {
//     color: "#333333",
//     fontSize: "11px",
//     margin: 0,
//   },
//   joinBtn: {
//     background: "#ff3e3e",
//     border: "none",
//     color: "#ffffff",
//     padding: "8px 20px",
//     borderRadius: "8px",
//     cursor: "pointer",
//     fontSize: "12px",
//     fontFamily: "var(--font-poppins)",
//     fontWeight: "700",
//     width: "100%",
//     transition: "opacity 0.2s",
//   },
//   leaveBtn: {
//     background: "transparent",
//     border: "1px solid #1a1a1a",
//     color: "#444444",
//     padding: "8px 20px",
//     borderRadius: "8px",
//     cursor: "pointer",
//     fontSize: "12px",
//     fontFamily: "var(--font-poppins)",
//     width: "100%",
//   },

//   empty: {
//     textAlign: "center",
//     color: "#333333",
//     padding: "60px 0",
//     fontSize: "13px",
//     fontFamily: "var(--font-poppins)",
//   },
//   emptyIcon: {
//     fontSize: "40px",
//     marginBottom: "16px",
//   },
//   loading: {
//     textAlign: "center",
//     color: "#333333",
//     padding: "40px 0",
//     fontSize: "12px",
//     letterSpacing: "2px",
//     fontFamily: "var(--font-poppins)",
//   },
// };

// export default function Discover() {
//   const [query, setQuery] = useState("");
//   const [activeTab, setActiveTab] = useState("patches");
//   const [users, setUsers] = useState([]);
//   const [patches, setPatches] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchAll();
//   }, []);

//   useEffect(() => {
//     const delay = setTimeout(() => {
//       if (query.trim()) {
//         handleSearch();
//       } else {
//         fetchAll();
//       }
//     }, 400);
//     return () => clearTimeout(delay);
//   }, [query]);

//   const fetchAll = async () => {
//     setLoading(true);
//     try {
//       const [usersRes, patchesRes] = await Promise.all([
//         api.get("/user/search?query="),
//         api.get("/patches"),
//       ]);
//       setUsers(usersRes.data);
//       setPatches(patchesRes.data);
//     } catch (err) {
//       console.log("Error fetching:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = async () => {
//     setLoading(true);
//     try {
//       const [usersRes, patchesRes] = await Promise.all([
//         api.get(`/user/search?query=${query}`),
//         api.get(`/patches/search?query=${query}`),
//       ]);
//       setUsers(usersRes.data);
//       setPatches(patchesRes.data);
//     } catch (err) {
//       console.log("Error searching:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleJoinLeave = async (patchId) => {
//     try {
//       const res = await api.post(`/patches/${patchId}/join`);
//       setPatches(patches.map(p => p.id === patchId ? res.data : p));
//     } catch (err) {
//       console.log("Error joining patch:", err);
//     }
//   };

//   return (
//     <div style={s.page}>
//       <Navbar />
//       <div style={s.container}>

//         <div style={s.header}>
//           <h1 style={s.title}>🧭 Explore</h1>
//           <p style={s.subtitle}>Discover users and patches in the community</p>
//         </div>

//         <input
//           style={s.searchBar}
//           placeholder="🔍   Search users or patches..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           autoFocus
//         />

//         <div style={s.tabs}>
//           <button
//             style={activeTab === "patches" ? s.tabActive : s.tab}
//             onClick={() => setActiveTab("patches")}
//           >
//             🛡️ Patches ({patches.length})
//           </button>
//           <button
//             style={activeTab === "users" ? s.tabActive : s.tab}
//             onClick={() => setActiveTab("users")}
//           >
//             👤 Users ({users.length})
//           </button>
//         </div>

//         {loading ? (
//           <div style={s.loading}>SEARCHING...</div>
//         ) : (
//           <>
//             {/* Patches Tab */}
//             {activeTab === "patches" && (
//               <>
//                 <p style={s.sectionTitle}>
//                   {query ? `Results for "${query}"` : "All Patches"}
//                 </p>
//                 {patches.length === 0 ? (
//                   <div style={s.empty}>
//                     <div style={s.emptyIcon}>🛡️</div>
//                     <p>No patches found.</p>
//                     <p>Be the first to start one!</p>
//                   </div>
//                 ) : (
//                   <div style={s.grid}>
//                     {patches.map(patch => (
//                       <div
//                         key={patch.id}
//                         style={s.patchCard}
//                         onMouseEnter={e => e.currentTarget.style.borderColor = "#2a2a2a"}
//                         onMouseLeave={e => e.currentTarget.style.borderColor = "#1a1a1a"}
//                       >
//                         <div style={s.patchIconWrap}>{patch.icon || "🛡️"}</div>
//                         <p style={s.patchName}>{patch.name}</p>
//                         <p style={s.patchDesc}>
//                           {patch.description || "No description yet."}
//                         </p>
//                         <div style={s.patchMeta}>
//                           <span style={s.patchTag}>{patch.topic}</span>
//                           <span style={s.patchTag}>
//                             {patch.privacy === "public" ? "🌍 Public"
//                               : patch.privacy === "restricted" ? "🔒 Restricted"
//                               : "🔐 Private"}
//                           </span>
//                         </div>
//                         <p style={s.membersCount}>
//                           {patch.memberCount} {patch.memberCount === 1 ? "member" : "members"}
//                         </p>
//                         <button
//                           style={patch.member ? s.leaveBtn : s.joinBtn}
//                           onClick={() => handleJoinLeave(patch.id)}
//                         >
//                           {patch.member ? "✓ Joined" : "+ Join Patch"}
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </>
//             )}

//             {/* Users Tab */}
//             {activeTab === "users" && (
//               <>
//                 <p style={s.sectionTitle}>
//                   {query ? `Results for "${query}"` : "All Users"}
//                 </p>
//                 {users.length === 0 ? (
//                   <div style={s.empty}>
//                     <div style={s.emptyIcon}>👤</div>
//                     <p>No users found.</p>
//                   </div>
//                 ) : (
//                   <div style={s.grid}>
//                     {users.map(user => (
//                       <div
//                         key={user.id}
//                         style={s.userCard}
//                         onMouseEnter={e => e.currentTarget.style.borderColor = "#2a2a2a"}
//                         onMouseLeave={e => e.currentTarget.style.borderColor = "#1a1a1a"}
//                       >
//                         <div style={s.userAvatar}>
//                           {user.username?.charAt(0).toUpperCase()}
//                         </div>
//                         <p style={s.userName}>{user.username}</p>
//                         <p style={s.userEmail}>{user.email}</p>
//                         {user.bio && <p style={s.userBio}>{user.bio}</p>}
//                         <button
//                           style={s.viewBtn}
//                           onClick={() => navigate(`/user/${user.email}`)}
//                           onMouseEnter={e => {
//                             e.currentTarget.style.borderColor = "#ff3e3e";
//                             e.currentTarget.style.color = "#ff3e3e";
//                           }}
//                           onMouseLeave={e => {
//                             e.currentTarget.style.borderColor = "#1a1a1a";
//                             e.currentTarget.style.color = "#555555";
//                           }}
//                         >
//                           View Profile
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";

const CATEGORIES = [
  { label: "🎯 Shooter Games", topics: ["Valorant", "Call of Duty", "Counter-Strike", "Apex Legends", "Overwatch"] },
  { label: "⚡ Strategy & MOBA", topics: ["League of Legends", "Dota 2", "Clash of Clans", "StarCraft"] },
  { label: "🌍 Open World & RPG", topics: ["Elden Ring", "GTA", "Cyberpunk 2077", "Skyrim"] },
  { label: "🏗️ Hangout & World Building", topics: ["Minecraft", "Terraria", "Stardew Valley", "Animal Crossing", "Roblox"] },
  { label: "⚽ Sports & Racing", topics: ["FIFA", "Gran Turismo", "NBA 2K", "Rocket League"] },
  { label: "💀 Horror & Survival", topics: ["Resident Evil", "Dead by Daylight", "Phasmophobia"] },
  { label: "🎮 General", topics: ["General Gaming", "Mobile Games", "Retro Games", "Esports", "Indie Games"] },
];

const s = {
  page: { minHeight: "100vh", background: "#000000", fontFamily: "'Poppins', sans-serif", color: "#ffffff" },
  layout: { display: "flex", alignItems: "flex-start", minHeight: "calc(100vh - 56px)" },
  container: { flex: 1, padding: "24px 28px", maxWidth: "860px", margin: "0 auto", minWidth: 0 },
  searchBar: {
    width: "100%", background: "#0a0a0a", border: "1px solid #1a1a1a",
    borderRadius: "24px", padding: "11px 20px", color: "#ffffff",
    fontSize: "14px", fontFamily: "'Poppins', sans-serif", outline: "none",
    boxSizing: "border-box", marginBottom: "20px",
  },
  tabs: { display: "flex", gap: "4px", marginBottom: "20px", borderBottom: "1px solid #1a1a1a" },
  tab: {
    background: "transparent", border: "none", color: "#555555",
    padding: "10px 16px", cursor: "pointer", fontSize: "13px",
    fontFamily: "'Poppins', sans-serif", borderBottom: "2px solid transparent",
    marginBottom: "-1px",
  },
  tabActive: {
    background: "transparent", border: "none", color: "#59000a",
    padding: "10px 16px", cursor: "pointer", fontSize: "13px",
    fontFamily: "'Poppins', sans-serif", borderBottom: "2px solid #59000a",
    marginBottom: "-1px", fontWeight: "600",
  },
  categoryTitle: {
    color: "#444444", fontSize: "11px", letterSpacing: "2px",
    textTransform: "uppercase", margin: "20px 0 10px 0", fontWeight: "600",
  },
  patchRow: {
    display: "flex", alignItems: "center", gap: "14px",
    padding: "12px 16px", background: "#0a0a0a",
    border: "1px solid #1a1a1a", borderRadius: "8px",
    marginBottom: "8px", transition: "border-color 0.15s",
  },
  patchIconCircle: {
    width: "44px", height: "44px", background: "#1a1a1a",
    borderRadius: "50%", display: "flex", alignItems: "center",
    justifyContent: "center", fontSize: "20px", flexShrink: 0,
  },
  patchInfo: { flex: 1, minWidth: 0 },
  patchName: { color: "#ffffff", fontSize: "14px", fontWeight: "600", margin: "0 0 2px 0" },
  patchDesc: {
    color: "#555555", fontSize: "12px", margin: 0,
    overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
  },
  membersCount: { color: "#444444", fontSize: "11px", flexShrink: 0 },
  joinBtn: {
    background: "#59000a", border: "none", color: "#ffffff",
    padding: "7px 18px", borderRadius: "20px", cursor: "pointer",
    fontSize: "12px", fontFamily: "'Poppins', sans-serif",
    fontWeight: "600", flexShrink: 0,
  },
  userGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "12px" },
  userCard: {
    background: "#0a0a0a", border: "1px solid #1a1a1a",
    borderRadius: "12px", padding: "20px",
    display: "flex", flexDirection: "column", alignItems: "center",
    textAlign: "center", gap: "8px",
  },
  userAvatar: {
    width: "52px", height: "52px", background: "#59000a",
    borderRadius: "50%", display: "flex", alignItems: "center",
    justifyContent: "center", fontSize: "20px", fontWeight: "700", color: "#fff",
  },
  userName: { color: "#ffffff", fontSize: "14px", fontWeight: "600", margin: 0 },
  userEmail: { color: "#444444", fontSize: "11px", margin: 0 },
  userBio: {
    color: "#555555", fontSize: "12px", margin: 0,
    overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: "100%",
  },
  userBtns: { display: "flex", gap: "8px", width: "100%", marginTop: "4px" },
  viewBtn: {
    flex: 1, background: "transparent", border: "1px solid #1a1a1a",
    color: "#888888", padding: "6px", borderRadius: "20px",
    cursor: "pointer", fontSize: "11px", fontFamily: "'Poppins', sans-serif",
  },
  addBtn: {
    flex: 1, background: "#59000a", border: "none",
    color: "#ffffff", padding: "6px", borderRadius: "20px",
    cursor: "pointer", fontSize: "11px", fontFamily: "'Poppins', sans-serif", fontWeight: "600",
  },
  addedBtn: {
    flex: 1, background: "transparent", border: "1px solid #1a1a1a",
    color: "#555555", padding: "6px", borderRadius: "20px",
    cursor: "pointer", fontSize: "11px", fontFamily: "'Poppins', sans-serif",
  },
  empty: { textAlign: "center", color: "#333333", padding: "60px 0", fontSize: "13px" },
  loading: { textAlign: "center", color: "#333333", padding: "40px 0", fontSize: "12px", letterSpacing: "2px" },
};

export default function Discover() {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("patches");
  const [users, setUsers] = useState([]);
  const [patches, setPatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => { fetchAll(); }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      query.trim() ? handleSearch() : fetchAll();
    }, 400);
    return () => clearTimeout(delay);
  }, [query]);

  const fetchAll = async () => {
    setLoading(true);
    try {
      const [usersRes, patchesRes] = await Promise.all([
        api.get("/user/search?query="),
        api.get("/patches"),
      ]);
      setUsers(usersRes.data);
      setPatches(patchesRes.data.filter(p => !p.member));
    } catch (err) { console.log(err); }
    finally { setLoading(false); }
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      const [usersRes, patchesRes] = await Promise.all([
        api.get(`/user/search?query=${query}`),
        api.get(`/patches/search?query=${query}`),
      ]);
      setUsers(usersRes.data);
      setPatches(patchesRes.data.filter(p => !p.member));
    } catch (err) { console.log(err); }
    finally { setLoading(false); }
  };

  const handleJoin = async (patchId) => {
    await api.post(`/patches/${patchId}/join`);
    setPatches(patches.filter(p => p.id !== patchId));
  };

  const handleFollow = async (email) => {
    await api.post(`/user/${email}/follow`);
    setUsers(users.map(u => u.email === email ? { ...u, following: !u.following } : u));
  };

  const getPatchesByTopics = (topics) =>
    patches.filter(p => topics.some(t => p.topic?.includes(t)));

  return (
    <div style={s.page}>
      <Navbar />
      <div style={s.layout}>
        <LeftSidebar />
        <div style={s.container}>
          <input
            style={s.searchBar}
            placeholder="🔍  Search users or patches..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />

          <div style={s.tabs}>
            <button style={activeTab === "patches" ? s.tabActive : s.tab} onClick={() => setActiveTab("patches")}>
              🛡️ Patches
            </button>
            <button style={activeTab === "users" ? s.tabActive : s.tab} onClick={() => setActiveTab("users")}>
              👤 Users ({users.length})
            </button>
          </div>

          {loading ? (
            <div style={s.loading}>SEARCHING...</div>
          ) : (
            <>
              {activeTab === "patches" && (
                query ? (
                  <>
                    <p style={s.categoryTitle}>Results for "{query}"</p>
                    {patches.length === 0 ? (
                      <div style={s.empty}><p>No patches found.</p></div>
                    ) : (
                      patches.map(patch => (
                        <div
                          key={patch.id}
                          style={s.patchRow}
                          onMouseEnter={e => { e.currentTarget.style.borderColor = "#ff3e3e44"; }}
                          onMouseLeave={e => { e.currentTarget.style.borderColor = "#1a1a1a"; }}
                        >
                          <div style={s.patchIconCircle}>{patch.icon}</div>
                          <div style={s.patchInfo}>
                            <p style={s.patchName}>{patch.name}</p>
                            <p style={s.patchDesc}>{patch.description || "No description."}</p>
                          </div>
                          <p style={s.membersCount}>{patch.memberCount} members</p>
                          <button style={s.joinBtn} onClick={() => handleJoin(patch.id)}>+ Join</button>
                        </div>
                      ))
                    )}
                  </>
                ) : (
                  CATEGORIES.map(cat => {
                    const catPatches = getPatchesByTopics(cat.topics);
                    if (catPatches.length === 0) return null;
                    return (
                      <div key={cat.label}>
                        <p style={s.categoryTitle}>{cat.label}</p>
                        {catPatches.map(patch => (
                          <div
                            key={patch.id}
                            style={s.patchRow}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = "#ff3e3e44"; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = "#1a1a1a"; }}
                          >
                            <div style={s.patchIconCircle}>{patch.icon}</div>
                            <div style={s.patchInfo}>
                              <p style={s.patchName}>{patch.name}</p>
                              <p style={s.patchDesc}>{patch.description || "No description."}</p>
                            </div>
                            <p style={s.membersCount}>{patch.memberCount} members</p>
                            <button style={s.joinBtn} onClick={() => handleJoin(patch.id)}>+ Join</button>
                          </div>
                        ))}
                      </div>
                    );
                  })
                )
              )}

              {activeTab === "users" && (
                users.length === 0 ? (
                  <div style={s.empty}><p>No users found.</p></div>
                ) : (
                  <div style={s.userGrid}>
                    {users.map(user => (
                      <div key={user.id} style={s.userCard}>
                        <div style={s.userAvatar}>{user.username?.charAt(0).toUpperCase()}</div>
                        <p style={s.userName}>{user.username}</p>
                        <p style={s.userEmail}>{user.email}</p>
                        {user.bio && <p style={s.userBio}>{user.bio}</p>}
                        <div style={s.userBtns}>
                          <button style={s.viewBtn} onClick={() => navigate(`/user/${user.email}`)}>View</button>
                          <button
                            style={user.following ? s.addedBtn : s.addBtn}
                            onClick={() => handleFollow(user.email)}
                          >
                            {user.following ? "✓ Added" : "+ Add"}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}