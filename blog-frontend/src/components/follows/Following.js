import React, { Component } from 'react'
import RenderFollowing from './RenderFollowing'
import axios from 'axios'

export default class Following extends Component {

    state = {
        followingData: null,
        userData: null
    }

    getFollowing = () => {
        const username = this.props.username
        axios.get(`http://localhost:5000/users/${username}`)
            .then((response) => {
                console.log(response.data);
                this.setState({ followingData: response.data.following, userData: response.data })
            })
            .catch((error) => {
                console.log(error);
                alert('something went wrong')
            });
    }

    componentDidMount() {
        this.getFollowing()
    }

    render() {
        return (
            <div className='container'>

                <div class="row">
                    <div class="col-12 text-center">
                        <h2 className='my-4'> You are Following </h2>
                    </div>

                    {this.state.followingData ?
                        this.state.followingData.map((followingName) => {
                            return (<div class="col-sm-12 col-md-6 mb-4">
                                <RenderFollowing otherUser={followingName} userData={this.state.userData}></RenderFollowing>
                            </div>)
                        })
                        :
                        <p>Data is Loading</p>
                    }
                </div>

            </div >
        )
    }
}
