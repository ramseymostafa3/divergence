import React from "react";
import { Link } from "react-router-dom";

const AccountButtons = ({ link, label, active }) => {
  return (
    <li><Link to={`${link}`} className={`${active}`}>{label}</Link></li>
  );
};

export default AccountButtons;