import '../style/Home.scss';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import $ from 'jquery';
import { Parallax } from 'react-parallax';

function Home() {
  const imglandingpage = require('../Assets/LandingPage_Photo.png').default;
  const imgsec1 = require('../Assets/about-us.jpg').default;
  const imgsec2 = require('../Assets/our-meat.jpg').default;
  const imgsec3 = require('../Assets/recommendation.png').default;
  const beefshabu = require('../Assets/BEEF SHABU.png').default;
  const chickensausage = require('../Assets/CHICKEN SAUSAGE.png').default;
  const chickensteak = require('../Assets/CHICKEN STEAK.png').default;
  const cubetender = require('../Assets/CUBE TENDER.png').default;
  const rosu = require('../Assets/ROSU.png').default;
  const siykarubi = require('../Assets/SIY KARUBI.png').default;
  const siymiyuji = require('../Assets/SIY MIYUJI.png').default;
  const siysteak = require('../Assets/SIY STEAK.png').default;
  const specialsuki = require('../Assets/SPECIAL SUKI.png').default;
  const siybeef = require('../Assets/SIY BEEF.png').default;
  const usplate = require('../Assets/US PLATE.png').default;
  const Menu_Book = require('../Assets/Menu_Book1.png').default;
  const ImageSection = require('../Assets/Gambar-Lantai2.png').default;
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
              <img src={imgsec1} className="image" alt="about us" /> : <Parallax bgImage={imgsec1} strength={250} className="parallax"></Parallax>
            }
          </div>
          <div className="sec1-right">
            <div>
              <div className="TitleDiv">
              <p className="title">ABOUT /</p>
              <p className="japtitle">だいたい</p>
              </div>
              <p>Shabu Siy is an Authentic Japanese Complex that consists of all you can shabu-shabu and grill, japanese traditional market with variety of yakitori, and coffee shop to relax and enjoy your last time before heading off. Serving you variety of choices,
                these three facilities offers you an exciting experience for you to enjoy for yourself and your loved ones. Imported ingredients are served to reach the best quality there is, thriving warm smiles on people’s faces.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Image-Section">
       
          <img src={ImageSection} alt="SecondFloor-Section" />
        
      </div>
      <div className="section2" id="OurMeat">
        <div className="contentsec2">
          <div className="sec2-left">
            <div>
            <div className="TitleDiv">
              <p className="title">OUR MEAT /</p>
              <p className="japtitle">私たちの肉</p>
            </div>
              <p>We offer various types of meat with the best quality there is on the market, ready to be enjoyed in Shabu Siy.
                Accompanied with variety of meal and side dishes with excellent taste, to enhance your dining experience here at Shabu Siy.</p>
            </div>
          </div>
          <div className="sec2-right">
            {isMobile ? <img src={imgsec2} className="image" alt="our meat" /> : <Parallax bgImage={imgsec2} strength={250} className="parallax"></Parallax>}
          </div>
        </div>
      </div>
      <div className="section3" id="Recommendation">
        <div className="contentsec3">
          <div className="sec3-left">
            {isMobile ? <img src={imgsec3} className="image" alt="recommendation" /> : <img src={imgsec3} className="image" alt="recommendation" />}
          </div>
          <div className="sec3-right">
            <div>
            <div className="TitleDiv">
              <p className="title">RECOMMENDATION /</p>
              <p className="japtitle">私たちの推奨事項</p>
              </div>
              <p>We recommend trying all of our selected menus here at Shabu Siy combined with our finest soup of your choice,
                with the support of the unique ambiance of the place itself, resulting in an exquisite Japanese Authentic experience.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section4" id="Menu">
        <div className="contentsec4">
          <div className="sec4-left">
            <div>
            <div className="TitleDiv">
              <p className="title">MENU /</p>
              <p className="japtitle">メニュー</p>
              </div>
              <p>Click the image to explore our complete menu.</p>
            </div>
          </div>
          <div className="sec4-right">
            <div className="container Desktop">
              <a className="book" href="https://drive.google.com/file/d/1NH45XZZ7CZVEmov90ScYrlYvUNY_xhpj/view?usp=drivesdk" target="_blank" rel="noreferrer">
                <div className="front">
                  <div className="cover">
                    <img src={Menu_Book} alt="Shabusiy-Menu-Book"/>
                  </div>
                </div>
                <div className="left-side">
                  <h2>
                    <span>SHABU SIY MENU</span>
                    <span>2021</span>
                  </h2>
                </div>
              </a>
            </div>
            <div className="container Mobile">
              <a className="bookMobile" href="https://drive.google.com/file/d/1NH45XZZ7CZVEmov90ScYrlYvUNY_xhpj/view?usp=drivesdk" target="_blank" rel="noreferrer">
                <img src={Menu_Book} alt="Shabusiy-Menu-Book"/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section5" id="Contact">
        <div className="contentsec5">
          <div className="contact">
          <div className="TitleDiv">
            <p>CONTACT /</p>
            <p className="japtitle">コンタクト</p>
            </div>
          </div>
          <div className="content">
            <div className="content-top">
              <p>Address</p>
              <a href="https://goo.gl/maps/DYoLpt8NRrirZ8vU9" target="_blank" rel="noreferrer">Jl. Cipete Raya No.12C, Jakarta</a>
            </div>
            <div className="content-midle">
              <p>Email</p>
              <a href="mailto: shabuysiy.jakarta@gmail.com" target="_blank" rel="noreferrer">shabuysiy.jakarta@gmail.com</a>
            </div>
            <div className="content-bottom">
              <p>Phone Number</p>
              <a href="tel:081291191160">08129119160</a>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery">
        <div className="contentgallery">
          <div className="titlegallery">
          <div className="TitleDiv">
            <p className="title">GALLERY /</p>
            <p className="japtitle">ギャラリー</p>
            </div>
          </div>
          <div className="rows">
            <div className="items">
              <p>BEEF SHABU</p>
              <img src={beefshabu} alt="beef-shabu"/>
            </div>
            <div className="items">
              <p>SIY KARUBI</p>
              <img src={siykarubi} alt="siy-karubi"/>
            </div>
            <div className="items">
              <p>SPECIAL SUKI</p>
              <img src={specialsuki} alt="special-suke"/>
            </div>
          </div>
          <div className="rows">
            <div className="items">
              <p>US PLATE</p>
              <img src={usplate} alt="us-plate"/>
            </div>
            <div className="items">
              <p>SIY STEAK</p>
              <img src={siysteak} alt="siy-steak"/>
            </div>
            <div className="items" >
              <p>ROSU</p>
              <img src={rosu} alt="rosu"/>
            </div>
          </div>
          <div className="rows">
            <div className="items">
              <p>SIY BEEF</p>
              <img src={siybeef} alt="siy-beef"/>
            </div>
            <div className="items">
              <p>SIY MIYUJI</p>
              <img src={siymiyuji} alt="beef-shabu"/>
            </div>
            <div className="items">
              <p>CHICKEN SAUSAGE</p>
              <img src={chickensausage} alt="chicken-sausage"/>
            </div>
          </div>
          <div className="rows">
            <div className="items">
              <p>CHICKEN STEAK</p>
              <img src={chickensteak} alt="chicken-steak"/>
            </div>
            <div className="items">
              <p>CUBE TENDER</p>
              <img src={cubetender} alt="cube-tender"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;