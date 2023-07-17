import { Container } from "@mui/system";
import React from "react";
import { BsTelephone } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import footerAbsoluteImage from "../../assets/images/footer-absolute.png";
import footerLogo from "../../assets/images/no-home-logo.svg";
import { FaFacebook, FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import "../../assets/scss/_footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <LazyLoadImage
        className="footer-absolute-image"
        src={footerAbsoluteImage}
        alt=""
      />
      <Container className="relative">
        <div className="footer-boxes">
          <div className="footer-box">
            <Link to={"/"}>
              <LazyLoadImage className="footer-logo" src={footerLogo} alt="" />
            </Link>
          </div>
          <div className="footer-box">
            <Link to={"/offer"} className="footer-link">
              Услуги
            </Link>
            <Link to={"/news"} className="footer-link">
              Новости
            </Link>
            <Link to={"/contacts"} className="footer-link">
              Контакты
            </Link>
          </div>
          <div className="footer-box">
            <Link to="/faq" className="footer-link">
              FAQ
            </Link>
            <Link to="/agreement" className="footer-link">
              Пользовательское соглашение
            </Link>
          </div>
          <div className="footer-box">
            <div className="footer-title">Контакты</div>
            <a href="tel:+998930020333" className="footer-phone">
              <BsTelephone />
              +998930020333
            </a>
          </div>
          <div className="footer-box">
            <div className="footer-title">Соц.сети</div>
            <div className="footer-icons">
              <a href="https://www.facebook.com/Madad-Service-111374008089763/?ref=pages_you_manage">
                <FaFacebook />
              </a>
              <a href="https://t.me/madad_service">
                <FaTelegramPlane />
              </a>
              <a href="https://instagram.com/madad_service?igshid=YmMyMTA2M2Y=">
                <AiFillInstagram />
              </a>
              <a href="https://www.youtube.com/@madadservice">
                <AiFillYoutube />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
