import React from 'react';

import './header.scss';

const Header = () => (
  <header className="header">
    <h1 className="header_title">auto salon france</h1>
    <p className="header_content">
      <span className="header_content-presentation">Photothèque de véhicules prises en salon, rasso, circuit...</span>
      <span className="header_content-toForum">Forum &gt;</span>
    </p>
  </header>
);

export default Header;
