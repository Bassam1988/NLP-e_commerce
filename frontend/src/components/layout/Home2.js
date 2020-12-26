import React, { Component, Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as _ from "lodash";
import $ from 'jquery';
//import '../../../static/frontend/js/main';
//import '../../../static/frontend/js/jquery.sticky';
//import PluginName from 'babel-plugin-jquery';
import { getProducts, delProduct } from "../../redux/actions/productsActions";

const Image = {
  flex: 1,
  width: 100,
  height: 150,
  resizeMode: "contain",
};

function Home() {
  const products = useSelector((state) => state.products.products);
  const top_viewed = _.sortBy(products, "numberOfViews").reverse();
  const recently_viewed = _.sortBy(products, "viewd_at").reverse();
  const top_new = _.sortBy(products, "created_at").reverse();

  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  let loopIndex = 3;
  return (
    <div>
      <div className="slider-area">
        <div className="zigzag-bottom"></div>
        <div
          id="slide-list"
          className="carousel carousel-fade slide"
          data-ride="carousel"
        >
          <div className="slide-bulletz">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <ol className="carousel-indicators slide-indicators">
                    <li
                      data-target="#slide-list"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li data-target="#slide-list" data-slide-to="1"></li>
                    <li data-target="#slide-list" data-slide-to="2"></li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <div className="single-slide">
                <div className="slide-bg slide-one"></div>
                <div className="slide-text-wrapper">
                  <div className="slide-text">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6 col-md-offset-6">
                          <div className="slide-content">
                            <h2>We are awesome</h2>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Consequuntur, dolorem,
                              excepturi. Dolore aliquam quibusdam ut quae iure
                              vero exercitationem ratione!
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Modi ab molestiae minus
                              reiciendis! Pariatur ab rerum, sapiente ex nostrum
                              laudantium.
                            </p>
                            <a href="" className="readmore">
                              Learn more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="single-slide">
                <div className="slide-bg slide-two"></div>
                <div className="slide-text-wrapper">
                  <div className="slide-text">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6 col-md-offset-6">
                          <div className="slide-content">
                            <h2>We are great</h2>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Saepe aspernatur, dolorum harum
                              molestias tempora deserunt voluptas possimus quos
                              eveniet, vitae voluptatem accusantium atque
                              deleniti inventore. Enim quam placeat expedita!
                              Quibusdam!
                            </p>
                            <a href="" className="readmore">
                              Learn more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="single-slide">
                <div className="slide-bg slide-three"></div>
                <div className="slide-text-wrapper">
                  <div className="slide-text">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6 col-md-offset-6">
                          <div className="slide-content">
                            <h2>We are superb</h2>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Dolores, eius?
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Deleniti voluptates
                              necessitatibus dicta recusandae quae amet nobis
                              sapiente explicabo voluptatibus rerum nihil quas
                              saepe, tempore error odio quam obcaecati suscipit
                              sequi.
                            </p>
                            <a href="" className="readmore">
                              Learn more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="promo-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="single-promo">
                <i className="fa fa-refresh"></i>
                <p>30 Days return</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-promo">
                <i className="fa fa-truck"></i>
                <p>Free shipping</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-promo">
                <i className="fa fa-lock"></i>
                <p>Secure payments</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-promo">
                <i className="fa fa-gift"></i>
                <p>New products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="maincontent-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="latest-product">
                <h2 className="section-title">Latest Products</h2>
                <div className="product-carousel">
                  {products ? (
                    products.map((product) => (
                      <div className="single-product" key={product.id}>
                        <div className="product-f-image">
                          <img src={product.img} alt="" style={Image}></img>
                          <div className="product-hover">
                            {user.groups == [5] ? (
                              <a
                                href=""
                                onClick={() => dispatch(delProduct(product.id))}
                                className="add-to-cart-link"
                              >
                                <i className="fa fa-shopping-cart"></i> Delete
                              </a>
                            ) : (
                              ""
                            )}

                            <Link
                              to={{
                                pathname: "/viewProduct/",
                                state: { product1: product },
                              }}
                              className="view-details-link"
                            >
                              <i className="fa fa-link"></i> See details
                            </Link>
                          </div>
                        </div>

                        <h2>
                          <Link
                            to={{
                              pathname: "/viewProduct/",
                              state: { product1: product },
                            }}
                          >
                            {product.name}
                          </Link>
                        </h2>

                        <div className="product-carousel-price">
                          <ins>{product.price}</ins>{" "}
                          {product.old_price != 0.0 ? (
                            <del>{product.old_price}</del>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <b>No Products</b>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="brands-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="brand-wrapper">
                <h2 className="section-title">Brands</h2>
                <div className="brand-list">
                  <img
                    src="/static/frontend/style/img/services_logo__1.jpg"
                    alt=""
                  ></img>
                  <img
                    src="/static/frontend/style/img/services_logo__2.jpg"
                    alt=""
                  ></img>
                  <img
                    src="/static/frontend/style/img/services_logo__3.jpg"
                    alt=""
                  ></img>
                  <img
                    src="/static/frontend/style/img/services_logo__4.jpg"
                    alt=""
                  ></img>
                  <img
                    src="/static/frontend/style/img/services_logo__1.jpg"
                    alt=""
                  ></img>
                  <img
                    src="/static/frontend/style/img/services_logo__2.jpg"
                    alt=""
                  ></img>
                  <img
                    src="/static/frontend/style/img/services_logo__3.jpg"
                    alt=""
                  ></img>
                  <img
                    src="/static/frontend/style/img/services_logo__4.jpg"
                    alt=""
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-widget-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="single-product-widget">
                <h2 className="product-wid-title">Top Viewed</h2>
                <a href="" className="wid-view-more">
                  View All
                </a>

                {top_viewed ? (
                  top_viewed.slice(0, loopIndex).map((product) => (
                    <div className="single-wid-product" key={product.id}>
                      <Link
                        to={{
                          pathname: "/viewProduct/",
                          state: { product1: product },
                        }}
                      >
                        <img
                          src={product.img}
                          alt=""
                          className="product-thumb"
                        ></img>
                      </Link>
                      <h2>
                        <Link
                          to={{
                            pathname: "/viewProduct/",
                            state: { product1: product },
                          }}
                        >
                          {product.name}
                        </Link>
                      </h2>
                      <div className="product-wid-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="product-wid-price">
                        <ins>{product.price}</ins>{" "}
                        {product.old_price != 0.0 ? (
                          <del>{product.old_price}</del>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <b>No Products</b>
                )}
              </div>
            </div>
            <div className="col-md-4">
              <div className="single-product-widget">
                <h2 className="product-wid-title">Recently Viewed</h2>
                <a href="#" className="wid-view-more">
                  View All
                </a>
                {recently_viewed ? (
                  recently_viewed.slice(0, loopIndex).map((product) => (
                    <div className="single-wid-product" key={product.id}>
                      <Link
                        to={{
                          pathname: "/viewProduct/",
                          state: { product1: product },
                        }}
                      >
                        <img
                          src={product.img}
                          alt=""
                          className="product-thumb"
                        ></img>
                      </Link>
                      <h2>
                        <Link
                          to={{
                            pathname: "/viewProduct/",
                            state: { product1: product },
                          }}
                        >
                          {product.name}
                        </Link>
                      </h2>
                      <div className="product-wid-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="product-wid-price">
                        <ins>{product.price}</ins>{" "}
                        {product.old_price != 0.0 ? (
                          <del>{product.old_price}</del>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <b>No Products</b>
                )}
              </div>
            </div>
            <div className="col-md-4">
              <div className="single-product-widget">
                <h2 className="product-wid-title">Top New</h2>
                <a href="#" className="wid-view-more">
                  View All
                </a>

                {top_new ? (
                  top_new.slice(0, loopIndex).map((product) => (
                    <div className="single-wid-product" key={product.id}>
                      <Link
                        to={{
                          pathname: "/viewProduct/",
                          state: { product1: product },
                        }}
                      >
                        <img
                          src={product.img}
                          alt=""
                          className="product-thumb"
                        ></img>
                      </Link>
                      <h2>
                        <Link
                          to={{
                            pathname: "/viewProduct/",
                            state: { product1: product },
                          }}
                        >
                          {product.name}
                        </Link>
                      </h2>
                      <div className="product-wid-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="product-wid-price">
                        <ins>{product.price}</ins>{" "}
                        {product.old_price != 0.0 ? (
                          <del>{product.old_price}</del>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <b>No Products</b>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
