import React, { Component } from 'react'
import RenderBlogs from './RenderBlogs'
import CreateNewBlog from './CreateNewBlog'
import axios from 'axios'

export class ShowBlogs extends Component {

    getAllBlogs = () => {
        const username = this.props.username
        axios.get(`http://localhost:5000/users/${username}`)
            .then((response) => {
                console.log(response.data);
                this.setState({ blogs: response.data.blogs.reverse() })
            })
            .catch((error) => {
                console.log(error);
                alert('something went wrong')
            });
    }

    componentDidMount() {
        this.getAllBlogs()
    }

    state = {
        blogs: []
    }

    render() {
        return (
            <div>
                <div className='row justify-content-end no-gutters'>
                    <CreateNewBlog username={this.props.username} getAllBlogs={this.getAllBlogs}></CreateNewBlog>
                </div>
                {this.state.blogs ?
                    this.state.blogs.map((ele) => {
                        return <RenderBlogs ele={ele} key={ele.title}></RenderBlogs>
                    }) :
                    <h3>Write Your First Blog</h3>
                }
            </div>
        )
    }
}

export default ShowBlogs
