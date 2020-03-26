import React, { Component } from 'react'
import card1 from '../../assets/home.jpg'


export default class RenderFeed extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="row no-gutters">
                        <div className="col-auto">
                            <img src={card1} className="" width={200} height={200} alt='not found' />
                        </div>
                        <div className="col">
                            <div className="card-block p-3">
                                <h4 className="card-title">Express Journey</h4>
                                <p className="card-text">Description of the blog</p>
                                <button className="btn btn-primary">BUTTON</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
