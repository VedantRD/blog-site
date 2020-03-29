import React, { Component } from 'react'
import FollowModal from '../auth/FollowModal'
import UnfollowModal from '../auth/UnfollowModal'
import card1 from '../../assets/home.jpg'

export default class RenderBloggers extends Component {
    render() {
        const otherUser = this.props.otherUser
        const userFollowing = this.props.followingArray
        return (
            <div className="card">
                <div className="card-body">
                    <div className='row align-items-center'>
                        <div className='col-3'>
                            <img src={card1} className="rounded-circle z-depth-2" data-holder-rendered="true" alt="Cinque Terre" height='100' width='100' />
                        </div>
                        <div className='col-6'>
                            <h4 className="card-text">{otherUser}</h4>
                            <p>Web Developer</p>
                        </div>
                        {userFollowing.includes(otherUser) ?
                            <div className='col-3 align-self-start'>
                                <UnfollowModal username={this.props.username} otherUser={otherUser} fetchUserData={this.props.fetchUserData}></UnfollowModal>
                            </div>
                            :
                            <div className='col-3 align-self-start'>
                                {console.log(this.props.userData.username)}
                                <FollowModal username={this.props.username} otherUser={otherUser} fetchUserData={this.props.fetchUserData}></FollowModal>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
