import '../style/Home.scss';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import $ from 'jquery';
import { Parallax } from 'react-parallax';

function Home() {
  const imglandingpage = require('../Assets/landingpage.png').default;
  const imgsec1 = require('../Assets/about-us.jpg').default;
  const imgsec2 = require('../Assets/our-meat.jpg').default;
  const imgsec3 = require('../Assets/recommendation.jpg').default;
  const imgsec4 = require('../Assets/sec4.png').default;
  const [PagesShow, setPagesShow] = useState(true);
  const isMobile = window.innerWidth < 768 ? true : false;


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
    $("html, body").animate({ 
      scrollTop: $("#About").offset().top - 80 
    }, 100);
  }

  const scrollviewTestOurMeat = () => {
    $("html, body").animate({ 
      scrollTop: $("#OurMeat").offset().top - 80 
    }, 100);
  }

  const scrollviewTestRecommendation = () => {
    $("html, body").animate({ 
      scrollTop: $("#Recommendation").offset().top - 80 
    }, 100);
  }

  const scrollviewTestMenu = () => {
    $("html, body").animate({ 
      scrollTop: $("#Menu").offset().top - 80 
    }, 100);
  }

  const scrollviewTestContact = () => {
    $("html, body").animate({ 
      scrollTop: $("#Contact").offset().top - 80 
    }, 100);
  }

  return (
    <div className="home" id="home">
      <div className="landingpage">
        <div className="landingpage-left">
          <img src={imglandingpage} alt="landingpage" className="imgldpage" />
        </div>
        <div className="landingpage-right">
          <Button className="Right-Section-Tools" aria-controls="Pages-Content"
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
      </div>

      <div className="section1" id="About">
        <div className="contentsec1">
          <div className="sec1-left">
            {isMobile ? 
            <img src={imgsec1} className="image" alt="about us"/> : <Parallax bgImage={imgsec1} strength={250} className="parallax"></Parallax>
            }
          </div>
          <div className="sec1-right">
            <div>
              <p className="title">ABOUT</p>
              <p>Offering exceptional shabu-shabu menus in a setting of sheer luxury, the Shabu Siy brand has received praise and accolades from the media in various countries. Shabu Siy strives to bring out the best in the distinctive Japanese food culture, through fabulous concoctions of flavors executed with style, precision and simplicity.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section2" id="OurMeat">
        <div className="contentsec2">
          <div className="sec2-left">
            <div>
              <p className="title">OUR MEAT</p>
              <p>Offering exceptional shabu-shabu menus in a setting of sheer luxury, the Shabu Siy brand has received praise and accolades from the media in various countries. Shabu Siy strives to bring out the best in the distinctive Japanese food culture, through fabulous concoctions of flavors executed with style, precision and simplicity.</p>
            </div>
          </div>
          <div className="sec2-right">
            {isMobile ? <img src={imgsec2} className="image" alt="our meat"/> : <Parallax bgImage={imgsec2} strength={250} className="parallax"></Parallax>}
          </div>
        </div>
      </div>
      <div className="section3" id="Recommendation">
        <div className="contentsec3">
          <div className="sec3-left">
            {isMobile ? <img src={imgsec3} className="image" alt="recommendation"/> : <Parallax bgImage={imgsec3} strength={200} className="parallax3"></Parallax>}
          </div>
          <div className="sec3-right">
            <div>
              <p className="title">RECOMMENDATION</p>
              <p>Offering exceptional shabu-shabu menus in a setting of sheer luxury, the Shabu Siy brand has received praise and accolades from the media in various countries. Shabu Siy strives to bring out the best in the distinctive Japanese food culture, through fabulous concoctions of flavors executed with style, precision and simplicity.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section4" id="Menu">
        <div className="contentsec4">
          <div className="sec4-left">
            <div>
              <p className="title">MENU</p>
              <p>Click the image to explore our complete menu.</p>
            </div>
          </div>
          <div className="sec4-right">
            <img src={imgsec4} alt="sec4" />
          </div>
        </div>
      </div>
      <div className="section5" id="Contact">
        <div className="contentsec5">
          <div className="contact">
            <p>CONTACT</p>
          </div>
          <div className="content">
            <div className="content-top">
              <p>Address</p>
              <p>Jl. Cipete Raya No.12</p>
            </div>
            <div className="content-midle">
              <p>Email</p>
              <p>shabuysiy.jakarta@gmail.com</p>
            </div>
            <div className="content-bottom">
              <p>Phone Number</p>
              <p>021-7123456</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;