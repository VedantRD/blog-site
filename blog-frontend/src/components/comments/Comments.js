import React, { Component } from 'react'
import RenderComments from './RenderComments';
import axios from 'axios'

export default class Comments extends Component {

    state = {
        comments: [],
        newComment: ''
    }

    addNewComment = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:5000/users/blogs/comments/${this.props.blogId}`, {
            username: this.props.username,
            content: this.state.newComment,
            createdAt: new Date()
        })
            .then((response) => {
                // console.log(response);
                let comment = { username: this.props.username, content: this.state.newComment, createdAt: new Date() }
                this.setState({ comments: [comment, ...this.state.comments] })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getComments = () => {
        const blogId = this.props.blogId
        axios.get(`http://localhost:5000/users/blogs/${blogId}/`)
            .then((response) => {
                this.setState({ comments: response.data[0].blogs[0].comments.reverse() })
            })
            .catch((error) => {
                console.log(error);
                alert('something went wrong')
            });
    }

    handleChange = (e) => {
        this.setState({ newComment: e.target.value })
        // console.log(this.state.newComment)
    }

    componentDidMount() {
        if (this.props.blogId) {
            this.getComments()
        }
    }

    render() {
        return (
            <div>
                <div className='mb-3'>
                    <form className='form row no-gutters'>
                        <div className='col-10'>
                            <div className="form-group">
                                <textarea type="text" className="form-control" onChange={this.handleChange} placeholder='Write your comment' />
                            </div>
                        </div>
                        <div className='col-2 align-self-center mb-3 pl-3'>
                            <button type="submit" className="btn btn-dark" onClick={this.addNewComment}>Add Comment</button>
                        </div>
                    </form>
                </div>
                {this.state.comments.length !== 0 ?
                    this.state.comments.map((comment, ind) => {
                        return (
                            <div className='row no-gutters' key={ind}>
                                <div className='col-12'>
                                    <RenderComments comment={comment}></RenderComments>
                                </div>
                            </div>
                        )
                    })
                    :
                    <div className='text-muted'>No Comments Yet</div>
                }
            </div>
        )
    }
}
