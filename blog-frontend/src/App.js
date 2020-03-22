import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ShowBlogs from './components/blogs/ShowBlogs'
import FullBlog from './components/blogs/FullBlog'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
// import Test from './components/Test'
import Followers from './components/follows/Followers'
import Following from './components/follows/Following'

export default class App extends Component {

  logoutUser = () => {
    this.setState({ isLoggedIn: false })
    console.log('logout successful')
  }

  setUser = (validation, userdata) => {
    this.setState({ isLoggedIn: validation, userdata })
    console.log(userdata)
  }

  state = {
    isLoggedIn: false,
    userdata: {}
  }

  render() {
    const username = this.state.userdata.username
    return (
      // <Test></Test>
      <BrowserRouter>
        <Navbar setUser={this.setUser} isLoggedIn={this.state.isLoggedIn}
          username={username} logoutUser={this.logoutUser}>
        </Navbar>
        <Switch>
          {this.state.isLoggedIn ?

            <Switch>
              <Route path='/profile/followers' component={() =>
                <Followers username={username}></Followers>}>
              </Route>
              <Route path='/profile/following' component={() =>
                <Following username={username}></Following>}>
              </Route>
              <Route path='/profile' component={() =>
                <Profile username={username}></Profile>}>
              </Route>
              <Route path='/blogs/:id' render={(props) =>
                <FullBlog {...props} username={username}></FullBlog>}>
              </Route>
              <Route path='/blogs' component={() =>
                <ShowBlogs blogsData={this.state.userdata.blogs} username={username}></ShowBlogs>}>
              </Route>
              <Route path='/' component={Home}></Route>
            </Switch>

            :

            <Switch>
              <Route path='/' component={Home}></Route>
            </Switch>

          }
        </Switch>
      </BrowserRouter>
    )
  }
}
