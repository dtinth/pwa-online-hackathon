import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from './components/Home';
import Rules from './components/Rules';
import Prizes from './components/Prizes';
import Resources from './components/Resources';
import Sponsors from './components/Sponsors';

import HomeEn from './components/Home/En';
import RulesEn from './components/Rules/En';
import PrizesEn from './components/Prizes/En';
import ResourcesEn from './components/Resources/En';
import SponsorsEn from './components/Sponsors/En';

import Nav from './components/Nav';
import Footer from './components/Footer';

import { withRouter } from 'react-router'

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}
const ScrollToTopWithRouter = withRouter(ScrollToTop);

const App = () =>
(
  <Router>
    <ScrollToTopWithRouter>
      <div>
        <Nav />
        <Route exact path="/" component={Home}/>
        <Route exact path="/rules" component={Rules}/>
        <Route exact path="/prizes" component={Prizes}/>
        <Route exact path="/resources" component={Resources}/>
        <Route exact path="/sponsors" component={Sponsors}/>
        <Route exact path="/en" component={HomeEn}/>
        <Route exact path="/en/rules" component={RulesEn}/>
        <Route exact path="/en/prizes" component={PrizesEn}/>
        <Route exact path="/en/resources" component={ResourcesEn}/>
        <Route exact path="/en/sponsors" component={SponsorsEn}/>
        <Footer />
      </div>
    </ScrollToTopWithRouter>
  </Router>
);

export default App;
