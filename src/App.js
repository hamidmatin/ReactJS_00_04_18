import Layout from './containers/layout';
import Home from './components/Home';
import UsersIndex from './components/users'

import './App.css';

function App() {
  return (
    <Layout>
      <UsersIndex />
      <Home />
    </Layout>
  );
}

export default App;
