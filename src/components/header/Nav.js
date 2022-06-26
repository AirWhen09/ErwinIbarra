import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    
    <header>
      <Link className='navList logo p-5' to="/ErwinIbarra">
          <p ><span className='text-default'>Air</span><i>When</i></p>
      </Link>
    <ul>
        <li className="social"><a href="https://web.facebook.com/ibarra.erwin.9/" title='Facebook Account'><i className="bi bi-facebook"></i></a></li>
        <li className="social"><a href="https://mail.google.com/mail/u/0/#search/ibarra.erwin09@gmail.com" title='ibarra.erwin09@gmail.com'><i className="bi bi-envelope"></i></a></li>
        <li className="social"><a href="https://discord.gg/DpmkmNTe" title='Discord Server'><i className="bi bi-discord"></i></a></li>
        <li className="social"><a href="https://github.com/AirWhen09" title='Github Repository'><i className="bi bi-github"></i></a></li>
        <li><a href="https://web.facebook.com/ibarra.erwin.9/" className="btn btn-primary">Download CV</a></li>
    </ul>
  </header>
    
  )
}

export default Nav