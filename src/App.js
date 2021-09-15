import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Nav />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route component={Home} />
    </Switch>
    <Footer />
    </Router>
  );
}

export default App;
