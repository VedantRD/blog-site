import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ShowBlogs from './components/ShowBlogs'
import FullBlog from './components/FullBlog'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Default from './components/Default'
import Profile from './components/Profile'
import ProfileUpdate from './components/ProfileUpdate'
// import Test from './components/Test'

export default class App extends Component {

  setUser = (validation, userdata) => {
    this.setState({ isLoggedIn: validation, userdata })
    console.log(userdata)
  }

  state = {
    isLoggedIn: false,
    userdata: {}
  }

  render() {
    return (
      // <Test></Test>
      // <ProfileUpdate></ProfileUpdate>
      <BrowserRouter>
        <Navbar setUser={this.setUser} isLoggedIn={this.state.isLoggedIn} username={this.state.userdata.username}></Navbar>
        <Switch>
          {this.state.isLoggedIn ?

            <Switch>
              <Route path='/profile' component={() => <Profile username={this.state.userdata.username}></Profile>}></Route>
              <Route path='/blogs/:id' render={(props) => <FullBlog {...props} username={this.state.userdata.username}></FullBlog>}></Route>
              <Route path='/blogs' component={() => <ShowBlogs blogsData={this.state.userdata.blogs} username={this.state.userdata.username}></ShowBlogs>}></Route>
              <Route path='/' component={Home}></Route>
            </Switch>

            :

            <Switch>
              <Route path='/' component={Home}></Route>
              <Route component={Default}></Route>
            </Switch>

          }
        </Switch>
      </BrowserRouter>
    )
  }
}
