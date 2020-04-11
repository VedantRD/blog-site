import React, { Component } from 'react'
import axios from 'axios'
import Moment from 'react-moment'
import Comments from '../comments/Comments'


export class FullBlog extends Component {

    state = {
        blog: {}
    }

    componentDidMount() {
        this.getBlogData()
    }

    getBlogData() {
        // console.log(this.props.match.params.id)
        const blogId = this.props.match.params.id
        axios.get(`https://bogiebackend.herokuapp.com/users/blogs/${blogId}/${this.props.username}`)
            .then((response) => {
                this.setState({ blog: response.data.blogs[0] })
                // console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
                alert('something went wrong')
            });
    }

    render() {

        const created = this.state.blog.createdAt
        const title = this.state.blog.title
        const content = this.state.blog.content
        const tags = this.state.blog.tags

        return (
            <div>

                <div className="row justify-content-end pr-5 mt-3">
                    <button className='btn mr-3 btn-dark px-3'>
                        Edit
                        <i className="fa fa-pencil-square-o ml-2" aria-hidden="true"></i>
                    </button>
                    <button className='btn btn-danger'>
                        Delete
                        <i className="fa fa-eraser ml-2" aria-hidden="true"></i>
                    </button>
                </div>

                <div className='card mx-4 mt-3 rounded' style={{ borderWidth: 2, borderRadius: 35 }}>

                    {<div className="card-header">
                        <div className='row justify-content-between px-5'>
                            <h1 className="card-title text-capitalize">{title}</h1>
                        </div>
                    </div>}

                    <div className="card-body px-5">
                        <div className="row mt-3 pl-3 align-items-baseline">
                            <p className='blockquote'>
                                <Moment format="DD MMM, YYYY">
                                    {created}
                                </Moment>
                                <span className='align-items-baseline text-muted'> (last updated <Moment fromNow ago>{created}</Moment> ago)</span>
                            </p>
                        </div>

                        <p className="card-text mt-4" style={{ fontSize: 20 }}>
                            {content}
                        </p>

                        <div className="row mt-5 ml-1">
                            <span className="card-text px-2 py-1 text-light mr-2 rounded" style={{ backgroundColor: '#2777c2' }}>{tags}</span>
                            <span className="card-text px-2 py-1 text-light mr-2 rounded" style={{ backgroundColor: '#2777c2' }}>{tags}</span>
                            <span className="card-text px-2 py-1 text-light mr-2 rounded" style={{ backgroundColor: '#2777c2' }}>{tags}</span>
                        </div>

                    </div>

                    <div className='card-footer px-5'>
                        <div className='row no-gutters py-0 m-0'>
                            <div>
                                <i className="fa fa-comment-o text-muted mr-2" aria-hidden="true"></i>
                                <span className="btn p-0 m-0 text-muted" data-toggle="collapse" data-target="#demo">
                                    <u>Read </u>
                                </span>
                            </div>
                            <big className='ml-auto'>
                                <i className="fa fa-heart" style={{ color: 'red' }} aria-hidden="true"></i> {this.state.blog.likes}
                            </big>
                        </div>
                        <div id='demo' className='collapse mt-3'>
                            <Comments blogId={this.props.match.params.id} username={this.props.username}></Comments>
                        </div>
                    </div>

                </div>
            </div >
        )
    }
}

export default FullBlog
