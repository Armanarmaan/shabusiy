import '../style/Home.scss';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import $ from 'jquery';

function Home() {
  const imglandingpage = require('../Assets/landingpage.png').default;
  const imgsec1 = require('../Assets/sec1.png').default;
  const imgsec2 = require('../Assets/sec2.png').default;
  const imgsec3 = require('../Assets/sec3.png').default;
  const imgsec4 = require('../Assets/sec4.png').default;
  const [PagesShow, setPagesShow] = useState(true);


  const PagesClick = () => {
    if (PagesShow) {
      $('.Plus2').addClass('actived');

      setPagesShow(false)
    } else {
      $('.Plus2').removeClass('actived');
      setPagesShow(true)
    }

  }

  return (
    <div className="home">
      <div className="landingpage">
        <div className="landingpage-left">
          <img src={imglandingpage} alt="image-landingpage" />
        </div>
        <div className="landingpage-right">
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
              <p>About</p>
              <p>Our Meat</p>
              <p>Recommendation</p>
              <p>Menu</p>
              <p>Contact</p>
            </div>
          </Collapse>
        </div>
      </div>
      <div className="section1">
        <div className="contentsec1">
          <div className="sec1-left">
            <img src={imgsec1} alt="image-sec1" className="image" />
          </div>
          <div className="sec1-right">
            <div className="title">
              <p>ABOUT</p>
            </div>
            <p>Offering exceptional shabu-shabu menus in a setting of sheer luxury, the Shabu Siy brand has received praise and accolades from the media in various countries. Shabu Siy strives to bring out the best in the distinctive Japanese food culture, through fabulous concoctions of flavors executed with style, precision and simplicity.</p>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="contentsec2">
          <div className="sec2-left">
            <div className="title">
              <p>OUR MEAT</p>
            </div>
            <p>Offering exceptional shabu-shabu menus in a setting of sheer luxury, the Shabu Siy brand has received praise and accolades from the media in various countries. Shabu Siy strives to bring out the best in the distinctive Japanese food culture, through fabulous concoctions of flavors executed with style, precision and simplicity.</p>
          </div>
          <div className="sec2-right">
            <img src={imgsec2} alt="image-sec2" className="image" />
          </div>
        </div>
      </div>
      <div className="section3">
        <div className="contentsec3">
          <div className="sec3-left">
            <img src={imgsec3} alt="image-sec3" className="image" />
          </div>
          <div className="sec3-right">
            <div className="title">
              <p>RECOMMENDATION</p>
            </div>
            <p>Offering exceptional shabu-shabu menus in a setting of sheer luxury, the Shabu Siy brand has received praise and accolades from the media in various countries. Shabu Siy strives to bring out the best in the distinctive Japanese food culture, through fabulous concoctions of flavors executed with style, precision and simplicity.</p>
          </div>
        </div>
      </div>
      <div className="section4">
        <div className="sec4-left">
          <div className="title">
            <p>MENU</p>
          </div>
          <p>Click the image to explore our complete menu.</p>
        </div>
        <div className="sec4-right">
          <img src={imgsec4} alt="image-sec4" />
        </div>
      </div>
      <div className="section5">
        <div>
          <div className="contact">
            <p>CONTACT</p>
          </div>
          <div className="content">
            <div className="content-left">
              <p>Address</p>
              <p>E-Mail</p>
              <p>Phone Number</p>
            </div>
            <div className="content-right">
              <p>Jl. Cipete Raya No.12, Jakarta Selatan
              </p>
              <p>shabu.siy@123.com</p>
              <p>021-7123456</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;