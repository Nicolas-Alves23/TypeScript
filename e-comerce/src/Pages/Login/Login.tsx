import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';

function Login() {
  const [username, setUsername] = useState<string>();
  const [senha, setSenha] = useState<string>();
  const [error, setError] = useState<string>();
  const navigate = useNavigate();

  const logar = async () => {
    try{
      await axios.post('https://dummyjson.com/auth/login',{
      username: username,
      password: senha,
      
    });
    navigate("/home");
    } catch(error){
        setError("Credenciais invalidas");
    }
  };

  return (
    <div className='p-10'>
      <h2>Login</h2>
      <div className='py-3'>
        <label htmlFor="username">Username:</label>
        <input 
        type="text" 
        id="username" 
        className='border-2 border-blue-500'
        onChange={(e) => setUsername(e.target.value)} />
      </div>
      
      <div>
        <label htmlFor="password">Password:</label>
        <input 
        type="text" 
        id="password" 
        className='border-2 border-blue-500 '
        onChange={(e) => setSenha(e.target.value)} />
      </div>

        <p>
        {error}
        </p>

      <button
        className='border-2 border-purple-500 '
        onClick={logar}  
      >
        Logar
      </button>
    </div>
  )
}

export default Login
