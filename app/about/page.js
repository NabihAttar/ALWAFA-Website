'use client'
import Layout from "@/components/layout/Layout"
import fixImagePath from "@/lib/fixImagePath"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import TestimonialSlider from '@/components/slider/TestimonialSlider'
import Link from "next/link"
import ReactCurvedText from 'react-curved-text'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import About2 from "../about2/page"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },


    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,

        },
        575: {
            slidesPerView: 1,

        },
        767: {
            slidesPerView: 2,

        },
        991: {
            slidesPerView: 2,

        },
        1199: {
            slidesPerView: 3,

        },
        1350: {
            slidesPerView: 3,

        },
    }



}

export default function Home() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="About company">

                {/*Start About One*/}
                <section className="about-one" style={{ background: "rgba(15, 21, 30)" }}>
                    <div className="container" >
                        <div className="row">
                            {/*Start About One Content*/}
                            <div className="col-xl-7 col-lg-6" >
                                <div className="about-one__content">
                                    <div className="sec-title tg-heading-subheading animation-style2">
                                        <div className="sec-title__tagline">
                                            <div className="line"></div>
                                            <div className="text tg-element-title">
                                                <h4 style={{ color: "white" }}>Our Company</h4>
                                            </div>
                                            <div className="icon">
                                                <span className="icon-plane2 float-bob-x3"></span>
                                            </div>
                                        </div>
                                        <h2 className="sec-title__title tg-element-title" style={{ color: "white" }}>Who We Are<br />
                                            {/* <span>Logistics
                                                Solutions</span> */}
                                        </h2>
                                    </div>

                                    <div className="about-one__content-text1">
                                        <p style={{ color: "rgb(143, 143, 143)" }}>Al-Wafa Export Group is a MENA-based export partner delivering end-to-end solutions from supplier to customer. We manage sourcing and product verification,  and multimodal freight air, sea, and land with predictable timelines and clear pricing.</p>
                                    </div>

                                    <div className="about-one__content-text2">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="about-one__content-text2-single" style={{ backgroundColor: "rgba(24, 35, 50, 100)" }}>
                                                    <div className="about-one__content-text2-single-top">
                                                        <div className="icon">
                                                            <span className="icon-worldwide-shipping-1"></span>
                                                        </div>

                                                        <div className="title-box">
                                                            <h3 style={{ color: "white" }}>Our Mission</h3>
                                                        </div>
                                                    </div>

                                                    <p style={{ color: "rgba(142, 142, 142)" }}>To guide clients through export complexity with precise documentation, smart routing, and consistent service.</p>
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="about-one__content-text2-single" style={{ backgroundColor: "rgba(24, 35, 50, 100)" }}>
                                                    <div className="about-one__content-text2-single-top">
                                                        <div className="icon">
                                                            <span className="icon-24-hours-service"></span>
                                                        </div>

                                                        <div className="title-box">
                                                            <h3 style={{ color: "white" }}>Our Vision</h3>
                                                        </div>
                                                    </div>

                                                    <p style={{ color: "rgba(142, 142, 142)" }}>To set the standard for dependable exports from our region clear updates, fair pricing, and zero surprises.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>




                                    <div className="about-one__content-bottom">
                                        <div className="contact-box ">
                                            <div className="icon" >
                                                <span className="icon-phone2"></span>
                                            </div>

                                            <div className="text-box" >
                                                <p style={{ color: "#89f2ff" }}>Make A Phone Call</p>
                                                <h4><Link href="tel:+61420222255" style={{ color: "white" }}>+61 420 22 22 55</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6">
                                <div className="about-one__img">
                                    <div className="shape1 float-bob-y"><img src={fixImagePath("shapes/airplane-down-about.png")} alt="" />
                                    </div>
                                    <div className="shape2 float-bob-y"><img src={fixImagePath("shapes/points.png")} alt="" />
                                    </div>
                                    <div className="about-one__img1 reveal">
                                        <img src={fixImagePath("about/WhyChooseUs2.png")} alt="" />
                                    </div>

                                    <div className="about-one__img2">
                                        <div className="about-one__img2-inner reveal">
                                            <img src={fixImagePath("about/WhyChooseUs1.png")} alt="" />
                                        </div>

                                        <div className="shape3 float-bob-y">
                                            <img src={fixImagePath("shapes/airplane-up-about.png")} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End About One Content*/}

                        </div>
                    </div>

                </section>
                <About2 />

                {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} /> */}
            </Layout>
        </>
    )
}


