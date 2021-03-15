import React, { Component, Fragment } from 'react'
import Header from '../src/components/header/header.jsx'
import Welcomeorg from '../src/components/welcomeorg/welcomeorg'
import Testimonials from './components/testimonials';
import JsonData from './data/data.json';
import Footer from './components/Footer/footer'
import Aboutfooter from './components/aboutfooter/aboutfooter'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navigation from '../src/components/navigation/navigation'
import Carousel from '../src/components/carousel/carousel'
export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({ landingPageData: JsonData })
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <Switch>
              <Route
                exact path='/' >
                <div id="background">
                  <Navigation />
                  <Header/>
                  <Welcomeorg/>
                  <Testimonials data={this.state.landingPageData.Testimonials} />
                  <Carousel/>
                  
                  <Footer />
                  <Aboutfooter />
                </div>
              </Route>
           
            </Switch>
          </Fragment>
        </Router>
      </div>
    )
  }
}

export default App;
