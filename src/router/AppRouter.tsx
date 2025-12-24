import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/SingUp";
import Feed from "../pages/Feed";
import Profile from "../pages/profile";
import CreateProfile from "../pages/createProfile";
import CreatePost from "../pages/createPost";
import { useAuth } from "../context/AuthContext";

export default function AppRouter() {
  const { loading, profile } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Cargando...
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route
        path="/feed"
        element={
          profile ? (
            <Feed />
          ) : (<Navigate to="/create-profile" />)
        }
      />

      <Route path="/create-profile" element={<CreateProfile />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/create-post" element={<CreatePost />} />
    </Routes>
  );
}
