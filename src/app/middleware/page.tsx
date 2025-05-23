"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  useAuth,
  useToggleAuth,
} from "@/app/_components/context/AuthenticationContext";

export default function MiddlewarePage() {
  const router = useRouter();
  const toggleAuth = useToggleAuth();
  const { isLoggedIn, accessToken } = useAuth();
  const { toggleIsLoggedIn, setAccessToken } = useToggleAuth();
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current || isLoggedIn === undefined || isLoggedIn === null)
      return;
    hasRun.current = true;

    if (isLoggedIn) {
      toggleIsLoggedIn();
      localStorage.clear();
      router.push("/login");
    } else {
      toggleIsLoggedIn();
      router.push("/");
    }
  }, [isLoggedIn]);

  return <div>Redirecting...</div>;
}
