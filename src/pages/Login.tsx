import { useState } from "react";
import { login } from "../services/auth/service";
import '../App.css'
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await login({ email, password }); // tu función de login que llama backend
      navigate("/feed"); // redirigir al feed si login OK
    } catch (err: any) {
      // Mostrar alerta en UI
      if (err.response?.status === 401) {
        alert("Credenciales incorrectas");
      } else {
        alert("El Usuario no existe");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full border p-2 rounded-lg"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="w-full border p-2 rounded-lg"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg">
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          ¿No tienes cuenta?{" "}
          <Link to="/signup" className="text-indigo-600 hover:underline">
            Regístrate
          </Link>
        </p>

      </div>
    </div>
  );

}