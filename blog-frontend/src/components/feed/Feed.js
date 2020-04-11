import React, { Component } from 'react'
import RenderFeed from './RenderFeed'
import axios from 'axios'

export default class Feed extends Component {

    state = {
        blogs: []
    }

    loadFeed = () => {
        axios.get(`https://bogiebackend.herokuapp.com/users/feed/${this.props.followingArray}`,
        )
            .then((response) => {
                // console.log(response.data);
                if (response.data) {
                    for (let user of response.data) {
                        // console.log(user)
                        this.setState((prev) => { return { blogs: [...prev.blogs, ...user.blogs] } })
                    }
                    let temp = this.state.blogs
                    temp.sort(function (a, b) {
                        var dateA = new Date(a.createdAt), dateB = new Date(b.createdAt)
                        return dateB - dateA //sort by date descending
                    })
                    this.setState({ blogs: temp })
                }
            })
            .catch((error) => {
                console.log(error);
                alert('something went wrong')
            });
    }

    componentDidMount() {
        this.loadFeed()
    }

    render() {
        return (
            <div className='container'>

                {this.state.blogs.length === 0 ?

                    <div>
                        <h3 className='text-center mt-4'>Your Feed is Empty</h3>
                    </div>

                    :

                    <div className='row no-gutters p-3'>
                        {this.state.blogs.map((blog) => {
                            return (
                                <div className="col-sm-12 col-md-12 p-2" key={blog._id}>
                                    <RenderFeed blog={blog}></RenderFeed>
                                </div>)
                        })}

                    </div>
                }

            </div>
        )
    }
}
