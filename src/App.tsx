import "./App.css";
import { GlobalStyles } from "./GlobalStyles";
import { HomeLayout } from "./components/routesLayout/RegularRoute.jsx";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { RegularRoute } from "./components/routesLayout/RegularRoute.jsx";
import CleevioContext from "./context/CleevioState.jsx";
import Home from "./components/Home.jsx";
import NewTrip from "./components/NewTrip";
import TripDetail from "./components/TripDetail";
export default function App() {
  return (
    <>
      <CleevioContext>
        <GlobalStyles />

        <Router>
          <Switch>
            <RegularRoute exact layout={HomeLayout} path="/" component={Home} />
          </Switch>
          <Switch>
            <RegularRoute
              exact
              layout={HomeLayout}
              path="/trip/:id"
              component={TripDetail}
            />
            <RegularRoute
              exact
              layout={HomeLayout}
              path="/trip/"
              component={NewTrip}
            />
          </Switch>
        </Router>
      </CleevioContext>
    </>
  );
}
