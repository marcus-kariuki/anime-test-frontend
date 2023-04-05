import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import Home from './components/Home'
import HomePage from './components/HomePage';
import SingleAnime from './components/SingleAnime';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
     };
  }

  componentDidMount() {
    this.loginStatus()
  }

  loginStatus = () => {
    axios.get('http://localhost:4000/logged_in', { withCredentials: true })    
      .then(response => {
        if (response.data.logged_in) {
          this.handleLogin(response)
        } else {
          this.handleLogout()
        }
      })
      .catch(error => console.log('api errors:', error))
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }
  
  render() {
    return (
      <div>
        <BrowserRouter>
          <nav>
            {/* <Link to="/">Home</Link> */}
            {this.state.isLoggedIn ? (
              <>
                <span>Hello, {this.state.user.username}!</span>
                <Link to="/logout">Logout</Link>
              </>
            ) : (
              <>
                {/* <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link> */}
              </>
            )}
          </nav>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<LoginForm handleLogin={this.handleLogin} />} />
            <Route exact path='/signup' element={<SignupForm />} />
            <Route exact path='/home' element={<HomePage />} />
            <Route exact path='/:title' element={<SingleAnime/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
