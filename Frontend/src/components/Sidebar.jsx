import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiMessageSquare,
  FiClock,
  FiBookOpen,
  FiBookmark,
  FiMoreHorizontal,
  FiChevronDown,
  FiUser,
} from "react-icons/fi";

import logoIcon from "../assets/logo1.png"; 
import logoName from "../assets/logoname.png"; 

import LogoutModal from "./LogoutModal";
import ProfileModal from "./ProfileModal";

export default function Sidebar({ onNewChat }) {
  const [active, setActive] = useState("Obrolan Baru");
  const [isOpen, setIsOpen] = useState(true);
  const [showProfile, setShowProfile] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const navigate = useNavigate();

  const menus = [
    { name: "Obrolan Baru", icon: <FiMessageSquare /> },
    { name: "Chat History", icon: <FiClock />, path: "/history" },
    { name: "Auto Flashcard", icon: <FiBookOpen />, path: "/flashcard" },
    { name: "Save / Bookmark", icon: <FiBookmark />, path: "/bookmark" },
    { name: "More Options", icon: <FiMoreHorizontal />, path: "/more" },
  ];

  return (
    <div
      style={{
        ...styles.sidebar,
        width: isOpen ? "260px" : "70px",
      }}
    >
      {/* TOP */}
      <div>
        {/* HEADER */}
        <div style={styles.header}>
          {isOpen ? (
            <div style={styles.logoWrapper}>
              <img src={logoIcon} alt="logo-icon" style={styles.logoIcon} />
              <img src={logoName} alt="logo-name" style={styles.logoName} />
            </div>
          ) : (
            <img src={logoIcon} alt="logo-icon" style={styles.logoOnly} />
          )}

          <button
            style={styles.toggleBtn}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "⟨" : "⟩"}
          </button>
        </div>

        {/* MENU */}
        <div style={styles.menu}>
          {menus.map((item) => (
            <div
              key={item.name}
              style={{
                ...styles.item,
                backgroundColor:
                  active === item.name ? "#E8E2D6" : "transparent",
                fontWeight: active === item.name ? "600" : "400",
                justifyContent: isOpen ? "flex-start" : "center",
                gap: "10px",
              }}
              onClick={() => {
                setActive(item.name);

                if (item.name === "Obrolan Baru") {
                  onNewChat && onNewChat();
                  navigate("/home");
                } else {
                  navigate(item.path);
                }
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "#EFE9DD")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background =
                  active === item.name ? "#E8E2D6" : "transparent")
              }
            >
              {active === item.name && (
                <div style={styles.activeBar}></div>
              )}

              <span
                style={{
                  ...styles.icon,
                  color:
                    active === item.name ? "#7A1E1E" : "#888",
                }}
              >
                {item.icon}
              </span>

              {isOpen && item.name}
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM USER */}
      <div style={{ position: "relative" }}>
        <div
          style={styles.user}
          onClick={() => setShowProfile(!showProfile)}
        >
          <div style={styles.avatarIcon}>
            <FiUser />
          </div>

          {isOpen && (
            <>
              <div style={styles.textWrapper}>
                <span style={styles.username}>User Account</span>
              </div>

              <FiChevronDown style={styles.dropdownIcon} />
            </>
          )}
        </div>

        {/* DROPDOWN */}
        {showProfile && (
          <div style={styles.dropdown}>
            <div style={styles.email}>usersacc@gmail.com</div>

            <div
              style={styles.dropdownItem}
              onClick={() => {
                setShowProfile(false);
                setShowProfileModal(true);
              }}
            >
              Profile Setting
            </div>

            <div style={styles.divider}></div>

            <div
              style={styles.dropdownItem}
              onClick={() => {
                setShowProfile(false);
                navigate("/register");
              }}
            >
              Tambah Akun
            </div>

            <div
              style={{
                ...styles.dropdownItem,
                color: "#C0392B",
                fontWeight: "600",
              }}
              onClick={() => {
                setShowProfile(false);
                setShowLogout(true);
              }}
            >
              Log Out
            </div>
          </div>
        )}
      </div>

      {/* MODALS */}
      {showLogout && (
        <LogoutModal onClose={() => setShowLogout(false)} />
      )}

      {showProfileModal && (
        <ProfileModal onClose={() => setShowProfileModal(false)} />
      )}
    </div>
  );
}

const styles = {
  sidebar: {
    backgroundColor: "#F4F1EC",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "15px",
    height: "100vh",
    transition: "0.3s",
  },

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
  },

  logoWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  logoIcon: {
    width: "45px",
  },

  logoName: {
    width: "150px",
  },

  logoOnly: {
    width: "45px",
    margin: "0 auto",
  },

  toggleBtn: {
    border: "none",
    background: "#7A1E1E",
    color: "white",
    borderRadius: "6px",
    padding: "5px 8px",
    cursor: "pointer",
  },

  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

item: {
  padding: "12px 14px",
  borderRadius: "12px",
  cursor: "pointer",
  fontSize: "14px",
  color: "#5A0F0F",
  transition: "0.2s",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  position: "relative",
},

icon: {
  fontSize: "18px",
  display: "flex",
  alignItems: "center",
},

  activeBar: {
    position: "absolute",
    left: "0",
    top: "6px",
    bottom: "6px",
    width: "4px",
    borderRadius: "10px",
    backgroundColor: "#7A1E1E",
  },

  user: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px",
    borderRadius: "14px",
    background: "#E8E2D6",
    cursor: "pointer",
  },

  avatarIcon: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #7A1E1E, #A83232)",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
  },

  textWrapper: {
    display: "flex",
    flexDirection: "column",
  },

  username: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#5A0F0F",
  },

  dropdownIcon: {
    marginLeft: "auto",
    fontSize: "18px",
    color: "#777",
  },

  dropdown: {
    position: "absolute",
    bottom: "80px",
    left: "0",
    width: "230px",
    backgroundColor: "#F9F6F1",
    borderRadius: "18px",
    padding: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },

  email: {
    fontSize: "12px",
    color: "#7A1E1E",
    textAlign: "center",
    opacity: "0.8",
  },

  dropdownItem: {
    padding: "12px",
    borderRadius: "10px",
    cursor: "pointer",
    textAlign: "center",
    transition: "0.2s",
  },

  divider: {
    height: "1px",
    background:
      "linear-gradient(to right, transparent, #ccc, transparent)",
    margin: "10px 0",
  },
};