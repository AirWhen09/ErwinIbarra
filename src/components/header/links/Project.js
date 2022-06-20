import React from 'react';
import book from '../../img/BookWorm.PNG';
import doctor from '../../img/doctor.PNG';
import mass from '../../img/mass.PNG';
import calculator from '../../img/calculator.PNG';
import journal from '../../img/journal.PNG';


const Project = () => {
  return (
    <div className="rounded-4 shadow-lg bg-white p-4 container my-5 border border-primary">
            <h3 className='text-center text-primary'>Mini Project/Activities</h3>
            <div className='container mt-5'>
              <div className="row">

                <div className='col-md-4 d-flex flex-column mt-3 '>
                    <div className='container-fluid shadow p-3 '>
                    <img src={book} alt="" className='img-fluid border border-primary'/>
                    <h5 className='my-3 text-primary text-center'>Book Worm - EMagazine</h5>
                       <div className='row'>
                          <a href='https://github.com/AirWhen09/AirWhen09.github.io' className='btn btn-primary col-6'>View Code</a>
                          <a href='https://airwhen09.github.io/' className='btn btn-success col-6'>View Website</a>
                        </div>
                    </div>
                </div>

                <div className='col-md-4 d-flex flex-column mt-3 '>
                    <div className='container-fluid shadow p-3 '>
                    <img src={doctor} alt="" className='img-fluid border border-primary'/>
                    <h5 className='my-3 text-primary text-center'>Patient Registration with JS Validation</h5>
                       <div className='row'>
                          <a href='https://github.com/AirWhen09/DoctorsHospital' className='btn btn-primary col-6'>View Code</a>
                          <a href='https://airwhen09.github.io/DoctorsHospital/' className='btn btn-success col-6'>View Website</a>
                        </div>
                    </div>
                </div>

                <div className='col-md-4 d-flex flex-column mt-3 '>
                    <div className='container-fluid shadow p-3 '>
                    <img src={mass} alt="" className='img-fluid border border-primary'/>
                    <h5 className='my-3 text-primary text-center'>Calculate Body Mass Index</h5>
                       <div className='row'>
                          <a href='https://github.com/AirWhen09/CalculateBodyMassIndex' className='btn btn-primary col-6'>View Code</a>
                          <a href='https://airwhen09.github.io/CalculateBodyMassIndex/CalculateBodyMassIndex.html' className='btn btn-success col-6'>View Website</a>
                        </div>
                    </div>
                </div>

                <div className='col-md-4 d-flex flex-column mt-3 '>
                    <div className='container-fluid shadow p-3 '>
                    <img src={calculator} alt="" className='img-fluid border border-primary'/>
                    <h5 className='my-3 text-primary text-center'>Simple Calculator</h5>
                       <div className='row'>
                          <a href='https://github.com/AirWhen09/SimpleCalculator' className='btn btn-primary col-6'>View Code</a>
                          <a href='https://airwhen09.github.io/SimpleCalculator/index.html' className='btn btn-success col-6'>View Website</a>
                        </div>
                    </div>
                </div>

                <div className='col-md-4 d-flex flex-column mt-3 '>
                    <div className='container-fluid shadow p-3 '>
                    <img src={journal} alt="" className='img-fluid border border-primary'/>
                    <h5 className='my-3 text-primary text-center'>Codding Journal</h5>
                       <div className='row'>
                          <a href='https://github.com/AirWhen09/CoddingJournal/tree/master' className='btn btn-primary col-6'>View Code</a>
                          <a href='https://airwhen09.github.io/CoddingJournal/' className='btn btn-success col-6'>View Website</a>
                        </div>
                    </div>
                </div>

                

              </div>
            </div>
        </div>

  )
}

export default Project