import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StickyNav from "./components/StickyNav";
import Splash from "./pages/Splash";
import Demo from "./pages/Demo";
import TeleMed from "./pages/TeleMed";
import CRM from "./pages/CRM";


const App = () => {

  return (

    <div >
      <Router >
        <>
          <StickyNav />
        </>

        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/rmt" component={Demo} />
          <Route path="/telemed" component={TeleMed} />
          <Route path="/CRM" component={CRM} />
        </Switch>
      </Router>
    </div>

  );
};

export default App;
