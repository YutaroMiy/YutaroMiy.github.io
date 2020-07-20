import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Locations from './components/Locations'
import ExploreSkis from './components/ExploreSkis'
import ExploreSnowboards from './components/ExploreSnowboards'
import ContactUs from './components/ContactUs'
import OrderOnline from './components/OrderOnline'
import ThankYou from './components/ThankYou'

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/locations' component={Locations} />
          <Route path='/exploreskis' component={ExploreSkis} />
          <Route path='/exploresnowboards' component={ExploreSnowboards} />
          <Route path='/contactus' component={ContactUs} />
          <Route path='/orderonline' component={OrderOnline} />
          <Route path='/thankyou' component={ThankYou} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
