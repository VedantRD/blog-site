import React, { Component } from 'react'
import Moment from 'react-moment'

export default class RenderComments extends Component {
    render() {
        const comment = this.props.comment
        return (
            <div className='card'>
                <div className='card-body'>
                    <div className='row no-gutters'>
                        <h5 className='card-title'>{comment.username}</h5>
                        <p className='card-text text-muted ml-auto mr-1'>
                            <Moment format="DD MMM, YYYY">
                                {comment.createdAt}
                            </Moment>
                            <span className='align-items-baseline text-muted'> (<Moment fromNow ago>{comment.createdAt}</Moment> ago)</span>
                        </p>
                    </div>
                    <p className='card-text'>{comment.content}</p>
                </div>
            </div>
        )
    }
}
