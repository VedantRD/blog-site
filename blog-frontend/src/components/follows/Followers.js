import React, { Component } from 'react'
import axios from 'axios'
import RenderFollowers from './RenderFollowers'

export default class Followers extends Component {

    state = {
        userData: null,
        followersData: null
    }

    getFollowers = () => {
        const username = this.props.username
        axios.get(`http://localhost:5000/users/${username}`)
            .then((response) => {
                console.log(response.data);
                this.setState({ userData: response.data, followersData: response.data.followers })
            })
            .catch((error) => {
                console.log(error);
                alert('something went wrong')
            });
    }

    addFollower = (otherUser) => {
        let userData = this.state.userData
        userData.following = [...this.state.userData.following, otherUser]
        this.setState({ userData })
    }

    componentDidMount() {
        this.getFollowers()
    }

    render() {
        return (
            <div className='container'>

                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className='my-4'> Your Followers </h2>
                    </div>

                    {this.state.followersData ?
                        this.state.followersData.map((follower) => {
                            return (
                                <div className="col-sm-12 col-md-6 mb-4" key={follower}>
                                    <RenderFollowers addFollower={this.addFollower} followerName={follower} userData={this.state.userData}>
                                    </RenderFollowers>
                                </div>
                            )
                        })
                        :
                        <p>Data is Loading</p>
                    }
                </div>

            </div >
        )
    }
}
