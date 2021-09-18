import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import Loading from './components/Loading';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const [top, setTop] = useState(true);
  useEffect(() => {
    setTimeout(() => setTop(false), 200)
    setTimeout(() => setLoading(false), 3000)
  }, [])
  return (
    <>
      {loading ? <Loading /> : null}
      {top ? null : (
        <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={Home} />
        </Switch>
        <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
