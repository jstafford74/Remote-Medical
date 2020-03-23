import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StickyNav from "./components/StickyNav";
import Splash from "./pages/Splash";
import Demo from "./pages/Demo";
import TeleDerm from "./pages/TeleDerm";


const App = () => {

  return (

    <div >
      <Router >
        <>
          <StickyNav />
        </>

        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/demo" component={Demo} />
          <Route path="/telederm" component={TeleDerm} />
        </Switch>
      </Router>
    </div>

  );
};

export default App;
