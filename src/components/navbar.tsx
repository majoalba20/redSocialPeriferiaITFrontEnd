import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { profile, logout } = useAuth();

  const handleLogout = () => {
    logout(); 
  };

  return (
    <nav className="w-full bg-white border-b px-6 py-3 flex justify-between">
      <div className="flex items-center gap-6">
        <Link to="/feed" className="text-xl font-bold text-indigo-600">
          PeriferiaSocial
        </Link>
        <Link to="/feed">🏠</Link>
      </div>

      {profile && (
        <div className="flex items-center gap-3">
          <Link to="/profile" className="text-xl font-bold text-indigo-600">
            {profile.Alias}
          </Link>
          <img src={profile.AvatarURL} className="w-9 h-9 rounded-full" />
        </div>
      )}
      <Link to="/login" 
        onClick={handleLogout}
        className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
        Cerrar sesión
      </Link>
    </nav>
  );
}