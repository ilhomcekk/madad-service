import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../assets/scss/_components.scss";
// import bgImage from "../../assets/images/header.png";
import bgImage from "../../assets/images/newHeader.jpeg";
import headerLogo from "../../assets/images/header-logo.png";
import { Container } from "@mui/system";
import headerDesc1 from "../../assets/images/header-desc-1.svg";
import headerDesc2 from "../../assets/images/header-desc-2.svg";
import headerDesc3 from "../../assets/images/header-desc-3.svg";
import headerDesc4 from "../../assets/images/header-desc-4.svg";
import { Button, IconButton } from "@mui/material";
import { IoIosArrowRoundDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { ImArrowRight2 } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import TranslationApi from "../translation/TranslationApi";
import TarifModal from "../modal/TarifModal";
import { setTarifStep } from "../../redux/actions/telegramActions";
import { BsTelephone } from "react-icons/bs";
const API = "https://api.madad-service.uz/";

const Header = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState();
  const [modalData, setModalData] = useState({
    price: "Не выбрано",
    category: {
      name_ru: "Не выбрано",
    },
  });
  const categories = useSelector((state) => state.category.category);

  const handleClick = () => {
    dispatch(setTarifStep());
  };

  return (
    <>
      <section className="header">
        <LazyLoadImage
          loading="lazy"
          className="header-bg-image"
          src={bgImage}
          alt=""
          data-aos="zoom-out"
          data-aos-duration="600"
          data-aos-delay="300"
        />
        <Container className="header-container">
          <LazyLoadImage
            data-aos="fade-zoom-in"
            data-aos-delay="2500"
            className="header-logo"
            src={headerLogo}
            alt=""
          />
          <div
            data-aos="fade-zoom-in"
            data-aos-delay="2200"
            className="header-desc text-center"
            style={{ marginTop: "-1rem", marginBottom: "2rem" }}
          >
            <TranslationApi
              ru={
                "Предоставляем услуги для физических лиц и государственных организаций"
              }
              uz={
                "Biz jismoniy shaxslar va davlat tashkilotlari uchun xizmatlarni taqdim etamiz"
              }
              en={
                "We provide services for individuals and government organizations"
              }
            />
          </div>
          {/* <div
            className="header-inner grid grid-cols-2 md:gap-6 gap-x-2 gap-y-4"
            data-aos="fade-zoom-in"
            data-aos-delay="2500"
          >
            {categories?.map((item, idx) => (
              <Link
                key={idx}
                to={"/offer/" + item?._id}
                className="header-desc"
              >
                <LazyLoadImage
                  src={API + item?.photo}
                  style={{ objectFit: "contain" }}
                  alt=""
                />
                <TranslationApi
                  ru={item?.name_ru}
                  uz={item?.name_uz}
                  en={item?.name_en}
                />
              </Link>
            ))}
          </div> */}
          <div
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="1200"
            className="cursor-pointer"
            onClick={handleClick}
          >
            <div className="show-more mt-16">
              <TranslationApi
                ru="Оставить заявку"
                uz="Ariza yuboring"
                en="Submit application"
              />
              <ImArrowRight2 />
            </div>
            {/* <IconButton className="header-arrow">
            <IoIosArrowRoundDown />
          </IconButton> */}
          </div>
          <a
            href="tel:+998930020333"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="1200"
            className="cursor-pointer"
          >
            <div className="show-more mt-4">
              +998 93 002 03 33
              <BsTelephone />
            </div>
          </a>
        </Container>
      </section>
      <TarifModal
        open={modal}
        handleClose={() => setModal(false)}
        data={modalData}
      />
    </>
  );
};

export default Header;
