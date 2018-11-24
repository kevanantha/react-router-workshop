import React from "react";
import { Link } from "react-router-dom";
import products from "../products";

class ProductList extends React.Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width={112}
                height={28}
              />
            </a>
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
            <a className="navbar-item">Home</a>
            <div className="dropdown navbar-item ">
              <div className="dropdown-trigger">
                <button
                  className="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu">
                  <span>en</span>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true" />
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <a href="#" className="dropdown-item is-active">
                    en
                  </a>
                  <a href="#" className="dropdown-item ">
                    id
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="columns">
          <div className="column is-full">
            <div>
              <h3 className="title">Our Products</h3>
              <div className="columns">
                {products.map((product, index) => {
                  return (
                    <div className="column" key={index}>
                      <Link to={`/product/${product.slug}`}>
                        <div className="card">
                          <div className="card-image">
                            <figure className="image is-4by3">
                              <img alt={product.title} src={product.imageUrl} />
                            </figure>
                          </div>
                          <div className="card-content">
                            <div className="media">
                              <div className="media-content">
                                <p className="title is-4">{product.title}</p>
                                <div className="content">
                                  {product.description}
                                  <br />
                                </div>
                                <h5>{product.price}</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
