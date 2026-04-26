import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      
      <div style={styles.card}>
        <img src={logo} alt="logo" style={styles.logo} />

        <h1 style={styles.title}>Welcome to</h1>
        <h1 style={styles.brand}>SumutTalk AI</h1>

        <p style={styles.subtitle}>
          Learn and correct local languages with AI
        </p>

        <button 
          style={styles.primaryBtn}
          onClick={() => navigate("/login")}
          onMouseOver={(e) => e.target.style.opacity = "0.85"}
          onMouseOut={(e) => e.target.style.opacity = "1"}
        >
          Get Started
        </button>

        <button 
          style={styles.secondaryBtn}
          onClick={() => navigate("/register")}
          onMouseOver={(e) => e.target.style.opacity = "0.85"}
          onMouseOut={(e) => e.target.style.opacity = "1"}
        >
          Create Account
        </button>
      </div>

    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#EDE6D6",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    backgroundColor: "#F8F3E9",
    padding: "40px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    width: "320px",
  },

  logo: {
    width: "300px",
    marginBottom: "1px",
  },

  title: {
    margin: 0,
    fontSize: "20px",
    color: "#5A0F0F",
  },

  brand: {
    margin: 0,
    fontSize: "28px",
    fontWeight: "bold",
    color: "#7A1E1E",
  },

  subtitle: {
    fontSize: "14px",
    color: "#777",
    margin: "15px 0 25px",
  },

  primaryBtn: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#7A1E1E",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    marginBottom: "10px",
  },

  secondaryBtn: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #7A1E1E",
    backgroundColor: "transparent",
    color: "#7A1E1E",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

