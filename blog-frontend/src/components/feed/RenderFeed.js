import React, { Component } from 'react'
import Moment from 'react-moment';
import card1 from '../../assets/home.jpg'
import { Link } from 'react-router-dom';


export default class RenderFeed extends Component {
    render() {
        const blog = this.props.blog
        return (
            <div>
                <div className="card">
                    <div className="row no-gutters">
                        <div className="col-auto">
                            <img src={card1} className="" width={200} height={200} alt='not found' />
                        </div>
                        <div className="col">
                            <div className="card-block">
                                <div className='card-body'>
                                    <h4 className="card-title mb-3">{blog.title}</h4>
                                    <Link to={`/others/profile/${blog.writtenBy}`}>
                                        <p className='text-muted card-subtitle'>{blog.writtenBy}</p>
                                    </Link>
                                    <p className="card-text">
                                        <Moment format="DD MMM, YYYY">{blog.createdAt}</Moment>
                                        <span className="text-muted"> ( <Moment fromNow ago>{blog.createdAt}</Moment> ago )</span>
                                    </p>
                                    <div className='row no-gutters'>
                                        <Link to={`/feed/blog/${blog._id}`} className='ml-auto mr-3'>
                                            <u><p className='card-text'>Read Full Blog</p></u>
                                        </Link>
                                    </div>
                                </div>
                                <div className='row no-gutters card-footer py-1 px-4'>
                                    <div className='text-muted'>
                                        {/* <span></span> */}
                                        <span className=''>7 <u>Comments</u></span>
                                    </div>
                                    <div className='ml-auto'>
                                        <i className="fa fa-heart" aria-hidden="true"></i>
                                        <span> 40</span>
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
