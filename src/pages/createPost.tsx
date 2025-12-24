import { useState } from "react";
import { createPost, type Post } from "../services/post/service";
import Navbar from "../components/navbar";

interface CreatePostProps {
  onPostCreated?: (post: Post) => void; // callback para actualizar lista de posts
}

export default function CreatePost({ onPostCreated }: CreatePostProps) {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setLoading(true);
    try {
      const res = await createPost(message);
      setMessage("");
      if (onPostCreated) onPostCreated(res.data); // actualizar posts en Feed/Profile
    } catch (err) {
      console.error("Error al crear post", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar />
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-2">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="¿Qué estás pensando?"
        className="w-full p-2 border rounded resize-none focus:outline-none focus:ring focus:border-blue-300"
        rows={3}
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? "Publicando..." : "Publicar"}
      </button>
    </form>
    </>
  );
}
