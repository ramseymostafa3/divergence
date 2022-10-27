import React, {useState} from "react";
import Header from "components/header";
import Sidebar from "components/sidebar";
import Footer from "components/footer";
import UserTable from 'components/admin/UserTable';
import PageTopbar from 'components/common/PageTopbar';

function Admin() {
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
                    <PageTopbar title={"Administration"} />
                    <div className="row align-items-center justify-content-between mb-3">
                        <div className="col">
                            <h2 className="adminTitle">Users</h2>
                        </div>
                        <div className="col">
                            <div className="rowCount">
                                <div class="userCount">
                                    <i class="iCon fas fa-user"></i>
                                    <span>Total User</span>
                                    <strong>138</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <UserTable />
                    <ul className='pagination noMb'>
                        <li><i class="fas fa-angle-left"></i></li>
                        <li className='active'><span>1</span></li>
                        <li><i class="fas fa-angle-right"></i></li>
                    </ul>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Admin;