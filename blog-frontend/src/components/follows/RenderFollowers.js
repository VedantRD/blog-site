import React, { Component } from 'react'
import card1 from '../../assets/home.jpg'
import FollowModal from './../auth/FollowModal'
import UnfollowModal from './../auth/UnfollowModal'
import { Link } from 'react-router-dom'

export default class RenderFollowers extends Component {
    render() {
        const followerName = this.props.followerName
        const userFollowing = this.props.userData.following
        return (
            <div className="card">
                <div className="card-body">
                    <div className='row align-items-center'>
                        <div className='col-3'>
                            <img src={card1} className="rounded-circle z-depth-2" data-holder-rendered="true" alt="Cinque Terre" height='100' width='100' />
                        </div>
                        <div className='col-6'>
                            <Link to={`/others/otherProfile/${followerName}`} className='text-dark'>
                                <h4 className="card-text">{followerName}</h4>
                            </Link>
                            <p>Web Developer</p>
                        </div>

                        {userFollowing.includes(followerName) ?
                            <div className='col-3 align-self-start'>
                                <UnfollowModal username={this.props.userData.username} otherUser={followerName}></UnfollowModal>
                            </div>
                            :
                            <div className='col-3 align-self-start'>
                                <FollowModal addFollower={this.props.addFollower} username={this.props.userData.username} otherUser={followerName}></FollowModal>
                            </div>
                        }

                    </div>
                </div>
            </div>
        )
    }
}
