import Link from "next/link";

export default function WhyChooseUs() {
  return (
    <>
  <section className="why-choose-one" style={{ background: "rgba(15, 21, 30, 1)", paddingBottom: "260px" }}>
        <div className="why-choose-one__pattern">
          <img src="assets/images/pattern/why-choose-v1-pattern.png" alt="" />
        </div>

        <div className="container">
          <div className="row align-items-center">
            {/* Left: Content */}
            <div className="col-xl-6 col-lg-6">
              <div className="why-choose-one__content">
                <div className="sec-title tg-heading-subheading animation-style2">
                  <div className="sec-title__tagline">
                    <div className="line"></div>
                    <div className="text tg-element-title">
                      <h4>Why Choose us</h4>
                    </div>
                    <div className="icon">
                      <span className="icon-plane2 float-bob-x3"></span>
                    </div>
                  </div>
                  <h2 className="sec-title__title tg-element-title">Our Core Values</h2>
                </div>

                <div className="why-choose-one__content-list">
                  <ul>
                    <li><p><span className="icon-plane2"></span> Direct-from-Factory Rates</p></li>
                    <li><p><span className="icon-plane2"></span> Docs & Customs Done Right</p></li>
                    <li><p><span className="icon-plane2"></span> On-Time, Transparent Shipping</p></li>
                    <li><p><span className="icon-plane2"></span> One Team, End-to-End</p></li>
                  </ul>
                </div>

                <div className="btn-box">
                  <Link className="thm-btn" href="/contact">
                    Get A free Quote 
                    <i className="icon-right-arrow21"></i>
                    <span className="hover-btn hover-bx"></span>
                    <span className="hover-btn hover-bx2"></span>
                    <span className="hover-btn hover-bx3"></span>
                    <span className="hover-btn hover-bx4"></span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Images */}
            <div className="col-xl-5 offset-xl-1 col-lg-6">
              <div className="about-one__img">
                <div className="shape2 float-bob-y">
                  <img src="assets/images/shapes/points.png" alt="" />
                </div>
                <div className="about-one__img1 reveal">
                  <img src="assets/images/about/WhyChooseUs1.png" alt="" />
                </div>
                <div className="about-one__img2">
                  <div className="about-one__img2-inner reveal">
                    <img src="assets/images/about/WhyChooseUs2.png" alt="" />
                  </div>
                  <div className="shape3 float-bob-y">
                    <img src="assets/images/shapes/airplane-up-about.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* End Right */}
          </div>
        </div>
      </section>
    </>
  );
}
