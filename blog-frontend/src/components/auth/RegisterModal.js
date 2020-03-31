import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class RegisterModal extends Component {

    state = {
        username: '',
        password: '',
        confirmPassword: '',
        isRegisterSuccess: false
    }

    createNewUser = (event) => {
        event.preventDefault();
        if (this.state.password === this.state.confirmPassword) {

            axios.post('http://localhost:5000/users', {
                username: this.state.username,
                password: this.state.password
            }).then((response) => {
                // console.log(response);
                this.setState({ isRegisterSuccess: true })
            }).catch((error) => {
                console.log(error);
            });

        }
        else {
            alert("Passwords Don't match")
        }
    }

    setUsername = (e) => {
        this.setState({ username: e.target.value })
    }
    setPassword = (e) => {
        this.setState({ password: e.target.value })
    }
    setConfirmPassword = (e) => {
        this.setState({ confirmPassword: e.target.value })
    }

    render() {
        return (
            <div>
                <Link to={""} className="btn text-light" data-toggle="modal" data-target="#form2">
                    <i className="fa fa-user-plus mr-1" aria-hidden='true'></i>Register
                </Link>

                <div className="modal fade" id="form2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header border-bottom-0">
                                <h5 className="modal-title" id="exampleModalLabel">Register New User</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            {this.state.isRegisterSuccess === true ?

                                <div className='modal-body'>
                                    <h5 className='text-success font-weight-bold'>Registration Successful</h5>
                                </div>

                                :

                                <form>
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <label htmlFor="email1">Enter Username</label>
                                            <input type="text" className="form-control" id="email2" aria-describedby="emailHelp" placeholder="Enter Username" onChange={this.setUsername} />
                                            <small id="emailHelp" className="form-text text-muted">Your information is safe with us.</small>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password3">Password</label>
                                            <input type="password" className="form-control" id="password3" placeholder="Password" onChange={this.setPassword} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password2">Confirm Password</label>
                                            <input type="password" className="form-control" id="password2" placeholder="Confirm Password" onChange={this.setConfirmPassword} />
                                        </div>
                                    </div>
                                    <div className="modal-footer border-top-0 d-flex justify-content-center">
                                        <button type="submit" className="btn btn-success" onClick={this.createNewUser}>Register</button>
                                    </div>
                                </form>

                            }
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
