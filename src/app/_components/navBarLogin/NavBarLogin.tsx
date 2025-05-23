"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import profilePic from "@/app/_images/Logo-noBg.png";
import styles from "./navBar.module.css";
import { useRouter } from "next/navigation";
import AuthenticationService from "@/app/_services/Authentication/AuthenticationService"; // Import AuthenticationService
import {
  useAuth,
  useToggleAuth,
} from "@/app/_components/context/AuthenticationContext";

const NavBarLogin = () => {
  const router = useRouter();

  const { isLoggedIn, accessToken } = useAuth();
  const { toggleIsLoggedIn, setAccessToken } = useToggleAuth();

  const handleLogin = () => {
    router.push("/login");
  };

  const handleLogout = () => {
    router.push("/middleware");
  };

  const handleProfile = () => {
    router.push("/profile");
  };
  return (
    <nav className="navbar">
      <div className={styles["container-login"]}>
        <div>
          <div className={styles["div-logo"]}>
            <Image src={profilePic} width={70} height={70} alt="Picture" />
          </div>
        </div>
        <div className="text-center">
          <h2>Procesare Facturi</h2>
        </div>
        <div className={styles["container-login-buttons"]}>
          {isLoggedIn ? (
            <div>
              <button
                className="btn btn-outline-primary m-1"
                onClick={() => alert("Go to notificari")}
              >
                Notificari
              </button>
              <button
                className="btn btn-outline-primary m-1"
                onClick={handleProfile}
              >
                Profile
              </button>
              <button
                className="btn btn-outline-secondary m-1"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              className="btn btn-outline-primary m-1"
              onClick={handleLogin}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBarLogin;
