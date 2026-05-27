// import { useState, useEffect, useRef } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import api from "../api/axios";
// import Navbar from "../components/Navbar";

// const s = {
//   page: {
//     minHeight: "100vh",
//     background: "#000000",
//     fontFamily: "var(--font-poppins)",
//     color: "#ffffff",
//   },
//   layout: {
//     display: "flex",
//     height: "calc(100vh - 64px)",
//   },

//   // LEFT: Conversations List
//   conversationsList: {
//     width: "300px",
//     minWidth: "300px",
//     borderRight: "1px solid #1a1a1a",
//     display: "flex",
//     flexDirection: "column",
//     background: "#000000",
//   },
//   conversationsHeader: {
//     padding: "20px",
//     borderBottom: "1px solid #1a1a1a",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   conversationsTitle: {
//     color: "#ffffff",
//     fontSize: "16px",
//     fontWeight: "700",
//     margin: 0,
//     fontFamily: "var(--font-poppins)",
//   },
//   newMessageBtn: {
//     background: "#ff3e3e",
//     border: "none",
//     color: "#ffffff",
//     width: "32px",
//     height: "32px",
//     borderRadius: "50%",
//     cursor: "pointer",
//     fontSize: "16px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   searchInput: {
//     margin: "12px 16px",
//     background: "#0a0a0a",
//     border: "1px solid #1a1a1a",
//     borderRadius: "20px",
//     padding: "8px 16px",
//     color: "#ffffff",
//     fontSize: "13px",
//     fontFamily: "var(--font-poppins)",
//     outline: "none",
//     width: "calc(100% - 32px)",
//     boxSizing: "border-box",
//   },
//   conversationItem: {
//     display: "flex",
//     alignItems: "center",
//     gap: "12px",
//     padding: "14px 20px",
//     cursor: "pointer",
//     borderBottom: "1px solid #0a0a0a",
//     transition: "background 0.15s",
//   },
//   conversationItemActive: {
//     display: "flex",
//     alignItems: "center",
//     gap: "12px",
//     padding: "14px 20px",
//     cursor: "pointer",
//     borderBottom: "1px solid #0a0a0a",
//     background: "#0a0a0a",
//     borderLeft: "2px solid #ff3e3e",
//   },
//   convAvatar: {
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
//   convInfo: {
//     flex: 1,
//     overflow: "hidden",
//   },
//   convName: {
//     color: "#ffffff",
//     fontSize: "14px",
//     fontWeight: "600",
//     margin: "0 0 2px 0",
//     fontFamily: "var(--font-poppins)",
//   },
//   convPreview: {
//     color: "#444444",
//     fontSize: "12px",
//     margin: 0,
//     overflow: "hidden",
//     textOverflow: "ellipsis",
//     whiteSpace: "nowrap",
//     fontFamily: "var(--font-poppins)",
//   },
//   unreadBadge: {
//     background: "#ff3e3e",
//     color: "#ffffff",
//     borderRadius: "50%",
//     width: "20px",
//     height: "20px",
//     fontSize: "10px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontWeight: "700",
//     flexShrink: 0,
//     fontFamily: "var(--font-poppins)",
//   },
//   emptyConversations: {
//     textAlign: "center",
//     color: "#333333",
//     padding: "40px 20px",
//     fontSize: "13px",
//     fontFamily: "var(--font-poppins)",
//   },

//   // RIGHT: Chat Area
//   chatArea: {
//     flex: 1,
//     display: "flex",
//     flexDirection: "column",
//     background: "#000000",
//   },
//   chatHeader: {
//     padding: "16px 24px",
//     borderBottom: "1px solid #1a1a1a",
//     display: "flex",
//     alignItems: "center",
//     gap: "12px",
//     background: "#0a0a0a",
//   },
//   chatAvatar: {
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
//   },
//   chatUsername: {
//     color: "#ffffff",
//     fontSize: "15px",
//     fontWeight: "700",
//     margin: 0,
//     fontFamily: "var(--font-poppins)",
//   },
//   chatEmail: {
//     color: "#444444",
//     fontSize: "12px",
//     margin: 0,
//     fontFamily: "var(--font-poppins)",
//   },
//   viewProfileBtn: {
//     background: "transparent",
//     border: "1px solid #1a1a1a",
//     color: "#555555",
//     padding: "6px 14px",
//     borderRadius: "20px",
//     cursor: "pointer",
//     fontSize: "12px",
//     fontFamily: "var(--font-poppins)",
//     marginLeft: "auto",
//     transition: "border-color 0.2s, color 0.2s",
//   },
//   messagesArea: {
//     flex: 1,
//     overflowY: "auto",
//     padding: "24px",
//     display: "flex",
//     flexDirection: "column",
//     gap: "12px",
//   },
//   messageBubbleWrapper: {
//     display: "flex",
//     alignItems: "flex-end",
//     gap: "8px",
//   },
//   messageBubbleWrapperRight: {
//     display: "flex",
//     alignItems: "flex-end",
//     gap: "8px",
//     flexDirection: "row-reverse",
//   },
//   msgAvatar: {
//     width: "28px",
//     height: "28px",
//     background: "#1a1a1a",
//     borderRadius: "50%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: "11px",
//     color: "#555555",
//     flexShrink: 0,
//     fontFamily: "var(--font-poppins)",
//   },
//   msgAvatarSelf: {
//     width: "28px",
//     height: "28px",
//     background: "#ff3e3e",
//     borderRadius: "50%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: "11px",
//     color: "#fff",
//     flexShrink: 0,
//     fontFamily: "var(--font-poppins)",
//   },
//   messageBubble: {
//     background: "#0a0a0a",
//     border: "1px solid #1a1a1a",
//     borderRadius: "16px 16px 16px 4px",
//     padding: "10px 16px",
//     maxWidth: "60%",
//   },
//   messageBubbleSelf: {
//     background: "#ff3e3e",
//     borderRadius: "16px 16px 4px 16px",
//     padding: "10px 16px",
//     maxWidth: "60%",
//   },
//   messageContent: {
//     color: "#ffffff",
//     fontSize: "14px",
//     margin: "0 0 4px 0",
//     lineHeight: "1.5",
//     fontFamily: "var(--font-poppins)",
//   },
//   messageTime: {
//     color: "rgba(255,255,255,0.35)",
//     fontSize: "10px",
//     margin: 0,
//     fontFamily: "var(--font-poppins)",
//   },
//   inputArea: {
//     padding: "16px 24px",
//     borderTop: "1px solid #1a1a1a",
//     display: "flex",
//     gap: "12px",
//     alignItems: "center",
//     background: "#0a0a0a",
//   },
//   messageInput: {
//     flex: 1,
//     background: "#000000",
//     border: "1px solid #1a1a1a",
//     borderRadius: "24px",
//     padding: "12px 20px",
//     color: "#ffffff",
//     fontSize: "14px",
//     fontFamily: "var(--font-poppins)",
//     outline: "none",
//   },
//   sendBtn: {
//     background: "#ff3e3e",
//     border: "none",
//     color: "#ffffff",
//     width: "44px",
//     height: "44px",
//     borderRadius: "50%",
//     cursor: "pointer",
//     fontSize: "16px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     flexShrink: 0,
//   },
//   emptyChat: {
//     flex: 1,
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     color: "#333333",
//     gap: "16px",
//     fontFamily: "var(--font-poppins)",
//   },
//   emptyChatIcon: {
//     fontSize: "60px",
//   },
//   emptyChatTitle: {
//     fontSize: "18px",
//     color: "#555555",
//     margin: 0,
//     fontFamily: "var(--font-poppins)",
//   },
//   emptyChatSubtitle: {
//     fontSize: "13px",
//     margin: 0,
//     fontFamily: "var(--font-poppins)",
//   },

//   // New Message Modal
//   newMsgModal: {
//     position: "fixed",
//     top: 0, left: 0, right: 0, bottom: 0,
//     background: "rgba(0,0,0,0.85)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     zIndex: 1000,
//   },
//   newMsgCard: {
//     background: "#0a0a0a",
//     border: "1px solid #1a1a1a",
//     borderRadius: "12px",
//     padding: "32px",
//     width: "100%",
//     maxWidth: "440px",
//   },
//   newMsgTitle: {
//     color: "#ffffff",
//     fontSize: "18px",
//     fontWeight: "700",
//     margin: "0 0 20px 0",
//     fontFamily: "var(--font-poppins)",
//   },
//   newMsgInput: {
//     width: "100%",
//     background: "#000000",
//     border: "1px solid #1a1a1a",
//     borderRadius: "8px",
//     padding: "12px 16px",
//     color: "#ffffff",
//     fontSize: "14px",
//     fontFamily: "var(--font-poppins)",
//     outline: "none",
//     boxSizing: "border-box",
//     marginBottom: "12px",
//   },
//   newMsgBtns: {
//     display: "flex",
//     gap: "12px",
//     justifyContent: "flex-end",
//     marginTop: "16px",
//   },
//   cancelBtn: {
//     background: "transparent",
//     border: "1px solid #1a1a1a",
//     color: "#555555",
//     padding: "10px 20px",
//     borderRadius: "20px",
//     cursor: "pointer",
//     fontSize: "12px",
//     fontFamily: "var(--font-poppins)",
//   },
//   startBtn: {
//     background: "#ff3e3e",
//     border: "none",
//     color: "#ffffff",
//     padding: "10px 24px",
//     borderRadius: "20px",
//     cursor: "pointer",
//     fontSize: "12px",
//     fontFamily: "var(--font-poppins)",
//     fontWeight: "700",
//   },
//   userResult: {
//     display: "flex",
//     alignItems: "center",
//     gap: "12px",
//     padding: "10px 12px",
//     borderRadius: "8px",
//     cursor: "pointer",
//     marginBottom: "4px",
//     transition: "background 0.15s",
//   },
//   userResultAvatar: {
//     width: "36px",
//     height: "36px",
//     background: "#ff3e3e",
//     borderRadius: "50%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: "14px",
//     fontWeight: "700",
//     color: "#fff",
//   },
//   userResultName: {
//     color: "#ffffff",
//     fontSize: "14px",
//     margin: 0,
//     fontFamily: "var(--font-poppins)",
//   },
//   userResultEmail: {
//     color: "#444444",
//     fontSize: "12px",
//     margin: 0,
//     fontFamily: "var(--font-poppins)",
//   },
// };

// export default function Signal() {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [partners, setPartners] = useState([]);
//   const [selectedPartner, setSelectedPartner] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [showNewMsg, setShowNewMsg] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [convSearch, setConvSearch] = useState("");
//   const messagesEndRef = useRef(null);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchCurrentUser();
//     fetchPartners();
//   }, []);

//   useEffect(() => {
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages]);

//   useEffect(() => {
//     if (searchQuery.trim()) {
//       api.get(`/user/search?query=${searchQuery}`)
//         .then(res => setSearchResults(res.data))
//         .catch(err => console.log(err));
//     } else {
//       setSearchResults([]);
//     }
//   }, [searchQuery]);

//   useEffect(() => {
//     if (location.state?.contact) {
//       handleSelectPartner(location.state.contact);
//     }
//   }, [location.state]);

//   const fetchCurrentUser = async () => {
//     try {
//       const res = await api.get("/user/me");
//       setCurrentUser(res.data);
//     } catch {
//       navigate("/login");
//     }
//   };

//   const fetchPartners = async () => {
//     try {
//       const res = await api.get("/messages/partners");
//       setPartners(res.data);
//     } catch (err) {
//       console.log("Error fetching partners:", err);
//     }
//   };

//   const fetchMessages = async (partnerEmail) => {
//     try {
//       const res = await api.get(`/messages/conversation/${partnerEmail}`);
//       setMessages(res.data);
//       fetchPartners();
//     } catch (err) {
//       console.log("Error fetching messages:", err);
//     }
//   };

//   const handleSelectPartner = (partner) => {
//     setSelectedPartner(partner);
//     fetchMessages(partner.email);
//   };

//   const handleSend = async () => {
//     if (!newMessage.trim() || !selectedPartner) return;

//     const temporaryMsg = {
//       id: Date.now(),
//       content: newMessage,
//       senderEmail: currentUser.email,
//       createdAt: new Date().toISOString(),
//       senderUsername: currentUser.username,
//     };

//     setMessages(prev => [...prev, temporaryMsg]);
//     const textToSend = newMessage;
//     setNewMessage("");

//     try {
//       await api.post("/messages", {
//         receiverEmail: selectedPartner.email,
//         content: textToSend,
//       });
//       fetchMessages(selectedPartner.email);
//     } catch (err) {
//       console.log("Error sending message:", err);
//       setMessages(prev => prev.filter(m => m.id !== temporaryMsg.id));
//     }
//   };

//   const handleStartConversation = (user) => {
//     setSelectedPartner(user);
//     fetchMessages(user.email);
//     setShowNewMsg(false);
//     setSearchQuery("");
//     fetchPartners();
//   };

//   const formatTime = (dateStr) => {
//     const date = new Date(dateStr);
//     return date.toLocaleTimeString("en-US", {
//       hour: "2-digit", minute: "2-digit",
//     });
//   };

//   const filteredPartners = partners.filter(p =>
//     p.username?.toLowerCase().includes(convSearch.toLowerCase())
//   );

//   if (!currentUser) return (
//     <div style={s.page}>
//       <Navbar />
//       <div style={{ textAlign: "center", padding: "40px", color: "#333333", fontFamily: "var(--font-poppins)" }}>
//         LOADING...
//       </div>
//     </div>
//   );

//   return (
//     <div style={s.page}>
//       <Navbar />

//       {/* New Message Modal */}
//       {showNewMsg && (
//         <div
//           style={s.newMsgModal}
//           onClick={(e) => { if (e.target === e.currentTarget) setShowNewMsg(false); }}
//         >
//           <div style={s.newMsgCard}>
//             <p style={s.newMsgTitle}>📨 New Message</p>
//             <input
//               style={s.newMsgInput}
//               placeholder="Search for a user..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               autoFocus
//             />
//             {searchResults.map(user => (
//               <div
//                 key={user.id}
//                 style={s.userResult}
//                 onClick={() => handleStartConversation(user)}
//                 onMouseEnter={e => e.currentTarget.style.background = "#111111"}
//                 onMouseLeave={e => e.currentTarget.style.background = "transparent"}
//               >
//                 <div style={s.userResultAvatar}>
//                   {user.username?.charAt(0).toUpperCase()}
//                 </div>
//                 <div>
//                   <p style={s.userResultName}>{user.username}</p>
//                   <p style={s.userResultEmail}>{user.email}</p>
//                 </div>
//               </div>
//             ))}
//             <div style={s.newMsgBtns}>
//               <button style={s.cancelBtn} onClick={() => setShowNewMsg(false)}>
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <div style={s.layout}>
//         {/* LEFT: Conversations */}
//         <div style={s.conversationsList}>
//           <div style={s.conversationsHeader}>
//             <p style={s.conversationsTitle}>📨 Signal</p>
//             <button
//               style={s.newMessageBtn}
//               onClick={() => setShowNewMsg(true)}
//               title="New Message"
//             >
//               ✏️
//             </button>
//           </div>

//           <input
//             style={s.searchInput}
//             placeholder="Search conversations..."
//             value={convSearch}
//             onChange={(e) => setConvSearch(e.target.value)}
//           />

//           {filteredPartners.length === 0 ? (
//             <div style={s.emptyConversations}>
//               <div style={{ fontSize: "32px", marginBottom: "12px" }}>💬</div>
//               <p>No conversations yet.</p>
//               <p style={{ fontSize: "12px", color: "#333333" }}>
//                 Click ✏️ to start a new message!
//               </p>
//             </div>
//           ) : (
//             filteredPartners.map(partner => (
//               <div
//                 key={partner.email}
//                 style={
//                   selectedPartner?.email === partner.email
//                     ? s.conversationItemActive
//                     : s.conversationItem
//                 }
//                 onClick={() => handleSelectPartner(partner)}
//                 onMouseEnter={e => {
//                   if (selectedPartner?.email !== partner.email)
//                     e.currentTarget.style.background = "#0a0a0a";
//                 }}
//                 onMouseLeave={e => {
//                   if (selectedPartner?.email !== partner.email)
//                     e.currentTarget.style.background = "transparent";
//                 }}
//               >
//                 <div style={s.convAvatar}>
//                   {partner.username?.charAt(0).toUpperCase()}
//                 </div>
//                 <div style={s.convInfo}>
//                   <p style={s.convName}>{partner.username}</p>
//                   <p style={s.convPreview}>{partner.email}</p>
//                 </div>
//                 {partner.unreadCount > 0 && (
//                   <div style={s.unreadBadge}>{partner.unreadCount}</div>
//                 )}
//               </div>
//             ))
//           )}
//         </div>

//         {/* RIGHT: Chat Area */}
//         <div style={s.chatArea}>
//           {!selectedPartner ? (
//             <div style={s.emptyChat}>
//               <div style={s.emptyChatIcon}>📨</div>
//               <p style={s.emptyChatTitle}>Your Signal</p>
//               <p style={s.emptyChatSubtitle}>
//                 Select a conversation or start a new one
//               </p>
//               <button
//                 style={{ ...s.startBtn, marginTop: "8px" }}
//                 onClick={() => setShowNewMsg(true)}
//               >
//                 ✏️ New Message
//               </button>
//             </div>
//           ) : (
//             <>
//               {/* Chat Header */}
//               <div style={s.chatHeader}>
//                 <div style={s.chatAvatar}>
//                   {selectedPartner.username?.charAt(0).toUpperCase()}
//                 </div>
//                 <div>
//                   <p style={s.chatUsername}>{selectedPartner.username}</p>
//                   <p style={s.chatEmail}>{selectedPartner.email}</p>
//                 </div>
//                 <button
//                   style={s.viewProfileBtn}
//                   onClick={() => navigate(`/user/${selectedPartner.email}`)}
//                 >
//                   View Profile
//                 </button>
//               </div>

//               {/* Messages */}
//               <div style={s.messagesArea}>
//                 {messages.length === 0 && (
//                   <div style={{ textAlign: "center", color: "#333333", padding: "40px 0", fontSize: "13px", fontFamily: "var(--font-poppins)" }}>
//                     No messages yet. Say hello! 👋
//                   </div>
//                 )}
//                 {messages.map(msg => {
//                   const isSelf = msg.senderEmail === currentUser.email;
//                   return (
//                     <div
//                       key={msg.id}
//                       style={isSelf ? s.messageBubbleWrapperRight : s.messageBubbleWrapper}
//                     >
//                       <div style={isSelf ? s.msgAvatarSelf : s.msgAvatar}>
//                         {msg.senderUsername?.charAt(0).toUpperCase()}
//                       </div>
//                       <div style={isSelf ? s.messageBubbleSelf : s.messageBubble}>
//                         <p style={s.messageContent}>{msg.content}</p>
//                         <p style={s.messageTime}>{formatTime(msg.createdAt)}</p>
//                       </div>
//                     </div>
//                   );
//                 })}
//                 <div ref={messagesEndRef} />
//               </div>

//               {/* Input */}
//               <div style={s.inputArea}>
//                 <input
//                   style={s.messageInput}
//                   placeholder="Write a message..."
//                   value={newMessage}
//                   onChange={(e) => setNewMessage(e.target.value)}
//                   onKeyDown={(e) => { if (e.key === "Enter") handleSend(); }}
//                 />
//                 <button style={s.sendBtn} onClick={handleSend}>➤</button>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useState, useEffect, useRef } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
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
//     height: "calc(100vh - 56px)",
//   },
//   conversationsList: {
//     width: "280px",
//     minWidth: "280px",
//     borderRight: "1px solid #1a1a1a",
//     display: "flex",
//     flexDirection: "column",
//     background: "#000000",
//   },
//   conversationsHeader: {
//     padding: "16px 20px",
//     borderBottom: "1px solid #1a1a1a",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   conversationsTitle: {
//     color: "#ffffff",
//     fontSize: "15px",
//     fontWeight: "700",
//     margin: 0,
//   },
//   newMessageBtn: {
//     background: "#ff3e3e",
//     border: "none",
//     color: "#ffffff",
//     width: "30px",
//     height: "30px",
//     borderRadius: "50%",
//     cursor: "pointer",
//     fontSize: "16px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   searchInput: {
//     margin: "10px 14px",
//     background: "#0a0a0a",
//     border: "1px solid #1a1a1a",
//     borderRadius: "20px",
//     padding: "7px 14px",
//     color: "#ffffff",
//     fontSize: "13px",
//     fontFamily: "var(--font-poppins)",
//     outline: "none",
//     width: "calc(100% - 28px)",
//     boxSizing: "border-box",
//   },
//   conversationItem: {
//     display: "flex",
//     alignItems: "center",
//     gap: "12px",
//     padding: "12px 16px",
//     cursor: "pointer",
//     borderBottom: "1px solid #0a0a0a",
//     transition: "background 0.15s",
//   },
//   conversationItemActive: {
//     display: "flex",
//     alignItems: "center",
//     gap: "12px",
//     padding: "12px 16px",
//     cursor: "pointer",
//     borderBottom: "1px solid #0a0a0a",
//     background: "#1a0000",
//   },
//   convAvatar: {
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
//   convInfo: { flex: 1, overflow: "hidden" },
//   convName: {
//     color: "#ffffff",
//     fontSize: "13px",
//     fontWeight: "600",
//     margin: "0 0 2px 0",
//   },
//   convPreview: {
//     color: "#444444",
//     fontSize: "12px",
//     margin: 0,
//     overflow: "hidden",
//     textOverflow: "ellipsis",
//     whiteSpace: "nowrap",
//   },
//   unreadBadge: {
//     background: "#ff3e3e",
//     color: "#ffffff",
//     borderRadius: "50%",
//     width: "18px",
//     height: "18px",
//     fontSize: "10px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontWeight: "700",
//     flexShrink: 0,
//   },
//   emptyConversations: {
//     textAlign: "center",
//     color: "#333333",
//     padding: "40px 16px",
//     fontSize: "13px",
//   },
//   chatArea: {
//     flex: 1,
//     display: "flex",
//     flexDirection: "column",
//   },
//   chatHeader: {
//     padding: "14px 20px",
//     borderBottom: "1px solid #1a1a1a",
//     display: "flex",
//     alignItems: "center",
//     gap: "12px",
//     background: "#000000",
//   },
//   chatAvatar: {
//     width: "36px",
//     height: "36px",
//     background: "#ff3e3e",
//     borderRadius: "50%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: "14px",
//     fontWeight: "700",
//     color: "#fff",
//   },
//   chatUsername: {
//     color: "#ffffff",
//     fontSize: "14px",
//     fontWeight: "700",
//     margin: 0,
//   },
//   chatEmail: {
//     color: "#444444",
//     fontSize: "12px",
//     margin: 0,
//   },
//   viewProfileBtn: {
//     background: "transparent",
//     border: "1px solid #1a1a1a",
//     color: "#555555",
//     padding: "5px 12px",
//     borderRadius: "20px",
//     cursor: "pointer",
//     fontSize: "11px",
//     fontFamily: "var(--font-poppins)",
//     marginLeft: "auto",
//   },
//   messagesArea: {
//     flex: 1,
//     overflowY: "auto",
//     padding: "20px",
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//   },
//   msgWrapperLeft: {
//     display: "flex",
//     alignItems: "flex-end",
//     gap: "8px",
//   },
//   msgWrapperRight: {
//     display: "flex",
//     alignItems: "flex-end",
//     gap: "8px",
//     flexDirection: "row-reverse",
//   },
//   msgAvatar: {
//     width: "26px",
//     height: "26px",
//     background: "#1a1a1a",
//     borderRadius: "50%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: "10px",
//     color: "#888888",
//     flexShrink: 0,
//   },
//   msgAvatarSelf: {
//     width: "26px",
//     height: "26px",
//     background: "#ff3e3e",
//     borderRadius: "50%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: "10px",
//     color: "#fff",
//     flexShrink: 0,
//   },
//   msgBubble: {
//     background: "#0a0a0a",
//     border: "1px solid #1a1a1a",
//     borderRadius: "16px 16px 16px 4px",
//     padding: "9px 14px",
//     maxWidth: "60%",
//   },
//   msgBubbleSelf: {
//     background: "#ff3e3e",
//     borderRadius: "16px 16px 4px 16px",
//     padding: "9px 14px",
//     maxWidth: "60%",
//   },
//   msgContent: {
//     color: "#ffffff",
//     fontSize: "13px",
//     margin: "0 0 2px 0",
//     lineHeight: "1.4",
//   },
//   msgTime: {
//     color: "rgba(255,255,255,0.35)",
//     fontSize: "10px",
//     margin: 0,
//   },
//   inputArea: {
//     padding: "12px 20px",
//     borderTop: "1px solid #1a1a1a",
//     display: "flex",
//     gap: "10px",
//     alignItems: "center",
//   },
//   messageInput: {
//     flex: 1,
//     background: "#0a0a0a",
//     border: "1px solid #1a1a1a",
//     borderRadius: "24px",
//     padding: "10px 18px",
//     color: "#ffffff",
//     fontSize: "13px",
//     fontFamily: "var(--font-poppins)",
//     outline: "none",
//   },
//   sendBtn: {
//     background: "#ff3e3e",
//     border: "none",
//     color: "#ffffff",
//     width: "40px",
//     height: "40px",
//     borderRadius: "50%",
//     cursor: "pointer",
//     fontSize: "16px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     flexShrink: 0,
//   },
//   emptyChat: {
//     flex: 1,
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     color: "#333333",
//     gap: "12px",
//   },
//   newMsgModal: {
//     position: "fixed",
//     top: 0, left: 0, right: 0, bottom: 0,
//     background: "rgba(0,0,0,0.85)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     zIndex: 1000,
//   },
//   newMsgCard: {
//     background: "#0a0a0a",
//     border: "1px solid #1a1a1a",
//     borderRadius: "12px",
//     padding: "28px",
//     width: "100%",
//     maxWidth: "420px",
//     maxHeight: "70vh",
//     overflowY: "auto",
//   },
//   newMsgTitle: {
//     color: "#ffffff",
//     fontSize: "16px",
//     fontWeight: "700",
//     margin: "0 0 16px 0",
//   },
//   newMsgInput: {
//     width: "100%",
//     background: "#000000",
//     border: "1px solid #1a1a1a",
//     borderRadius: "8px",
//     padding: "10px 14px",
//     color: "#ffffff",
//     fontSize: "13px",
//     fontFamily: "var(--font-poppins)",
//     outline: "none",
//     boxSizing: "border-box",
//     marginBottom: "12px",
//   },
//   userResult: {
//     display: "flex",
//     alignItems: "center",
//     gap: "12px",
//     padding: "10px 8px",
//     borderRadius: "8px",
//     cursor: "pointer",
//     marginBottom: "4px",
//     transition: "background 0.15s",
//   },
//   userResultAvatar: {
//     width: "34px",
//     height: "34px",
//     background: "#ff3e3e",
//     borderRadius: "50%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: "13px",
//     fontWeight: "700",
//     color: "#fff",
//   },
//   userResultName: { color: "#ffffff", fontSize: "13px", margin: 0 },
//   userResultEmail: { color: "#444444", fontSize: "11px", margin: 0 },
//   cancelBtn: {
//     background: "transparent",
//     border: "1px solid #1a1a1a",
//     color: "#555555",
//     padding: "8px 16px",
//     borderRadius: "20px",
//     cursor: "pointer",
//     fontSize: "12px",
//     fontFamily: "var(--font-poppins)",
//     marginTop: "12px",
//     width: "100%",
//   },
//   sectionLabel: {
//     color: "#333333",
//     fontSize: "10px",
//     letterSpacing: "2px",
//     textTransform: "uppercase",
//     margin: "12px 0 6px 0",
//     fontWeight: "600",
//   },
// };

// export default function Signal() {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [partners, setPartners] = useState([]);
//   const [friends, setFriends] = useState([]);
//   const [selectedPartner, setSelectedPartner] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [showNewMsg, setShowNewMsg] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [convSearch, setConvSearch] = useState("");
//   const messagesEndRef = useRef(null);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const pollingRef = useRef(null);

//   useEffect(() => {
//     fetchCurrentUser();
//     fetchPartners();
//     fetchFriends();
//   }, []);

//   useEffect(() => {
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages]);

//   useEffect(() => {
//     if (searchQuery.trim()) {
//       api.get(`/user/search?query=${searchQuery}`)
//         .then(res => setSearchResults(res.data))
//         .catch(() => {});
//     } else {
//       setSearchResults([]);
//     }
//   }, [searchQuery]);

//   useEffect(() => {
//     if (location.state?.contact) {
//       handleSelectPartner(location.state.contact);
//     }
//   }, [location.state]);

//   useEffect(() => {
//     if (selectedPartner) {
//       pollingRef.current = setInterval(() => {
//         fetchMessages(selectedPartner.email, false);
//         fetchPartners();
//       }, 3000);
//     }
//     return () => clearInterval(pollingRef.current);
//   }, [selectedPartner]);

//   const fetchCurrentUser = async () => {
//     try {
//       const res = await api.get("/user/me");
//       setCurrentUser(res.data);
//     } catch { navigate("/login"); }
//   };

//   const fetchPartners = async () => {
//     try {
//       const res = await api.get("/messages/partners");
//       setPartners(res.data);
//     } catch (err) { console.log(err); }
//   };

//   const fetchFriends = async () => {
//     try {
//       const res = await api.get("/user/friends");
//       setFriends(res.data);
//     } catch (err) { console.log(err); }
//   };

//   const fetchMessages = async (partnerEmail, updatePartners = true) => {
//     try {
//       const res = await api.get(`/messages/conversation/${partnerEmail}`);
//       setMessages(res.data);
//       if (updatePartners) fetchPartners();
//     } catch (err) { console.log(err); }
//   };

//   const handleSelectPartner = (partner) => {
//     setSelectedPartner(partner);
//     fetchMessages(partner.email);
//   };

//   const handleSend = async () => {
//     if (!newMessage.trim() || !selectedPartner) return;

//     const tempMsg = {
//       id: Date.now(),
//       content: newMessage,
//       senderEmail: currentUser.email,
//       senderUsername: currentUser.username,
//       createdAt: new Date().toISOString(),
//     };
//     setMessages(prev => [...prev, tempMsg]);
//     const textToSend = newMessage;
//     setNewMessage("");

//     try {
//       await api.post("/messages", {
//         receiverEmail: selectedPartner.email,
//         content: textToSend,
//       });
//       fetchMessages(selectedPartner.email);
//       fetchPartners();
//     } catch (err) {
//       setMessages(prev => prev.filter(m => m.id !== tempMsg.id));
//       console.log(err);
//     }
//   };

//   const handleStartConversation = (user) => {
//     const partner = { username: user.username, email: user.email };
//     setSelectedPartner(partner);
//     fetchMessages(user.email);
//     setShowNewMsg(false);
//     setSearchQuery("");
//     fetchPartners();
//   };

//   const formatTime = (dateStr) => new Date(dateStr).toLocaleTimeString("en-US", {
//     hour: "2-digit", minute: "2-digit"
//   });

//   const filteredPartners = partners.filter(p =>
//     p.username?.toLowerCase().includes(convSearch.toLowerCase())
//   );

//   if (!currentUser) return (
//     <div style={s.page}>
//       <Navbar />
//       <div style={{ textAlign: "center", padding: "40px", color: "#333333" }}>LOADING...</div>
//     </div>
//   );

//   return (
//     <div style={s.page}>
//       <Navbar />

//       {showNewMsg && (
//         <div style={s.newMsgModal} onClick={(e) => { if (e.target === e.currentTarget) setShowNewMsg(false); }}>
//           <div style={s.newMsgCard}>
//             <p style={s.newMsgTitle}>New Message</p>
//             <input
//               style={s.newMsgInput}
//               placeholder="Search users..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               autoFocus
//             />

//             {friends.length > 0 && !searchQuery && (
//               <>
//                 <p style={s.sectionLabel}>Friends</p>
//                 {friends.map(friend => (
//                   <div
//                     key={friend.email}
//                     style={s.userResult}
//                     onClick={() => handleStartConversation(friend)}
//                     onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,62,62,0.08)"; }}
//                     onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
//                   >
//                     <div style={s.userResultAvatar}>
//                       {friend.username?.charAt(0).toUpperCase()}
//                     </div>
//                     <div>
//                       <p style={s.userResultName}>{friend.username}</p>
//                       <p style={s.userResultEmail}>{friend.email}</p>
//                     </div>
//                   </div>
//                 ))}
//               </>
//             )}

//             {searchQuery && searchResults.length > 0 && (
//               <>
//                 <p style={s.sectionLabel}>Search Results</p>
//                 {searchResults.map(user => (
//                   <div
//                     key={user.id}
//                     style={s.userResult}
//                     onClick={() => handleStartConversation(user)}
//                     onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,62,62,0.08)"; }}
//                     onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
//                   >
//                     <div style={s.userResultAvatar}>
//                       {user.username?.charAt(0).toUpperCase()}
//                     </div>
//                     <div>
//                       <p style={s.userResultName}>{user.username}</p>
//                       <p style={s.userResultEmail}>{user.email}</p>
//                     </div>
//                   </div>
//                 ))}
//               </>
//             )}

//             <button style={s.cancelBtn} onClick={() => setShowNewMsg(false)}>Cancel</button>
//           </div>
//         </div>
//       )}

//       <div style={s.layout}>
//         <LeftSidebar />

//         <div style={s.conversationsList}>
//           <div style={s.conversationsHeader}>
//             <p style={s.conversationsTitle}>Signal</p>
//             <button style={s.newMessageBtn} onClick={() => setShowNewMsg(true)} title="New Message">
//               +
//             </button>
//           </div>

//           <input
//             style={s.searchInput}
//             placeholder="Search conversations..."
//             value={convSearch}
//             onChange={(e) => setConvSearch(e.target.value)}
//           />

//           {filteredPartners.length === 0 ? (
//             <div style={s.emptyConversations}>
//               <div style={{ fontSize: "28px", marginBottom: "10px" }}>💬</div>
//               <p>No conversations yet.</p>
//               <p style={{ fontSize: "12px", marginTop: "4px" }}>Press + to start one!</p>
//             </div>
//           ) : (
//             filteredPartners.map(partner => (
//               <div
//                 key={partner.email}
//                 style={selectedPartner?.email === partner.email
//                   ? s.conversationItemActive
//                   : s.conversationItem}
//                 onClick={() => handleSelectPartner(partner)}
//                 onMouseEnter={e => { if (selectedPartner?.email !== partner.email) e.currentTarget.style.background = "rgba(255,62,62,0.05)"; }}
//                 onMouseLeave={e => { if (selectedPartner?.email !== partner.email) e.currentTarget.style.background = "transparent"; }}
//               >
//                 <div style={s.convAvatar}>
//                   {partner.username?.charAt(0).toUpperCase()}
//                 </div>
//                 <div style={s.convInfo}>
//                   <p style={s.convName}>{partner.username}</p>
//                   <p style={s.convPreview}>{partner.email}</p>
//                 </div>
//                 {partner.unreadCount > 0 && (
//                   <div style={s.unreadBadge}>{partner.unreadCount}</div>
//                 )}
//               </div>
//             ))
//           )}
//         </div>

//         <div style={s.chatArea}>
//           {!selectedPartner ? (
//             <div style={s.emptyChat}>
//               <div style={{ fontSize: "48px" }}>💬</div>
//               <p style={{ fontSize: "16px", color: "#555555" }}>Your Signal</p>
//               <p style={{ fontSize: "13px" }}>Select a conversation or start a new one</p>
//               <button
//                 style={{ background: "#ff3e3e", border: "none", color: "#fff", padding: "10px 24px", borderRadius: "20px", cursor: "pointer", fontSize: "13px", fontFamily: "var(--font-poppins)", marginTop: "8px" }}
//                 onClick={() => setShowNewMsg(true)}
//               >
//                 + New Message
//               </button>
//             </div>
//           ) : (
//             <>
//               <div style={s.chatHeader}>
//                 <div style={s.chatAvatar}>
//                   {selectedPartner.username?.charAt(0).toUpperCase()}
//                 </div>
//                 <div>
//                   <p style={s.chatUsername}>{selectedPartner.username}</p>
//                   <p style={s.chatEmail}>{selectedPartner.email}</p>
//                 </div>
//                 <button
//                   style={s.viewProfileBtn}
//                   onClick={() => navigate(`/user/${selectedPartner.email}`)}
//                 >
//                   View Profile
//                 </button>
//               </div>

//               <div style={s.messagesArea}>
//                 {messages.length === 0 && (
//                   <div style={{ textAlign: "center", color: "#333333", padding: "40px 0", fontSize: "13px" }}>
//                     No messages yet. Say hello! 👋
//                   </div>
//                 )}
//                 {messages.map(msg => {
//                   const isSelf = msg.senderEmail === currentUser.email;
//                   return (
//                     <div key={msg.id} style={isSelf ? s.msgWrapperRight : s.msgWrapperLeft}>
//                       <div style={isSelf ? s.msgAvatarSelf : s.msgAvatar}>
//                         {msg.senderUsername?.charAt(0).toUpperCase()}
//                       </div>
//                       <div style={isSelf ? s.msgBubbleSelf : s.msgBubble}>
//                         <p style={s.msgContent}>{msg.content}</p>
//                         <p style={s.msgTime}>{formatTime(msg.createdAt)}</p>
//                       </div>
//                     </div>
//                   );
//                 })}
//                 <div ref={messagesEndRef} />
//               </div>

//               <div style={s.inputArea}>
//                 <input
//                   style={s.messageInput}
//                   placeholder="Write a message..."
//                   value={newMessage}
//                   onChange={(e) => setNewMessage(e.target.value)}
//                   onKeyDown={(e) => { if (e.key === "Enter") handleSend(); }}
//                 />
//                 <button style={s.sendBtn} onClick={handleSend}>➤</button>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";

const s = {
  page: { minHeight: "100vh", background: "#000000", fontFamily: "'Poppins', sans-serif", color: "#ffffff" },
  layout: { display: "flex", height: "calc(100vh - 56px)" },
  convList: {
    width: "260px", minWidth: "260px", borderRight: "1px solid #1a1a1a",
    display: "flex", flexDirection: "column", background: "#000000", flexShrink: 0,
  },
  convHeader: {
    padding: "14px 16px", borderBottom: "1px solid #1a1a1a",
    display: "flex", alignItems: "center", justifyContent: "space-between",
  },
  convTitle: { color: "#ffffff", fontSize: "14px", fontWeight: "700", margin: 0 },
  newMsgBtn: {
    background: "#59000a", border: "none", color: "#ffffff",
    width: "28px", height: "28px", borderRadius: "50%", cursor: "pointer",
    fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center",
  },
  searchInput: {
    margin: "8px 12px", background: "#0a0a0a", border: "1px solid #1a1a1a",
    borderRadius: "20px", padding: "6px 12px", color: "#ffffff",
    fontSize: "12px", fontFamily: "'Poppins', sans-serif", outline: "none",
    width: "calc(100% - 24px)", boxSizing: "border-box",
  },
  convItem: {
    display: "flex", alignItems: "center", gap: "10px",
    padding: "10px 14px", cursor: "pointer",
    borderBottom: "1px solid #0a0a0a", transition: "background 0.15s",
  },
  convItemActive: {
    display: "flex", alignItems: "center", gap: "10px",
    padding: "10px 14px", cursor: "pointer",
    borderBottom: "1px solid #0a0a0a", background: "#1a0000",
  },
  convAvatar: {
    width: "38px", height: "38px", background: "#59000a", borderRadius: "50%",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: "15px", fontWeight: "700", color: "#fff", flexShrink: 0,
  },
  convInfo: { flex: 1, overflow: "hidden" },
  convName: { color: "#ffffff", fontSize: "13px", fontWeight: "600", margin: "0 0 1px 0" },
  convEmail: { color: "#444444", fontSize: "11px", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  unreadBadge: {
    background: "#59000a", color: "#ffffff", borderRadius: "50%",
    width: "17px", height: "17px", fontSize: "9px",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontWeight: "700", flexShrink: 0,
  },
  emptyConv: { textAlign: "center", color: "#333333", padding: "32px 14px", fontSize: "12px" },
  chatArea: { flex: 1, display: "flex", flexDirection: "column", minWidth: 0 },
  chatHeader: {
    padding: "12px 18px", borderBottom: "1px solid #1a1a1a",
    display: "flex", alignItems: "center", gap: "12px",
  },
  chatAvatar: {
    width: "34px", height: "34px", background: "#59000a", borderRadius: "50%",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: "13px", fontWeight: "700", color: "#fff",
  },
  chatUsername: { color: "#ffffff", fontSize: "14px", fontWeight: "600", margin: 0 },
  chatEmail: { color: "#444444", fontSize: "11px", margin: 0 },
  viewProfileBtn: {
    background: "transparent", border: "1px solid #1a1a1a", color: "#555555",
    padding: "5px 12px", borderRadius: "20px", cursor: "pointer",
    fontSize: "11px", fontFamily: "'Poppins', sans-serif", marginLeft: "auto",
  },
  messagesArea: {
    flex: 1, overflowY: "auto", padding: "16px 20px",
    display: "flex", flexDirection: "column", gap: "8px",
  },
  msgLeft: { display: "flex", alignItems: "flex-end", gap: "6px" },
  msgRight: { display: "flex", alignItems: "flex-end", gap: "6px", flexDirection: "row-reverse" },
  msgAvatarOther: {
    width: "24px", height: "24px", background: "#1a1a1a", borderRadius: "50%",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: "9px", color: "#888888", flexShrink: 0,
  },
  msgAvatarSelf: {
    width: "24px", height: "24px", background: "#59000a", borderRadius: "50%",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: "9px", color: "#fff", flexShrink: 0,
  },
  msgBubbleOther: {
    background: "#0a0a0a", border: "1px solid #1a1a1a",
    borderRadius: "14px 14px 14px 4px", padding: "8px 12px", maxWidth: "65%",
  },
  msgBubbleSelf: {
    background: "#59000a", borderRadius: "14px 14px 4px 14px",
    padding: "8px 12px", maxWidth: "65%",
  },
  msgContent: { color: "#ffffff", fontSize: "13px", margin: "0 0 2px 0", lineHeight: "1.4" },
  msgTime: { color: "rgba(255,255,255,0.35)", fontSize: "10px", margin: 0 },
  inputArea: {
    padding: "10px 16px", borderTop: "1px solid #1a1a1a",
    display: "flex", gap: "10px", alignItems: "center",
  },
  messageInput: {
    flex: 1, background: "#0a0a0a", border: "1px solid #1a1a1a",
    borderRadius: "24px", padding: "9px 16px", color: "#ffffff",
    fontSize: "13px", fontFamily: "'Poppins', sans-serif", outline: "none",
  },
  sendBtn: {
    background: "#59000a", border: "none", color: "#ffffff",
    width: "38px", height: "38px", borderRadius: "50%", cursor: "pointer",
    fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
  },
  emptyChat: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#333333", gap: "10px" },
  newMsgModal: {
    position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
    background: "rgba(0,0,0,0.85)", display: "flex",
    alignItems: "center", justifyContent: "center", zIndex: 1000,
  },
  newMsgCard: {
    background: "#0a0a0a", border: "1px solid #1a1a1a",
    borderRadius: "12px", padding: "24px", width: "100%",
    maxWidth: "400px", maxHeight: "70vh", overflowY: "auto",
  },
  newMsgTitle: { color: "#ffffff", fontSize: "15px", fontWeight: "700", margin: "0 0 14px 0" },
  newMsgInput: {
    width: "100%", background: "#000000", border: "1px solid #1a1a1a",
    borderRadius: "8px", padding: "9px 12px", color: "#ffffff",
    fontSize: "13px", fontFamily: "'Poppins', sans-serif", outline: "none",
    boxSizing: "border-box", marginBottom: "10px",
  },
  sectionLabel: { color: "#333333", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", margin: "10px 0 6px 0", fontWeight: "600" },
  userResult: {
    display: "flex", alignItems: "center", gap: "10px",
    padding: "8px", borderRadius: "8px", cursor: "pointer",
    marginBottom: "4px", transition: "background 0.15s",
  },
  userResultAvatar: {
    width: "32px", height: "32px", background: "#59000a", borderRadius: "50%",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: "12px", fontWeight: "700", color: "#fff", flexShrink: 0,
  },
  userResultName: { color: "#ffffff", fontSize: "13px", margin: 0 },
  userResultEmail: { color: "#444444", fontSize: "11px", margin: 0 },
  cancelBtn: {
    background: "transparent", border: "1px solid #1a1a1a", color: "#555555",
    padding: "8px 16px", borderRadius: "20px", cursor: "pointer",
    fontSize: "12px", fontFamily: "'Poppins', sans-serif",
    marginTop: "10px", width: "100%",
  },
};

export default function Signal() {
  const [currentUser, setCurrentUser] = useState(null);
  const [partners, setPartners] = useState([]);
  const [friends, setFriends] = useState([]);
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [showNewMsg, setShowNewMsg] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [convSearch, setConvSearch] = useState("");
  const messagesEndRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const pollingRef = useRef(null);

  useEffect(() => {
    fetchCurrentUser();
    fetchPartners();
    fetchFriends();
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (searchQuery.trim()) {
      api.get(`/user/search?query=${searchQuery}`).then(res => setSearchResults(res.data)).catch(() => {});
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (location.state?.contact) {
      handleSelectPartner(location.state.contact);
    }
  }, [location.state]);

  useEffect(() => {
    if (selectedPartner) {
      pollingRef.current = setInterval(() => {
        fetchMessages(selectedPartner.email, false);
        fetchPartners();
      }, 3000);
    }
    return () => clearInterval(pollingRef.current);
  }, [selectedPartner]);

  const fetchCurrentUser = async () => {
    try {
      const res = await api.get("/user/me");
      setCurrentUser(res.data);
    } catch { navigate("/login"); }
  };

  const fetchPartners = async () => {
    try {
      const res = await api.get("/messages/partners");
      setPartners(res.data);
    } catch { }
  };

  const fetchFriends = async () => {
    try {
      const res = await api.get("/user/friends");
      setFriends(res.data);
    } catch { }
  };

  const fetchMessages = async (partnerEmail, updatePartners = true) => {
    try {
      const res = await api.get(`/messages/conversation/${partnerEmail}`);
      setMessages(res.data);
      if (updatePartners) fetchPartners();
    } catch { }
  };

  const handleSelectPartner = (partner) => {
    setSelectedPartner(partner);
    fetchMessages(partner.email);
  };

  const handleSend = async () => {
    if (!newMessage.trim() || !selectedPartner) return;
    const tempMsg = {
      id: Date.now(), content: newMessage,
      senderEmail: currentUser.email, senderUsername: currentUser.username,
      createdAt: new Date().toISOString(),
    };
    setMessages(prev => [...prev, tempMsg]);
    const textToSend = newMessage;
    setNewMessage("");
    try {
      await api.post("/messages", { receiverEmail: selectedPartner.email, content: textToSend });
      fetchMessages(selectedPartner.email);
      fetchPartners();
    } catch {
      setMessages(prev => prev.filter(m => m.id !== tempMsg.id));
    }
  };

  const handleStartConversation = (user) => {
    const partner = { username: user.username, email: user.email };
    setSelectedPartner(partner);
    fetchMessages(user.email);
    setShowNewMsg(false);
    setSearchQuery("");
    fetchPartners();
  };

  const formatTime = (dateStr) => new Date(dateStr).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });

  const filteredPartners = partners.filter(p =>
    p.username?.toLowerCase().includes(convSearch.toLowerCase())
  );

  if (!currentUser) return (
    <div style={s.page}><Navbar /><div style={{ textAlign: "center", padding: "40px", color: "#333333" }}>LOADING...</div></div>
  );

  return (
    <div style={s.page}>
      <Navbar />

      {showNewMsg && (
        <div style={s.newMsgModal} onClick={(e) => { if (e.target === e.currentTarget) setShowNewMsg(false); }}>
          <div style={s.newMsgCard}>
            <p style={s.newMsgTitle}>New Message</p>
            <input
              style={s.newMsgInput}
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />

            {!searchQuery && friends.length > 0 && (
              <>
                <p style={s.sectionLabel}>Friends</p>
                {friends.map(friend => (
                  <div
                    key={friend.email} style={s.userResult}
                    onClick={() => handleStartConversation(friend)}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,62,62,0.08)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
                  >
                    <div style={s.userResultAvatar}>{friend.username?.charAt(0).toUpperCase()}</div>
                    <div>
                      <p style={s.userResultName}>{friend.username}</p>
                      <p style={s.userResultEmail}>{friend.email}</p>
                    </div>
                  </div>
                ))}
              </>
            )}

            {searchQuery && searchResults.length > 0 && (
              <>
                <p style={s.sectionLabel}>Search Results</p>
                {searchResults.map(user => (
                  <div
                    key={user.id} style={s.userResult}
                    onClick={() => handleStartConversation(user)}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,62,62,0.08)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
                  >
                    <div style={s.userResultAvatar}>{user.username?.charAt(0).toUpperCase()}</div>
                    <div>
                      <p style={s.userResultName}>{user.username}</p>
                      <p style={s.userResultEmail}>{user.email}</p>
                    </div>
                  </div>
                ))}
              </>
            )}

            <button style={s.cancelBtn} onClick={() => setShowNewMsg(false)}>Cancel</button>
          </div>
        </div>
      )}

      <div style={s.layout}>
        <LeftSidebar />

        <div style={s.convList}>
          <div style={s.convHeader}>
            <p style={s.convTitle}>Signal</p>
            <button style={s.newMsgBtn} onClick={() => setShowNewMsg(true)} title="New Message">+</button>
          </div>
          <input
            style={s.searchInput}
            placeholder="Search conversations..."
            value={convSearch}
            onChange={(e) => setConvSearch(e.target.value)}
          />

          {filteredPartners.length === 0 ? (
            <div style={s.emptyConv}>
              <div style={{ fontSize: "26px", marginBottom: "8px" }}>💬</div>
              <p>No conversations yet.</p>
              <p style={{ marginTop: "4px" }}>Press + to start one!</p>
            </div>
          ) : (
            filteredPartners.map(partner => (
              <div
                key={partner.email}
                style={selectedPartner?.email === partner.email ? s.convItemActive : s.convItem}
                onClick={() => handleSelectPartner(partner)}
                onMouseEnter={e => { if (selectedPartner?.email !== partner.email) e.currentTarget.style.background = "rgba(255,62,62,0.05)"; }}
                onMouseLeave={e => { if (selectedPartner?.email !== partner.email) e.currentTarget.style.background = "transparent"; }}
              >
                <div style={s.convAvatar}>{partner.username?.charAt(0).toUpperCase()}</div>
                <div style={s.convInfo}>
                  <p style={s.convName}>{partner.username}</p>
                  <p style={s.convEmail}>{partner.email}</p>
                </div>
                {partner.unreadCount > 0 && <div style={s.unreadBadge}>{partner.unreadCount}</div>}
              </div>
            ))
          )}
        </div>

        <div style={s.chatArea}>
          {!selectedPartner ? (
            <div style={s.emptyChat}>
              <div style={{ fontSize: "44px" }}>💬</div>
              <p style={{ fontSize: "15px", color: "#555555" }}>Your Signal</p>
              <p style={{ fontSize: "13px" }}>Select a conversation or start a new one</p>
              <button
                style={{ background: "#59000a", border: "none", color: "#fff", padding: "9px 22px", borderRadius: "20px", cursor: "pointer", fontSize: "13px", fontFamily: "'Poppins', sans-serif", marginTop: "8px" }}
                onClick={() => setShowNewMsg(true)}
              >
                + New Message
              </button>
            </div>
          ) : (
            <>
              <div style={s.chatHeader}>
                <div style={s.chatAvatar}>{selectedPartner.username?.charAt(0).toUpperCase()}</div>
                <div>
                  <p style={s.chatUsername}>{selectedPartner.username}</p>
                  <p style={s.chatEmail}>{selectedPartner.email}</p>
                </div>
                <button style={s.viewProfileBtn} onClick={() => navigate(`/user/${selectedPartner.email}`)}>
                  View Profile
                </button>
              </div>

              <div style={s.messagesArea}>
                {messages.length === 0 && (
                  <div style={{ textAlign: "center", color: "#333333", padding: "32px 0", fontSize: "13px" }}>
                    No messages yet. Say hello! 👋
                  </div>
                )}
                {messages.map(msg => {
                  const isSelf = msg.senderEmail === currentUser.email;
                  return (
                    <div key={msg.id} style={isSelf ? s.msgRight : s.msgLeft}>
                      <div style={isSelf ? s.msgAvatarSelf : s.msgAvatarOther}>
                        {msg.senderUsername?.charAt(0).toUpperCase()}
                      </div>
                      <div style={isSelf ? s.msgBubbleSelf : s.msgBubbleOther}>
                        <p style={s.msgContent}>{msg.content}</p>
                        <p style={s.msgTime}>{formatTime(msg.createdAt)}</p>
                      </div>
                    </div>
                  );
                })}
                <div ref={messagesEndRef} />
              </div>

              <div style={s.inputArea}>
                <input
                  style={s.messageInput}
                  placeholder="Write a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") handleSend(); }}
                />
                <button style={s.sendBtn} onClick={handleSend}>➤</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}