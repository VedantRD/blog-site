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
import OthersProfile from './components/others/OthersProfile'
import axios from 'axios'
import Activity from './components/activity/Activity'

export default class App extends Component {

  state = {
    isLoggedIn: false,
    userdata: {}
  }

  logoutUser = () => {
    this.setState({ isLoggedIn: false })
    console.log('logout successful')
  }

  setUser = (validation, userdata) => {
    this.setState({ isLoggedIn: validation, userdata })
  }

  fetchUserData = () => {
    // console.log('fetching data')
    axios.get(`http://localhost:5000/users/${this.state.userdata.username}`)
      .then((response) => {
        this.setState({ userdata: response.data })
        // console.log('data fetched successfully')

      }).catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <BrowserRouter>

        <Navbar setUser={this.setUser} isLoggedIn={this.state.isLoggedIn}
          username={this.state.userdata.username} logoutUser={this.logoutUser}>
        </Navbar>

        <div className='mainBox'>
          <Switch>
            {this.state.isLoggedIn ?

              <Switch>

                <Route path='/feed/blog/:id' component={(props) =>
                  <OpenFeed {...props} username={this.state.userdata.username} likedBlogs={this.state.userdata.likedBlogs}></OpenFeed>}>
                </Route>
                <Route path='/feed' component={() =>
                  <Feed username={this.state.userdata.username} followingArray={this.state.userdata.following}></Feed>}>
                </Route>
                <Route path='/profile/followers/:otherUser' component={(props) =>
                  <Followers username={this.state.userdata.username} {...props}></Followers>}>
                </Route>
                <Route path='/profile/following/:otherUser' component={(props) =>
                  <Following username={this.state.userdata.username} {...props}></Following>}>
                </Route>
                <Route path='/profile' component={() =>
                  <Profile username={this.state.userdata.username} fetchUserData={this.fetchUserData}></Profile>}>
                </Route>
                <Route path='/find' component={(props) =>
                  <Find {...props} username={this.state.userdata.username} followingArray={this.state.userdata.following} fetchUserData={this.fetchUserData}></Find>}>
                </Route>
                <Route path='/blogs/:id' render={(props) =>
                  <FullBlog {...props} username={this.state.userdata.username}></FullBlog>}>
                </Route>
                <Route path='/blogs' component={() =>
                  <ShowBlogs blogsData={this.state.userdata.blogs} username={this.state.userdata.username}></ShowBlogs>}>
                </Route>
                <Route path='/others/otherProfile/:otherUser' component={(props) =>
                  <OthersProfile username={this.state.userdata.username} {...props} followingArray={this.state.userdata.following} fetchUserData={this.fetchUserData}></OthersProfile>}>
                </Route>
                <Route path='/activity'>
                  <Activity username={this.state.userdata.username}></Activity>
                </Route>
                <Route path='/' component={Home}></Route>

              </Switch>

              :

              <Route path='/' component={Home}></Route>

            }

          </Switch>
        </div>

      </BrowserRouter>
    )
  }
}
