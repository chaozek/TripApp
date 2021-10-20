import { GlobalStyles } from "./GlobalStyles";
import { Home } from "./components/Home";
import { HomeLayout, RegularRoute } from "./components/RegularRoute";
import { NewTrip } from "./components/NewTrip";
import { NotFound } from "./components/NotFound";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { TripDetail } from "./components/TripDetail";
import CleevioContext from "./components/CleevioState";
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
