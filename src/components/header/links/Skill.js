import React from 'react';
import '../../../assets/Header/Link.css';

const Skill = () => {
  return (
    <div className='rounded-4 shadow-lg bg-white p-4 container my-5 border border-primary'>
        <h3 className='text-center text-primary mb-3'>Technologies and Tools</h3>
        <p>Using a combination of cutting-edge technologies and reliable open-source software I build user-focused, performant apps and websites for smartphones, tablets, and desktops.</p>
        <div className='d-flex gap-3 my-5 flex-wrap justify-content-between'>
            <div className='shadow p-3 skill-item d-flex gap-2 align-items-center'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className='skill-logo' alt="" /><h4>HTML</h4>
            </div>
            <div className='shadow p-3 skill-item  d-flex gap-2 align-items-center'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" className='skill-logo' alt="" />
                <h4>CSS</h4>
            </div>
            <div className='shadow p-3 skill-item  d-flex gap-2 align-items-center'>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" className='skill-logo' alt="" />
                <h4>SASS</h4>
            </div>
            <div className='shadow p-3 skill-item  d-flex gap-2 align-items-center'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className='skill-logo' alt="" />
                <h4>JavaScript</h4>
            </div>
            <div className='shadow p-3 skill-item d-flex gap-2 align-items-center'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" className='skill-logo' alt="" />
                <h4>Bootstrap</h4>
            </div>
            <div className='shadow p-3 skill-item d-flex gap-2 align-items-center'>
            <img src="	https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" className='skill-logo' alt="" />
                <h4>React</h4>
            </div>
            <div className='shadow p-3 skill-item d-flex gap-2 align-items-center'>
            <img src="https://duhayazilim.com/wp-content/uploads/2019/04/1280px-PHP-logo.svg_-1-1024x553.png" className='skill-logo' alt="" />
                <h4>PHP</h4>
            </div>
            <div className='shadow p-3 skill-item d-flex gap-2 align-items-center'>
            <img src="	https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" className='skill-logo' alt="" />
                <h4>NodeJS</h4>
            </div>
            <div className='shadow p-3 skill-item d-flex gap-2 align-items-center'>
            <img src="	https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg" className='skill-logo' alt="" />
                <h4>MySQL</h4>
            </div>
            <div className='shadow p-3 skill-item d-flex gap-2 align-items-center'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" className='skill-logo' alt="" />
                <h4>Git</h4>
            </div>
        </div>
    </div>
  )
}

export default Skill