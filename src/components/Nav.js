import '../style/Nav.scss';
import React from 'react';
import $ from 'jquery';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Nav() {
  const Logo = require('../Assets/LOGO-19.png').default;
  const Logo2 = require('../Assets/LOGO-21.png').default;
  const FacebookLogo = require('../Assets/Facebook.png').default;
  const InstagramLogo = require('../Assets/Instagram.png').default;
  const [show, setShow] = useState(false);
  

  const HamburgerClick = () => {
    if (show) {
      $('.Hamburger-btn').removeClass('active');
      $('.Hamburger-btn-2').removeClass('active');
      $('.Nav-Title').removeClass('actived')
      setShow(false)
    } else {
      $('.Hamburger-btn').addClass('active');
      $('.Hamburger-btn-2').addClass('active');
      $('.Nav-Title').addClass('actived')
      setShow(true)
    }

  }


  return (
    <div className="Nav-Header">
      <div className="Nav-Container">
        <div className="Nav-Logo">
          <img className="Logo" src={Logo2}></img>
          <p className="Nav-Title"> shabu • siy</p>
        </div>
        <div className="Nav-Hamburger" onClick={HamburgerClick}>
          <div className="Hamburger-btn"></div>
          <div className="Hamburger-btn-2"></div>
        </div>
      </div>
      <Modal show={show} >

        <Modal.Body>
          <div className="Nav-Container">
            <div className="Left-Section">
              <div className="Left-Section-Tools">
                <p>PAGES</p>
                <div className="Menu-Content-Tools">
                  <div className="Plus1"></div>
                  <div className="Plus2"></div>
                </div>
              </div>
              <div className="Menu-Content">
                <p>About</p>
                <p>Our Meat</p>
                <p>Recommendation</p>
                <p>Menu</p>
                <p>Contact</p>
              </div>
            </div>
            <div className="Middle-Section">
              <div className="Title-Section">
                <p>FOLLOW US</p>
              </div>
              <div className="Social-Logo-Section">
                <img src={InstagramLogo}></img>
                <img src={FacebookLogo}></img>
              </div>
            </div>
            <div className="Right-Section">
              <img src={Logo2}></img>
              <p>shabu • siy</p>
            </div>

          </div>
        </Modal.Body>

      </Modal>

    </div>
  );
}

export default Nav;
