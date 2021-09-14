import '../style/Footer.scss';
import React from 'react-bootstrap';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import $ from 'jquery';
import Scrollbar from 'smooth-scrollbar';

function Footer() {
  const [PagesShow, setPagesShow] = useState(true);
  // const Logo = require('../Assets/LOGO-19.png').default;
  // const Logo2 = require('../Assets/LOGO-21.png').default;
  const FacebookLogo = require('../Assets/Facebook.png').default;
  const InstagramLogo = require('../Assets/Instagram.png').default;
  // const [shownav, setshownav] = useState(false);
  // const [show, setShow] = useState(false);

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
    let scrollbar = Scrollbar.get(document.getElementById('scroll-bar'));
    scrollbar.scrollIntoView(document.querySelector('#About'), {
      offsetTop: 50,
      alignToTop: true,
      onlyScrollIfNeeded: true,
    });
  }
  
  const scrollviewTestOurMeat = () =>{
    let scrollbar = Scrollbar.get(document.getElementById('scroll-bar'));
    scrollbar.scrollIntoView(document.querySelector('#OurMeat'), {
      offsetTop: 50,
      alignToTop: true,
      onlyScrollIfNeeded: true,
    });
  }
  
  const scrollviewTestRecommendation = () =>{
    let scrollbar = Scrollbar.get(document.getElementById('scroll-bar'));
    scrollbar.scrollIntoView(document.querySelector('#Recommendation'), {
      offsetTop: 50,
      alignToTop: true,
      onlyScrollIfNeeded: true,
    });
  }

  const scrollviewTestMenu = () =>{
    let scrollbar = Scrollbar.get(document.getElementById('scroll-bar'));
    scrollbar.scrollIntoView(document.querySelector('#Menu'), {
      offsetTop: 50,
      alignToTop: true,
      onlyScrollIfNeeded: true,
    });
  }

  const scrollviewTestContact = () =>{
    let scrollbar = Scrollbar.get(document.getElementById('scroll-bar'));
    scrollbar.scrollIntoView(document.querySelector('#Contact'), {
      offsetTop: 50,
    });
  }

  return (
    <div className="Footer-Container">
      <div className="Footer-Wraper">
        <div className="Footer-Content-Wraper">
          <div className="Footer-Left-Section">
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
          <div className="Footer-Midle-Section">
            <div className="Footer-Title-Section">
              <p>FOLLOW US</p>
            </div>
            <div className="Footer-Social-Logo-Section">
              <img src={InstagramLogo} alt="instagram"></img>
              <img src={FacebookLogo} alt="facebook"></img>
            </div>
          </div>
        </div>
        <div className="Footer-Lower-Section">
          <p>© CLAW</p>
          <p>2021, ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;