import { useEffect, useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with', { username, password });
    alert(`Welcome, ${username}!`);
  };

  return (
    <div className='main-content'>
        <div className='card'>
            <form onSubmit={handleLogin} >
                <h2>Login</h2>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Log In</button>
            </form>
        </div>
    </div>
  );
};


export default Login;