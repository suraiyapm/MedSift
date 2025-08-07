import { useState, useEffect } from "react";


function Logout({ navigate, setUserId }) {

    const performLogout = async () => {

      window.localStorage.removeItem("userId");
      setUserId("");
      navigate("/login");
    };

  useEffect(() => {
     performLogout();
  },[]);


  return (
    <div className="main-content">
      <div className="card">
      </div>
    </div>
  );
}
export default Logout;