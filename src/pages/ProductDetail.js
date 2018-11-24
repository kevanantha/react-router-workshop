import React from "react";
import { Link } from "react-router-dom";
import Layout from './Layout';
import products from "../products";
import Context from "../context";
import translate from "../translate";

class ProductDetail extends React.Component {
  render() {
    const slug = this.props.match.params.slug;
    const product = products.find(product => product.slug === slug);
    return (
      <Layout>
        <div className="columns">
          <div className="column is-12">
            <nav className="breadcrumb" aria-label="breadcrumbs">
              <ul>
                <li>
                  <Link to="/">Products</Link>
                </li>
                <li className="is-active">
                  <a href="#" aria-current="page">
                    {product.title}
                  </a>
                </li>
              </ul>
            </nav>
            <h3 className="title">{product.title}</h3>
          </div>
        </div>
        <div className="columns">
          <div className="column is-5">
            <figure className="image">
              <img alt={product.title} src={product.imageUrl} />
            </figure>
          </div>
          <div className="column is-5">
            <div className="column has-text-weight-semibold has-text-dark is-size-4">
              {product.price}
            </div>
            <div className="column">{product.description}</div>
            <div className="column">
              <a className="button is-primary is-uppercase">Add to Cart</a>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default ProductDetail;
