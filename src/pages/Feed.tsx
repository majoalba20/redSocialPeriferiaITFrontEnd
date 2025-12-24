import { useEffect, useState } from "react";
import { getPosts } from "../services/post/service";
import Navbar from "../components/navbar";

interface Post {
  id: number;
  alias: string;
  message: string;
  likes: number;
  avatar_url: string;
}

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((res) => setPosts(res.data));
  }, []);

  return (
    <>
        <Navbar />
        <div className="max-w-64 h-1/3 mx-auto mt-10 space-y-3">
        {posts.map((post) => (
            <div
            key={post.id}
            className="bg-white p-4 rounded-lg shadow-xl/30"
            >
            <div className="flex items-center gap-3 mb-2">
                <img
                src={post.avatar_url}
                className="w-8 h-10 rounded-full"
                />
                <span className="font-semibold">{post.alias}</span>
            </div>

            <p className="text-gray-700">{post.message}</p>

            <p className="text-sm text-gray-500 mt-2">
                ❤️ {post.likes}
            </p>
            </div>
        ))}
        </div>
    </>
  );
}
