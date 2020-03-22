import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Logout extends Component {

    state = {
        isLoggedout: false
    }

    applyLogout = () => {
        this.props.loggedOut()
        this.props.logoutUser()
    }

    render() {
        return (
            <div>
                <Link to={""} className="nav-link btn text-light mx-1" data-toggle="modal" data-target="#loginModal">
                    <span>{this.props.username}</span>
                    <i className="fa fa-sign-out ml-2 text-danger"></i>
                    <span className="sr-only">(current)</span>
                </Link>

                <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header border-bottom-0">
                                <h5 className="modal-title" id="exampleModalLabel">Logout</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className='modal-body'>
                                <p className="my-3 p-1">Do you really want to logout?</p>
                                <div className='row justify-content-end mb-2'>
                                    <button className='btn mr-2 btn-outline-secondary' data-dismiss="modal">Cancel</button>
                                    <Link to={''}>
                                        <button className='btn btn-success mr-4' data-dismiss="modal" onClick={() => this.applyLogout()}>Logout</button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
