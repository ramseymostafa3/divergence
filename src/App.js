import React, {useState} from "react";

import Header from "./components/header";
import TimeArea from "./components/home/TimeArea";
import HomeSectionTwo from "./components/home/HomeSectionTwo";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import StatsArea from "./components/home/StatsArea";

import "./assets/css/dashmix.css";
import "./App.css";
import HomeInfoSection from "./components/home/HomeInfoSection";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const navbarToggler = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div
      id="page-container"
      className="sidebar-dark page-header-fixed main-content-narrow"
    >
      <Sidebar sidebarState={isOpen} togglerFunction={navbarToggler} />
      <Header togglerFunction={navbarToggler} />

      <main id="main-container">
        <div className="content">
          <TimeArea />
          <HomeSectionTwo />
          <StatsArea />
          <HomeInfoSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
