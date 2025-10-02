"use client";

import Layout from "@/components/layout/Layout";
import TrackingProgress from "@/components/TrackingProgress";
import TrackingHistory from "@/components/TrackingHistory";
export default function Track() {
  // define your progress data
  // const steps = ["Lebanon, Beirut", "Turkey, Port","london", "China, City",];
  // const current = 1; // 0=Lebanon, 1=Turkey, 2=China
  const steps = ["Lebanon, Beirut", "In Transit", "China, City"];

  const rows = [
    { date: 'Nov 8', time: '10:37 AM', title: 'Out for Delivery', desc: 'The parcel is on its way to you.' },
    { date: 'Nov 8', time: '10:37 AM', title: 'In Transit', desc: 'Package arrived at facility.' },
    { date: 'Nov 8', time: '10:37 AM', title: 'In Transit', desc: 'Package in transit to destination.' },
    { date: 'Nov 8', time: '10:37 AM', title: 'Picked Up', desc: 'Package picked up from sender.' },
        { date: 'Nov 8', time: '10:37 AM', title: 'Picked Up', desc: 'Package picked up from sender.' },

  ];

  // 0..100 only from segment


  const current = 1;
  const segment = 1;
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.currentTarget.elements.namedItem("tracking")?.value.trim();
    if (!value) return;
    console.log("Tracking:", value);
  };

  const bgImage = "assets/images/services/trackBanner.png";


  return (
    <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Track Package"
      // bgImage={"/assets/images/services/sericesBanner.png"}
      bgImage={bgImage}

    >
      {/* Section 1: Tracking Form */}
      <section className="track-section">
        <div className="container">
          <div className="track-card">
            <div className="track-card__head" >
              <span className="track-card__icon" aria-hidden="true" style={{ backgroundColor: "white" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"  >
                  <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" stroke="black" strokeWidth="1.5" />
                  <path d="M12 7l9 5M12 7L3 12M12 7v10" stroke="black" strokeWidth="1.5" />
                </svg>
              </span>
              <div>
                <h3 className="track-card__title">Track your Package</h3>
                <p className="track-card__subtitle">Enter your tracking number to get real-time updates.</p>
              </div>
            </div>

            <form className="track-form" onSubmit={handleSubmit}>
              <label htmlFor="tracking" className="sr-only">Tracking number</label>
              <div className="track-form__inputWrap">
                <input
                  id="tracking"
                  name="tracking"
                  type="text"
                  placeholder="Enter your tracking number to get real-time updates."
                  className="track-form__input"
                  autoComplete="off"
                />
                <button type="submit" className="track-form__btn" style={{ color: "black" }}>Search</button>
              </div>
              <p className="track-form__hint">Supported formats: UPS, FedEx, DHL, USPS</p>
            </form>
          </div>
        </div>
      </section>

      {/* Section 2: Package Details */}
      <section className="package-section">
        <div className="container">
          <div className="package-card">
            <div className="package-card__header">
              <div>
                <h3 style={{ color: "#ffffff" }}>Package Details</h3>
                <p className="tracking-number">Tracking #: 12999AA1234567890</p>
              </div>
              <button className="status-btn">Out for Delivery</button>
            </div>

            <div className="package-card__grid" style={{ marginBottom: 86 }}>
              <div>
                <p className="label">
                  <span className="icon ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                    </svg>
                  </span>
                  CURRENT LOCATION
                </p>
                <p>Location Address</p>
              </div>

              <div>
                <p className="label">
                  <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                    </svg>
                  </span>
                  ESTIMATED DELIVERY
                </p>
                <p>Date Time</p>
              </div>

              <div>
                <p className="label">
                  <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3a9 9 0 1 0 9 9A9 9 0 0 0 12 3zm0 16a7 7 0 1 1 7-7 7 7 0 0 1-7 7zm1-13h-2v6h6v-2h-4z" />
                    </svg>
                  </span>
                  ORDER WEIGHT
                </p>
                <p>weight</p>
              </div>

              <div>
                <p className="label">
                  <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 8h-3V4H3v13h2a3 3 0 0 0 6 0h6a3 3 0 0 0 6 0h1v-5l-4-4zm-11 9a1 1 0 1 1-1-1 1 1 0 0 1 1 1zm10 0a1 1 0 1 1-1-1 1 1 0 0 1 1 1zm-2-7h2.586L20 12.586V14h-3z" />
                    </svg>
                  </span>
                  CARRIER
                </p>
                <p>Carrier Name</p>
              </div>

              <div>
                <p className="label">
                  <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3-1 3 1v-1.5L13 19v-5.5z" />
                    </svg>
                  </span>
                  SHIPMENT TYPE
                </p>
                <p>Air Shipment</p>
              </div>

              <div>
                <p className="label">
                  <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 16V8a1 1 0 0 0-.553-.894l-8-4a1 1 0 0 0-.894 0l-8 4A1 1 0 0 0 3 8v8a1 1 0 0 0 .553.894l8 4a1 1 0 0 0 .894 0l8-4A1 1 0 0 0 21 16zm-9 3.382L6 16.118V9.882l6 3.264zm1-7.236l-6-3.264 6-3.264 6 3.264z" />
                    </svg>
                  </span>
                  NO. OF PACKAGES
                </p>
                <p>number</p>
              </div>
            </div>

            {/* Progress line with top hairline */}



            {/* <div
  className="package-progress"
  style={{ "--progress": `${(steps.length > 1 ? (current / (steps.length - 1)) : 1) * 100}%` }}
>
  {steps.map((label, i) => (
    <div className="pp-item" key={label + i}>
      <span className={`pp-dot ${i < current ? "is-done" : ""} ${i === current ? "is-active" : ""}`} />
      <p className="pp-label">{label}</p>
    </div>
  ))}
</div> */}




            <div >
              <TrackingProgress steps={steps} current={1} segment={0.8} /></div>
          </div>
        </div>
      </section>
      <TrackingHistory rows={rows} segment={0.8} />
      {/* Section 3: Tracking History */}
      {/* <section className="history-section">
        <div className="container">
          <div className="history-card">
            <h3 className="history-card__title">Tracking History</h3>

            <div className="timeline">
              <div className="timeline__line" />
              <div className="timeline__row">
                <div className="timeline__date"><h6  style={{color: "white"}}>Nov 8</h6><h6  style={{color: "white"}}>10:37 AM</h6></div>
                <div className="timeline__track"><span className="timeline__dot timeline__dot--muted" /></div>
                <div className="timeline__content">
                  <h6 className="timeline__title">Out for Delivery</h6>
                  <h6 className="timeline__desc">The parcel is on its way to you.</h6>
                </div>
              </div>

              <div className="timeline__row">
                <div className="timeline__date"><h6  style={{color: "white"}}>Nov 8</h6><h6  style={{color: "white"}}>10:37 AM</h6></div>
                <div className="timeline__track"><span className="timeline__dot" /></div>
                <div className="timeline__content">
                  <h6 className="timeline__title">In Transit</h6>
                  <h6 className="timeline__desc">Package arrived at facility.</h6>
                </div>
              </div>

              <div className="timeline__row">
                <div className="timeline__date"><h6  style={{color: "white"}}>Nov 8</h6><h6  style={{color: "white"}}>10:37 AM</h6></div>
                <div className="timeline__track"><span className="timeline__dot" /></div>
                <div className="timeline__content">
                  <h6 className="timeline__title">In Transit</h6>
                  <h6 className="timeline__desc">Package in transit to destination.</h6>
                </div>
              </div>

              <div className="timeline__row">
                <div className="timeline__date"><h6  style={{color: "white"}}>Nov 8</h6><h6  style={{color: "white"}}>10:37 AM</h6></div>
                <div className="timeline__track"><span className="timeline__dot" /></div>
                <div className="timeline__content">
                  <h6 className="timeline__title">Picked Up</h6>
                  <h6 className="timeline__desc">Package picked up from sender.</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  );
}
