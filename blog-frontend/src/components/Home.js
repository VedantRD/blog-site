import React, { Component } from 'react'
// import { Navbar, NavDropdown, Nav } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import background from '../assets/new2.jpg'
import card1 from '../assets/home.jpg'
import card2 from '../assets/home2.jpg'

export class Home extends Component {
    render() {
        return (
            <div>
                {/* <h1 classNameNameName='mt-5 text-primary'>hello</h1> */}
                <div className='row no-gutters justify-content-lg-end mx-4'>
                    <div className="input-group md-form form-sm form-2 pt-3 col-lg-4 mr-1">
                        <input className="form-control my-0 py-1" type="text" placeholder="Search Here" aria-label="Search" />
                        <div className="input-group-append">
                            <span className="input-group-text lighten-3" id="basic-text1"><i className="fas fa-search text-grey"
                                aria-hidden="true"></i></span>
                        </div>
                    </div>
                </div>

                {/* ==================================== body of the homepage ======================================== */}
                {/* <div className="row"></div> */}
                <div className='mx-4'>

                    {/* <!-- Jumbotron Header --> */}
                    <header className="jumbotron mb-3 mt-3" style={{ backgroundImage: `url(${background})`, backgroundPosition: 'center' }}>
                        <h1 className="text-light" style={{ fontFamily: 'arial' }}>Welcome to VD-Blogs</h1>
                        <p className="lead text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
                        <a href="#one" className="btn btn-dark btn-lg">See Top Blogs</a>
                    </header>

                    {/* <h2 className="mb-4 text-center pb-1">Top Blogs</h2> */}

                    {/* <!-- Page Features --> */}
                    <div className="row text-center">

                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="card h-100">
                                <img className="card-img-top" src={card1} alt="no img" />
                                <div className="card-body">
                                    <h4 className="card-title">Node-Express Simplified</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                                </div>
                                <div className="pb-4">
                                    <a href="#one" className="btn btn-primary">Read Full Blog</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="card h-100">
                                <img className="card-img-top" src={card2} alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">My React Journey</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>
                                </div>
                                <div className="pb-4">
                                    <a href="#one" className="btn btn-primary">Read Full Blog</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="card h-100">
                                <img className="card-img-top" src={card1} alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">Mongo DB Guide</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                                </div>
                                <div className="pb-4">
                                    <a href="#one" className="btn btn-primary">Read Full Blog</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="card h-100">
                                <img className="card-img-top" src={card2} alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">Become JS Expert</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>
                                </div>
                                <div className="pb-4">
                                    <a href="#one" className="btn btn-primary">Read Full Blog</a>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <!-- /.row --> */}

                </div>

            </div>
        )
    }
}

export default Home
