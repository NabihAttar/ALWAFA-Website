'use client'

import Image from "next/image"


const services = [
  { title: "Air & Land Freight", subtitle: "(Import & Export)", icon: "assets/images/services-icon/air-land.svg"},
  { title: "Customs Clearance", subtitle: "(Beirut Airport & Port)", icon: "assets/images/services-icon/catgo-insurance.svg" },
  { title: "Consulting & Logistics", subtitle: "Outsourcing", icon: "assets/images/services-icon/consulting&logistics.svg" },
  { title: "Door-to-Door", subtitle: "(D2D) Shipping", icon: "assets/images/services-icon/customs-clearance.svg" },
  { title: "Cargo Insurance", subtitle: "Solutions", icon: "assets/images/services-icon/door-to-door.svg" },
  { title: "Inland Trucking", subtitle: "(E2E)", icon: "assets/images/services-icon/inland-trucking.svg" },
  { title: "Global Warehousing", subtitle: "", icon: "assets/images/services-icon/global-warehousing.svg" },
]
// small helper: use <img> for svg, <Image> for others
function ServiceIcon({ src, alt, priority }) {
  const isSvg = src.toLowerCase().endsWith('.svg')
  if (isSvg) {
    return (
      <img
        src={src}
        alt={alt}
        width={30}
        height={30}
        style={{ objectFit: 'contain' }}
        onError={(e) => { e.currentTarget.src = '/images/services-icon/placeholder.png' }}
      />
    )
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={30}
      height={30}
      style={{ objectFit: "contain" }}
      priority={priority}
      onError={(e) => { /* Next/Image doesn’t expose target – keep a placeholder below */ }}
    />
  )
}

export default function Services() {



  return (
  <section className="service-two" style={{ backgroundColor: "rgba(22, 28, 37, 1)", paddingTop: "100px", paddingBottom: "100px" }}>
      <div className="container">
        <div className="sec-title center text-center tg-heading-subheading animation-style2">
          <div className="sec-title__tagline">
            <div className="line"></div>
            <div className="text tg-element-title"><h4>Our Services</h4></div>
            <div className="icon"><span className="icon-plane2 float-bob-x3"></span></div>
          </div>
          <h2 className="sec-title__title tg-element-title">Our Services at Glance</h2>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <div key={i} className="service-card">
              <div className="circle">
                <ServiceIcon src={service.icon} alt={service.title} priority={i < 3} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.subtitle}</p>
              <div className="line-bottom"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
