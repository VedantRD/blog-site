import React, { Component } from 'react'

export default class Test extends Component {
    render() {
        return (
            <div>
                <form>
                    <div className='modal-body'>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4" style={{ textAlign: 'left !important' }}>Fullname</label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder='Firstname Lastname' />
                            </div>
                            <div className="form-group col-md-6">
                                <div className='form-row'>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="inputPassword4">Date</label>
                                        <input type="password" className="form-control" id="inputPassword4" placeholder='DD' />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="inputPassword4">Month</label>
                                        <input type="password" className="form-control" id="inputPassword4" placeholder='MM' />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="inputPassword4">Year</label>
                                        <input type="password" className="form-control" id="inputPassword4" placeholder='YYYY' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Bio</label>
                            <textarea className="form-control" id="inputAddress" placeholder="Describe Yourself" />
                        </div>
                        <div className='form-row'>
                            <div className="form-group col-md-3">
                                <label htmlFor="inputAddress2">Skill 1</label>
                                <input type="text" className="form-control" id="inputAddress2" placeholder='e.g. Node JS' />
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="inputAddress2">Skill 2</label>
                                <input type="text" className="form-control" id="inputAddress2" placeholder='e.g. Cricket' />
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="inputAddress2">Skill 3</label>
                                <input type="text" className="form-control" id="inputAddress2" />
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="inputAddress2">Skill 4</label>
                                <input type="text" className="form-control" id="inputAddress2" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Hobbies</label>
                            <input type='text' className="form-control" id="inputAddress" placeholder="Things that you like to do..." />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputCity">Profession</label>
                                <input type="text" className="form-control" id="inputCity" placeholder='e.g. Web Developer' />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputState">Currently In</label>
                                <select id="inputState" className="form-control">
                                    <option selected>India...</option>
                                    <option>Israel</option>
                                    <option>USA</option>
                                </select>
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="inputZip">Gender</label>
                                <input type="text" className="form-control" id="inputZip" placeholder='Male' />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                </form>
            </div>
        )
    }
}
