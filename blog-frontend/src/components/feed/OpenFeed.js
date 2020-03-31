import React, { Component } from 'react'
import Moment from 'react-moment'
import axios from 'axios'
import Comments from '../comments/Comments'

export default class OpenFeed extends Component {

    state = {
        blog: {},
        tags: [],
        likedBlogs: this.props.likedBlogs
    }

    componentDidMount() {
        this.getBlogData()
    }

    getBlogData() {
        const blogId = this.props.match.params.id
        axios.get(`http://localhost:5000/users/blogs/${blogId}/${this.props.username}`)
            .then((response) => {
                this.setState({ blog: response.data.blogs[0] })
                let tags = [...(this.state.blog.tags.split(" "))]
                console.log(tags)
                this.setState({ tags })
                // console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
                alert('something went wrong')
            });
    }

    likeAndUnlikeBlog = (act) => {
        const blogId = this.state.blog._id
        axios.post(`http://localhost:5000/users/blogs/${this.props.username}/${blogId}/${act}`)
            .then((response) => {
                let blog = this.state.blog
                let likedBlogs = this.state.likedBlogs
                if (act === 'Like') {
                    blog.likes += 1
                    likedBlogs.push(blog._id)
                }
                else {
                    blog.likes -= 1
                    likedBlogs = likedBlogs.filter(function (value) { return value !== blog._id; })
                }
                this.setState({ blog, likedBlogs })
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
        const tags = this.state.tags
        const comments = this.state.blog.comments
        let noOfComments = 0
        if (comments) {
            noOfComments = comments.length
        }

        return (
            <div>

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
                            {this.state.blog.tags ?
                                tags.map((tag, ind) => {
                                    return (
                                        <span className="card-text px-3 py-1 text-light mr-2 rounded" style={{ backgroundColor: '#2777c2',fontSize:19 }} key={ind}>{tag}</span>
                                    )
                                })
                                :
                                <span></span>
                            }
                        </div>
                    </div>

                    <div className='card-footer px-5'>
                        <div className='row no-gutters py-0 m-0'>

                            <big className="btn p-0 m-0 text-muted" data-toggle="collapse" data-target="#demo">
                                <span className="btn p-0 m-0 text-muted" data-toggle="collapse" data-target="#demo">
                                    <u className=''>
                                        <span>Comments</span>
                                        <i className="fa fa-chevron-down text-muted ml-2" aria-hidden="true"></i>
                                    </u>
                                </span>
                            </big>

                            <div className='ml-auto mr-4'>
                                {this.state.likedBlogs.includes(this.state.blog._id) ?

                                    <big className='ml-auto text-muted' onClick={() => this.likeAndUnlikeBlog('Unlike')} style={{ cursor: 'pointer' }}>
                                        <i className="fa fa-heart" style={{ color: 'red' }} aria-hidden="true"></i> {this.state.blog.likes}
                                    </big>

                                    :

                                    <big className='ml-auto text-muted' onClick={() => this.likeAndUnlikeBlog('Like')} style={{ cursor: 'pointer' }}>
                                        <i className="fa fa-heart-o" aria-hidden="true"></i> {this.state.blog.likes}
                                    </big>
                                }
                            </div>

                            <big style={{ cursor: 'pointer' }} data-toggle="collapse" data-target="#demo">
                                <i className="fa fa-comment-o text-muted mr-2" aria-hidden="true"></i>
                                <span className='pb-1 text-muted'>{noOfComments}</span>
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
