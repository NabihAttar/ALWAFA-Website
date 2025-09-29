
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
                                <h2 style={{ color: "white" }}>Key Objectives:</h2>
                                <p style={{ color: "rgb(143, 143, 143)" }}>
                                    With headquarters near Rafic Hariri International Airport and warehousing hubs in different countries, GTT ensures smooth logistics across key international countries:
                                </p>
                                <ul>
                                    <li>
                                        <p style={{ color: "rgb(143, 143, 143)" }}><span className="icon-arrow-right-circle"></span> China</p>
                                    </li>
                                    <li>
                                        <p style={{ color: "rgb(143, 143, 143)" }}><span className="icon-arrow-right-circle"></span> Turkey</p>
                                    </li>
                                    <li>
                                        <p style={{ color: "rgb(143, 143, 143)" }}><span className="icon-arrow-right-circle"></span> Dubai</p>
                                    </li>
                                    <li>
                                        <p style={{ color: "rgb(143, 143, 143)" }}><span className="icon-arrow-right-circle"></span> France</p>
                                    </li>
                                    <li>
                                        <p style={{ color: "rgb(143, 143, 143)" }}><span className="icon-arrow-right-circle"></span> Italy</p>
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
