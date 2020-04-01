import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import $ from 'jquery'

export default class LoginModal extends Component {

    state = {
        username: '',
        password: '',
        modalStatus: false
    }

    setUsername = (e) => {
        this.setState({ username: e.target.value })
    }
    setPassword = (e) => {
        this.setState({ password: e.target.value })
    }

    UserAuth = (event) => {
        event.preventDefault();
        const username = this.state.username.toLowerCase()
        const password = this.state.password
        axios.get(`http://localhost:5000/user/${username}/${password}`)
            .then((response) => {
                if (response.data) {
                    this.setState({ modalStatus: true })
                    this.props.setUser(true, response.data)
                }
                else {
                    alert('invalid username or password')
                }
            })
            .catch((error) => {
                console.log(error);
                this.forceUpdate()
                alert('something went wrong')
            });
    }

    componentDidMount(){
        $('#loginModal').on('shown.bs.modal', function () {
            $('#usernameLog').focus();
        })
    }

    render() {
        return (
            <div>

                {/* ========================= Login Modal =========================== */}
                <Link to={""} className="btn text-light" data-toggle="modal" data-target="#loginModal">
                    <i className="fa fa-sign-in mr-2"></i>Login
                </Link>

                <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header border-bottom-0">
                                <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.props.changeUserStatus(true)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            {this.state.modalStatus === true ?
                                <div className='modal-body'>
                                    <h5 className='text-success font-weight-bold'>Login Successful</h5>
                                </div>
                                :
                                <form>
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <label htmlFor="email1">Username</label>
                                            <input className="form-control" id='usernameLog' placeholder="Enter Username" onChange={this.setUsername} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password1">Password</label>
                                            <input type="password" className="form-control" placeholder="Enter Password" onChange={this.setPassword} />
                                        </div>
                                    </div>
                                    <div className="modal-footer border-top-0 d-flex justify-content-center">
                                        <button className="btn btn-success" onClick={this.UserAuth}>Login</button>
                                    </div>
                                </form>
                            }
                        </div>
                    </div>
                </div>
                {/* ================= Login Modal End ====================== */}

            </div>
        )
    }
}
