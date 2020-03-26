import React, { Component } from 'react'
import RenderFeed from './RenderFeed'
import axios from 'axios'
var qs = require('qs')

export default class Feed extends Component {

    state = {
        blogs: []
    }

    loadFeed = () => {
        // const username = this.props.username
        axios.get(`http://localhost:5000/users/feed/${this.props.followingArray}`,
        )
            .then((response) => {
                console.log(response.data);
                for (let user of response.data) {
                    // console.log(user)
                    this.setState((prev) => { return { blogs: [...prev.blogs, ...user.blogs] } })
                }
                console.log(this.state.blogs)
            })
            .catch((error) => {
                console.log(error);
                alert('something went wrong')
            });
    }

    componentDidMount() {
        this.loadFeed()
        console.log(this.props.followingArray)
    }

    render() {
        return (
            <div>

                {this.state.blogs != null ?

                    <div className='row no-gutters p-3'>
                        {this.state.blogs.map((blog) => {
                            return (
                                <div className="col-sm-12 col-md-4 mb-4 p-3" key={blog._id}>
                                    <RenderFeed></RenderFeed>
                                </div>)
                        })}

                    </div>
                    :

                    <div>
                        <h3 className='text-center pt-3'>Loading Feed Content</h3>
                    </div>
                }

            </div>
        )
    }
}
