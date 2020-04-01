import React, { Component } from 'react'
import card1 from '../../assets/home.jpg'
import { Link } from 'react-router-dom'

export default class RenderFollowing extends Component {
    render() {
        const otherUser = this.props.otherUser
        return (
            <div className="card">
                <div className="card-body">
                    <div className='row align-items-center'>
                        <div className='col-3'>
                            <img src={card1} className="rounded-circle z-depth-2" data-holder-rendered="true" alt="Cinque Terre" height='100' width='100' />
                        </div>
                        <div className='col-6'>
                            <Link to={`/others/otherProfile/${otherUser}`} className='text-dark'>
                                <h4 className="card-text">{otherUser}</h4>
                            </Link>
                            <p>Web Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
