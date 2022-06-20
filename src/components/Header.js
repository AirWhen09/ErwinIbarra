import React from 'react';
import '../assets/Header/header.css'
import Nav from './header/Nav';
import Main from './header/Main';
import Links from './header/Links';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Header = () => {
  return (
    <div className="container-fluid">
      <div className="right-container">
      </div>
      <div data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" >
      <Nav/>
      <Main/>
      <br/>
      <br/>
      <Links/>
      </div>
    </div>
  )
}

export default Header