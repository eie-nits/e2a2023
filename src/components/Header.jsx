import React from "react";
import "../assets/css/header.css";
import DropDown from "./DropDown";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import image1 from "/images/depImg1.jpeg";
import image2 from "/images/e2a2022_img1.jpg";
import image3 from "/images/depImg2.jpeg";
import image4 from "/images/depImg3.jpeg";
import image5 from "/images/nitSilchar.jpeg"
import { Link } from "react-router-dom";

const navItems = [
  {
    pathname: "/",
    name: "Home",
  },
  {
    pathname: "/about",
    name: "About Conference",
  },
  {
    // pathname: "/registration",
    name: "For Authors",
    subItems: [
      {
        name: "Registration",
        pathname: "/author-registration",
      },
      {
        name: "Regular Paper Submission",
        pathname: "/author-regular-paper-submission",
      },
    ],
  },
  // {
  //   pathname: "/call-for-papers",
  //   name: "Call for Papers",
  // },
  // {
  //   // pathname: "/program",
  //   name: "Program",
  //   subItems: [
  //     {
  //       name: "Brochure",
  //       pathname: "/program-brochure",
  //     },
  //     {
  //       name: "Schedule",
  //       pathname: "/program-schedule",
  //     },
  //   ],
  // },
  {
    pathname: "/important-dates",
    name: "Important Dates",
  },
  {
    pathname: "/committee",
    name: "Committee",
  },
  // {
  //   pathname: "/sponsorship",
  //   name: "Sponsorship",
  // },
  {
    pathname: "/contact-us",
    name: "Contact us",
  },
];

const Header = () => {
  const [isScrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY > 80) setScrolled(true);
    else setScrolled(false);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="header">
        <Carousel
          showThumbs={false}
          showIndicators={false}
          infiniteLoop={true}
          autoPlay={true}
          dynamicHeight={true}
          showArrows={false}
          useKeyboardArrows={true}
          showStatus={false}
          swipeable={true}
        >
          <div>
            <img src={image5} />
          </div>
          <div>
            <img src={image1} />
          </div>
          <div>
            <img src={image2} />
          </div>
          <div>
            <img src={image3} />
          </div>
          <div>
            <img src={image4} />
          </div>
        </Carousel>
        <nav className={isScrolled ? "moved nav-bar" : "nav-bar"}>
          <div className="logo">
            <img src="e2a.png" alt="" className="e2a-logo" />
          </div>
          <div className="links">
            {navItems.map((item, i) =>
              item.subItems && item.subItems.length > 0 ? (
                <div key={i}>
                  <DropDown subItems={item.subItems}>
                    <a className="nav-btn">{item.name}</a>
                  </DropDown>
                </div>
              ) : (
                <div
                  key={i}
                  className={
                    item.pathname == window.location.pathname
                      ? "nav-btn-box active-btn"
                      : "nav-btn-box"
                  }
                >
                  <Link to={
                      item.pathname === "/about" ? "/#about" : item.pathname
                    }
                    className="nav-btn"
                  >
                    {item.name}
                  </Link>
                </div>
              )
            )}
          </div>
        </nav>
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              {navItems.map((item, i) => (
                <li key={i}>
                  <Link to={
                      item.pathname === "/about" ? "/#about" : item.pathname
                    }
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className="headerContent">
          <div className="content-container">
            <div className="heading">
              3<sup>rd</sup> INTERNATIONAL CONFERENCE{" "}
              <span className="red-text">ON EMERGING ELECTRONICS</span> AND
              AUTOMATION
            </div>
            <div className="date">
              15<sup>th</sup> - 17<sup>th</sup> Dec,{" "}
              <span className="red-text">2023</span>
            </div>
            <div className="organised-by">
              Organised by <br /> Department of Electronics and Instrumentation
              Engineering
            </div>
            <div className="logo log-15x mt-2">
              <img src="/logos/logo2.png" alt="" className="nit-logo" />
            </div>
            <div className="college-name mt-1">
              NATIONAL INSTITUTE OF TECHNOLOGY SILCHAR <br />
              Assam, India - 788010
            </div>
            {/* <div>
              <h6 className="organised-by bold mt-2 mb-1">
                Technically Co-Sponsored by
              </h6>
              <img className="logo2" src="/logos/logo_springer.jpg" alt="" />
            </div> */}
          </div>
        </div>
      </div>
      <div>{/* mobile nav */}</div>
    </>
  );
};

export default Header;
