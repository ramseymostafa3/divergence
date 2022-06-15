import React from "react";

const AccountButtons = ({ link, label, active }) => {
  return (
    <li><a href={`${link}`} className={`${active}`}>{label}</a></li>
  );
};

export default AccountButtons;