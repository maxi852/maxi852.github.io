import React from 'react'
import './Introduction.css'

function Introduction() {
  return (
    <div>
    <div className='pt-5 name-title mx-3' >
        <div className='text-center mt-2 text-light' >
            <h2 className='fs-1'>Maximiliano Rocca</h2>
            <h4 className='fs-1'>Programador Web Fullstack</h4>
        </div>
    </div>
    <div className='containter-fluid bg-warning py-4'>
        <h2 className='text-center mb-4'>
          Tecnologias
        </h2>
        <div className='d-flex flex-row' >
        <div className="card web-sec" style={{width: "12rem"}}>
          <ul className="list-group list-group-flush text-center ">
            <li className="list-group-item bg-warning bg-opacity-50">HTML5</li>
            <li className="list-group-item bg-warning bg-opacity-50">CSS3</li>
            <li className="list-group-item bg-warning bg-opacity-50">Javascript</li>
          </ul>
        </div>
        <div className="card web-2" style={{width: "12rem"}}>
          <ul className="list-group list-group-flush text-center">
            <li className="list-group-item bg-warning bg-opacity-50">NodeJs</li>
            <li className="list-group-item bg-warning bg-opacity-50">MySql</li>
            <li className="list-group-item bg-warning bg-opacity-50">MongoDB</li>
          </ul>
        </div>
        <div className="card web-3" style={{width: "12rem"}}>
          <ul className="list-group list-group-flush text-center">
            <li className="list-group-item bg-warning bg-opacity-50">React</li>
            <li className="list-group-item bg-warning bg-opacity-50">Bootstrap</li>
            <li className="list-group-item bg-warning bg-opacity-50">Git</li>
          </ul>
        </div>
        </div>     
    </div>
    </div>
  )
}

export default Introduction