import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import $ from 'jquery'

export default class RegisterModal extends Component {

    state = {
        username: '',
        password: '',
        confirmPassword: '',
        isRegisterSuccess: false
    }

    createNewUser = (event) => {
        event.preventDefault();

        if (this.state.password.length < 8) {
            alert('Password must be minimum 8 characters long');
            return
        }

        axios.get(`http://localhost:5000/users/${this.state.username.trim().toLowerCase()}`)
            .then((response) => {
                if (response.data) {
                    alert('This username is already taken!')
                    return
                }

            }).catch((error) => {
                console.log(error);
            });

        if (this.state.password === this.state.confirmPassword) {

            axios.post('http://localhost:5000/users', {
                username: this.state.username.trim().toLowerCase(),
                password: this.state.password.trim()
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

    componentDidMount() {
        $('#form2').on('shown.bs.modal', function () {
            $('#usernameReg').focus();
        })
    }

    render() {
        return (
            <div>
                <Link to={""} className="btn text-light" data-toggle="modal" data-target="#form2">
                    <i className="fa fa-user-plus mr-2" aria-hidden='true'></i>Register
                </Link>

                <div className="modal fade" id="form2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content p-2">
                            <div className="modal-header border-bottom-0">
                                <h4 className="modal-title" id="exampleModalLabel">Register</h4>
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
                                            <input type="text" autoFocus className="form-control" id="usernameReg" aria-describedby="emailHelp" placeholder="Enter Username" onChange={this.setUsername} />
                                            <small className="form-text text-muted">Your information is safe with us.</small>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password3">Password</label>
                                            <input type="password" className="form-control" id="password3" placeholder="Password" onChange={this.setPassword} minLength={8} />
                                            <small className="form-text text-muted">minimum 8 characters</small>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password2">Confirm Password</label>
                                            <input type="password" className="form-control" id="password2" placeholder="Confirm Password" onChange={this.setConfirmPassword} minLength={8} />
                                        </div>
                                    </div>
                                    <div className="modal-footer border-top-0 d-flex justify-content-end">
                                        <button className='btn mr-2 btn-outline-secondary px-3' data-dismiss="modal">Cancel</button>
                                        <button type="submit" className="btn btn-success px-3" onClick={this.createNewUser}>Register</button>
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
