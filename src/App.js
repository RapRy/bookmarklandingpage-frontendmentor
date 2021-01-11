import React, { Component } from 'react'

import GlobalStyle from './globalStyles';

import { HeaderNav, NavMenu, Hero } from './components';

class App extends Component {
  constructor(){
    super()
    this.state = {
      navToggle: false
    }
  }

  toggleNavigation = (val) => {
    this.setState({navToggle:val})
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        {this.state.navToggle &&  <NavMenu toggleNavigation={this.toggleNavigation} />}
        <HeaderNav toggleNavigation={this.toggleNavigation} />
        <Hero />
      </React.Fragment>  
    )
  }
}

export default App;