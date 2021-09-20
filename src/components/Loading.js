import '../style/Loading.scss';
import $ from 'jquery';
import React, { useEffect } from 'react';

function Loading() {
  const Logo = require('../Assets/logo-loading.svg').default;

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