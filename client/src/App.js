import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StickyNav from "./components/StickyNav";
import Splash from "./pages/Splash";
import Demo from "./pages/Demo";
import TeleDerm from "./pages/TeleDerm";
import ImageDemo from "./pages/ImageUploadDemo";

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
            <Route path="/telederm" component={TeleDerm} />
            <Route path="/rmt/images" component={ImageDemo} />
          </Switch>
        </Router>
      </div>  
    );
  }
};
export default App;
