import React from 'react'
import './Projects.css'
import img from '../public/images/foto1.png'

function Proyects() {
  return (
    <div className='projects-div mt-5'>
        <h1 className='text-center mb-4'>MIS PROYECTOS</h1>
        <div className='d-flex flex-wrap mx-auto justify-content-between' style={{width:"60rem"}}>
            <div className="card" style={{width:"15rem"}}>
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                    <h5 className="card-title">Post App</h5>
                    <p className="card-text">Aplicación que consume una fake API para 
                    luego mostrarlos en un listado.</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Mas información
                    </button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Post App</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div className='row mt-3'>
                                        <div className='col-md-9 col-lg-9 col-sm-12'>
                                            <div className="card mb-3">
                                                <img src={img} class="card-img-top card-img-height" alt="..."/>
                                                <div class="card-body">
                                                    <p className="card-text">Aplicación que consume una FAKE API para disponer los datos en la página. Contiene registro y login, Creación, 
                                                        modificación y eliminación de un POST.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-3 col-lg-3 col-sm-12'>
                                            <div className="card mb-5">
                                                <div className="card-body">
                                                    <h5 className="card-title">usado:</h5>
                                                </div>
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">
                                                        React
                                                    </li>
                                                    <li className="list-group-item">
                                                        Redux
                                                    </li>
                                                    <li className="list-group-item">
                                                        Axios
                                                    </li>
                                                    <li className="list-group-item"> 
                                                        Bootstrap
                                                    </li>
                                                </ul>
                                            </div>
                                            <button className='btn btn-primary mt-5' style={{width:"11rem"}} >
                                                    <a href='https://maxi852.github.io/React-Bootstrap5/' className='text-dark text-decoration-none ' target="_blank">
                                                        Ir a la web
                                                    </a>
                                                </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card" style={{width:"15rem"}}>
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div className="card" style={{width:"15rem"}}>
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Proyects