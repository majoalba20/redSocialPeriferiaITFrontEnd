import { createContext, useContext, useEffect, useState } from "react";
import { getProfile } from "../services/profile/service";
import type { Profile } from "../services/profile/types";

interface AuthContextType {
  profile: Profile | null;
  loading: boolean;
  profileNotFound: boolean;
}

const AuthContext = createContext<AuthContextType>({
  profile: null,
  loading: true,
  profileNotFound: false,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [profileNotFound, setProfileNotFound] = useState(false);

  useEffect(() => {
  getProfile()
    .then((res) => {
      console.log("PROFILE RESPONSE:", res.data); 
      setProfile(res.data);                       
    })
    .catch((err) => {
      console.log("ERROR /ME", err);
      setProfile(null);
      if (err.response?.status === 404) setProfileNotFound(true);
    })
    .finally(() => setLoading(false));
    }, []);


  return (
    <AuthContext.Provider value={{ profile, loading, profileNotFound }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);