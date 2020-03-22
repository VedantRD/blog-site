import React, { Component } from 'react'
import axios from 'axios'

export default class ProfileUpdateModal extends Component {

    state = {
        profile: this.props.profile
    }

    updateProfile = (event) => {
        event.preventDefault()
        console.log(this.state.profile)
        axios.post('http://localhost:5000/users/user/profile', {
            username: this.props.username,
            profile: this.state.profile
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }

    handleChange = (e) => {
        let inputName = e.target.name;
        let inputValue = e.target.value;
        let stateCopy = { ...this.state.profile };
        stateCopy[inputName] = inputValue;
        this.setState({ profile: { ...stateCopy } });
    }

    birthDateHandler = (e) => {
        let inputName = e.target.name;
        let inputValue = e.target.value;
        let stateCopy = { ...this.state.profile };
        stateCopy.dateOfBirth[inputName] = inputValue;
        this.setState({ profile: { ...stateCopy } });
    }

    skillSetHandler = (e) => {
        let inputName = e.target.name;
        let inputValue = e.target.value;
        let stateCopy = { ...this.state.profile };
        stateCopy.skills[inputName] = inputValue;
        this.setState({ profile: { ...stateCopy } });
    }

    render() {
        return (
            <div>
                <button className='btn btn-dark mr-3 mt-3 mb-3' data-toggle="modal" data-target="#profileModal">
                    <i className="fa fa-plus pr-2" aria-hidden="true"></i>
                        Edit Profile
                </button>

                <div className="modal fade" id="profileModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content p-2">

                            <div className="modal-header border-bottom-0">
                                <h5 className="modal-title" id="exampleModalLabel">Edit Profile</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            {/* ============================ Start of form ============================== */}
                            <form onSubmit={this.updateProfile}>
                                <div className='modal-body'>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputEmail4">Fullname</label>
                                            <input type="text" className="form-control" name='fullname' value={this.state.profile.fullname} onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <div className='form-row'>
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="inputPassword4">Date</label>
                                                    <input type='number' className="form-control" value={this.state.profile.dateOfBirth.dob} name='dob' onChange={this.birthDateHandler} />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="inputPassword4">Month</label>
                                                    <input type='number' className="form-control" value={this.state.profile.dateOfBirth.mob} name='mob' onChange={this.birthDateHandler} />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="inputPassword4">Year</label>
                                                    <input type='number' className="form-control" value={this.state.profile.dateOfBirth.yob} name='yob' onChange={this.birthDateHandler} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputCity">Profession</label>
                                            <input type="text" className="form-control" value={this.state.profile.profession} name='profession' onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="inputState">Currently In</label>
                                            <select className="form-control" name='currentlyLivingIn' value={this.state.profile.currentlyLivingIn} onChange={this.handleChange}>
                                                <option>India</option>
                                                <option>Israel</option>
                                                <option>USA</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-2">
                                            <label htmlFor="inputZip">Gender</label>
                                            <select className='form-control' name='gender' value={this.state.profile.gender} onChange={this.handleChange}>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='form-row'>
                                        <div className="form-group col-md-3">
                                            <label htmlFor="inputAddress2">Skill 1</label>
                                            <input type="text" className="form-control" name='skill1' value={this.state.profile.skills.skill1} onChange={this.skillSetHandler} />
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label htmlFor="inputAddress2">Skill 2</label>
                                            <input type="text" className="form-control" name='skill2' value={this.state.profile.skills.skill2} onChange={this.skillSetHandler} />
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label htmlFor="inputAddress2">Skill 3</label>
                                            <input type="text" className="form-control" name='skill3' value={this.state.profile.skills.skill3} onChange={this.skillSetHandler} />
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label htmlFor="inputAddress2">Skill 4</label>
                                            <input type="text" className="form-control" name='skill4' value={this.state.profile.skills.skill4} onChange={this.skillSetHandler} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputAddress">Bio</label>
                                        <textarea className="form-control" name='bio' value={this.state.profile.bio} onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputAddress">Hobbies</label>
                                        <textarea className="form-control" name='hobbies' value={this.state.profile.hobbies} onChange={this.handleChange} />
                                    </div>
                                    <button type="submit" className="btn btn-success" onClick={this.props.renderAfterUpdate} data-dismiss='modal'>Update</button>
                                </div>
                            </form>
                            {/*  =========================== End of Form =================================*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
