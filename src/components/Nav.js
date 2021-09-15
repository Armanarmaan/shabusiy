import '../style/Nav.scss';
import React from 'react';
import $ from 'jquery';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

function Nav() {
  const Logo = require('../Assets/Logo-Hitam.svg').default;
  // const Logo2 = require('../Assets/Logo-Putih.svg').default;
  const FacebookLogo = require('../Assets/Facebook.png').default;
  const InstagramLogo = require('../Assets/Instagram.png').default;
  const [show, setShow] = useState(false);
  const [PagesShow, setPagesShow] = useState(true);
  const [shownav, setshownav] = useState(false);


  const HamburgerClick = () => {
    if (show) {
      $('.Hamburger-btn').removeClass('active');
      $('.Hamburger-btn-2').removeClass('active');
      $('.Nav-Title').removeClass('actived');
      $('.Nav-Header').removeClass('actived');
      $('.modal').addClass('show-up');
      setShow(false)
      setshownav(false)
    } else {
      $('.Hamburger-btn').addClass('active');
      $('.Hamburger-btn-2').addClass('active');
      $('.Nav-Title').addClass('actived');
      $('.Nav-Header').addClass('actived');
      $('.modal').removeClass('show-up');
      setShow(true); 
      setshownav(true)
    }

  }

  const PagesClick = () => {
    if (PagesShow) {
      $('.Plus2').addClass('actived');

      setPagesShow(false)
    } else {
      $('.Plus2').removeClass('actived');
      setPagesShow(true)
    }

  }

  const scrollviewTestAbout = () =>{
    if(show){
      $('.Hamburger-btn').removeClass('active');
      $('.Hamburger-btn-2').removeClass('active');
      $('.Nav-Title').removeClass('actived');
      $('.Nav-Header').removeClass('actived');
      $("html, body").animate({ 
        scrollTop: $("#About").offset().top - 80 
      }, 100);
      setshownav(false);
      setShow(false);
    } else {
      setshownav(true);
      setShow(true);
    }
    
  }
  
  const scrollviewTestOurMeat = () =>{
    if(show){
      $('.Hamburger-btn').removeClass('active');
      $('.Hamburger-btn-2').removeClass('active');
      $('.Nav-Title').removeClass('actived');
      $('.Nav-Header').removeClass('actived');
      $("html, body").animate({ 
        scrollTop: $("#OurMeat").offset().top - 80 
      }, 100);
      setshownav(false);
      setShow(false);
    } else {
      setshownav(true);
      setShow(true);
    }
    
  }
  
  const scrollviewTestRecommendation = () =>{
    if(show){
      $('.Hamburger-btn').removeClass('active');
      $('.Hamburger-btn-2').removeClass('active');
      $('.Nav-Title').removeClass('actived');
      $('.Nav-Header').removeClass('actived');
      $("html, body").animate({ 
        scrollTop: $("#Recommendation").offset().top - 80 
      }, 100);
      setshownav(false);
      setShow(false);
    } else {
      setshownav(true);
      setShow(true);
    }
    
  }

  const scrollviewTestMenu = () =>{
    if(show){
      $('.Hamburger-btn').removeClass('active');
      $('.Hamburger-btn-2').removeClass('active');
      $('.Nav-Title').removeClass('actived');
      $('.Nav-Header').removeClass('actived');
      $("html, body").animate({ 
        scrollTop: $("#Menu").offset().top - 80 
      }, 100);
      setshownav(false);
      setShow(false);
    } else {
      setshownav(true);
      setShow(true);
    }
    
  }

  const scrollviewTestContact = () =>{
    if(show){
      $('.Hamburger-btn').removeClass('active');
      $('.Hamburger-btn-2').removeClass('active');
      $('.Nav-Title').removeClass('actived');
      $('.Nav-Header').removeClass('actived');
      $("html, body").animate({ 
        scrollTop: $("#Contact").offset().top - 80 
      }, 100);
      setshownav(false);
      setShow(false);
    } else {
      setshownav(true);
      setshownav(true);
    }
    
  }

  return (
    <div className="Nav-Header">
      <div className="Nav-Container">
        <div className="Nav-Logo">
          <img className="Logo" src={Logo} alt="logo"></img>
          <p className="Nav-Title"> shabu • siy</p>
        </div>
        <div className="Nav-Hamburger" onClick={HamburgerClick}>
          <div className="Hamburger-btn"></div>
          <div className="Hamburger-btn-2"></div>
        </div>
      </div>
      <Modal show={shownav} animation={false} dialogClassName="Show-up">

        <Modal.Body>
          <div className="Nav-Container">
            <div className="Left-Section">
              <Button className="Left-Section-Tools" aria-controls="Pages-Content"
                aria-expanded={PagesShow} onClick={PagesClick}>
                <p>PAGES</p>
                <div className="Menu-Content-Tools">
                  <div className="Plus1"></div>
                  <div className="Plus2"></div>
                </div>
              </Button>
              <Collapse in={PagesShow} timeout={2000}>
                <div id="Pages-Content" className="Menu-Content">
                  <p onClick={scrollviewTestAbout}>About</p>
                  <p onClick={scrollviewTestOurMeat}>Our Meat</p>
                  <p onClick={scrollviewTestRecommendation}>Recommendation</p>
                  <p onClick={scrollviewTestMenu}>Menu</p>
                  <p onClick={scrollviewTestContact}>Contact</p>
                </div>
              </Collapse>
            </div>
            <div className="Middle-Section">
              <div className="Title-Section">
                <p>FOLLOW US</p>
              </div>
              <div className="Social-Logo-Section">
                <img src={InstagramLogo} alt="instagram"></img>
                <img src={FacebookLogo} alt="facebook"></img>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
              <p>© CLAW</p>
              <p>2021, ALL RIGHTS RESERVED.</p>
        </Modal.Footer>

      </Modal>

    </div>
  );
}

export default Nav;
