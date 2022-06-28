import React, { useState } from 'react'

import Header from "components/header";
import Sidebar from "components/sidebar";
import Footer from "components/footer";

import PageTopbar from 'components/common/PageTopbar';
import PositionsRecord from 'components/positions/PositionsRecord';
import TransactionsInfoSection from 'components/transactions/TransactionsInfoSection';

function Positions() {
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
          <PageTopbar title={"Positions"} />
          <PositionsRecord />
          <TransactionsInfoSection />
          <ul className='pagination'>
            <li><i class="fas fa-angle-left"></i></li>
            <li className='active'><span>1</span></li>
            <li><i class="fas fa-angle-right"></i></li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Positions