import React from 'react'

const AboutMe = () => {
  return (
    <div className='container mt-5 mb-5'>
        <div className="row">
          
          <div className="col-sm-5">
            <div className="container">
              <div className="shadow-lg card border border-primary">
                <div className="paper-clip"></div>
                <div className="container p-4">
                  <h2 className="text-center text-primary"> My Profile</h2>
                  <div className="row mt-5"><p className="col-4">Name:</p> <p className="col-8">Erwin Ibarra</p></div>
                  <div className="row"><p className="col-4">Born:</p> <p className="col-8">April 9, 1999</p></div>
                  <div className="row"><p className="col-4">Degree:</p> <p className="col-8">Bachelor of Science in Information Technology</p></div>
                  <div className="row"><p className="col-4">Email:</p> <p className="col-8">ibarra.erwin09@gmail.com</p></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-7">
            <div className="container">
              <div className="shadow-lg card border border-primary">
                <div className="paper-clip"></div>
                <div className="container p-4">
                  <h2 className="text-center mb-5  text-primary"> About Me</h2>
                  <p>As a Web Developer, I'm continuously learning new things. I appreciate problems that require me to expand my knowledge, skills, and logic formulation. I'd like to put my skills to work on something that will help people address real-world challenges.</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>

    </div>
  )
}

export default AboutMe