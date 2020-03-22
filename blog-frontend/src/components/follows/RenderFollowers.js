import React, { Component } from 'react'
import card1 from '../../assets/home.jpg'
import FollowModal from './../auth/FollowModal'
import UnfollowModal from './../auth/UnfollowModal'

export default class RenderFollowers extends Component {
    render() {
        const followerName = this.props.followerName
        const userFollowing = this.props.userData.following
        return (
            <div class="card">
                <div class="card-body">
                    <div class='row align-items-center'>
                        <div class='col-3'>
                            <img src={card1} className="rounded-circle z-depth-2" data-holder-rendered="true" alt="Cinque Terre" height='100' width='100' />
                        </div>
                        <div class='col-6'>
                            <h4 class="card-text">{followerName}</h4>
                            <p>Web Developer</p>
                        </div>

                        {userFollowing.includes(followerName) ?
                            <div className='col-3 align-self-start'>
                                <UnfollowModal username={this.props.userData.username} otherUser={followerName}></UnfollowModal>
                            </div>
                            :
                            <div className='col-3 align-self-start'>
                                {console.log(this.props.userData.username)}
                                <FollowModal username={this.props.userData.username} otherUser={followerName}></FollowModal>
                            </div>
                        }

                    </div>
                </div>
            </div>
        )
    }
}
