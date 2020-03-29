import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ShowBlogs from './components/blogs/ShowBlogs'
import FullBlog from './components/blogs/FullBlog'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Profile from './components/profile/Profile'
import Followers from './components/follows/Followers'
import Following from './components/follows/Following'
import Feed from './components/feed/Feed'
import OpenFeed from './components/feed/OpenFeed'
import Find from './components/find/Find'
// import axios from 'axios'
import OthersProfile from './components/others/OthersProfile'
// import Test from './components/Test'

export default class App extends Component {

  // fetchUserData = () => {
  //   axios.get(`http://localhost:5000/users/${this.state.userdata.username}`)
  //     .then((response) => {
  //       this.setState({ userdata: response.data })
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       alert('invalid username or password')
  //     });
  // }

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

        <div className='mainBox'>
          <Switch>
            {this.state.isLoggedIn ?

              <Switch>
                <Route path='/feed/blog/:id' component={(props) =>
                  <OpenFeed {...props} username={username} likedBlogs={this.state.userdata.likedBlogs}></OpenFeed>}>
                </Route>
                <Route path='/feed' component={() =>
                  <Feed username={username} followingArray={this.state.userdata.following} fetchUserData={this.fetchUserData}></Feed>}>
                </Route>
                <Route path='/profile/followers/:otherUser' component={(props) =>
                  <Followers username={username} {...props}></Followers>}>
                </Route>
                <Route path='/profile/following/:otherUser' component={(props) =>
                  <Following username={username} {...props}></Following>}>
                </Route>
                <Route path='/profile' component={() =>
                  <Profile username={username}></Profile>}>
                </Route>
                <Route path='/find' component={(props) =>
                  <Find {...props} username={username} followingArray={this.state.userdata.following} fetchUserData={this.fetchUserData}></Find>}>
                </Route>
                <Route path='/blogs/:id' render={(props) =>
                  <FullBlog {...props} username={username}></FullBlog>}>
                </Route>
                <Route path='/blogs' component={() =>
                  <ShowBlogs blogsData={this.state.userdata.blogs} username={username}></ShowBlogs>}>
                </Route>
                <Route path='/others/profile/:otherUser' component={(props) =>
                  <OthersProfile username={username} {...props} followingArray={this.state.userdata.following}></OthersProfile>}>
                </Route>
                <Route path='/' component={Home}></Route>
              </Switch>

              :

              <Switch>
                <Route path='/' component={Home}></Route>
              </Switch>

            }

          </Switch>
        </div>

      </BrowserRouter>
    )
  }
}
