import React from "react";
import { Link } from "react-router-dom";
import Context from "../context";
import translate from "../translate";

class Layout extends React.Component {
  state = {
    isToggled: false,
  };

  handleToggle = () => {
    this.setState({ isToggled: !this.state.isToggled });
  };

  render() {
    return (
      <Context.Consumer>
        {context => {
          console.log({ context });
          return (
            <div className="container">
              <nav className="navbar" aria-label="main navigation">
                <div className="navbar-brand">
                  <Link className="navbar-item" to="/">
                    <img
                      src="https://bulma.io/images/bulma-logo.png"
                      alt="Bulma: a modern CSS framework based on Flexbox"
                      width={112}
                      height={28}
                    />
                  </Link>
                  <a
                    role="button"
                    className="navbar-burger"
                    aria-label="menu"
                    aria-expanded="false">
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                  </a>
                </div>
                <div className="navbar-end">
                  <a className="navbar-item">{translate[context.language]['Home']}</a>
                  <div
                    className={`dropdown navbar-item ${
                      this.state.isToggled === true ? "is-active" : ""
                    }`}>
                    <div className="dropdown-trigger">
                      <button
                        className="button"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu"
                        onClick={this.handleToggle}>
                        <span>en</span>
                        <span className="icon is-small">
                          <i className="fas fa-angle-down" aria-hidden="true" />
                        </span>
                      </button>
                    </div>
                    <div
                      className="dropdown-menu"
                      id="dropdown-menu"
                      role="menu">
                      <div className="dropdown-content">
                        <a
                          href="#"
                          className="dropdown-item is-active"
                          onClick={() => {
                            this.handleToggle();
                            context.setLanguage("en");
                          }}>
                          en
                        </a>
                        <a
                          href="#"
                          className="dropdown-item"
                          onClick={() => {
                            this.handleToggle();
                            context.setLanguage("id");
                          }}>
                          id
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
              {this.props.children}
            </div>
          );
        }}
      </Context.Consumer>
    );
  }
}

export default Layout;
