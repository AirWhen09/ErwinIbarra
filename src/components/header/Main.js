
import l01 from '../../assets/shapes/9.svg';
import l02 from '../../assets/shapes/dot.svg';
import l06 from '../../assets/shapes/3.svg';
import l08 from '../../assets/shapes/9.svg';
import l09 from '../../assets/shapes/3.svg';
import l10 from '../../assets/shapes/4.svg';
import l12 from '../../assets/shapes/2.svg';
import l13 from '../../assets/shapes/5.svg';
import l14 from '../../assets/shapes/9.svg';
import l15 from '../../assets/shapes/3.svg';
import l16 from '../../assets/shapes/9.svg';
import l17 from '../../assets/shapes/5.svg';
import l18 from '../../assets/shapes/9.svg';
import l19 from '../../assets/shapes/9.svg';
import l20 from '../../assets/shapes/1.svg';
import mypic from '../img/me.jpg';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Main = () => {
  return (
    <>
      
      <div className="simple_shapes">
      <span className="one anim_scale"><img className="svg" src={l01} alt="" /></span>
      <span className="two anim_moveLeft"><img className="svg" src={l02} alt="" /></span>
      <span className="six anim_circle"><img className="svg" src={l06} alt="" /></span>
      <span className="eight anim_scale"><img className="svg" src={l08} alt="" /></span>
      <span className="nine anim_circle"><img className="svg" src={l09} alt="" /></span>
      <span className="ten anim_moveLeft"><img className="svg" src={l10} alt="" /></span>
      <span className="twelve anim_extra"><img className="svg" src={l12} alt="" /></span>
      <span className="thirteen anim_circle"><img className="svg" src={l13} alt="" /></span>
      <span className="fourteen anim_scale"><img className="svg" src={l14} alt="" /></span>
      <span className="fifteen anim_circle"><img className="svg" src={l15} alt="" /></span>
      <span className="sixteen anim_scale"><img className="svg" src={l16} alt="" /></span>
      <span className="seventeen anim_circle"><img className="svg" src={l17} alt="" /></span>
      <span className="eighteen anim_scale"><img className="svg" src={l18} alt="" /></span>
      <span className="nineteen anim_scale"><img className="svg" src={l19} alt="" /></span>
      <span className="twenty anim_circle"><img className="svg" src={l20} alt="" /></span>
      </div>
      <main className="row container mt-5 mb-5">


      <div className="container mt-2 col-sm-7">
          <p className="fs-3">Hi!</p>
          <h1 className="name">I'm Erwin Ibarra</h1>
          <p className="text-mute fs-4">A Fullstack Web Developer,</p>
          <p className="text-mute"> and welcome to my other world.</p>
      </div>

      <div className="right col-sm-3">
          <div className="bg-shape img-fluid"></div>
          <img src={mypic} className="img-fluid rounded-5" alt="" />
      </div>
      </main>
    </>
  )
}

export default Main