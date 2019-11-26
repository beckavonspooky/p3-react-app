import React, { Component } from 'react';
import Register from './Components/Register'
import Login from './Components/Login'
import MapContainer from './Components/Map/MapContainer'
import { Route, Switch } from 'react-router-dom'
import Header from './Components/Header'
import List from './RestroomsList';
import LocationContainer from './Components/LocationContainer';
import './App.css';



const My404 = () => {
  return (
    <div>
      You are woefully lost. 
    </div>
  )
};
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      restrooms: [],
      userRestrooms: [],
      searchString: '',
      currentUser: {},
      isLogged: false

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({ searchString: event.target.value })
  }

  handleSubmit(event) {
      // console.log(this.state.searchString)
      const searchValue = this.state.searchString
      console.log(searchValue +  ' ' + typeof(searchValue))
      event.preventDefault()
      return searchValue;
  }
  async triggerFetch() {
    const allRestrooms = await this.getRestrooms();
    this.setState({
      restrooms: allRestrooms
    })
  }
  
  getRestrooms = async () => {
    const addString = this.state.searchString.replace(' ', '%20')
    const fetchString = "https://www.refugerestrooms.org/api/v1/restrooms/search?page=1&per_page=50&offset=0&query=" + addString
    console.log(addString+ ' fetch ')
    try {
      // const restrooms = await fetch("https://www.refugerestrooms.org/api/v1/restrooms/search?page=1&per_page=10&offset=0&query=los%20angeles");
      const restrooms = await fetch(fetchString)
      if (!restrooms.ok) {
        throw Error(Response.statusText);
      }
      const restroomsJson = await restrooms.json();
      return restroomsJson
    } catch (error) {
      console.log(error, 'err in the catch block');
      return error;
    }
  }
  getUserRestrooms = async () => {
    const userRestrooms = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/locations/`)
    const parsedUserRestrooms = await userRestrooms.json();
    console.log(parsedUserRestrooms)
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
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <div>
            <form  onSubmit={this.handleSubmit}>
              <input type="text" onChange={this.handleChange}/>
              <input type="submit" value="Submit" onClick={() => {this.triggerFetch()}}/>
            </form>
          </div>
          <div className="row">
            <List restrooms={this.state.restrooms} />
          </div>
        
        </div>

        <div>
            <Header currentUser={this.state.currentUser} isLogged={this.state.isLogged} logoutUser={this.logoutUser}/>
            <Switch>
              <Route exact path="/" render={() => <Register doUpdateCurrentUser={this.doUpdateCurrentUser} registerUser={this.registerUser} loginUser={this.loginUser}/> } />
              <Route exact path="/login" render={() => <Login loginUser= {this.loginUser} doUpdateCurrentUser={this.doUpdateCurrentUser}/> } />
              
              <Route exact path="/locations" render={()=> 
              <div className="parent-div">
                <div className="map-div">
                  <MapContainer restrooms={this.state.restrooms} /> 
                </div>
                <div className="location-div">
                  <LocationContainer getUserRestrooms={this.getUserRestrooms} currentUser={this.state.currentUser}/> 
                </div>
              </div>
              } />

              <Route component={My404} />
            </Switch>
          </div>
          

      </div>
    )
  }
}


export default App;
