import { useState, useRef, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import ChatInput from "../../components/ChatInput";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [isStart, setIsStart] = useState(true);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (text, language) => {
    if (!text.trim()) return;

    setIsStart(false);

    const userMsg = {
      id: Date.now(),
      role: "user",
      text,
    };

    setMessages((prev) => [...prev, userMsg]);

    // dummy AI
    setTimeout(() => {
      const botMsg = {
        id: Date.now() + 1,
        role: "bot",
        text: `(${language}) → ${text}`,
      };

      setMessages((prev) => [...prev, botMsg]);
    }, 500);
  };

  const handleNewChat = () => {
    setMessages([]);
    setIsStart(true);
  };

  return (
    <div style={styles.container}>
      <Sidebar onNewChat={handleNewChat} />

      <div style={styles.main}>
        {isStart ? (
          <>
            <h2 style={styles.title}>
              Ayo belajar Bahasa Daerah yang ada di Sumatera Utara...
            </h2>

            <ChatInput onSend={handleSend} />
          </>
        ) : (
          <>
            {/* CHAT AREA */}
            <div style={styles.chatArea}>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  style={{
                    ...styles.bubble,
                    alignSelf:
                      msg.role === "user" ? "flex-end" : "flex-start",
                    backgroundColor:
                      msg.role === "user" ? "#7A1E1E" : "#F4F1EC",
                    color: msg.role === "user" ? "#fff" : "#333",
                  }}
                >
                  {msg.text}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* INPUT */}
            <div style={styles.inputWrapper}>
              <ChatInput onSend={handleSend} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minheight: "100vh",
    backgroundColor: "#EDE6D6",
  },

  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", // default tengah
  },

  title: {
    color: "#3f4b53",
    marginBottom: "30px",
  },

  chatArea: {
    flex: 1,
    width: "100%",
    maxWidth: "700px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "20px",
    overflowY: "auto",
  },

  bubble: {
    maxWidth: "60%",
    padding: "10px 15px",
    borderRadius: "18px",
    fontSize: "14px",
  },

  inputWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingBottom: "20px",
  },
};