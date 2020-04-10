import React, { Component } from 'react'
import axios from 'axios'
import RenderActivity from './RenderActivity';

export default class Activity extends Component {

    state = {
        activity: []
    }

    getActivity = () => {
        axios.get(`http://localhost:5000/users/${this.props.username}`)
            .then((response) => {
                // console.log(response)
                this.setState({ activity: response.data.activity.reverse() })

            }).catch((error) => {
                console.log(error);
            });
    }

    componentDidMount() {
        this.getActivity()
        // console.log(this.state.activity)
    }

    render() {
        return (
            <div className='container my-5 border'>
                {this.state.activity ?
                    <div className='row'>
                        {this.state.activity.map((act) => {
                            return (
                                <div className='col-12 border-bottom' key={act._id}>
                                    <RenderActivity act={act}></RenderActivity>
                                </div>
                            )
                        })}
                    </div>
                    :
                    <div>
                        <h4 className='center'>You have no recent activity</h4>
                    </div>
                }

            </div>
        )
    }
}
