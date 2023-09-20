import React from "react";
import "./Header.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  return (
    <div className="header">
      <h4>VC MIS-POC</h4>
      <div className="user-profile">
        <div className="icon-container">
          <AccountCircleIcon fontSize="large" className="icon" />
          <span className="name">MIS Poc1</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
