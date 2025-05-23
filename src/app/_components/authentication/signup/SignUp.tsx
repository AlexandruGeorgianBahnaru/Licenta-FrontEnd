"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/_components/authentication/Authentication.module.css";
import AuthenticationService from "@/app/_services/Authentication/AuthenticationService";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await AuthenticationService.signupUser(
        firstName,
        lastName,
        email,
        phone,
        password
      );

      alert("Inregistrare cu succes!");
      router.push("/login");
    } catch (err) {
      alert("Emailul sau numarul de telefon a fost folosit deja!");
      console.error("Upload Error:", err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1 className={styles.title}>SIGN UP</h1>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className={styles.inputField}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className={styles.inputField}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.inputField}
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className={styles.inputField}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.inputField}
          />
          <button type="submit" className={styles.button}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
