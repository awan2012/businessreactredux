import React from 'react';

const Header = () => {
  return (
    <div>

      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="!#"><img src={require("../../images/logo.png")} height="50" width="50" alt="`abc`" />ABCS Solutions</a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
            <li className="active"><a href="#home">HOME</a>
              <span className="menu"><img src={require("../../images/menu.png")} alt=""/></span>
            </li>
            <li><a href='#about'>ABOUT</a>
              <span className="menu"><img src={require("../../images/menu.png")} alt=""/></span></li>
            <li><a href="#services">SERVICES <span className="sr-only"></span></a>
              <span className="menu"><img src={require("../../images/menu.png")} alt=""/></span>
            </li>
            <li><a href="#works">WORK <span className="sr-only"></span></a>
              <span className="menu"><img src={require("../../images/menu.png")} alt=""/></span>
            </li>
            <li><a href="#blog" >BLOG <span className="sr-only"></span></a>
              <span className="menu"><img src={require("../../images/menu.png")} alt=""/></span>
            </li>
            <li><a href="#contact" >CONTACT <span className="sr-only"></span></a>
              <span className="menu"><img src={require("../../images/menu.png")} alt=""/></span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Header; 