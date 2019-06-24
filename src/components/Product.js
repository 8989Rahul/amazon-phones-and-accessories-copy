import React, { Component } from "react";
import {ProductConsumer} from "../context"
import { productTitle, productReview, productInfo } from "../data";


export default class Product extends Component {
  state ={
    productTitle : productTitle,
    review : productReview,
    productInfo : productInfo
  }
  render() {
    console.log(this.state.productInfo);
    
    const {
      title,
      rating,
      price,
      originalPrice,
      categoty,
      img
    } = this.props.product;
    return (
      <div className="product">
        <span arial-lable="4.6 out of 5 star"></span>
          <div className="product-items">
          <div className="product-img-div">
           <img className="product-img" src={img} alt=""/>
          </div>
          <div className="product-body">
            <div className="product-title">             
                {this.state.productTitle.map(pTitle =><a href="#" className="p-tile">{pTitle}</a>)}
              <div>
              <span className="rating-reveiw">
              <img src="img\rating-stars.jpg" className="star-img" alt=""/>
              {this.state.review.map(review =><a href="#" className="p-reviw">{review}</a>)}
              </span>
              </div>
            </div>
            <div className="product-info">
              <div>
                <span>
                {this.state.productInfo.map(pro =><a href="#" className="p-category">{pro.category}</a>)}
                </span>
              </div>
              <div>
                <span>
                {this.state.productInfo.map(pro =><a href="#" className="p-price">{pro.price}</a>)}
                </span>
                <span>
                {this.state.productInfo.map(pro =><a href="#" className="p-originalPrice"><del>{pro.originalPrice}</del></a>)}
                </span>
              </div>
              <div>
                <span>
                {this.state.productInfo.map(pro => <span className="p-shippingEligible">{pro.shippingEligible}</span> )}
                </span>
              </div>
              <div>
                <span>
                {this.state.productInfo.map(pro => <span className="p-moreBuyingChoice">{pro.moreBuyingChoice}</span> )}
                </span><br/>
                <span>
                {this.state.productInfo.map(pro => <span className="p-moreBuyingChoicePrice">{pro.moreBuyingChoicePrice}</span> )}
                </span>
                <span>
                {this.state.productInfo.map(pro => <a href="#" className="p-offers">{pro.offers}</a> )}
                </span>
                
              </div>
            </div>
            
          </div>
          </div>
      </div>
    );
  }
}
