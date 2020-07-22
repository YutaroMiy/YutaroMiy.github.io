/*
  Name: Yutaro Miyata
  Student Number: 8912340

  This is the main file which runs the website. This file enables routing to different components as well as language setting using react router. 

  Passing props to components inspired by: https://ui.dev/react-router-v4-pass-props-to-components/
  Multi language functionaity inspired by: https://www.techmoro.com/how-to-create-a-simple-multi-language-website-with-react/amp/
*/
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
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar setLanguage={(language) => this.setLanguage(language)} language={this.state.language}/>
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
