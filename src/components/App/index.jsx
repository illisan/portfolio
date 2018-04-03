import React, { Component } from 'react';
import '../../assets/css/main.css';
import { Route, Switch } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Home from './Home'
import Work from './Work'
import SideNav from './SideNav'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to my page</h1>
        </header>
        <p className="App-intro">
          a bunch of cool shit
        </p>
        <Switch>
          <Route exact path ='/'render= {(props) => {
            return <Home/>
          } 
        } />
          <Route exact path='/contact' render={(props) => {
            return <Contact />
          }
          } />
          <Route exact path='/footer' render={(props) => {
            return <Footer />
          }
          } />
          <Route exact path='/work' render={(props) => {
            return <Work />
          }
          } />
          <Route exact path='/sidenav' render={(props) => {
            return <SideNav />
          }
          } />
          <Route exact path='/about' render={(props) => {
            return <About />
          }
          } />

        </Switch>
      </div>
    );
  }
}

export default App;
