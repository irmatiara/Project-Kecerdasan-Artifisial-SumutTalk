import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home/Home";
import NewChat from "./pages/NewChat";
import History from "./pages/History";
import Flashcard from "./pages/Flashcard";
import Bookmark from "./pages/Bookmark";
import More from "./pages/More";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/new-chat" element={<NewChat />} />
      <Route path="/history" element={<History />} />
      <Route path="/flashcard" element={<Flashcard />} />
      <Route path="/bookmark" element={<Bookmark />} />
      <Route path="/more" element={<More />} />
    </Routes>
  );
}