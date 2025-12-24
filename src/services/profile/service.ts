import api from "../../api/client";
import type { Profile } from "./types";

export const getProfile = () =>
  api.get<Profile>("/profile");

