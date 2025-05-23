"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/_components/authentication/Authentication.module.css";
import AuthenticationService from "@/app/_services/Authentication/AuthenticationService";
import {
  useAuth,
  useToggleAuth,
} from "@/app/_components/context/AuthenticationContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { isLoggedIn, accessToken } = useAuth();
  const { toggleIsLoggedIn, setAccessToken } = useToggleAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await AuthenticationService.loginUser(email, password);
      if (response.status === 200) {
        setError(null);
        setAccessToken(response.data["access_token"]);
        localStorage.setItem("expires_in", response.data["expires_in"]);
        const expiresInMs = parseInt(response.data["expires_in"]) * 60 * 1000; // convert minutes to ms
        const expiryDate = new Date(Date.now() + expiresInMs).toISOString();
        localStorage.setItem("expires_at", expiryDate);
        router.push("/middleware");
      }
    } catch (err: any) {
      console.log(err);
      if (err.response && err.response.status === 401) {
        setError("Incercati din nou.");
      }
      console.error("Upload Error:", err);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("id");
      if (user !== undefined && user !== null) {
        router.push("/middleware");
      } else router.push("/login");
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1 className={styles.title}>LOGIN</h1>
        <form onSubmit={handleLogin} autoComplete="off">
          <input
            type="text"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className={styles.inputField}
            autoComplete="off"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className={styles.inputField}
            autoComplete="off"
          />
          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
        <p className={styles.signupText}>
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default Login;
