import React, { Component } from 'react'
import card1 from '../../assets/home.jpg'
// import FollowModal from './../auth/FollowModal'
import UnfollowModal from './../auth/UnfollowModal'

export default class RenderFollowing extends Component {
    render() {
        const otherUser = this.props.otherUser
        // const userFollowing = this.props.userData.following
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
                        <div className='col-3 align-self-start'>
                            <UnfollowModal removeFollowing={this.props.removeFollowing} username={this.props.userData.username} otherUser={otherUser}></UnfollowModal>
                        </div>
                        {/* {userFollowing.includes(otherUser) ?
                            
                            :
                            <div className='col-3 align-self-start'>
                                {console.log(this.props.userData.username)}
                                <FollowModal username={this.props.userData.username} otherUser={otherUser}></FollowModal>
                            </div>
                        } */}
                    </div>
                </div>
            </div>
        )
    }
}
