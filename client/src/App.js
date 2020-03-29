import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StickyNav from "./components/StickyNav";
import Splash from "./pages/Splash";
import Demo from "./pages/Demo";
import TeleMed from "./pages/TeleMed";
import ImageDemo from "./pages/ImageUploadDemo";
import NoMatch from "./pages/NoMatch";


class App extends Component {
  render() {
    return(
      <div>
        <Router>
          <>
            <StickyNav />
          </>
          <Switch>
            <Route exact path="/" component={Splash} />
            <Route exact path="/rmt" component={Demo} />
            <Route path="/rmt/images" component={ImageDemo} />
            <Route path="/rmt/telemed" component={TeleMed} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>  
    );
  }
};
export default App;
