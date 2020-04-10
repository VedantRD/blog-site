import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons';
import card1 from '../../assets/home.jpg'
import axios from 'axios'
import Moment from 'react-moment'
import UnfollowModal from '../auth/UnfollowModal';
import FollowModal from '../auth/FollowModal';

export default class OthersProfile extends Component {

    state = {
        userData: null,
        rerender: '',
        followingArray: [],
        age: 0
    }

    getUserData = () => {
        const username = this.props.match.params.otherUser
        axios.get(`http://localhost:5000/users/${username}`)
            .then((response) => {
                // console.log(response.data);
                this.setState({ userData: response.data })
                // this.forceUpdate()
            })
            .catch((error) => {
                console.log(error);
                alert('something went wrong')
            });
    }

    calculateAge = () => {
        const age = 2020 - parseInt(this.state.userData.profile.dateOfBirth.yob)
        this.setState({ age })
    }

    removeFollowing = (otherUser) => {
        let tempArray = this.state.followingArray
        var filtered = tempArray.filter(function (value) { return value !== otherUser; })
        this.setState({ followingArray: filtered })
    }

    addFollowing = (otherUser) => {
        let followingArray = this.state.followingArray
        followingArray = [...followingArray, otherUser]
        this.setState({ followingArray })
    }

    componentDidMount() {
        this.getUserData()
        if (this.state.followingArray.length === 0) {
            this.setState({ followingArray: this.props.followingArray })
        }
    }

    render() {
        const user = this.state.userData
        return (
            this.state.userData ?
                <div className='card mx-5 mt-5 mb-3'>

                    <div className="card-header">

                        <div className='row align-items-center my-2'>
                            <div className='col-lg-2 col-sm-12 pl-5 profilepic'>
                                <img src={card1} className="rounded-circle z-depth-2" data-holder-rendered="true" alt="Cinque Terre" height='150' width='150' />
                            </div>
                            <div className='col-lg-8 col-md-4 profileusername'>
                                <h3 className="card-title my-0 d-inline">
                                    {user.username}
                                    {user.isVerified ?
                                        <small className='ml-2'>
                                            <i className="fa fa-check-circle" aria-hidden="true" style={{ color: '#2e85e8' }}></i>
                                        </small>
                                        :
                                        <span></span>
                                    }
                                </h3>
                                <p className="mb-3">
                                    <i className="fa fa-map-marker mr-2" style={{ color: 'red' }}></i>
                                    {user.profile.currentlyLivingIn}
                                </p>
                                <p className='card-text'><span className='font-weight-bold'>Profession : </span>
                                    {user.profile.profession}
                                </p>
                                <div className="row no-gutters align-items-center">
                                    <p className='font-weight-bold mr-2'>Skills : </p>
                                    <p className="badge bg-info mr-2 px-3 text-light py-2" style={{ fontSize: 15 }}>{user.profile.skills.skill1}</p>
                                    <p className="badge bg-info mr-2 px-3 text-light py-2" style={{ fontSize: 15 }}>{user.profile.skills.skill2}</p>
                                    <p className="badge bg-info mr-2 px-3 text-light py-2" style={{ fontSize: 15 }}>{user.profile.skills.skill3}</p>
                                    <p className="badge bg-info mr-2 px-3 text-light py-2" style={{ fontSize: 15 }}>{user.profile.skills.skill4}</p>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-0 align-self-start pl-5 pt-3'>
                                {this.props.username !== user.username ?
                                    this.state.followingArray.includes(user.username) ?
                                        <UnfollowModal removeFollowing={this.removeFollowing} username={this.props.username} otherUser={user.username} fetchUserData={this.props.fetchUserData}></UnfollowModal>
                                        :
                                        <FollowModal addFollowing={this.addFollowing} username={this.props.username} otherUser={user.username} fetchUserData={this.props.fetchUserData}></FollowModal>
                                    :
                                    <span></span>
                                }
                            </div>
                        </div>
                        <hr className=''></hr>

                        <div className='row no-gutters justify-content-sm-center justify-content-lg-end text-center mx-0 px-0 align-items-center'>
                            <div className='col-lg-8'>
                                <div className='row justify-content-end no-gutters'>
                                    <div className='col-lg-2 col-sm-4'>
                                        <h5 className="font-weight-bold mb-0 d-block">{user.blogs.length}</h5>
                                        <p className="text-muted"> <i className="fa fa-picture-o mr-1"></i>Blogs</p>
                                    </div>
                                    <div className='col-lg-2 col-sm-4'>
                                        <h5 className="font-weight-bold mb-0 d-block text-dark">{user.followers.length}</h5>
                                        <p className="text-muted"> <i className="fa fa-user-circle-o mr-1"></i>Followers</p>
                                    </div>
                                    <div className='col-lg-2 col-sm-4'>
                                        <h5 className="font-weight-bold mb-0 d-block text-dark">{user.following.length}</h5>
                                        <p className="text-muted"> <i className="fa fa-user-circle-o mr-1"></i>Following</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div> {/* End of card Header */}

                    <div className='card-body'>
                        <div className="row">

                            <div className='col-lg-6 mobile-space'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div>
                                            <h5 className='card-title'>Bio : </h5>
                                            <p className='card-text'>{user.profile.bio}</p>
                                            <h5 className='card-title'>Hobbies : </h5>
                                            <p className='card-text'>{user.profile.hobbies}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-6'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div>
                                            <h5 className='card-title mb-4'>Personal Info</h5>
                                            <p className='card-text'>Fullname : {user.profile.fullname}</p>
                                            <p className='card-text'>Joined :
                                                <Moment format="DD MMM, YYYY"> {user.profile.joinedAt}</Moment>
                                            </p>
                                            <p className='card-text'>Age : {this.state.age}</p>
                                            <p className='card-text'>Gender : {user.profile.gender}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div> {/* End of card Body */}

                    <div className='card-footer'>
                        <div className='row justify-content-end pt-1 pr-3 align-items-center'>
                            <span className='mr-3'>Follow On :</span>
                            <SocialIcon className='mr-2' url="https://facebook.com/jaketrent" style={{ height: 30, width: 30 }} />
                            <SocialIcon className='mr-2' url="https://twitter.com/jaketrent" style={{ height: 30, width: 30 }} />
                            <SocialIcon className='mr-2' url="https://github.com/jaketrent" style={{ height: 30, width: 30 }} />
                            <SocialIcon className='mr-2' url="https://reddit.com/jaketrent" style={{ height: 30, width: 30 }} />
                            <SocialIcon className='mr-2' url="https://tumblr.com/jaketrent" style={{ height: 30, width: 30 }} />
                        </div>
                    </div>

                </div>
                :
                <h3>Data is loading</h3>
            // </div>
        )
    }
}
