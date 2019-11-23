import React, { Component } from 'react';
// import Register from './Register'
import MapContainer from './Map/MapContainer'
// import { Route, Switch } from 'react-router-dom'
// import Header from './Header'
import List from './RestroomsList';
import './App.css';

// const My404 = () => {
//   return (
//     <div>
//       You are Lost 
//     </div>
//   )
// };
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      restrooms: [],
      searchString: ''
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
  async triggetFetch() {
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
  render() {
    return (
      <div className="App">
        <div className="container">
        <div>
                <form  onSubmit={this.handleSubmit}>
                    <input
                    type="text"
                    onChange={this.handleChange}
                    />
                    <input type="submit" value="Submit" onClick={() => {this.triggetFetch()}}/>
                </form>
          </div>
          <div className="row">
            <MapContainer restrooms={this.state.restrooms}/>
          </div>
          <div className="row">
            <List restrooms={this.state.restrooms} />
          </div>
        </div>

        
      </div>
    )
  }



export default App;
