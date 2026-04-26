import { useNavigate } from "react-router-dom";

export default function LogoutModal({ onClose }) {
  const navigate = useNavigate();

  return (
    <div style={styles.overlay}>
      <div style={styles.card}>
        <h2>Anda yakin ingin keluar?</h2>
        <p>Keluar dari SumutTalk sebagai usersacc@gmail.com</p>

        <button
          style={styles.logoutBtn}
          onClick={() => navigate("/")}
        >
          Keluar
        </button>

        <button style={styles.cancelBtn} onClick={onClose}>
          Batalkan
        </button>
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
    background: "rgba(0,0,0,0.3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    background: "#F4F1EC",
    padding: "30px",
    borderRadius: "15px",
    textAlign: "center",
    width: "350px",
  },

  logoutBtn: {
    marginTop: "15px",
    width: "100%",
    padding: "12px",
    background: "#7A1E1E",
    color: "white",
    border: "none",
    borderRadius: "10px",
  },

  cancelBtn: {
    marginTop: "10px",
    width: "100%",
    padding: "12px",
    background: "#ddd",
    border: "none",
    borderRadius: "10px",
  },
};