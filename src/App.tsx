import "./App.css";
import { GlobalStyles } from "./GlobalStyles";
import {
  HomeLayout,
  RegularRoute,
} from "./components/routesLayout/RegularRoute";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import CleevioContext from "./context/CleevioState_";
import Home from "./components/Home";
import NewTrip from "./components/NewTrip";
import NotFound from "./components/NotFound";
import TripDetail from "./components/TripDetail";
export default function App() {
  return (
    <>
      <CleevioContext>
        <GlobalStyles />

        <Router>
          <Switch>
            <RegularRoute exact layout={HomeLayout} path="/" component={Home} />
            <RegularRoute
              exact
              layout={HomeLayout}
              path="/trip/:id"
              component={TripDetail}
            />
            <RegularRoute
              exact
              layout={HomeLayout}
              path="/trip"
              component={NewTrip}
            />
            <RegularRoute
              exact
              layout={HomeLayout}
              path="*"
              component={NotFound}
            />
          </Switch>
        </Router>
      </CleevioContext>
    </>
  );
}
