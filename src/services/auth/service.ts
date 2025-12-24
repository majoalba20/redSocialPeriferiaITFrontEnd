import api from "../../api/client";
import type { LoginRequest, LoginResponse, SignupRequest } from "./types";

export const login = (data: LoginRequest) =>
  api.post<LoginResponse>("/login", data);

export const signup = (data: SignupRequest) =>
  api.post("/signup", data);