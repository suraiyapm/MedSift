import { useEffect, useState } from 'react';
import { registerUser } from '../api';

function Register({navigate, setUserId, setUsername}) {

  const [newUser, setNewUser] = useState({
    username: "",
    password: ""
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    const result = await registerUser(newUser);
    if(!result.message){
      console.log(result);
      setUserId(result.data._id);
      setUsername(result.data.username);
      window.localStorage.setItem('userId', result.data._id);
      navigate('/');
    } else {
      alert(`${result.message}`);
    }
  };

  return (
    <div className='main-content'>
      <div class="g-signin2" data-onsuccess="onSignIn">
      </div>
        <div className='card'>
            <form onSubmit={handleRegister} >
                <h2 className="header1 white-text lighting-layer margin-bottom-25px">Register</h2>
                <input type="text" id="regi-username" placeholder="Username" value={newUser.username} onChange={(e) => setNewUser({ ...newUser, username: e.target.value})} />
                <input type="password" id="regi-password" placeholder="Password" value={newUser.password} onChange={(e) => setNewUser({ ...newUser, password: e.target.value})} />
                <button type="submit" id="regi-sub" className="rounded bold outline frosted-more lighting-layer">Register</button>
            </form>
        </div>
    </div>
  );
};


export default Register;