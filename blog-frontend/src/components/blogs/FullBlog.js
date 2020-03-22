import React, { Component } from 'react'
import axios from 'axios'
import Moment from 'react-moment'


export class FullBlog extends Component {

    state = {
        blog: {}
    }

    componentDidMount() {
        this.getBlogData()
        // console.log(this.state.blog.title)
    }

    componentDidUpdate() {
        // console.log(this.state.blog.title)
    }

    getBlogData() {
        // console.log(this.props.match.params.id)
        const blogId = this.props.match.params.id
        // console.log(blogId)
        console.log(blogId)
        axios.get(`http://localhost:5000/users/blogs/${blogId}/${this.props.username}`)
            .then((response) => {
                this.setState({ blog: response.data.blogs[0] })
                // console.log(response.data);
                // console.log(blog)
            })
            .catch((error) => {
                console.log(error);
                alert('something went wrong')
            });
        // { console.log(blog.data) }
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
                            <p className="card-text " style={{ fontSize: 21 }}><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 14</p>
                            <p className="card-text ml-2" style={{ fontSize: 21 }}><i className="fa fa-thumbs-o-down" aria-hidden="true"></i> 2</p>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default FullBlog
