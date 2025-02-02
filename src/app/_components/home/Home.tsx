'use client'
import { useState } from "react";
import Header from "@/app/_components/home/header/Header";
import MainContainer from "@/app/_components/mainContainer/MainContainer"
import NavBarLogin from "@/app/_components/navBarLogin/NavBarLogin";
import MenuButtons from "./menuButtons/MenuButtons";



const Home = () => {

  const [shownContainer, setShownContainer] = useState("show-invoices")

  const showInvoices = (type: string) =>{
    setShownContainer(type);
  }

  return (
    <div className="main-background">
    <NavBarLogin/>
    <Header/>
    <MenuButtons showInvoices={showInvoices}/>
    <MainContainer shownContainer={shownContainer}/>
    </div>
  );
}

export default Home;