import api from "../../api/client";

export interface Post {
  message: string;
  likes: number;
  alias: string;
  avatar_url: string;
}

export const getPosts = () => api.get("/get/all");

export const createPost = (message: string) =>
  api.post<Post>("/post", { message });