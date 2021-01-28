import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Privacy from "./components/Privacy";
import TermsAndCondition from "./components/TermsAndCondition";
function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/privacy-policy" exact component={Privacy}></Route>
      <Route
        path="/terms-condition"
        exact
        component={TermsAndCondition}
      ></Route>
    </Switch>
  );
}

export default App;
