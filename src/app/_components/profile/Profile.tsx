"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./Profile.module.css";
import { useRouter } from "next/navigation";
import AuthenticationService from "@/app/_services/Authentication/AuthenticationService";
import {
  useAuth,
  useToggleAuth,
} from "@/app/_components/context/AuthenticationContext";
import { UpdateUserModel } from "@/app/_models/UpdateUserModel";

const Profile = () => {
  const emptyUser: UpdateUserModel = {
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState<UpdateUserModel>(emptyUser);
  const [originalData, setOriginalData] = useState<UpdateUserModel>(emptyUser);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditable, setIsEditable] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [profileReload, setProfileReload] = useState(true);
  const { isLoggedIn, accessToken } = useAuth();
  const { toggleIsLoggedIn, setAccessToken } = useToggleAuth();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setProfileReload(true);
    }
  }, []);

  useEffect(() => {
    if (profileReload == false) return;
    if (!accessToken) return;
    const fetchUser = async () => {
      try {
        const response = await AuthenticationService.getUserInfo(accessToken);
        const user = response.data["user"];
        const [first_name, last_name, email, phone] = user;
        const userData: UpdateUserModel = {
          first_name: first_name,
          last_name: last_name,
          phone: phone,
          email: email,
          password: "",
        };
        setFormData(userData);
        setOriginalData(userData);
        setProfileReload(false);
        setIsLoading(false);
      } catch (error: any) {
        setIsLoading(false);
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          router.push("/middleware");
          localStorage.clear();
          alert("Please log in.");
        }
        setError("Incercati din nou.");
        console.error("Upload Error:", error);
      }
    };

    fetchUser();
  }, [profileReload]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (!isEditable) return;
    if (!accessToken) return;
    try {
      console.log(formData);
      const response = await AuthenticationService.updateUser(
        accessToken,
        formData
      );
      alert("Profile updated!");
      setProfileReload(true);
      setOriginalData(formData);
      setIsEditable(false);
    } catch (error: any) {
      if (
        error.response &&
        (error.response.status === 401 ||
          error.response.status === 403 ||
          error.response.status === 400)
      ) {
        router.push("/middleware");
      }
      setError("Incercati din nou.");
      console.error("Upload Error:", error);
    }
  };

  const handleEditToggle = () => {
    if (isEditable) {
      setFormData(originalData);
    }
    setIsEditable((prev) => !prev);
  };

  const handleBackToggle = () => {
    router.back();
  };

  return (
    <div className={styles.container}>
      {isLoading && (
        <div className={styles["overlay"]}>
          <div className={styles["loader"]}>Uploading...</div>
        </div>
      )}

      <div className={styles.profileBox}>
        <div className={styles.title}>User Profile</div>

        <input
          className={styles.inputField}
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          placeholder="First Name"
          disabled={!isEditable}
        />

        <input
          className={styles.inputField}
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          placeholder="Last Name"
          disabled={!isEditable}
        />

        <input
          className={styles.inputField}
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          disabled={!isEditable}
        />

        <input
          className={styles.inputField}
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="New Password"
          disabled={!isEditable}
        />

        <input
          className={styles.inputField}
          name="email"
          value={formData.email}
          placeholder="Email"
          disabled
        />

        <div className={styles.buttonGroup}>
          <button onClick={handleEditToggle} className={styles.button}>
            {isEditable ? "Cancel" : "Edit"}
          </button>

          <button
            onClick={handleSave}
            className={styles.button}
            disabled={!isEditable}
          >
            Save Changes
          </button>

          <button onClick={handleBackToggle} className={styles.button}>
            Back
          </button>
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default Profile;
