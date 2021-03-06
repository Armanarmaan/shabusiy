import '../style/Footer.scss';
import React from 'react-bootstrap';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import $ from 'jquery';

function Footer() {
  const [PagesShow, setPagesShow] = useState(true);
  // const FacebookLogo = require('../Assets/Facebook.png').default;
  const InstagramLogo = require('../Assets/Instagram.png').default;
  const LinkTree = require('../Assets/linktree.png').default;

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
    $("html, body").animate({ 
      scrollTop: $("#About").offset().top - 80 
    }, 100);
  }
  
  const scrollviewTestOurMeat = () =>{
    $("html, body").animate({ 
      scrollTop: $("#OurMeat").offset().top - 80 
    }, 100);
  }
  
  const scrollviewTestRecommendation = () =>{
    $("html, body").animate({ 
      scrollTop: $("#Recommendation").offset().top - 80 
    }, 100);
  }

  const scrollviewTestMenu = () =>{
    $("html, body").animate({ 
      scrollTop: $("#Menu").offset().top - 80 
    }, 100);
  }

  const scrollviewTestContact = () =>{
    $("html, body").animate({ 
      scrollTop: $("#Contact").offset().top - 80 
    }, 100);
  }

  return (
    <div className="Footer-Container" id="FooterDiv">
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
              <a href="https://www.instagram.com/shabu.siy/" target="_blank" rel="noreferrer">
                <img src={InstagramLogo} alt="instagram" ></img>
              </a>
              <a href="https://www.linktree.com/shabusiy" target="_blank" rel="noreferrer">
              <img src={LinkTree} alt="linktree"></img>
              </a>
            </div>
          </div>
        </div>
        <div className="Footer-Lower-Section">
          <p>?? CLAW</p>
          <p>2021, ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;