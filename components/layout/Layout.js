
// 'use client'
// import { useEffect, useState } from "react"
// import BackToTop from '../elements/BackToTop'
// import DataBg from "../elements/DataBg"
// import Breadcrumb from './Breadcrumb'
// import SearchPopup from "./SearchPopup"
// import Sidebar from "./Sidebar"
// import Header1 from "./header/Header1"
// import Header2 from './header/Header2'
// import Header3 from "./header/Header3"
// import Footer1 from './footer/Footer1'
// import Footer2 from './footer/Footer2'
// import Footer3 from "./footer/Footer3"

// export default function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children, wrapperCls }) {
//     const [scroll, setScroll] = useState(0)
//     // Mobile Menu
//     const [isMobileMenu, setMobileMenu] = useState(false)
//     const handleMobileMenu = () => {
//         setMobileMenu(!isMobileMenu)
//         !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible")
//     }

//     // Popup
//     const [isPopup, setPopup] = useState(false)
//     const handlePopup = () => setPopup(!isPopup)

//     // Sidebar
//     const [isSidebar, setSidebar] = useState(false)
//     const handleSidebar = () => setSidebar(!isSidebar)

//     useEffect(() => {
//         const WOW = require('wowjs')
//         window.wow = new WOW.WOW({
//             live: false
//         })
//         window.wow.init()

//         document.addEventListener("scroll", () => {
//             const scrollCheck = window.scrollY > 100
//             if (scrollCheck !== scroll) {
//                 setScroll(scrollCheck)
//             }
//         })
//     }, [])
//     return (
//         <>
//             <DataBg />
//             <div className={`page-wrapper ${wrapperCls ? wrapperCls : ""}`} id="#top">
//                 {!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} />}
//                 {headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}
//                 {headerStyle == 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}
//                 {headerStyle == 3 ? <Header3 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}


//                 <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
//                 <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />

//                 {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

//                 {children}

//                 {!footerStyle && < Footer1 />}
//                 {footerStyle == 1 ? < Footer1 /> : null}
//                 {footerStyle == 2 ? < Footer2 /> : null}
//                 {footerStyle == 3 ? < Footer3 /> : null}
//             </div>
//             <BackToTop scroll={scroll} />
//         </>
//     )
// }





'use client'

import { useEffect, useState } from 'react'
import BackToTop from '../elements/BackToTop'
import DataBg from '../elements/DataBg'
import Breadcrumb from './Breadcrumb'
import SearchPopup from './SearchPopup'
import Sidebar from './Sidebar'
import Header1 from './header/Header1'
import Header2 from './header/Header2'
import Header3 from './header/Header3'
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Footer3 from './footer/Footer3'

export default function Layout({
  headerStyle,
  footerStyle,
  headTitle,          // (kept for compatibility if used elsewhere)
  breadcrumbTitle,
  children,
  wrapperCls,
  bgImage,
}) {
  const [scroll, setScroll] = useState(false)
  const [isMobileMenu, setMobileMenu] = useState(false)
  const [isPopup, setPopup] = useState(false)
  const [isSidebar, setSidebar] = useState(false)

  const handleMobileMenu = () => {
    const next = !isMobileMenu
    setMobileMenu(next)
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('mobile-menu-visible', next)
    }
  }

  const handlePopup = () => setPopup((v) => !v)
  const handleSidebar = () => setSidebar((v) => !v)

  useEffect(() => {
    let wowInstance = null

    ;(async () => {
      try {
        // Try common export shapes for wowjs
        let mod = await import('wowjs')
        let WowClass = mod?.WOW || mod?.default || mod

        // Fallback to dist build if needed
        if (typeof WowClass !== 'function') {
          mod = await import('wowjs/dist/wow.js')
          WowClass = mod?.WOW || mod?.default || mod
        }

        if (typeof WowClass === 'function') {
          wowInstance = new WowClass({ live: false })
          wowInstance.init()
          if (typeof window !== 'undefined') {
            window.wow = wowInstance
          }
        } else {
          console.warn('WOW class not found in wowjs exports')
        }
      } catch (e) {
        console.error('Failed to load wowjs:', e)
      }
    })()

    const onScroll = () => {
      const isScrolled = window.scrollY > 100
      // avoid unnecessary re-renders
      setScroll((prev) => (prev !== isScrolled ? isScrolled : prev))
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    // Run once on mount to set initial state
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (typeof window !== 'undefined' && window.wow) {
        try {
          // optional: some builds expose reset()
          window.wow.reset && window.wow.reset()
        } catch {}
        delete window.wow
      }
    }
  }, [])

  return (
    <>
      <DataBg />

      <div
        className={`page-wrapper ${wrapperCls ? wrapperCls : ''}`}
        id="top"
        style={bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
      >
        {/* Headers */}
        {!headerStyle && (
          <Header1
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            handlePopup={handlePopup}
            isSidebar={isSidebar}
            handleSidebar={handleSidebar}
          />
        )}
        {headerStyle === 1 && (
          <Header1
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            handlePopup={handlePopup}
            isSidebar={isSidebar}
            handleSidebar={handleSidebar}
          />
        )}
        {headerStyle === 2 && (
          <Header2
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            handlePopup={handlePopup}
            isSidebar={isSidebar}
            handleSidebar={handleSidebar}
          />
        )}
        {headerStyle === 3 && (
          <Header3
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            handlePopup={handlePopup}
            isSidebar={isSidebar}
            handleSidebar={handleSidebar}
          />
        )}

        {/* Overlays */}
        <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
        <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />

        {/* Breadcrumb */}
        {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

        {/* Page Content */}
        {children}

        {/* Footers */}
        {!footerStyle && <Footer1 />}
        {footerStyle === 1 && <Footer1 />}
        {footerStyle === 2 && <Footer2 />}
        {footerStyle === 3 && <Footer3 />}
      </div>

      <BackToTop scroll={scroll} />
    </>
  )
}
