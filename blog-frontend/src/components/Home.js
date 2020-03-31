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

                {/* ==================================== body of the homepage ======================================== */}
                {/* <div className="row"></div> */}
                <div className='mx-4'>

                    {/* <!-- Jumbotron Header --> */}
                    <header className="jumbotron mb-3 mt-3" style={{ backgroundImage: `url(${background})`, backgroundPosition: 'center' }}>
                        <h1 className="text-light" style={{ fontFamily: 'arial' }}>Welcome to VD-Blogs</h1>
                        <p className="lead text-light">Homepage is still under development. You can checkout rest of the pages. Report me for the bugs you encounter while using site</p>
                        <a href="#one" className="btn btn-dark btn-lg" onClick={() => { alert('This feature is coming soon!') }}>See Top Blogs</a>
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
