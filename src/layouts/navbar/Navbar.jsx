import { Container } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useLocation } from "react-router-dom";
import "../../assets/scss/_navbar.scss";
import noHomeLogo from "../../assets/images/no-home-logo.svg";
import homeLogo from "../../assets/images/home-logo.svg";
import NavbarSearch from "./NavbarSearch";
import NavbarLanguage from "./NavbarLanguage";
import { Drawer, IconButton, TextField } from "@mui/material";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const myRef = useRef();
  const { t } = useTranslation();
  const [openMenuBars, setOpenMenuBars] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  //   NAVBAR STYLE
  const [navbarFixed, setNavbarFixed] = useState(false);
  const [y, setY] = useState();
  const getYPosition = () => {
    const y = myRef.current.offsetTop;
    setY(y);
  };
  useEffect(() => {
    getYPosition();
  }, [myRef]);
  useEffect(() => {
    setOpenMenuBars(false);
  }, [pathname]);
  const handleScrollNavbar = () => {
    if (window.scrollY > y) {
      setNavbarFixed(true);
    } else {
      setNavbarFixed(false);
    }
  };
  window.addEventListener("scroll", handleScrollNavbar);
  // ================================================

  return (
    <div className={`navbar-height ${pathname !== "/" && "active-height"}`}>
      <nav
        ref={myRef}
        className={`navbar ${navbarFixed && "navbar-fixed"} ${
          pathname === "/" ? "home" : "no-home"
        }`}
      >
        <Container>
          <div className="navbar-inner">
            <Link
              to="/"
              className="navbar-logo"
              data-aos="fade-zoom-in"
              data-aos-duration="1200"
              data-aos-delay="1500"
            >
              {pathname !== "/" ? (
                <LazyLoadImage alt="" src={`${noHomeLogo}`} />
              ) : (
                <LazyLoadImage alt="" src={`${homeLogo}`} />
              )}
            </Link>
            <NavbarSearch />
            <div className="navbar-list">
              <Link
                to="/offer"
                data-aos="fade-down"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                Услуги
              </Link>
              <Link
                to="news"
                data-aos="fade-down"
                data-aos-duration="1200"
                data-aos-delay="600"
              >
                Новости
              </Link>
              <Link
                to="/contacts"
                data-aos="fade-down"
                data-aos-duration="1200"
                data-aos-delay="900"
              >
                Контакты
              </Link>
              <Link
                to="faq"
                data-aos="fade-down"
                data-aos-duration="1200"
                data-aos-delay="1200"
              >
                FAQ
              </Link>
            </div>
            <NavbarLanguage />
            <IconButton
              data-aos="fade-down"
              data-aos-duration="1200"
              data-aos-delay="1200"
              className="menu-bars"
              onClick={() => setOpenMenuBars(true)}
            >
              <CiMenuFries />
            </IconButton>
          </div>
        </Container>
      </nav>
      <Drawer
        open={openMenuBars}
        anchor={"left"}
        onClose={() => setOpenMenuBars(false)}
        className="mobile-menu"
      >
        <IconButton
          className="!ml-auto"
          size="large"
          onClick={() => setOpenMenuBars(false)}
        >
          <AiOutlineCloseCircle size={32} color="#fff" />
        </IconButton>
        <TextField
          className="menu-search !mx-4"
          id="standard-basic"
          label="Поиск"
          variant="standard"
        />
        <div className="bars-list">
          <Link to="/offer">Услуги</Link>
          <Link to="news">Новости</Link>
          <Link to="/contacts">Контакты</Link>
          <Link to="faq">FAQ</Link>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
