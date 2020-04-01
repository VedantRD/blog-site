import React, { Component } from 'react'
import Moment from 'react-moment'

export default class RenderActivity extends Component {
    render() {
        const act = this.props.act
        return (
            <div className='card px-3 border-0'>
                <div className='card-body'>
                    <div className='row'>
                        <span className='card-text'>
                            {act.content}
                        </span>
                        <span className='ml-auto'>
                            <Moment format="DD MMM, YYYY">
                                {act.createdAt}
                            </Moment>
                            <span className='align-items-baseline text-muted'> (<Moment fromNow ago>{act.createdAt}</Moment> ago)</span>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
