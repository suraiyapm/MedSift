import { useEffect, useState } from 'react';
import { registerUser } from '../api';

function Register({navigate, setUserId}) {

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
      window.localStorage.setItem('userId', result.data._id);
      navigate('/');
    } else {
      alert(`${result.message}`);
    }
  };

  return (
    <div className='main-content'>
        <div className='card'>
            <form onSubmit={handleRegister} >
                <h2>Register</h2>
                <input type="text" placeholder="Username" value={newUser.username} onChange={(e) => setNewUser({ ...newUser, username: e.target.value})} />
                <input type="password" placeholder="Password" value={newUser.password} onChange={(e) => setNewUser({ ...newUser, password: e.target.value})} />
                <button type="submit">Register</button>
            </form>
        </div>
    </div>
  );
};


export default Register;