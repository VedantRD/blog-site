import React, { Component } from 'react'
import card1 from '../../assets/home.jpg'
import { Link } from 'react-router-dom'
import Moment from 'react-moment';

export class RenderBlogs extends Component {
    render() {
        const blog = this.props.blog
        return (
            // <div>
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-auto">
                        <img src={card1} className="" width={200} height={200} alt='not found' />
                    </div>
                    <div className="col">
                        <div className="card-block">
                            <div className='card-body'>
                                <h4 className="card-title pb-1 mb-0 text-capitalize">{blog.title}</h4>
                                <Link to={`/others/otherProfile/${blog.writtenBy}`}>
                                    <u className='text-muted mt-0 card-subtitle'>{blog.writtenBy}</u>
                                </Link>
                                <p className="card-text mt-2">
                                    <Moment format="DD MMM, YYYY">{blog.createdAt}</Moment>
                                    <span className="text-muted"> ( <Moment fromNow ago>{blog.createdAt}</Moment> ago )</span>
                                </p>
                                <div className='row no-gutters'>
                                    <Link to={`/feed/blog/${blog._id}`} className='ml-auto mr-3'>
                                        <span className='card-text text-muted'>Read Full Blog</span>
                                        <i className="fa fa-chevron-right text-muted ml-2" aria-hidden="true"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className='row no-gutters card-footer py-1 px-4'>
                                <div className='text-muted'>
                                    <i className="fa fa-heart-o mr-2" aria-hidden="true"></i>
                                    <span>{blog.likes}</span>
                                </div>
                                <div className='ml-4 text-muted'>
                                    <i className="fa fa-comment-o text-muted mr-2" aria-hidden="true"></i>
                                    <span className=''>{blog.comments.length}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            // </div>
        )
    }
}

export default RenderBlogs
