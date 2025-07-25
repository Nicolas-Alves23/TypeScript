import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';
import Six from '../../Components/ladders/six'
import Fiveteen from '../../Components/ladders/fiveteen';

function Login() {
  const [username, setUsername] = useState<string>();
  const [senha, setSenha] = useState<string>();
  const [error, setError] = useState<string>();
  const navigate = useNavigate();

  const logar = async () => {
    try {
      await axios.post('https://dummyjson.com/auth/login', {
        username: username,
        password: senha,

      });
      navigate("/home");
    } catch (error) {
      setError("Credenciais invalidas");
    }
  };

  return (
    <>
      <main className="flex h-screen"> {/* ✔ Corrigido classes inválidas */}

        {/* Formulário do login */}
        <div className="p-10 w-[300px] bg-white z-10 relative">
          <h2 className="text-xl font-bold mb-4">Login</h2>

          <div className="py-3">
            <label htmlFor="username" className="block mb-1">Username:</label>
            <input
              type="text"
              id="username"
              className="border-2 border-blue-500 w-full px-2 py-1 rounded"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="py-3">
            <label htmlFor="password" className="block mb-1">Password:</label>
            <input
              type="password"
              id="password"
              className="border-2 border-blue-500 w-full px-2 py-1 rounded"
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          {error && (
            <p className="text-red-500 mt-2">{error}</p>
          )}

          <button
            className="mt-4 border-2 border-purple-500 px-4 py-2 rounded hover:bg-purple-100"
            onClick={logar}
          >
            Logar
          </button>
        </div>

        {/* Lado direito com os SVGs decorativos */}
        <div className="relative flex-1 bg-blue-600 overflow-hidden">

          {/* SVG canto superior esquerdo */}
          <div className="absolute top-0 left-0 w-16 h-16">
            <Six />
          </div>

          {/* SVG canto inferior direito */}
          <div className="absolute bottom-0 right-0 w-16 h-16">
            <Fiveteen />
          </div>
        </div>
      </main>

    </>
  )
}

export default Login
