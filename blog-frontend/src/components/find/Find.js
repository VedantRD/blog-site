import React, { Component } from 'react'
import axios from 'axios'
import RenderBloggers from './RenderBloggers'
import RenderBlogs from './RenderBlogs'

export default class Find extends Component {

    state = {
        searchInput: '',
        blogs: [],
        bloggers: []
    }

    handleChange = (e) => {
        this.setState({ searchInput: e.target.value })
        this.searchData()
        // console.log(this.state.searchInput)
    }

    searchData = () => {
        axios.get(`https://bogiebackend.herokuapp.com/users/find/${this.state.searchInput.trim()}`)
            .then((res) => {
                // console.log(res.data)
                const data = res.data
                let temp = []
                if (data) {
                    if (data.blogs) {
                        data.blogs.map((items) => {
                            return temp = [...temp, ...items.blogs]
                        })
                    }
                    this.setState({ blogs: temp, bloggers: data.users })
                }

            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className='container'>
                <div className='row no-gutters justify-content-lg-end mx-4'>
                    <div className="input-group md-form form-sm form-2 pt-3 col-lg-4">
                        <input autoFocus className="form-control my-0 py-1" type="text" placeholder="Search Here" aria-label="Search" onChange={this.handleChange} />
                        <div className="input-group-append" onClick={this.searchData}>
                            <button className="btn input-group-text lighten-3" id="basic-text1"><i className="fas fa-search text-grey"
                                aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>

                {this.state.searchInput === "" ?
                    <h5 className='text-center mt-5 text-muted'>Searched content will display here</h5>
                    :
                    <div>
                        <div className="row">
                            <div className="col-12">
                                <h4 className='my-4'> Bloggers </h4>
                            </div>

                            {this.state.bloggers ?
                                this.state.bloggers.map((blogger) => {
                                    return (
                                        <div className="col-sm-12 col-md-6 mb-4" key={blogger._id}>
                                            <RenderBloggers username={this.props.username} otherUser={blogger.username} userData={blogger} followingArray={this.props.followingArray} fetchUserData={this.props.fetchUserData}></RenderBloggers>
                                        </div>
                                    )
                                })
                                :
                                <p>Data is Loading</p>
                            }
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <h4 className='my-4'> Blogs related to search </h4>
                            </div>

                            {this.state.blogs ?
                                this.state.blogs.map((blog) => {
                                    return (
                                        <div className="col-sm-12 col-md-6 mb-4" key={blog._id}>
                                            <RenderBlogs blog={blog}></RenderBlogs>
                                        </div>
                                    )
                                })
                                :
                                <p>Data is Loading</p>
                            }
                        </div>
                    </div>
                }

            </div>
        )
    }
}
