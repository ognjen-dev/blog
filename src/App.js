import "./App.css";
import Home from "./app/pages/Home";
import Users from "./app/pages/Users";
import Blogs from "./app/pages/Blogs";
import BlogPage from "./app/pages/BlogPage";
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import NewBlog from "./app/pages/NewBlog";
import NotFound from "./app/pages/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/new-blog" component={NewBlog} />
          <Route path="/blogs/:id">
            <BlogPage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
