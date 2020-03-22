import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment';

export class RenderBlogs extends Component {
    render() {
        const item = this.props.ele
        const created = item.createdAt
        return (
            <div>
                <div className='card mx-3 mb-3'>

                    <div className="card-body">
                        <h3 className="card-title">{item.title}</h3>
                        {/* <h6 className="card-subtitle mb-3 text-muted">{item.username}</h6> */}
                        <p className="card-text">
                            <Moment format="DD MMM, YYYY">{created}</Moment>,
                            <span className="text-muted"> (last updated <Moment fromNow ago>{created}</Moment> ago)</span>
                        </p>
                        <p className="card-text">{item.content}......</p>

                        <div className="row justify-content-between px-3 mt-5 align-items-baseline">
                            <p className="px-2 py-1 mr-2 text-light rounded text-center" style={{ backgroundColor: '#2777c2' }}>{item.tags}</p>
                            <Link to={`/blogs/${item._id}`}>
                                <button className='btn btn-outline-primary py-1 mr-2'>
                                    <i className="fa fa-book mr-2" aria-hidden="true"></i>Read Full Blog
                            </button>
                            </Link>
                        </div>

                    </div>

                    <div className='card-footer'>
                        <div className="card-text row justify-content-end mr-3">
                            <div>
                                <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>  {item.likes}
                                <i className="fa fa-thumbs-o-down ml-2" aria-hidden="true"></i>  {item.likes}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default RenderBlogs
