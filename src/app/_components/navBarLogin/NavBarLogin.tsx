import React, { useState } from 'react';
import Image from 'next/image'
import profilePic from '@/app/_images/Logo-noBg.png'
 

const NavBarLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar">
      <div className="div-logo">
           <Image
            src={profilePic}
            width={100}
            height={100}
            alt="Picture of the author"
          />
          </div>
        <h2>NUME SITE</h2>
      <div className="navbar-links">
        {isLoggedIn ? (
          <div >
            <button className="btn btn-outline-primary m-1" onClick={() => alert('Go to profile')}>Profile</button>
            <button className="btn btn-outline-secondary m-1" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <button className="btn btn-outline-primary m-1" onClick={handleLogin}>Login</button>
        )}
      </div>
    </nav>
  );
};

export default NavBarLogin;