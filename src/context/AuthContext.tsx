import { createContext, useContext, useState, useEffect } from "react";
import { getProfile } from "../services/profile/service";
import type { Profile } from "../services/profile/types";

interface AuthContextType {
  profile: Profile | null;
  loading: boolean;
  profileNotFound: boolean;
  logout: () => void; // 🔹 función logout
}

const AuthContext = createContext<AuthContextType>({
  profile: null,
  loading: true,
  profileNotFound: false,
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [profileNotFound, setProfileNotFound] = useState(false);

  useEffect(() => {
    getProfile()
      .then((res) => setProfile(res.data))
      .catch((err) => {
        if (err.response?.status === 404) setProfileNotFound(true);
      })
      .finally(() => setLoading(false));
  }, []);

  const logout = () => {
    setProfile(null);
    sessionStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ profile, loading, profileNotFound, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
