import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RegisterModal from './auth/RegisterModal'
import LoginModal from './auth/LoginModal'
import Logout from './auth/Logout'

export default class Navbar extends Component {

    state = {
        isLoggedIn: this.props.isLoggedIn
    }

    changeUserStatus = (userStatus) => {
        if (this.props.isLoggedIn) {
            this.setState({ isLoggedIn: userStatus })
        }
    }

    loggedOut = () => {
        this.setState({ isLoggedIn: false })
        console.log('logout from navbar')
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark pl-5">
                    <a className="navbar-brand text-light font-weight-bold" href="#one" style={{ fontFamily: 'arial' }}>VD-Blogs</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav mt-2 mt-lg-0 ml-auto">
                            <li className="nav-item active">
                                <Link to={'/'} className="nav-link text-light mx-1" href="#one">
                                    <i className="fa fa-home pr-2"></i>
                                    Home
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link to={'/feed'} className="nav-link text-light mx-1" href="#one">
                                    <i className="fa fa-home pr-2"></i>
                                    Feed
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link to={'/blogs'} className="nav-link text-light mx-1" href="#one">
                                    <i className="fa fa-file-text-o pr-2"></i>
                                    My Blogs
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/profile'} className="nav-link text-light mx-1">
                                    <i className="fa fa-user pr-2"></i>
                                    Profile
                                </Link>
                            </li>
                            {this.state.isLoggedIn === true ?
                                <Logout logoutUser={this.props.logoutUser} username={this.props.username} loggedOut={this.loggedOut}></Logout>
                                :
                                <span>
                                    <li className="nav-item">
                                        <LoginModal setUser={this.props.setUser} changeUserStatus={this.changeUserStatus}></LoginModal>
                                    </li>
                                </span>
                            }
                            {this.state.isLoggedIn === false ?
                                <li className="nav-item">
                                    <RegisterModal></RegisterModal>
                                </li> :
                                <span></span>
                            }
                        </ul>
                    </div>

                </nav>
            </div>
        )
    }
}
