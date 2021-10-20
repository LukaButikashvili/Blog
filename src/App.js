import "./styles/App.css";
import { Route, Switch } from "react-router-dom";

import Blogs from "./pages/Blogs";
import Post from "./pages/Post";
import User from "./pages/User";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Blogs} />
        <Route path="/Post/:id" component={Post} />
        <Route path="/User" component={User} />
      </Switch>
    </>
  );
}

export default App;
