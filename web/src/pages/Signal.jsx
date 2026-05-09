import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../api/axios";
import Navbar from "../components/Navbar";

const s = {
  page: {
    minHeight: "100vh",
    background: "#000000",
    fontFamily: "var(--font-poppins)",
    color: "#ffffff",
  },
  layout: {
    display: "flex",
    height: "calc(100vh - 64px)",
  },

  // LEFT: Conversations List
  conversationsList: {
    width: "300px",
    minWidth: "300px",
    borderRight: "1px solid #1a1a1a",
    display: "flex",
    flexDirection: "column",
    background: "#000000",
  },
  conversationsHeader: {
    padding: "20px",
    borderBottom: "1px solid #1a1a1a",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  conversationsTitle: {
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "700",
    margin: 0,
    fontFamily: "var(--font-poppins)",
  },
  newMessageBtn: {
    background: "#ff3e3e",
    border: "none",
    color: "#ffffff",
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  searchInput: {
    margin: "12px 16px",
    background: "#0a0a0a",
    border: "1px solid #1a1a1a",
    borderRadius: "20px",
    padding: "8px 16px",
    color: "#ffffff",
    fontSize: "13px",
    fontFamily: "var(--font-poppins)",
    outline: "none",
    width: "calc(100% - 32px)",
    boxSizing: "border-box",
  },
  conversationItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px 20px",
    cursor: "pointer",
    borderBottom: "1px solid #0a0a0a",
    transition: "background 0.15s",
  },
  conversationItemActive: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px 20px",
    cursor: "pointer",
    borderBottom: "1px solid #0a0a0a",
    background: "#0a0a0a",
    borderLeft: "2px solid #ff3e3e",
  },
  convAvatar: {
    width: "44px",
    height: "44px",
    background: "#ff3e3e",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    fontWeight: "700",
    color: "#fff",
    flexShrink: 0,
  },
  convInfo: {
    flex: 1,
    overflow: "hidden",
  },
  convName: {
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: "600",
    margin: "0 0 2px 0",
    fontFamily: "var(--font-poppins)",
  },
  convPreview: {
    color: "#444444",
    fontSize: "12px",
    margin: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontFamily: "var(--font-poppins)",
  },
  unreadBadge: {
    background: "#ff3e3e",
    color: "#ffffff",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    fontSize: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
    flexShrink: 0,
    fontFamily: "var(--font-poppins)",
  },
  emptyConversations: {
    textAlign: "center",
    color: "#333333",
    padding: "40px 20px",
    fontSize: "13px",
    fontFamily: "var(--font-poppins)",
  },

  // RIGHT: Chat Area
  chatArea: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    background: "#000000",
  },
  chatHeader: {
    padding: "16px 24px",
    borderBottom: "1px solid #1a1a1a",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    background: "#0a0a0a",
  },
  chatAvatar: {
    width: "40px",
    height: "40px",
    background: "#ff3e3e",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    fontWeight: "700",
    color: "#fff",
  },
  chatUsername: {
    color: "#ffffff",
    fontSize: "15px",
    fontWeight: "700",
    margin: 0,
    fontFamily: "var(--font-poppins)",
  },
  chatEmail: {
    color: "#444444",
    fontSize: "12px",
    margin: 0,
    fontFamily: "var(--font-poppins)",
  },
  viewProfileBtn: {
    background: "transparent",
    border: "1px solid #1a1a1a",
    color: "#555555",
    padding: "6px 14px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "12px",
    fontFamily: "var(--font-poppins)",
    marginLeft: "auto",
    transition: "border-color 0.2s, color 0.2s",
  },
  messagesArea: {
    flex: 1,
    overflowY: "auto",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  messageBubbleWrapper: {
    display: "flex",
    alignItems: "flex-end",
    gap: "8px",
  },
  messageBubbleWrapperRight: {
    display: "flex",
    alignItems: "flex-end",
    gap: "8px",
    flexDirection: "row-reverse",
  },
  msgAvatar: {
    width: "28px",
    height: "28px",
    background: "#1a1a1a",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "11px",
    color: "#555555",
    flexShrink: 0,
    fontFamily: "var(--font-poppins)",
  },
  msgAvatarSelf: {
    width: "28px",
    height: "28px",
    background: "#ff3e3e",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "11px",
    color: "#fff",
    flexShrink: 0,
    fontFamily: "var(--font-poppins)",
  },
  messageBubble: {
    background: "#0a0a0a",
    border: "1px solid #1a1a1a",
    borderRadius: "16px 16px 16px 4px",
    padding: "10px 16px",
    maxWidth: "60%",
  },
  messageBubbleSelf: {
    background: "#ff3e3e",
    borderRadius: "16px 16px 4px 16px",
    padding: "10px 16px",
    maxWidth: "60%",
  },
  messageContent: {
    color: "#ffffff",
    fontSize: "14px",
    margin: "0 0 4px 0",
    lineHeight: "1.5",
    fontFamily: "var(--font-poppins)",
  },
  messageTime: {
    color: "rgba(255,255,255,0.35)",
    fontSize: "10px",
    margin: 0,
    fontFamily: "var(--font-poppins)",
  },
  inputArea: {
    padding: "16px 24px",
    borderTop: "1px solid #1a1a1a",
    display: "flex",
    gap: "12px",
    alignItems: "center",
    background: "#0a0a0a",
  },
  messageInput: {
    flex: 1,
    background: "#000000",
    border: "1px solid #1a1a1a",
    borderRadius: "24px",
    padding: "12px 20px",
    color: "#ffffff",
    fontSize: "14px",
    fontFamily: "var(--font-poppins)",
    outline: "none",
  },
  sendBtn: {
    background: "#ff3e3e",
    border: "none",
    color: "#ffffff",
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  emptyChat: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#333333",
    gap: "16px",
    fontFamily: "var(--font-poppins)",
  },
  emptyChatIcon: {
    fontSize: "60px",
  },
  emptyChatTitle: {
    fontSize: "18px",
    color: "#555555",
    margin: 0,
    fontFamily: "var(--font-poppins)",
  },
  emptyChatSubtitle: {
    fontSize: "13px",
    margin: 0,
    fontFamily: "var(--font-poppins)",
  },

  // New Message Modal
  newMsgModal: {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    background: "rgba(0,0,0,0.85)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  newMsgCard: {
    background: "#0a0a0a",
    border: "1px solid #1a1a1a",
    borderRadius: "12px",
    padding: "32px",
    width: "100%",
    maxWidth: "440px",
  },
  newMsgTitle: {
    color: "#ffffff",
    fontSize: "18px",
    fontWeight: "700",
    margin: "0 0 20px 0",
    fontFamily: "var(--font-poppins)",
  },
  newMsgInput: {
    width: "100%",
    background: "#000000",
    border: "1px solid #1a1a1a",
    borderRadius: "8px",
    padding: "12px 16px",
    color: "#ffffff",
    fontSize: "14px",
    fontFamily: "var(--font-poppins)",
    outline: "none",
    boxSizing: "border-box",
    marginBottom: "12px",
  },
  newMsgBtns: {
    display: "flex",
    gap: "12px",
    justifyContent: "flex-end",
    marginTop: "16px",
  },
  cancelBtn: {
    background: "transparent",
    border: "1px solid #1a1a1a",
    color: "#555555",
    padding: "10px 20px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "12px",
    fontFamily: "var(--font-poppins)",
  },
  startBtn: {
    background: "#ff3e3e",
    border: "none",
    color: "#ffffff",
    padding: "10px 24px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "12px",
    fontFamily: "var(--font-poppins)",
    fontWeight: "700",
  },
  userResult: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "10px 12px",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "4px",
    transition: "background 0.15s",
  },
  userResultAvatar: {
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
  },
  userResultName: {
    color: "#ffffff",
    fontSize: "14px",
    margin: 0,
    fontFamily: "var(--font-poppins)",
  },
  userResultEmail: {
    color: "#444444",
    fontSize: "12px",
    margin: 0,
    fontFamily: "var(--font-poppins)",
  },
};

export default function Signal() {
  const [currentUser, setCurrentUser] = useState(null);
  const [partners, setPartners] = useState([]);
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

  useEffect(() => {
    fetchCurrentUser();
    fetchPartners();
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (searchQuery.trim()) {
      api.get(`/user/search?query=${searchQuery}`)
        .then(res => setSearchResults(res.data))
        .catch(err => console.log(err));
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (location.state?.contact) {
      handleSelectPartner(location.state.contact);
    }
  }, [location.state]);

  const fetchCurrentUser = async () => {
    try {
      const res = await api.get("/user/me");
      setCurrentUser(res.data);
    } catch {
      navigate("/login");
    }
  };

  const fetchPartners = async () => {
    try {
      const res = await api.get("/messages/partners");
      setPartners(res.data);
    } catch (err) {
      console.log("Error fetching partners:", err);
    }
  };

  const fetchMessages = async (partnerEmail) => {
    try {
      const res = await api.get(`/messages/conversation/${partnerEmail}`);
      setMessages(res.data);
      fetchPartners();
    } catch (err) {
      console.log("Error fetching messages:", err);
    }
  };

  const handleSelectPartner = (partner) => {
    setSelectedPartner(partner);
    fetchMessages(partner.email);
  };

  const handleSend = async () => {
    if (!newMessage.trim() || !selectedPartner) return;

    const temporaryMsg = {
      id: Date.now(),
      content: newMessage,
      senderEmail: currentUser.email,
      createdAt: new Date().toISOString(),
      senderUsername: currentUser.username,
    };

    setMessages(prev => [...prev, temporaryMsg]);
    const textToSend = newMessage;
    setNewMessage("");

    try {
      await api.post("/messages", {
        receiverEmail: selectedPartner.email,
        content: textToSend,
      });
      fetchMessages(selectedPartner.email);
    } catch (err) {
      console.log("Error sending message:", err);
      setMessages(prev => prev.filter(m => m.id !== temporaryMsg.id));
    }
  };

  const handleStartConversation = (user) => {
    setSelectedPartner(user);
    fetchMessages(user.email);
    setShowNewMsg(false);
    setSearchQuery("");
    fetchPartners();
  };

  const formatTime = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit", minute: "2-digit",
    });
  };

  const filteredPartners = partners.filter(p =>
    p.username?.toLowerCase().includes(convSearch.toLowerCase())
  );

  if (!currentUser) return (
    <div style={s.page}>
      <Navbar />
      <div style={{ textAlign: "center", padding: "40px", color: "#333333", fontFamily: "var(--font-poppins)" }}>
        LOADING...
      </div>
    </div>
  );

  return (
    <div style={s.page}>
      <Navbar />

      {/* New Message Modal */}
      {showNewMsg && (
        <div
          style={s.newMsgModal}
          onClick={(e) => { if (e.target === e.currentTarget) setShowNewMsg(false); }}
        >
          <div style={s.newMsgCard}>
            <p style={s.newMsgTitle}>📨 New Message</p>
            <input
              style={s.newMsgInput}
              placeholder="Search for a user..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            {searchResults.map(user => (
              <div
                key={user.id}
                style={s.userResult}
                onClick={() => handleStartConversation(user)}
                onMouseEnter={e => e.currentTarget.style.background = "#111111"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                <div style={s.userResultAvatar}>
                  {user.username?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p style={s.userResultName}>{user.username}</p>
                  <p style={s.userResultEmail}>{user.email}</p>
                </div>
              </div>
            ))}
            <div style={s.newMsgBtns}>
              <button style={s.cancelBtn} onClick={() => setShowNewMsg(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div style={s.layout}>
        {/* LEFT: Conversations */}
        <div style={s.conversationsList}>
          <div style={s.conversationsHeader}>
            <p style={s.conversationsTitle}>📨 Signal</p>
            <button
              style={s.newMessageBtn}
              onClick={() => setShowNewMsg(true)}
              title="New Message"
            >
              ✏️
            </button>
          </div>

          <input
            style={s.searchInput}
            placeholder="Search conversations..."
            value={convSearch}
            onChange={(e) => setConvSearch(e.target.value)}
          />

          {filteredPartners.length === 0 ? (
            <div style={s.emptyConversations}>
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>💬</div>
              <p>No conversations yet.</p>
              <p style={{ fontSize: "12px", color: "#333333" }}>
                Click ✏️ to start a new message!
              </p>
            </div>
          ) : (
            filteredPartners.map(partner => (
              <div
                key={partner.email}
                style={
                  selectedPartner?.email === partner.email
                    ? s.conversationItemActive
                    : s.conversationItem
                }
                onClick={() => handleSelectPartner(partner)}
                onMouseEnter={e => {
                  if (selectedPartner?.email !== partner.email)
                    e.currentTarget.style.background = "#0a0a0a";
                }}
                onMouseLeave={e => {
                  if (selectedPartner?.email !== partner.email)
                    e.currentTarget.style.background = "transparent";
                }}
              >
                <div style={s.convAvatar}>
                  {partner.username?.charAt(0).toUpperCase()}
                </div>
                <div style={s.convInfo}>
                  <p style={s.convName}>{partner.username}</p>
                  <p style={s.convPreview}>{partner.email}</p>
                </div>
                {partner.unreadCount > 0 && (
                  <div style={s.unreadBadge}>{partner.unreadCount}</div>
                )}
              </div>
            ))
          )}
        </div>

        {/* RIGHT: Chat Area */}
        <div style={s.chatArea}>
          {!selectedPartner ? (
            <div style={s.emptyChat}>
              <div style={s.emptyChatIcon}>📨</div>
              <p style={s.emptyChatTitle}>Your Signal</p>
              <p style={s.emptyChatSubtitle}>
                Select a conversation or start a new one
              </p>
              <button
                style={{ ...s.startBtn, marginTop: "8px" }}
                onClick={() => setShowNewMsg(true)}
              >
                ✏️ New Message
              </button>
            </div>
          ) : (
            <>
              {/* Chat Header */}
              <div style={s.chatHeader}>
                <div style={s.chatAvatar}>
                  {selectedPartner.username?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p style={s.chatUsername}>{selectedPartner.username}</p>
                  <p style={s.chatEmail}>{selectedPartner.email}</p>
                </div>
                <button
                  style={s.viewProfileBtn}
                  onClick={() => navigate(`/user/${selectedPartner.email}`)}
                >
                  View Profile
                </button>
              </div>

              {/* Messages */}
              <div style={s.messagesArea}>
                {messages.length === 0 && (
                  <div style={{ textAlign: "center", color: "#333333", padding: "40px 0", fontSize: "13px", fontFamily: "var(--font-poppins)" }}>
                    No messages yet. Say hello! 👋
                  </div>
                )}
                {messages.map(msg => {
                  const isSelf = msg.senderEmail === currentUser.email;
                  return (
                    <div
                      key={msg.id}
                      style={isSelf ? s.messageBubbleWrapperRight : s.messageBubbleWrapper}
                    >
                      <div style={isSelf ? s.msgAvatarSelf : s.msgAvatar}>
                        {msg.senderUsername?.charAt(0).toUpperCase()}
                      </div>
                      <div style={isSelf ? s.messageBubbleSelf : s.messageBubble}>
                        <p style={s.messageContent}>{msg.content}</p>
                        <p style={s.messageTime}>{formatTime(msg.createdAt)}</p>
                      </div>
                    </div>
                  );
                })}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
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
