import { useAuth } from "../context/AuthContext";
import Navbar from "../components/navbar";

export default function ProfilePage() {
  const { profile } = useAuth();
  console.log(profile)

  if (!profile) return <div>Perfil no encontrado</div>;

  return (
    <>
      <Navbar />
      <main className="max-w-xl mx-auto mt-6 space-y-6">
        {/* Sección del perfil */}
        <section className="flex items-center gap-4 bg-white p-4 rounded shadow">
          <img
            src={profile.AvatarURL || "https://via.placeholder.com/80"}
            alt="avatar"
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h2 className="text-2xl font-bold">{profile.Alias}</h2>
            {profile.Bio && <p>{profile.Bio}</p>}
          </div>
        </section>

        {/* Sección de publicaciones */}
        <section className="space-y-4">
            <p>Publicaciones</p>
            <p>{profile.Posts}</p>
        </section>
      </main>
    </>
  );
}
