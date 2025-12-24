import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { profile } = useAuth();
  console.log("NAVBAR", profile)
  
  if (!profile) return null;
  console.log(profile.Alias, profile.AvatarURL);

  return (
    <nav className="w-full bg-white border-b px-6 py-3 flex justify-between">
      <div className="flex items-center gap-6">
        <Link to="/feed" className="text-xl font-bold text-indigo-600">
          PeriferiaSocial
        </Link>
        <Link to="/feed">🏠</Link>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-6">
          <Link to="/profile" className="text-xl font-bold text-indigo-600">
            {profile.Alias}
          </Link>
        </div>
        <img
          src={profile.AvatarURL}
          className="w-9 h-9 rounded-full"
        />
      </div>
    </nav>
  );
}