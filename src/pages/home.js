import React, {useState} from "react";

import Header from "components/header";
import Sidebar from "components/sidebar";
import Footer from "components/footer";

import TimeArea from "components/home/TimeArea";
import HomeSectionTwo from "components/home/HomeSectionTwo";
import StatsArea from "components/home/StatsArea";
import HomeInfoSection from "components/home/HomeInfoSection";

function Home() {
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

export default Home;
