import React, {Component} from 'react';
import Register from './Components/Register'
import Login from './Components/Login'
import MapContainer from './Components/Map/MapContainer'
import { Route, Switch } from 'react-router-dom'
import Header from './Components/Header'
import './App.css';

const My404 = () => {
  return (
    <div>
      You are Lost. Go back now!
    </div>
  )
};
class App extends Component{ 
  state = {
    currentUser: {},
    isLogged: false

  }
  doUpdateCurrentUser = user => {
    this.setState({
      currentUser: user
    })
  }
  loginUser = user =>{
    this.setState({
      currentUser: user, 
      isLogged: true
    })
  }
  registerUser = user =>{
    this.setState({
      currentUser: user, 
      isLogged: true
    })
  }
  logoutUser = async ()=>{
    try {
      const logout = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/logout`)
      const parsedLogout = await logout.json()
      console.log(parsedLogout)
      this.setState({
        currentUser: {},
        isLogged: false
      })
      console.log(logout)
      
    } catch (error) {
      console.log(error)
    }

  }
  render(){
    return (
      <main>
        <Header currentUser={this.state.currentUser} isLogged={this.state.isLogged} logoutUser={this.logoutUser}/>
        <Switch>
          <Route exact path="/" render={() => <Register doUpdateCurrentUser={this.doUpdateCurrentUser} registerUser={this.registerUser}/> } />

          <Route exact path="/login" render={() => <Login loginUser= {this.loginUser}/> } />

          <Route exact path="/locations" component={ MapContainer } />
          {/* <Route exact path='/logout' component={MapContainer} currentUser={this.state.currentUser} logoutUser={this.logoutUser}/> */}
          <Route component={My404} />
        </Switch>
      </main>
    )

  }
}
export default App;
