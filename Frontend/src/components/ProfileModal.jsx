import { FiUser, FiLock, FiX, FiEdit2 } from "react-icons/fi";

export default function ProfileModal({ onClose }) {
  return (
    <div style={styles.overlay}>
      <div style={styles.card}>
        {/* CLOSE */}
        <div style={styles.close} onClick={onClose}>
          <FiX />
        </div>

        {/* TITLE */}
        <h3 style={styles.title}>Edit Profile</h3>

        {/* AVATAR ICON */}
        <div style={styles.avatarWrapper}>
          <div style={styles.avatar}>
            <FiUser />
          </div>
          <div style={styles.editBadge}>
            <FiEdit2 />
          </div>
        </div>

        {/* USERNAME */}
        <div style={styles.inputWrapper}>
          <FiUser style={styles.inputIcon} />
          <input placeholder="Username" style={styles.input} />
        </div>

        {/* PASSWORD */}
        <div style={styles.inputWrapper}>
          <FiLock style={styles.inputIcon} />
          <input
            type="password"
            placeholder="Password"
            style={styles.input}
          />
        </div>

        {/* BUTTON */}
        <div style={styles.btnRow}>
          <button style={styles.cancel} onClick={onClose}>
            Cancel
          </button>

          <button style={styles.save}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.35)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "blur(4px)",
  },

  card: {
    background: "#F9F6F1",
    padding: "25px",
    borderRadius: "20px",
    width: "340px",
    textAlign: "center",
    boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
    position: "relative",
  },

  close: {
    position: "absolute",
    top: "15px",
    right: "15px",
    cursor: "pointer",
    fontSize: "20px",
    color: "#999",
  },

  title: {
    marginBottom: "15px",
    color: "#5A0F0F",
  },

  /* 🔥 AVATAR ICON */
  avatarWrapper: {
    position: "relative",
    width: "90px",
    margin: "0 auto 15px",
  },

  avatar: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #7A1E1E, #A83232)",
    color: "white",
    fontSize: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  editBadge: {
    position: "absolute",
    bottom: "0",
    right: "0",
    background: "#fff",
    borderRadius: "50%",
    width: "28px",
    height: "28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    color: "#7A1E1E",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
    cursor: "pointer",
  },

  inputWrapper: {
    display: "flex",
    alignItems: "center",
    background: "#EFE7DC",
    borderRadius: "10px",
    padding: "8px 10px",
    margin: "8px 0",
  },

  inputIcon: {
    color: "#7A1E1E",
    marginRight: "8px",
  },

  input: {
    border: "none",
    outline: "none",
    background: "transparent",
    width: "100%",
  },

  btnRow: {
    display: "flex",
    gap: "10px",
    marginTop: "15px",
  },

  cancel: {
    flex: 1,
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    background: "#ddd",
    cursor: "pointer",
  },

  save: {
    flex: 1,
    padding: "10px",
    borderRadius: "10px",
    background: "#7A1E1E",
    color: "white",
    border: "none",
    cursor: "pointer",
    transition: "0.2s",
  },
};