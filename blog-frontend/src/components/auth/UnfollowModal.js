import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class UnfollowModal extends Component {

    unfollowTheUser = (event) => {
        event.preventDefault()
        const username = this.props.username
        const otherUser = this.props.otherUser
        axios.post(`http://localhost:5000/users/unfollow/${username}/${otherUser}`)
            .then((response) => {
                // console.log(response);
                this.props.removeFollowing(otherUser)
            }).catch((error) => {
                console.log(error);
            });
    }

    render() {
        const otherUser = this.props.otherUser
        return (
            <div>
                <Link to={""} className="btn btn-outline-secondary" data-toggle="modal" data-target="#unfollowModal">
                    <span>Unfollow</span>
                </Link>

                <div className="modal fade" id="unfollowModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header border-bottom-0">
                                <h5 className="modal-title" id="exampleModalLabel">Unfollow</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className='modal-body'>
                                <p className="my-3 p-1">Do you want to unfollow {otherUser}?</p>
                                <div className='row justify-content-end mb-2'>
                                    <button className='btn mr-2 btn-outline-dark' data-dismiss="modal">Cancel</button>
                                    <button className='btn btn-success mr-4' data-dismiss="modal" onClick={this.unfollowTheUser}>Unfollow</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
