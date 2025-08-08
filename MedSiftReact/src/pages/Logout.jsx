import { useState, useEffect } from "react";


function Logout({ navigate, setUserId }) {

    const performLogout = async () => {

      window.localStorage.removeItem("userId");
      window.localStorage.removeItem("token");
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