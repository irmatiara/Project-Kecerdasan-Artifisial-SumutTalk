import { useNavigate } from "react-router-dom";
import logo from "../../assets/logoname.png";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <div style={styles.container}>
      <img src={logo} alt="logo" style={styles.logo} />

      <h2 style={styles.title}>Log into your account</h2>

      <div style={styles.form}>
        <button style={styles.googleBtn}>
          Continue with Google
        </button>

        <div style={styles.orWrapper}>
          <div style={styles.line}></div>
          <span style={styles.orText}>OR</span>
          <div style={styles.line}></div>
        </div>

        <input
          type="email"
          placeholder="Enter your email Address"
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Enter password"
          style={styles.input}
        />

        <div style={styles.forgot}>Forgot Password?</div>

        <button style={styles.signInBtn} onClick={handleLogin}>
          Sign In
        </button>

        <p style={styles.signup}>
          Don’t have an account?{" "}
          <span
            style={styles.link}
            onClick={() => navigate("/register")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#EDE6D6",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: "500px",
    marginBottom: "10px",
  },

  title: {
    color: "#5A0F0F",
    marginBottom: "20px",
    fontSize: "26px",        
    fontWeight: "700",       
  },

  form: {
    width: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },

  googleBtn: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #7A1E1E",
    backgroundColor: "#f5f0ec",
    cursor: "pointer",
    marginBottom: "15px",
  },

  orWrapper: {
    display: "flex",
    alignItems: "center",
    margin: "10px 0",
  },

  line: {
    flex: 1,
    height: "1px",
    backgroundColor: "#999",
  },

  orText: {
    margin: "0 10px",
    color: "#7A1E1E",
    fontSize: "14px",
  },

  input: {
    padding: "12px",
    margin: "6px 0",
    borderRadius: "10px",
    border: "1px solid #ccc",
    outline: "none",
  },

  forgot: {
    textAlign: "right",
    fontSize: "12px",
    color: "#444",
    marginTop: "5px",
    cursor: "pointer",
  },

  signInBtn: {
    marginTop: "15px",
    padding: "12px",
    borderRadius: "10px",
    backgroundColor: "#7A1E1E",
    color: "white",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
  },

  signup: {
  marginTop: "15px",
  fontSize: "14px",
  textAlign: "center",
},

link: {
  color: "#7A1E1E",
  cursor: "pointer",
  fontWeight: "bold",
},
};