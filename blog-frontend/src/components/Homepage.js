import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
// import ShowBlogs from './ShowBlogs'
import {
    Button
} from 'reactstrap'

export class Homepage extends Component {

    state = {
        title: '',
        tags: [],
        content: '',
        // html: ''
    }

    setTitle = (e) => {
        this.setState({ title: e.target.value })
    }
    setTags = (e) => {
        this.setState({ tags: e.target.value })
    }
    // setHtml = (e) => {
    //     this.setState({ html: e.target.value })
    // }
    setContent = (e) => {
        this.setState({ content: e.target.value })
    }

    postNewBlog = () => {
        console.log(this.state.title)
        console.log(this.state.tags)
        console.log(this.state.html)
        axios.post('http://localhost:5000/users/blogs', {
            title: this.state.title,
            content: this.state.content,
            tags: this.state.tags,
            createdAt: new Date(),
            // html: this.state.html
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <div style={{ margin: 10, marginLeft: 660 }}>
                    <h1>This is Home Page</h1>
                    <Link to='/blogs'>
                        {/* <button>Go to posts</button> */}
                        <Button color="primary">See Blogs</Button>
                    </Link>
                    <h3>Add new blog </h3>
                    <form>
                        <input type='text' placeholder='title' onChange={this.setTitle}></input><br /><br />
                        <textarea placeholder='content' onChange={this.setContent} style={{ height: 100, width: 400 }}></textarea><br /><br />
                        <input type='text' placeholder='tags' onChange={this.setTags}></input><br /><br />
                        {/* <input type='text' placeholder='html' onChange={this.setHtml}></input><br /><br /> */}
                        <button onClick={this.postNewBlog}>Post</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Homepage 
