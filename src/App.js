import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Loading from "./components/Loading";
import StickyNav from "./components/StickyNav";
import Splash from "./pages/Splash";
import TeleDerm from "./pages/TeleDerm";
import ExternalApi from "./views/ExternalApi";
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";


// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  return (

    <div style={{ minHeight: "100vh" }}>
      <Router history={history}>
        <>
          <StickyNav />
        </>

        <Switch>
          <Route path="/" exact component={Splash} />
          <PrivateRoute path="/telederm" component={TeleDerm} />
          <PrivateRoute path="/external-api" component={ExternalApi} />
        </Switch>
      </Router>
    </div>

  );
};

export default App;
