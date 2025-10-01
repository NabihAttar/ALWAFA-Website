// import Link from "next/link"
// export default function Breadcrumb({ breadcrumbTitle }) {
//     return (
//         <>
         
//         <section className="page-header">
//             <div className="page-header__bg" style={{ backgroundImage: 'url(assets/images/pattern/aboutBanner.png)' }}>
//             </div>
//             <div className="page-header__pattern"><img src="assets/images/pattern/page-header-pattern.png" alt=""/></div>
//             <div className="container">
//                 <div className="page-header__inner">
//                     <h2>{breadcrumbTitle}</h2>
//                     <ul className="thm-breadcrumb">
//                         <li><Link href="/">Home</Link></li>
//                         <li><span className="icon-right-arrow21"></span></li>
//                         <li>{breadcrumbTitle}</li>
//                     </ul>
//                 </div>
//             </div>
//         </section>
//         </>
//     )
// }


// components/Breadcrumb.jsx
import Link from "next/link";

export default function Breadcrumb({ breadcrumbTitle, bgImage, patternSrc }) {
  const headerBg = bgImage || "/assets/images/pattern/aboutBanner.png";
  const pattern  = patternSrc || "/assets/images/pattern/page-header-pattern.png";

  return (
    <section className="page-header">
      <div
        className="page-header__bg"
        style={{
          backgroundImage: `url(${headerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* <div className="page-header__pattern">
        <img src={pattern} alt="" />
      </div> */}
      <div className="container">
        <div className="page-header__inner">
          <h2>{breadcrumbTitle}</h2>
          <ul className="thm-breadcrumb">
            <li><Link href="/">Home</Link></li>
            <li><span className="icon-right-arrow21"></span></li>
            <li>{breadcrumbTitle}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
