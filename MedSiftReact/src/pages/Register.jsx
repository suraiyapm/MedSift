import { useEffect, useState } from 'react';
import { registerUser } from '../api';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

function Register({navigate, setUserId, setUsername}) {

  const [newUser, setNewUser] = useState({
    username: "",
    password: ""
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    const result = await registerUser(newUser);
    if(!result.message){
      window.localStorage.removeItem('token');
      setUserId(result.data._id);
      setUsername(result.data.username);
      window.localStorage.setItem('userId', result.data._id);
      navigate('/login');
    } else {
      alert(`${result.message}`);
    }
  };

  const handleGoogleLogin = async (response) => {
    const googleInfo = jwtDecode(response.credential);
    const result = await registerUser({username: googleInfo.given_name, password: googleInfo.family_name});
    if(!result.message){
     window.localStorage.removeItem('token');
      setUserId(result.data._id);
      setUsername(result.data.username);
      window.localStorage.setItem('userId', result.data._id);
      navigate('/login'); 
    } else {
      alert(`${result.message}`);
    }   
  };

  return (
    <>
    <GoogleLogin onSuccess={(response) => {handleGoogleLogin(response)}} onError={console.log('login failed')}></GoogleLogin>
      <div className='card'>
          <form onSubmit={handleRegister} >
              <input type="text" id="regi-username" placeholder="Username" value={newUser.username} onChange={(e) => setNewUser({ ...newUser, username: e.target.value})} />
              <input type="password" id="regi-password" placeholder="Password" value={newUser.password} onChange={(e) => setNewUser({ ...newUser, password: e.target.value})} />
              <button type="submit" id="regi-sub" className="rounded bold outline frosted-more lighting-layer">Register</button>
          </form>
      </div>
    </>
  );
};


export default Register;