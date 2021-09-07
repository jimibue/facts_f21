import "./App.css";
import Facts from "./components/Facts";
import NavBar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import FactForm from "./components/FactForm";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/facts" component={Facts} />
        <Route exact path="/facts/new" component={FactForm} />
        <Route component={() => <h1>Not found</h1>} />
      </Switch>
    </div>
  );
}

export default App;
