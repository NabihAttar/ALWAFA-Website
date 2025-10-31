
"use client";
import fixImagePath from "@/lib/fixImagePath";

export default function About2() {
    return (
        <section className="about-one"  style={{ backgroundColor: "rgb(22, 28, 37)" }}>
            <div className="project-details__inner" >
                 <div className="container" >
                        <div className="row">
                <div className="project-details__text2">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="project-details__text2-img">
                                <div className="inner">
                                    <img src={fixImagePath("project/project-details-img2.jpg")} alt="" />
                                    <div className="project-details__video-link">
                                        <img
                                            src={fixImagePath("project/about.png")}
                                            alt="Project details"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="project-details__text2-content">
                                <h2 style={{ color: "white" }}>We Ship Worldwide</h2>
                                <p style={{ color: "rgb(143, 143, 143)" }}>
                                   Al-Wafa Export Group manages exports from MENA to compliant destinations across the globe through partner networks at major ports and airports.
                                </p>
                                <ul>
                                    <li>
                                        <p style={{ color: "rgb(143, 143, 143)" }}><span className="icon-arrow-right-circle"></span> Middle East & North Africa</p>
                                    </li>
                                    <li>
                                        <p style={{ color: "rgb(143, 143, 143)" }}><span className="icon-arrow-right-circle"></span> Europe</p>
                                    </li>
                                    <li>
                                        <p style={{ color: "rgb(143, 143, 143)" }}><span className="icon-arrow-right-circle"></span> Asia–Pacific</p>
                                    </li>
                                    <li>
                                        <p style={{ color: "rgb(143, 143, 143)" }}><span className="icon-arrow-right-circle"></span> North & South America </p>
                                    </li>
                                    <li>
                                        <p style={{ color: "rgb(143, 143, 143)" }}><span className="icon-arrow-right-circle"></span> Sub-Saharan & North Africa</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </section>

    );
}
