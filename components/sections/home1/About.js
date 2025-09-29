'use client'
import Link from "next/link"
import ReactCurvedText from 'react-curved-text'

export default function About() {
  return (
    <>
      <section className="about-one" style={{ backgroundColor: "rgb(14, 19, 30)" }}>
        <div className="container">
          <div className="row">
            {/* was col-xl-5 */}
            <div className="col-xl-5 col-lg-6">
              <div className="about-one__img">
                <div className="shape1 float-bob-y">
                  <img src="assets/images/shapes/airplane-down-about.png" alt="" />
                </div>
                <div className="shape2 float-bob-y">
                  <img src="assets/images/shapes/points.png" alt="" />
                </div>
                <div className="about-one__img1 reveal">
                  <img src="assets/images/about/about-img1.png" alt="" />
                </div>

                <div className="about-one__img2">
                  <div className="about-one__img2-inner reveal">
                    <img src="assets/images/about/about-img2.png" alt="" />
                  </div>

                  <div className="shape3 float-bob-y">
                    <img src="assets/images/shapes/airplane-up-about.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* Start About One Content | was col-xl-7 */}
            <div className="col-xl-7 col-lg-6">
              <div className="about-one__content">
                <div className="sec-title tg-heading-subheading animation-style2">
                  <div className="sec-title__tagline">
                    <div className="line"></div>
                    <div className="text tg-element-title">
                      <h4>Our Company</h4>
                    </div>
                    <div className="icon">
                      <span className="icon-plane2 float-bob-x3"></span>
                    </div>
                  </div>
                  <h2 className="sec-title__title tg-element-title">
                    Building Bridges<br />Across Borders
                  </h2>
                </div>

                <div className="about-one__content-text1">
                  <p>
                    At GTT, logistics isn't just about moving goods, it's about building bridges across borders.
                    We connect continents, empower commerce, and simplify international trade. <br />
                    With a decade of experience and operations spanning Lebanon, Europe, Asia, and the Middle East,
                    we offer the reliability of a global player with the agility of a local partner.
                  </p>
                </div>

                <div className="about-one__content-text2">
                  <div className="row">
                    {/* change col-md-4 -> col-md-6 for tablet 2-up */}
                    <div className="col-xl-4 col-lg-4 col-md-6">
                      <div className="about-one__content-text2-single-top">
                        <div className="icon"><span className="icon-check1"></span></div>
                        <div className="title-box"><h3>Air Shipment</h3></div>
                      </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6">
                      <div className="about-one__content-text2-single-top">
                        <div className="icon"><span className="icon-check1"></span></div>
                        <div className="title-box"><h3>Land Shipment</h3></div>
                      </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6">
                      <div className="about-one__content-text2-single-top">
                        <div className="icon"><span className="icon-check1"></span></div>
                        <div className="title-box"><h3>Sea Shipment</h3></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="about-one__content-bottom">
                  <div className="btn-box">
                    <Link className="thm-btn" href="about">
                      Discover More
                      <i className="icon-right-arrow21"></i>
                      <span className="hover-btn hover-bx"></span>
                      <span className="hover-btn hover-bx2"></span>
                      <span className="hover-btn hover-bx3"></span>
                      <span className="hover-btn hover-bx4"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* End About One Content */}
          </div>
        </div>
      </section>
    </>
  )
}
