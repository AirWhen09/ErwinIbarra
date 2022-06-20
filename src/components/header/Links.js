import React from 'react';
import { Link } from 'react-router-dom';



const Links = () => {
  return (
    <div className="d-flex container gap-2 flex-wrap mt-5" >
        <Link className='link' to="/ErwinIbarra/AboutMe">
        <div className="rounded-4 shadow-lg bg-white p-4 nav-item cards d-flex flex-nowrap border-primary border">
            <div className="side "> <h5 className="">&nbsp;&nbsp;<i className="bi bi-file-earmark-person"></i> About</h5></div>
            <div className="side back"><h5>About</h5></div>
        </div>
        </Link>
        <Link className='link' to="/ErwinIbarra/Project">
        <div className="rounded-4 shadow-lg bg-white p-4 nav-item cards d-flex border-primary border">
            <div className="side"><h5>&nbsp;&nbsp;<i className="bi bi-person-workspace"></i> Project</h5></div>
            <div className="side back"><h5>Project</h5></div>
        </div>
        </Link>
        <Link className='link' to="/ErwinIbarra/Skill">
        <div className="rounded-4 shadow-lg bg-white p-4 nav-item cards d-flex border-primary border">              
        <div className="side"><h5>&nbsp;&nbsp;<i className="bi bi-person-hearts"></i> Skills</h5></div>
            <div className="side back"><h5>Skills</h5></div>
        </div>
        </Link>
    </div>
    
  )
}

export default Links