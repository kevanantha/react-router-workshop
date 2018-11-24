import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Context from "./context";

import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";

class App extends Component {
  state = {
    language: "en",
  };

  handleSetLanguage = language => this.setState({ language });

  render() {
    const { language } = this.state;
    console.log(language);
    return (
      <Context.Provider value={{ language, setLanguage: this.handleSetLanguage }}>
        <Router>
          <div>
            <Route path="/" exact component={ProductList} />
            <Route path="/product/:slug" component={ProductDetail} />
          </div>
        </Router>
      </Context.Provider>
    );
  }
}

export default App;
