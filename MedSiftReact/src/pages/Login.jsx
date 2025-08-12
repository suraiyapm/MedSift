import { useState } from "react";
import { loginUser } from "../api";

function Login({navigate, setUserId, setToken, setUsername}) {
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
      setToken(result.token);
      window.localStorage.setItem('token', result.token);
      setUsername(result.data[0].username);
      navigate('/');
    } else {
      alert(`${result.message}`);
    }
  };

  return (
    <div className='main-content'>
        <div className='card frosted lighting'>
            <form onSubmit={handleLogin} >
                <input type="text" placeholder="Username" value={loginInfo.username} onChange={(e) => setLoginInfo({ ...loginInfo, username: e.target.value})} />
                <input type="password" placeholder="Password" value={loginInfo.password} onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value})} />
                <button type="submit" className="header1 margin-left-18px rounded lighting-layer outline">Login</button>
            </form>
        </div>
    </div>
  );
}


export default Login;