import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Scrollbar} from 'smooth-scrollbar-react';

function App() {
  return (
    <Router>
    <Nav />
    <Scrollbar damping={0.1}>
      <div className="scroll-bar" id="scroll-bar">
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
          <Footer />
      </div>
        </Scrollbar>
    </Router>
  );
}

export default App;
