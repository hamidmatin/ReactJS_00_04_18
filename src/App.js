import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
import Layout from './containers/layout';
import Home from './components/Home';
import UsersIndex from './components/users';
import PostsIndex from './components/posts';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        {/* <Link to='/'>Home</Link>
        <Link to='/users'>Users</Link>
        <Link to='/posts'>Posts</Link> */}

        {/* <NavLink to='/'>Home</NavLink>
        <NavLink to='/users'>Users</NavLink>
        <NavLink to='/posts'>Posts</NavLink> */}

        <Switch>
          <Route path='/' exact>
            <Home pageTitle='Home' />
          </Route>
          <Route path='/posts' component={PostsIndex} />
          <Route path='/users' component={UsersIndex} />
          <Route path='*' render={() => <p>Page Not Found</p>} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
