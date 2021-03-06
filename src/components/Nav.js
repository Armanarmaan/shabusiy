import '../style/Nav.scss';
import React from 'react';
import $ from 'jquery';
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

function Nav() {
  const LogoPutih = require('../Assets/Logo Baru Putih.png').default;
  const LogoHitam = require('../Assets/LogoBaruHitam.png').default
  // const FacebookLogo = require('../Assets/Facebook.png').default;
  const InstagramLogo = require('../Assets/Instagram.png').default;
  const LinkTree = require('../Assets/linktree.png').default;

  const [show, setShow] = useState(false);
  const [PagesShow, setPagesShow] = useState(true);
  const [shownav, setshownav] = useState(false);

  useEffect(() => {
    var targetFooterLogo = $("#FooterDiv").offset().top - 145;
    var targetFooterTitle = $("#FooterDiv").offset().top - 108;
    var targetFooterHamburger = $("#FooterDiv").offset().top - 100;

    var $Footer = $(window).on("scroll", () => {
      if ($Footer.scrollTop() >= targetFooterLogo) {
        $('#logo-black').addClass('d-none');
        $('#logo-white').removeClass('d-none');
        $('.Nav-Header').addClass('actived');
      } else {
          $('#logo-black').removeClass('d-none');
          $('#logo-white').addClass('d-none');
          $('.Nav-Header').removeClass('actived');
      }

      if($Footer.scrollTop() >= targetFooterTitle){
        $('.Nav-Title').addClass('actived');
      } else {
        $('.Nav-Title').removeClass('actived');
      }

      if($Footer.scrollTop() >= targetFooterHamburger){
        $('.Nav-Hamburger').addClass('actived');
      } else {
        $('.Nav-Hamburger').removeClass('actived');
      }

    })
  });
  const HamburgerClick = () => {
    if (show) {
      $('.Hamburger-btn').removeClass('active');
      $('.Hamburger-btn-2').removeClass('active');
      $('.Nav-Title').removeClass('actived');
      $('.Nav-Header').removeClass('actived');
      $('.modal-dialog').removeClass('Show-up');
      $('.modal-dialog').addClass('Show-down');
      $('#logo-black').removeClass('d-none');
      $('#logo-white').addClass('d-none');
      setTimeout(function () {
        setShow(false);
        setshownav(false);
      }, 300);
    } else {
      $('.Hamburger-btn').addClass('active');
      $('.Hamburger-btn-2').addClass('active');
      $('.Nav-Title').addClass('actived');
      $('.Nav-Header').addClass('actived');
      $('#logo-black').addClass('d-none');
      $('#logo-white').removeClass('d-none');
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

  const scrollviewTestAbout = () => {
    if (show) {
      $('.Hamburger-btn').removeClass('active');
      $('.Hamburger-btn-2').removeClass('active');
      $('.Nav-Title').removeClass('actived');
      $('.Nav-Header').removeClass('actived');
      $('.modal-dialog').removeClass('Show-up');
      $('.modal-dialog').addClass('Show-down');
      $('#logo-black').removeClass('d-none');
      $('#logo-white').addClass('d-none');
      setTimeout(function () {
        setShow(false);
        setshownav(false);
      }, 300);
      $("html, body").animate({
        scrollTop: $("#About").offset().top - 140
      }, 100);
    } else {
      setshownav(true);
      setShow(true);
    }

  }

  const scrollviewTestOurMeat = () => {
    if (show) {
      $('.Hamburger-btn').removeClass('active');
      $('.Hamburger-btn-2').removeClass('active');
      $('.Nav-Title').removeClass('actived');
      $('.Nav-Header').removeClass('actived');
      $('.modal-dialog').removeClass('Show-up');
      $('.modal-dialog').addClass('Show-down');
      $('#logo-black').removeClass('d-none');
      $('#logo-white').addClass('d-none');
      setTimeout(function () {
        setShow(false);
        setshownav(false);
      }, 300);
      $("html, body").animate({
        scrollTop: $("#OurMeat").offset().top - 80
      }, 100);
    } else {
      setshownav(true);
      setShow(true);
    }

  }

  const scrollviewTestRecommendation = () => {
    if (show) {
      $('.Hamburger-btn').removeClass('active');
      $('.Hamburger-btn-2').removeClass('active');
      $('.Nav-Title').removeClass('actived');
      $('.Nav-Header').removeClass('actived');
      $('.modal-dialog').removeClass('Show-up');
      $('.modal-dialog').addClass('Show-down');
      $('#logo-black').removeClass('d-none');
      $('#logo-white').addClass('d-none');
      setTimeout(function () {
        setShow(false);
        setshownav(false);
      }, 300);
      $("html, body").animate({
        scrollTop: $("#Recommendation").offset().top - 150
      }, 100);
    } else {
      setshownav(true);
      setShow(true);
    }

  }

  const scrollviewTestMenu = () => {
    if (show) {
      $('.Hamburger-btn').removeClass('active');
      $('.Hamburger-btn-2').removeClass('active');
      $('.Nav-Title').removeClass('actived');
      $('.Nav-Header').removeClass('actived');
      $('.modal-dialog').removeClass('Show-up');
      $('.modal-dialog').addClass('Show-down');
      $('#logo-black').removeClass('d-none');
      $('#logo-white').addClass('d-none');
      setTimeout(function () {
        setShow(false);
        setshownav(false);
      }, 300);
      $("html, body").animate({
        scrollTop: $("#Menu").offset().top - 80
      }, 100);
    } else {
      setshownav(true);
      setShow(true);
    }

  }

  const scrollviewTestContact = () => {
    if (show) {
      $('.Hamburger-btn').removeClass('active');
      $('.Hamburger-btn-2').removeClass('active');
      $('.Nav-Title').removeClass('actived');
      $('.Nav-Header').removeClass('actived');
      $('.modal-dialog').removeClass('Show-up');
      $('.modal-dialog').addClass('Show-down');
      $('#logo-black').removeClass('d-none');
      $('#logo-white').addClass('d-none');
      setTimeout(function () {
        setShow(false);
        setshownav(false);
      }, 300);
      $("html, body").animate({
        scrollTop: $("#Contact").offset().top - 80
      }, 100);
    } else {
      setshownav(true);
      setshownav(true);
    }

  }

  return (
    <div className="Nav-Header">
      <div className="Nav-Container">
        <div className="Nav-Logo">
          <img className="Logo" src={LogoHitam} alt="logo" id="logo-black"></img>
          <img className="Logo2 d-none" src={LogoPutih} alt="logo-2" id="logo-white"></img>
          
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
              <a href="https://www.instagram.com/shabu.siy/" target="_blank" rel="noreferrer">
                <img src={InstagramLogo} alt="instagram" ></img>
              </a>
              <a href="https://www.linktree.com/shabusiy" target="_blank" rel="noreferrer">
              <img src={LinkTree} alt="linktree"></img>
              </a>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <p>?? CLAW</p>
          <p>2021, ALL RIGHTS RESERVED.</p>
        </Modal.Footer>

      </Modal>

    </div>
  );
}

export default Nav;
