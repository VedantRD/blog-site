import React, { Component } from 'react'
import Moment from 'react-moment'
import axios from 'axios'

export default class OpenFeed extends Component {

    state = {
        blog: {},
        likedBlogs: this.props.likedBlogs
    }

    componentDidMount() {
        this.getBlogData()
        // console.log(this.state.blog.title)
    }

    getBlogData() {
        console.log(this.props.match.params.id)
        const blogId = this.props.match.params.id
        // this.setState({ blog })
        // console.log(blog)
        console.log(blogId)
        console.log(blogId)
        axios.get(`http://localhost:5000/users/blogs/${blogId}/${this.props.username}`)
            .then((response) => {
                this.setState({ blog: response.data.blogs[0] })
                console.log(response.data);
                // console.log(blog)
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
                console.log(response.data);
                // console.log(blog)
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

                <div className='card mx-4 mt-3 rounded' style={{ borderWidth: 2, borderRadius: 35 }}>

                    {<div className="card-header">
                        <div className='row justify-content-between px-5'>
                            <h1 className="card-title">{title}</h1>
                        </div>
                    </div>}

                    <div className="card-body px-5">
                        <div className="row mt-3 pl-3 align-items-baseline">
                            {/* <span className='blockquote'>16 Mar, 2020</span> */}
                            <p className='blockquote'>
                                <Moment format="DD MMM, YYYY">
                                    {created}
                                </Moment>
                                <span className='align-items-baseline text-muted'> (last updated <Moment fromNow ago>{created}</Moment> ago)</span>
                            </p>
                            {/* <span className="align-items-center">, (last updated 10 min ago)</span> */}
                        </div>

                        <p className="card-text mt-4" style={{ fontSize: 20 }}>
                            {content}
                        </p>

                        <div className="row mt-5 ml-1">
                            <span className="card-text px-2 py-1 text-light mr-2 rounded" style={{ backgroundColor: '#2777c2' }}>{tags}</span>
                            <span className="card-text px-2 py-1 text-light mr-2 rounded" style={{ backgroundColor: '#2777c2' }}>{tags}</span>
                            <span className="card-text px-2 py-1 text-light mr-2 rounded" style={{ backgroundColor: '#2777c2' }}>{tags}</span>
                        </div>

                        <div className='row justify-content-end px-4 mt-3'>
                            {this.state.likedBlogs.includes(this.state.blog._id) ?
                                <button className='btn button-transparent' onClick={() => this.likeAndUnlikeBlog('Unlike')}>
                                    <p className="card-text " style={{ fontSize: 21 }}>
                                        <i className="fa fa-heart" aria-hidden="true"></i> {this.state.blog.likes}
                                    </p>
                                </button>
                                :

                                <button className='btn button-transparent' onClick={() => this.likeAndUnlikeBlog('Like')}>
                                    <p className="card-text " style={{ fontSize: 21 }}>
                                        <i className="fa fa-heart-o" aria-hidden="true"></i> {this.state.blog.likes}
                                    </p>
                                </button>
                            }
                        </div>

                    </div>
                </div>


            </div >
        )
    }
}
