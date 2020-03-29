import React, { Component } from 'react'
import Moment from 'react-moment'
import card1 from '../../assets/home.jpg'
import { Link } from 'react-router-dom'

export default class RenderBlogs extends Component {
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
                                    <p className='card-text p-0 m-0'>{blog.writtenBy}</p>
                                    <p className="card-text p-0 m-0">
                                        <Moment format="DD MMM, YYYY">{blog.createdAt}</Moment>
                                        <span className="text-muted"> (last updated <Moment fromNow ago>{blog.createdAt}</Moment> ago)</span>
                                    </p>
                                    <Link to={`/feed/blog/${blog._id}`}>
                                        <p className='card-text'>Read Full Blog</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
