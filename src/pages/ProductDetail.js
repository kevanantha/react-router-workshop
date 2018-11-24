import React from "react";

class ProductDetail extends React.Component {
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
          <div className="column is-12">
            <nav className="breadcrumb" aria-label="breadcrumbs">
              <ul>
                <li>
                  <a href="/">Products</a>
                </li>
                <li className="is-active">
                  <a href="#" aria-current="page">
                    Rustic Plastic Bacon
                  </a>
                </li>
              </ul>
            </nav>
            <h3 className="title">Rustic Plastic Bacon</h3>
          </div>
        </div>
        <div className="columns">
          <div className="column is-5">
            <figure className="image">
              <img
                alt="Rustic Plastic Bacon"
                src="https://images.nike.com/is/image/DotCom/PDP_HERO/132170C_001_A_PREM/converse-chuck-taylor-all-star-leather-unisex-high-top-shoe.jpg"
              />
            </figure>
          </div>
          <div className="column is-5">
            <div className="column has-text-weight-semibold has-text-dark is-size-4">
              320.00
            </div>
            <div className="column">
              Dolorem commodi id eveniet neque amet voluptatem ipsa.
            </div>
            <div className="column">
              <a className="button is-primary is-uppercase">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
