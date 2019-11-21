import React from 'react';
import Register from './Register'
// import MapContainer from './MapContainer'
// import { Route, Switch } from 'react-router-dom'
// import Header from './Header'
import './App.css';

const My404 = () => {
  return (
    <div>
      You are Lost 
    </div>
  )
};
const App = () => { 
  return (
    <main>
      <Header />
      <Switch>
        <Route exact path="/" component={ Register } />
        <Route exact path="/locations" component={ MapContainer } />
        <Route component={My404} />
      </Switch>
    </main>
  )
}
export default App;
