import React, { Component, useState } from 'react';
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
  constructor(props){
    super(props);
    this.state = {
      language: 'english',
    }
  }

  setLanguage(language) {
    this.setState({language: language});
  }

  render() {
    console.log("language", this.state.language);
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar setLanguage={(language) => this.setLanguage(language)}/>
          <Route exact path='/' component={() => <Home language={this.state.language}/>} />
          <Route path='/locations' component={() => <Locations language={this.state.language}/>} />
          <Route path='/exploreskis' component={() => <ExploreSkis language={this.state.language}/>} />
          <Route path='/exploresnowboards' component={() => <ExploreSnowboards language={this.state.language}/>} />
          <Route path='/contactus' component={() => <ContactUs language={this.state.language}/>} />
          <Route path='/orderonline' component={() => <OrderOnline language={this.state.language}/>} />
          <Route path='/thankyou' component={() => <ThankYou language={this.state.language}/>} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
