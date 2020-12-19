import React from 'react'
import {useParams } from "react-router-dom";

function ViewProduct() {
    const { productID } = useParams()
    return (
        <div>
   
    <div className="product-big-title-area">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="product-bit-title text-center">
                        <h2>name: {productID}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    <div className="single-product-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="single-sidebar">
                        <h2 className="sidebar-title">Search Products</h2>
                        <form >
                            <input type="text" placeholder="Search products..."></input>
                            <input type="submit" value="Search"></input>
                        </form>
                    </div>
                    
                    <div className="single-sidebar">
                        <h2 className="sidebar-title">Products</h2>
                        <div className="thubmnail-recent">
                            <img src="img/product-thumb-1.jpg" className="recent-thumb" alt=""></img>
                            <h2><a href="">Sony Smart TV - 2015</a></h2>
                            <div className="product-sidebar-price">
                                <ins>$700.00</ins> <del>$800.00</del>
                            </div>                             
                        </div>
                        <div className="thubmnail-recent">
                            <img src="img/product-thumb-1.jpg" className="recent-thumb" alt=""></img>
                            <h2><a href="">Sony Smart TV - 2015</a></h2>
                            <div className="product-sidebar-price">
                                <ins>$700.00</ins> <del>$800.00</del>
                            </div>                             
                        </div>
                        <div className="thubmnail-recent">
                            <img src="img/product-thumb-1.jpg" className="recent-thumb" alt=""></img>
                            <h2><a href="">Sony Smart TV - 2015</a></h2>
                            <div className="product-sidebar-price">
                                <ins>$700.00</ins> <del>$800.00</del>
                            </div>                             
                        </div>
                        <div className="thubmnail-recent">
                            <img src="img/product-thumb-1.jpg" className="recent-thumb" alt=""></img>
                            <h2><a href="">Sony Smart TV - 2015</a></h2>
                            <div className="product-sidebar-price">
                                <ins>$700.00</ins> <del>$800.00</del>
                            </div>                             
                        </div>
                    </div>
                    
                    <div className="single-sidebar">
                        <h2 className="sidebar-title">Recent Posts</h2>
                        <ul>
                            <li><a href="">Sony Smart TV - 2015</a></li>
                            <li><a href="">Sony Smart TV - 2015</a></li>
                            <li><a href="">Sony Smart TV - 2015</a></li>
                            <li><a href="">Sony Smart TV - 2015</a></li>
                            <li><a href="">Sony Smart TV - 2015</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="col-md-8">
                    <div className="product-content-right">
                        <div className="product-breadcroumb">
                            <a href="">Home</a>
                            <a href="">Category Name</a>
                            <a href="">Sony Smart TV - 2015</a>
                        </div>
                        
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="product-images">
                                    <div className="product-main-img">
                                        <img src="img/product-2.jpg" alt=""></img>
                                    </div>
                                    
                                    <div className="product-gallery">
                                        <img src="img/product-thumb-1.jpg" alt=""></img>
                                        <img src="img/product-thumb-2.jpg" alt=""></img>
                                        <img src="img/product-thumb-3.jpg" alt=""></img>
                                        <img src="img/product-thumb-4.jpg" alt=""></img>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-sm-6">
                                <div className="product-inner">
                                    <h2 className="product-name">Sony Smart TV - 2015</h2>
                                    <div className="product-inner-price">
                                        <ins>$700.00</ins> <del>$800.00</del>
                                    </div>    
                                    
                                    <form  className="cart">
                                        <div className="quantity">
                                            <input type="number" size="4" className="input-text qty text" title="Qty" defaultValue="1" name="quantity" min="1" step="1"></input>
                                        </div>
                                        <button className="add_to_cart_button" type="submit">Add to cart</button>
                                    </form>   
                                    
                                    <div className="product-inner-category">
                                        <p>Category: <a href="">Summer</a>. Tags: <a href="">awesome</a>, <a href="">best</a>, <a href="">sale</a>, <a href="">shoes</a>. </p>
                                    </div> 
                                    
                                    <div role="tabpanel">
                                        <ul className="product-tab" role="tablist">
                                            <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Description</a></li>
                                            <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Reviews</a></li>
                                        </ul>
                                        <div className="tab-content">
                                            <div role="tabpanel" className="tab-pane fade in active" id="home">
                                                <h2>Product Description</h2>  
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.</p>

                                                <p>Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero.</p>
                                            </div>
                                            <div role="tabpanel" className="tab-pane fade" id="profile">
                                                <h2>Reviews</h2>
                                                <div className="submit-review">
                                                    <p><label htmlFor="name">Name</label> <input name="name" type="text"></input></p>
                                                    <p><label htmlFor="email">Email</label> <input name="email" type="email"></input></p>
                                                    <div className="rating-chooser">
                                                        <p>Your rating</p>

                                                        <div className="rating-wrap-post">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <p><label htmlFor="review">Your review</label> <textarea name="review" id="" cols="30" rows="10"></textarea></p>
                                                    <p><input type="submit" value="Submit"></input></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="related-products-wrapper">
                            <h2 className="related-products-title">Related Products</h2>
                            <div className="related-products-carousel">
                                <div className="single-product">
                                    <div className="product-f-image">
                                        <img src="img/product-1.jpg" alt=""></img>
                                        <div className="product-hover">
                                            <a href="" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                            <a href="" className="view-details-link"><i className="fa fa-link"></i> See details</a>
                                        </div>
                                    </div>

                                    <h2><a href="">Sony Smart TV - 2015</a></h2>

                                    <div className="product-carousel-price">
                                        <ins>$700.00</ins> <del>$800.00</del>
                                    </div> 
                                </div>
                                <div className="single-product">
                                    <div className="product-f-image">
                                        <img src="img/product-2.jpg" alt=""></img>
                                        <div className="product-hover">
                                            <a href="" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                            <a href="" className="view-details-link"><i className="fa fa-link"></i> See details</a>
                                        </div>
                                    </div>

                                    <h2><a href="">Apple new mac book 2015 March :P</a></h2>
                                    <div className="product-carousel-price">
                                        <ins>$899.00</ins> <del>$999.00</del>
                                    </div> 
                                </div>
                                <div className="single-product">
                                    <div className="product-f-image">
                                        <img src="img/product-3.jpg" alt=""></img>
                                        <div className="product-hover">
                                            <a href="" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                            <a href="" className="view-details-link"><i className="fa fa-link"></i> See details</a>
                                        </div>
                                    </div>

                                    <h2><a href="">Apple new i phone 6</a></h2>

                                    <div className="product-carousel-price">
                                        <ins>$400.00</ins> <del>$425.00</del>
                                    </div>                                 
                                </div>
                                <div className="single-product">
                                    <div className="product-f-image">
                                        <img src="img/product-4.jpg" alt=""></img>
                                        <div className="product-hover">
                                            <a href="" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                            <a href="" className="view-details-link"><i className="fa fa-link"></i> See details</a>
                                        </div>
                                    </div>

                                    <h2><a href="">Sony playstation microsoft</a></h2>

                                    <div className="product-carousel-price">
                                        <ins>$200.00</ins> <del>$225.00</del>
                                    </div>                            
                                </div>
                                <div className="single-product">
                                    <div className="product-f-image">
                                        <img src="img/product-5.jpg" alt=""></img>
                                        <div className="product-hover">
                                            <a href="" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                            <a href="" className="view-details-link"><i className="fa fa-link"></i> See details</a>
                                        </div>
                                    </div>

                                    <h2><a href="">Sony Smart Air Condtion</a></h2>

                                    <div className="product-carousel-price">
                                        <ins>$1200.00</ins> <del>$1355.00</del>
                                    </div>                                 
                                </div>
                                <div className="single-product">
                                    <div className="product-f-image">
                                        <img src="img/product-6.jpg" alt=""></img>
                                        <div className="product-hover">
                                            <a href="" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                            <a href="" className="view-details-link"><i className="fa fa-link"></i> See details</a>
                                        </div>
                                    </div>

                                    <h2><a href="">Samsung gallaxy note 4</a></h2>

                                    <div className="product-carousel-price">
                                        <ins>$400.00</ins>
                                    </div>                            
                                </div>                                    
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    </div>


    <div className="footer-top-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div className="footer-about-us">
                        <h2>e<span>Electronics</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sunt id doloribus vero quam laborum quas alias dolores blanditiis iusto consequatur, modi aliquid eveniet eligendi iure eaque ipsam iste, pariatur omnis sint! Suscipit, debitis, quisquam. Laborum commodi veritatis magni at?</p>
                        <div className="footer-social">
                            <a href="#" target="_blank"><i className="fa fa-facebook"></i></a>
                            <a href="#" target="_blank"><i className="fa fa-twitter"></i></a>
                            <a href="#" target="_blank"><i className="fa fa-youtube"></i></a>
                            <a href="#" target="_blank"><i className="fa fa-linkedin"></i></a>
                            <a href="#" target="_blank"><i className="fa fa-pinterest"></i></a>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-3 col-sm-6">
                    <div className="footer-menu">
                        <h2 className="footer-wid-title">User Navigation </h2>
                        <ul>
                            <li><a href="">My account</a></li>
                            <li><a href="">Order history</a></li>
                            <li><a href="">Wishlist</a></li>
                            <li><a href="">Vendor contact</a></li>
                            <li><a href="">Front page</a></li>
                        </ul>                        
                    </div>
                </div>
                
                <div className="col-md-3 col-sm-6">
                    <div className="footer-menu">
                        <h2 className="footer-wid-title">Categories</h2>
                        <ul>
                            <li><a href="">Mobile Phone</a></li>
                            <li><a href="">Home accesseries</a></li>
                            <li><a href="">LED TV</a></li>
                            <li><a href="">Computer</a></li>
                            <li><a href="">Gadets</a></li>
                        </ul>                        
                    </div>
                </div>
                
                <div className="col-md-3 col-sm-6">
                    <div className="footer-newsletter">
                        <h2 className="footer-wid-title">Newsletter</h2>
                        <p>Sign up to our newsletter and get exclusive deals you wont find anywhere else straight to your inbox!</p>
                        <div className="newsletter-form">
                            <input type="email" placeholder="Type your email"></input>
                            <input type="submit" defaultValue="Subscribe"></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-bottom-area">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="copyright">
                        <p>&copy; 2015 eElectronics. All Rights Reserved. Coded with <i className="fa fa-heart"></i> by <a href="http://wpexpand.com" target="_blank">WP Expand</a></p>
                    </div>
                </div>
                
                <div className="col-md-4">
                    <div className="footer-card-icon">
                        <i className="fa fa-cc-discover"></i>
                        <i className="fa fa-cc-mastercard"></i>
                        <i className="fa fa-cc-paypal"></i>
                        <i className="fa fa-cc-visa"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default ViewProduct
