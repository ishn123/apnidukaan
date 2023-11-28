import React from 'react'
import "./home.css";
import patanjali from "../../assets/patanjali.png";
import emami from "../../assets/emami.png";
import rb from "../../assets/rblogo.png";
import itc from "../../assets/itc.png";
import bprice from '../../assets/bp.png'
import catlog from "../../assets/catlog.png";
import uf from "../../assets/uf.png"
import yipee from "../../assets/yipee.jpeg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/autoplay";


const Home = () => {
    return (
        <>
            <div className="hero-wrapper">
                <div className="hero-banner-title">
                    <h2>Manage your Products easily.</h2>
                </div>
                <div className="hero-about">
                    <p>ApniDukaan (A place for wholesellers)</p>
                </div>
            </div>
            <div className="brands-wrapper">
                <p>Brands we work with</p>
                <div className="list-brands">
                    <div className="brandimage-items">
                        <LazyLoadImage src={rb} height={120} width={200} effect='blur' wrapperProps={{
                            style: { transitionDelay: "1s" },
                        }} />
                    </div>
                    <div className="brandimage-items">
                        <LazyLoadImage src={emami} height={100} width={110} effect='blur' wrapperProps={{
                            style: { transitionDelay: "1s" },
                        }} />
                    </div>
                    <div className="brandimage-items">
                        <LazyLoadImage src={itc} height={100} width={100} effect='blur' wrapperProps={{
                            style: { transitionDelay: "1s" },
                        }} />
                    </div>
                    <div className="brandimage-items">
                        <LazyLoadImage src={patanjali} height={100} width={200} effect='blur' wrapperProps={{
                            style: { transitionDelay: "1s" },
                        }} />
                    </div>
                </div>
            </div>

            <div className="why-wrapper">
                <div className="why-header">
                    <h2>Why ApniDukaan</h2>
                </div>
                <div className="why-section-wrapper">
                    <div className="why1">
                        <div className="why1-content common">
                            <div className="bp-wrapper">
                                <img src={bprice}
                                    height="100px" width="120px" alt='best price'></img>
                            </div>
                            <div className="bp-title-wrapper">
                                <h2>Best Prices Guaranteed</h2>
                            </div>
                            <div className="bp-content">
                                <p>We negotiate directly with suppliers to bring you the best prices on a wide range of FMCG products. Save more and increase your profit margins with every purchase.</p>
                            </div>

                        </div>
                    </div>
                    <div className="why2">
                        <div className="why2-content common">
                            <div className="bp-wrapper">
                                <img src={uf}
                                    height="100px" width="120px" alt='best price'></img>
                            </div>
                            <div className="bp-title-wrapper">
                                <h2>User-Friendly Platform</h2>
                            </div>
                            <div className="bp-content">
                                <p>Our website is intuitively designed for a seamless and efficient browsing experience. Easily navigate through categories, place orders, and manage your account effortlessly.</p>
                            </div>

                        </div>
                    </div>
                    <div className="why3">
                        <div className="why3-content common">
                            <div className="bp-wrapper">
                                <img src={catlog}
                                    height="100px" width="120px" alt='best price'></img>
                            </div>
                            <div className="bp-title-wrapper">
                                <h2>User-Friendly Platform</h2>
                            </div>
                            <div className="bp-content">
                                <p>Explore a comprehensive catalog of FMCG products, ensuring that you find everything you need under one roof. From household essentials to niche products, we've got you covered..</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div id='here' name="here">
               <h1>Sale</h1>
                <Swiper

                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    loop={true}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    speed={1000}
                    draggable
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false
                    }}

                >
                    <SwiperSlide>
                        <div className="sale-box-wrapper">
                            <div className="product-on-sale-desc">
                                <div className="product-title-wrapper">
                                    <h2>Yipee-100gm</h2>
                                </div>
                                <div className="product-sale-desc">
                                    <p>Indulge in the delicious world of ITC Yippee Noodles – the perfect blend of taste, convenience, and quality. Crafted with care, these instant noodles bring a delightful twist to your everyday meals.

                                    </p>
                                </div>
                                <div className="product-sale-buynow">
                                    <div className="buy-now">Buy Now</div>
                                </div>
                            </div>


                            <div className="product-on-sale-img-cont">
                                <LazyLoadImage src={yipee} height={300} width={300} effect='blur' wrapperProps={{
                                    style: { transitionDelay: "1s" },
                                }} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sale-box-wrapper">
                            <div className="product-on-sale-desc">
                                <div className="product-title-wrapper">
                                    <h2>Yipee-100gm</h2>
                                </div>
                                <div className="product-sale-desc">
                                    <p>Indulge in the delicious world of ITC Yippee Noodles – the perfect blend of taste, convenience, and quality. Crafted with care, these instant noodles bring a delightful twist to your everyday meals.

                                    </p>
                                </div>
                                <div className="product-sale-buynow">
                                    <div className="buy-now">Buy Now</div>
                                </div>
                            </div>


                            <div className="product-on-sale-img-cont">
                                <LazyLoadImage src={yipee} height={300} width={300} effect='blur' wrapperProps={{
                                    style: { transitionDelay: "1s" },
                                }} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sale-box-wrapper">
                            <div className="product-on-sale-desc">
                                <div className="product-title-wrapper">
                                    <h2>Yipee-100gm</h2>
                                </div>
                                <div className="product-sale-desc">
                                    <p>Indulge in the delicious world of ITC Yippee Noodles – the perfect blend of taste, convenience, and quality. Crafted with care, these instant noodles bring a delightful twist to your everyday meals.

                                    </p>
                                </div>
                                <div className="product-sale-buynow">
                                    <div className="buy-now">Buy Now</div>
                                </div>
                            </div>


                            <div className="product-on-sale-img-cont">
                                <LazyLoadImage src={yipee} height={300} width={300} effect='blur' wrapperProps={{
                                    style: { transitionDelay: "1s" },
                                }} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sale-box-wrapper">
                            <div className="product-on-sale-desc">
                                <div className="product-title-wrapper">
                                    <h2>Yipee-100gm</h2>
                                </div>
                                <div className="product-sale-desc">
                                    <p>Indulge in the delicious world of ITC Yippee Noodles – the perfect blend of taste, convenience, and quality. Crafted with care, these instant noodles bring a delightful twist to your everyday meals.

                                    </p>
                                </div>
                                <div className="product-sale-buynow">
                                    <div className="buy-now">Buy Now</div>
                                </div>
                            </div>


                            <div className="product-on-sale-img-cont">
                                <LazyLoadImage src={yipee} height={300} width={300} effect='blur' wrapperProps={{
                                    style: { transitionDelay: "1s" },
                                }} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sale-box-wrapper">
                            <div className="product-on-sale-desc">
                                <div className="product-title-wrapper">
                                    <h2>Yipee-100gm</h2>
                                </div>
                                <div className="product-sale-desc">
                                    <p>Indulge in the delicious world of ITC Yippee Noodles – the perfect blend of taste, convenience, and quality. Crafted with care, these instant noodles bring a delightful twist to your everyday meals.

                                    </p>
                                </div>
                                <div className="product-sale-buynow">
                                    <div className="buy-now">Buy Now</div>
                                </div>
                            </div>


                            <div className="product-on-sale-img-cont">
                                <LazyLoadImage src={yipee} height={300} width={300} effect='blur' wrapperProps={{
                                    style: { transitionDelay: "1s" },
                                }} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sale-box-wrapper">
                            <div className="product-on-sale-desc">
                                <div className="product-title-wrapper">
                                    <h2>Yipee-100gm</h2>
                                </div>
                                <div className="product-sale-desc">
                                    <p>Indulge in the delicious world of ITC Yippee Noodles – the perfect blend of taste, convenience, and quality. Crafted with care, these instant noodles bring a delightful twist to your everyday meals.

                                    </p>
                                </div>
                                <div className="product-sale-buynow">
                                    <div className="buy-now">Buy Now</div>
                                </div>
                            </div>


                            <div className="product-on-sale-img-cont">
                                <LazyLoadImage src={yipee} height={300} width={300} effect='blur' wrapperProps={{
                                    style: { transitionDelay: "1s" },
                                }} />
                            </div>
                        </div>
                    </SwiperSlide>

                      
                </Swiper>
            </div>
        </>
    )
}

export default Home