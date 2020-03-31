import React, { Component } from 'react'
import axios from 'axios'

export default class createNewBlog extends Component {

    state = {
        title: '',
        tags: '',
        content: '',
        isCreateBlogSuccess: false
    }

    setTitle = (e) => {
        this.setState({ title: e.target.value })
    }
    setTags = (e) => {
        this.setState({ tags: e.target.value })
    }
    setContent = (e) => {
        this.setState({ content: e.target.value })
    }

    postNewBlog = (event) => {
        event.preventDefault()
        axios.post('http://localhost:5000/users/blogs', {
            title: this.state.title,
            content: this.state.content,
            tags: this.state.tags,
            createdAt: new Date(),
            username: this.props.username
        }).then((response) => {
            // console.log(response);
            this.setState({ isCreateBlogSuccess: true })
            this.props.getAllBlogs()
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                {/* ========================= Login Modal =========================== */}
                <button className='btn btn-dark mr-3 mt-3 mb-3' data-toggle="modal" data-target="#blogModal">
                    <i className="fa fa-plus pr-2" aria-hidden="true"></i>
                        Create New Blog
                </button>

                <div className="modal fade" id="blogModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header border-bottom-0">
                                <h5 className="modal-title" id="exampleModalLabel">Create New Blog</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            {this.state.isCreateBlogSuccess ?

                                <div className='modal-body'>
                                    <h5 className='text-success font-weight-bold'>Blog Successfully Created!</h5>
                                </div>

                                :

                                <form>
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <label>Blog Title</label>
                                            <input className="form-control" placeholder="Write Here" onChange={this.setTitle} />
                                        </div>
                                        <div className="form-group">
                                            <label>Blog Content</label>
                                            <textarea rows={4} className="form-control" placeholder="Describe Here" onChange={this.setContent} />
                                        </div>
                                        <div className="form-group">
                                            <label>Write Tags</label>
                                            <input type='text' className="form-control" placeholder='tags' onChange={this.setTags}></input><br /><br />
                                        </div>
                                    </div>
                                    <div className="modal-footer border-top-0 d-flex justify-content-center">
                                        <button className="btn btn-success" onClick={this.postNewBlog}>Create</button>
                                    </div>
                                </form>

                            }
                        </div>
                    </div>
                </div>
                {/* ================= Login Modal End ====================== */}
            </div>
        )
    }
}
