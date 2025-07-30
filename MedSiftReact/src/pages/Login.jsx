import { useState } from "react";
import { loginUser } from "../api";

function Login({navigate, setUserId}) {
    const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: ""
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await loginUser(loginInfo);
    if(!result.message){
      console.log(result);
      setUserId(result.data[0]._id);
      window.localStorage.setItem('userId', result.data[0]._id);
      navigate('/');
    } else {
      alert(`${result.message}`);
    }
  };

  return (
    <div className='main-content'>
        <div className='card'>
            <form onSubmit={handleLogin} >
                <h2>Login</h2>
                <input type="text" placeholder="Username" value={loginInfo.username} onChange={(e) => setLoginInfo({ ...loginInfo, username: e.target.value})} />
                <input type="password" placeholder="Password" value={loginInfo.password} onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value})} />
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
  );
}


export default Login;