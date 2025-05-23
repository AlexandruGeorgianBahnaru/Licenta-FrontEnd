"use client";
import { useState } from "react";
import MainContainer from "@/app/_components/mainContainer/MainContainer";
import NavBarLogin from "@/app/_components/navBarLogin/NavBarLogin";
import MenuButtons from "@/app/_components/menuButtons/MenuButtons";
import { useRouter } from "next/navigation";

const Home = () => {
  const [shownContainer, setShownContainer] = useState("info-invoices");

  const showInvoices = (type: string) => {
    setShownContainer(type);
  };

  return (
    <div className="main-background">
      <MenuButtons showInvoices={showInvoices} />
      <MainContainer shownContainer={shownContainer} />
    </div>
  );
};

export default Home;
