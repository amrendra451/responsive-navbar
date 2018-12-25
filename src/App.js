import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/BackDrop/BackDrop';

class App extends Component {
  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backDropClickHandler = () => {
    this.setState({
      sideDrawerOpen: false
    })
  }

  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop backDropClickHandler={this.backDropClickHandler} />;
    }

    return (
      <div style={{ height: '100%' }}>
        <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
        <main style={{ marginTop: '64px' }}>
          <p>The page content is here.</p>
        </main>
      </div>
    );
  }
}

export default App;
