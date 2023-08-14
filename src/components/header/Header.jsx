import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../assets/scss/_components.scss";
// import bgImage from "../../assets/images/header.png";
import bgImage from "../../assets/images/newHeader.jpeg";
import headerBgImage from "../../assets/images/headerBg.png";
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
          src={headerBgImage}
          alt=""
          data-aos="fade-up"
          data-aos-duration="2200"
        />
        <Container className="header-container">
          {/* <LazyLoadImage
            data-aos="fade-zoom-in"
            data-aos-delay="1700"
            className="header-logo"
            src={headerLogo}
            alt=""
          /> */}
          <div
            data-aos="fade-zoom-in"
            data-aos-delay="1600"
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
          <div
            className="flex gap-y-4 md:gap-x-8 gap-x-3 md:mt-10 mt-[2rem]"
            data-aos="fade-zoom-in"
            data-aos-delay="1600"
          >
            <div className="show-more" onClick={handleClick}>
              <TranslationApi
                ru="Оставить заявку"
                uz="Ariza yuboring"
                en="Submit application"
              />
              <ImArrowRight2 />
            </div>
            <a href="tel:+998930020333" className="cursor-pointer inline-block">
              <div className="show-more">
                +998 93 002 03 33
                <BsTelephone />
              </div>
            </a>
          </div>
          <div className="header-inner grid grid-cols-2 md:gap-6 gap-x-2 gap-y-4">
            {categories?.map((item, idx) => (
              <div
                key={idx}
                to={"/offer/" + item?._id}
                className="header-category"
                data-aos="fade-right"
                data-aos-duration={`1200`}
                data-aos-delay={`${(idx + 1) * 700}`}
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
              </div>
            ))}
          </div>
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
