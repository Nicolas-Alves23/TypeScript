import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';
import Six from '../../Components/ladders/six'


function Login() {
  const [username, setUsername] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const logar = async () => {
    try {
      await axios.post('https://dummyjson.com/auth/login', {
        username,
        password: senha,
      });
      navigate("/home");
    } catch (error) {
      setError("Credenciais inválidas");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 relative overflow-hidden">
      
      {/* SVG canto superior esquerdo */}
      <div className="absolute top-4 left-4 w-20 h-20 opacity-40">
        <Six />
      </div>

  

      <div className="bg-white p-10 rounded-2xl shadow-xl w-[350px] z-10">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Bem-vindo 👋</h2>

        <div className="mb-4">
          <label htmlFor="username" className="block mb-1 text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Digite seu username"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 text-gray-700">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm mb-4">{error}</p>
        )}

        <button
          onClick={logar}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Entrar
        </button>
      </div>
    </main>
  )
}

export default Login;
