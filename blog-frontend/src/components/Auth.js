import React, { Component } from 'react'
import axios from 'axios'

class Auth extends Component {

    state = {
        username: '',
        password: ''
    }

    createNewUser = () => {
        axios.post('http://localhost:5000/users/', {
            username: this.state.username,
            password: this.state.password
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }

    setUsername = (e) => {
        this.setState({ username: e.target.value })
    }
    setPassword = (e) => {
        this.setState({ password: e.target.value })
    }

    render() {
        return (
            <div>
                <h2>Register</h2>
                <form>
                    <input type='text' placeholder='username' onChange={this.setUsername}></input>
                    <input type='text' placeholder='password' onChange={this.setPassword}></input>
                    {/* <input type='text' placeholder='html' onChange={this.setHtml}></input> */}
                    <button onClick={this.createNewUser}>Register</button>
                </form>
            </div>
        )
    }
}

export default Auth
