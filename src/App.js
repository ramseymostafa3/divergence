import React from "react";

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
  return (
    <div
      id="page-container"
      className="sidebar-o sidebar-dark enable-page-overlay side-scroll page-header-fixed main-content-narrow"
    >
      <Sidebar />
      <Header />

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
