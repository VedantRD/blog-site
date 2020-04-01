import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default class FollowModal extends Component {

    followTheUser = (event) => {
        event.preventDefault()
        const username = this.props.username
        const otherUser = this.props.otherUser
        // console.log(username, otherUser)
        axios.post(`http://localhost:5000/users/follow/${username}/${otherUser}`)
            .then((response) => {
                // console.log(response);
                this.props.fetchUserData()
                // this.props.addFollowing(otherUser)
            }).catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <div>
                    <Link to={""} className="btn btn-info text-light" data-toggle="modal" data-target="#followModal">
                        <span>Follow</span>
                        <i className="fa fa-user-plus ml-2 text-light"></i>
                    </Link>

                    <div className="modal fade" id="followModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header border-bottom-0">
                                    <h5 className="modal-title" id="exampleModalLabel">Follow</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>

                                <div className='modal-body'>
                                    <p className="my-3 p-1">Do you want to follow {this.props.otherUser}?</p>
                                    <div className='row justify-content-end mb-2'>
                                        <button className='btn mr-2 btn-outline-dark' data-dismiss="modal">Cancel</button>
                                        <button className='btn btn-success mr-4' data-dismiss="modal" onClick={this.followTheUser}>Follow</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
