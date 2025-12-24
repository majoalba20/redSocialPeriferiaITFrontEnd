import { useState } from "react";
import api from "../api/client";
import { useNavigate } from "react-router-dom";

export default function CreateProfile() {
  const [alias, setAlias] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [bio, setBio] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await api.post("/profile", {
      alias,
      avatar_url: avatarUrl,
      name,
      lastName,
      birthDate,
      bio
    });
    
    alert("Perfil creado")
    navigate("/feed"); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Completa tu perfil
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full border p-2 rounded-lg"
            placeholder="Alias"
            onChange={(e) => setAlias(e.target.value)}
          />

          <input
            className="w-full border p-2 rounded-lg"
            placeholder="Avatar URL"
            onChange={(e) => setAvatarUrl(e.target.value)}
          />

          <input
          className="w-full border p-2 rounded-lg"
          placeholder="Nombre"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full border p-2 rounded-lg"
          placeholder="Apellido"
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          className="w-full border p-2 rounded-lg"
          placeholder="Bio"
          onChange={(e) => setBio(e.target.value)}
        />

        <input
          className="w-full border p-2 rounded-lg"
          placeholder="BirthDate"
          onChange={(e) => setBirthDate(e.target.value)}
        />

          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg">
            Guardar
          </button>
        </form>

      </div>
    </div>
  );
}
