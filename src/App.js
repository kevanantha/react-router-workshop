import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={ProductList} />
          <Route path="/product" component={ProductDetail} />
        </div>
      </Router>
    );
  }
}

export default App;
