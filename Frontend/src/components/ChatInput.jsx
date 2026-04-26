import { useState, useEffect } from "react";
import { FiMic, FiSend } from "react-icons/fi";

export default function ChatInput({ onSend }) {
  const [message, setMessage] = useState("");
  const [language, setLanguage] = useState("Hokkien");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes sendPop {
        0% { transform: scale(1); }
        30% { transform: scale(1.4) rotate(-8deg); box-shadow: 0 0 20px rgba(122,30,30,0.6); }
        60% { transform: scale(0.9) rotate(5deg); }
        100% { transform: scale(1); }
      }
    `;
    document.head.appendChild(style);
  }, []);

  const handleSend = () => {
    if (!message.trim()) return;

    onSend && onSend(message, language);
    setMessage("");

    setAnimate(true);
    setTimeout(() => setAnimate(false), 400);
  };

  return (
    <div style={styles.wrapper}>
      {/* LANGUAGE */}
      <div style={styles.langWrapper}>
        {["Hokkien", "Karo"].map((lang) => (
          <div
            key={lang}
            onClick={() => setLanguage(lang)}
            style={{
              ...styles.langBtn,
              backgroundColor:
                language === lang ? "#7A1E1E" : "#EFE7DC",
              color: language === lang ? "#fff" : "#7A1E1E",
            }}
          >
            {lang}
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div style={styles.container}>
        <span style={styles.plus}>＋</span>

        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={`Tanyakan dalam ${language}...`}
          style={styles.input}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />

        <div style={styles.mic}>
          <FiMic />
        </div>

        <div
          style={{
            ...styles.sendBtn,
            animation: animate ? "sendPop 0.4s ease" : "none",
          }}
          onClick={handleSend}
        >
          <FiSend />
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    width: "100%",
    maxWidth: "600px",
  },

  langWrapper: {
    display: "flex",
    gap: "8px",
    marginBottom: "10px",
  },

  langBtn: {
    padding: "6px 14px",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "bold",
  },

  container: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#F4F1EC",
    borderRadius: "30px",
    padding: "10px 15px",
  },

  input: {
    flex: 1,
    border: "none",
    outline: "none",
    background: "transparent",
    margin: "0 10px",
  },

  plus: {
    fontSize: "18px",
  },

  mic: {
    fontSize: "20px",
    marginRight: "10px",
    display: "flex",
    alignItems: "center",
  },

  sendBtn: {
    backgroundColor: "#7A1E1E",
    color: "white",
    borderRadius: "50%",
    width: "42px",
    height: "42px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
};