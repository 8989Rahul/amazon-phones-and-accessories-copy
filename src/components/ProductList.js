import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { cellPhones, featuredBrands, price, seller } from "../data";
import Product from "./Product";
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  state = {
    cellPhone: cellPhones,
    featuredBrand: featuredBrands,
    price: price,
    seller: seller
    };
  render() {
    return (
      <div>
        <Card style={{ border:"tranparent"}}>
          <div className="productList-card-body">
          <Card.Body style={{paddingRight:"0"}}>
            <div className="main-section">
              <ul class="filters">
                <li>
                  <h6 class="filters-title">Department</h6>
                </li>
                <li className="filter-list">Electronics</li>
                <li style={{ marginBottom: "inherit" }}>
                  <ul
                    style={{ marginLeft: "0rem" }}
                    className="cell-phone-list-1"
                  >
                    <li>
                      <h6 class="filters-title">Cell Phones & Accessories</h6>
                    </li>
                    <li style={{ marginTop: "-0.5rem" }}>
                      <ul className="cell-phone-list-2">
                        {this.state.cellPhone.map(cell => (
                          <li className="filter-list" key={cell}>
                            {cell}
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </li>
                <li style={{ marginBottom: "inherit" }}>
                  <h6 class="filters-title">Avg. Customer Review</h6>
                  <img src="img\rating-stars.jpg" className="star-img" alt=""/>
                  <img src="img\rating-stars.jpg" className="star-img" alt=""/>
                  <img src="img\rating-stars.jpg" className="star-img" alt=""/>
                  <img src="img\rating-stars.jpg" className="star-img" alt=""/>
                </li>
                <li>
                  <h6 class="filters-title">Featured Brands</h6>
                </li>
                <li>
                  <ul className="featured-brand-list">
                    {this.state.featuredBrand.map(feature => (
                      <li className="filter-list" key={feature}>
                        <input type="checkbox" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="filter-list" style={{ marginBottom: "inherit" }}>
                  <a href="#">See more</a>
                </li>
                <li>
                  <h6 class="filters-title">Price</h6>
                </li>
                <li>
                  <ul className="price-list">
                    {this.state.price.map(price => (
                      <li className="filter-list" key={price}>
                        {price}
                      </li>
                    ))}
                  </ul>
                </li>
                <li style={{ marginBottom: "inherit" }}>
                  <input
                    className="price-list-btn"
                    type="text"
                    placeholder=" $ Min"
                  />
                  <input
                    className="price-list-btn"
                    type="text"
                    placeholder=" $ Max"
                  />
                  <button> Go </button>
                </li>
                <li>
                  <h6 class="filters-title">Amazon Certified</h6>
                </li>
                <li className="filter-list" style={{ marginBottom: "inherit" }}>
                  <input type="checkbox" /> Works With Alexa
                </li>
                <li>
                  <h6 class="filters-title">Packaging Option</h6>
                </li>
                <li className="filter-list" style={{ marginBottom: "inherit" }}>
                  <input type="checkbox" /> Frustration-Free Packaging
                </li>
                <li>
                  <h6 class="filters-title">New & Upcoming</h6>
                </li>
                <li className="filter-list">New Arrival</li>
                <li className="filter-list" style={{ marginBottom: "inherit" }}>
                  Comming Soon
                </li>

                <li style={{ marginBottom: "inherit" }}>
                  <h6 class="filters-title">Certification</h6>
                </li>
                <li className="filter-list">
                  <input type="checkbox" /> Energy Star{" "}
                </li>
                <li className="filter-list" style={{ marginBottom: "inherit" }}>
                  <input type="checkbox" /> EPET Gold
                </li>
                <li>
                  <h6 class="filters-title">Amazon Global Store</h6>
                </li>
                <li className="filter-list" style={{ marginBottom: "inherit" }}>
                  <input type="checkbox" /> Amazon Global Store
                </li>
                <li>
                  <h6 class="filters-title">Condition</h6>
                </li>
                <li className="filter-list">New</li>
                <li className="filter-list">Used</li>
                <li className="filter-list" style={{ marginBottom: "inherit" }}>
                  Renewed
                </li>
                <li>
                  <h6 class="filters-title">Seller</h6>
                </li>
                <li style={{ marginBottom: "inherit" }}>
                  <ul className="seller-list">
                    {this.state.seller.map(seller => (
                      <li className="filter-list" key={seller}>
                        <input type="checkbox" /> {seller}
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <h6>Availability</h6>
                </li>
                <li className="filter-list">
                  <input type="checkbox" /> Include Out of Stock
                </li>
              </ul>

              <div className="product">
                <ProductConsumer>
                  {value => {
                    return value.products.map(product => {
                      return <Product key={product} product={product} />;
                    });
                  }}
                </ProductConsumer>
              </div>
            </div>
          </Card.Body>
          </div>
        </Card>
      </div>
    );
  }
}
