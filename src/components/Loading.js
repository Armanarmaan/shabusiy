import '../style/Loading.scss';
import $ from 'jquery';
import React, { useEffect } from 'react';

function Loading() {
  const Logo = require('../Assets/Logo Baru Putih.png').default;

  useEffect(() => {
    $('body').css('overflow', 'hidden');
    setTimeout(() => {
      $('#loading-container').addClass('unload');
      $('body').removeAttr("style")
    }, 2500)
  }, [])
  return (
    <div className="Loading-Container load" id="loading-container">
      <img src={Logo} alt="logo"/>
    </div>
  );
}

export default Loading;