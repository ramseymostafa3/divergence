import React, { useState } from 'react'

import Header from "components/header";
import Sidebar from "components/sidebar";
import Footer from "components/footer";

import PageTopbar from 'components/common/PageTopbar';
import TransactionsRecord from 'components/transactions/TransactionsRecord';
import TransactionsInfoSection from 'components/transactions/TransactionsInfoSection';

function Transactions() {
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
          <PageTopbar title={"Transactions"} />
          <TransactionsRecord />
          <TransactionsInfoSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Transactions