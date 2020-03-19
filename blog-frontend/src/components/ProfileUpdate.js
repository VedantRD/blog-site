import React, { Component } from 'react'

export default class ProfileUpdate extends Component {
    render() {
        return (
            <div className='row no-gutters'>
                <div className='col-6'>
                    <div className='card m-4'>
                        <div className='card-body'>
                            <form>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputEmail4">Fullname</label>
                                        <input type="email" class="form-control" id="inputEmail4" placeholder='Firstname Lastname' />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <div className='form-row'>
                                            <div class="form-group col-md-4">
                                                <label for="inputPassword4">Date</label>
                                                <input type="password" class="form-control" id="inputPassword4" placeholder='DD' />
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="inputPassword4">Month</label>
                                                <input type="password" class="form-control" id="inputPassword4" placeholder='MM' />
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="inputPassword4">Year</label>
                                                <input type="password" class="form-control" id="inputPassword4" placeholder='YYYY' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputAddress">Bio</label>
                                    <textarea class="form-control" id="inputAddress" placeholder="Describe Yourself" />
                                </div>
                                <div class='form-row'>
                                    <div class="form-group col-md-3">
                                        <label for="inputAddress2">Skill 1</label>
                                        <input type="text" class="form-control" id="inputAddress2" placeholder='e.g. Node JS' />
                                    </div>
                                    <div class="form-group col-md-3">
                                        <label for="inputAddress2">Skill 2</label>
                                        <input type="text" class="form-control" id="inputAddress2" placeholder='e.g. Cricket' />
                                    </div>
                                    <div class="form-group col-md-3">
                                        <label for="inputAddress2">Skill 3</label>
                                        <input type="text" class="form-control" id="inputAddress2" />
                                    </div>
                                    <div class="form-group col-md-3">
                                        <label for="inputAddress2">Skill 4</label>
                                        <input type="text" class="form-control" id="inputAddress2" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputAddress">Hobbies</label>
                                    <input type='text' class="form-control" id="inputAddress" placeholder="Things that you like to do..." />
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputCity">Profession</label>
                                        <input type="text" class="form-control" id="inputCity" placeholder='e.g. Web Developer' />
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="inputState">Currently In</label>
                                        <select id="inputState" class="form-control">
                                            <option selected>India...</option>
                                            <option>Israel</option>
                                            <option>USA</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-2">
                                        <label for="inputZip">Gender</label>
                                        <input type="text" class="form-control" id="inputZip" placeholder='Male' />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                                        <label class="form-check-label" for="gridCheck">
                                            Check me out
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary">Sign in</button>
                            </form>
                        </div>
                    </div >
                </div>
            </div>
        )
    }
}
