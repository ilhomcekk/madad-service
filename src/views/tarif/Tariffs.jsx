import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useParams } from "react-router-dom";
import "../../assets/scss/_tariffs.scss";
import Title from "../../components/title/Title";
import aboutAbsoluteImage from "../../assets/images/about-absolute.png";
import aboutLeftImage from "../../assets/images/tarif.png";
import { Button } from "@mui/material";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import TarifCart from "../../components/carts/TarifCart";
import tarifAbsoluteImage from "../../assets/images/tarif-2.png";
import Feedback from "../../components/feedback/Feedback";
import { useDispatch, useSelector } from "react-redux";
import { getDetailServices } from "../../redux/actions/servicesActions";
import HTMLReactParser from "html-react-parser";
import { getTariffsByCategory } from "../../redux/actions/tariffsActions";
import { getTariffsServicesByCategory } from "../../redux/actions/tariffsServicesActions";
import TarifModal from "../../components/modal/TarifModal";
import { setTarifStep } from "../../redux/actions/telegramActions";
import TranslationApi from "../../components/translation/TranslationApi";
const API = "http://188.93.210.225:5000/";

const Tariffs = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [modal, setModal] = useState(false);
  const [modalData, setModaldata] = useState({});

  const service = useSelector((state) => state.services.data);
  const tariffs = useSelector((state) => state.tariffs.tariffsByCategory);
  const tariffsServices = useSelector(
    (state) => state.tariffsServices.tariffsServicesByCategory
  );

  useEffect(() => {
    dispatch(getDetailServices(id));
  }, [id]);
  useEffect(() => {
    if (service?.category?._id) {
      dispatch(getTariffsByCategory(service?.category?._id));
      dispatch(getTariffsServicesByCategory(service?.category?._id));
    }
  }, [service]);

  const settings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <Button>
        <BsArrowRight />
      </Button>
    ),
    prevArrow: (
      <Button>
        <BsArrowLeft />
      </Button>
    ),
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="content">
        <div className="tarif-header">
          <Container className="relative">
            <div className="header-text">
              <TranslationApi
                uz={service?.category?.name_uz}
                ru={service?.category?.name_ru}
                en={service?.category?.name_en}
              />
              -
              <br />
              <TranslationApi
                uz={service?.name_uz}
                ru={service?.name_ru}
                en={service?.name_en}
              />
            </div>
          </Container>
        </div>
        <section className="about">
          <Container>
            <Title title="О нас" />
          </Container>
          <LazyLoadImage
            className="about-absolute-image"
            src={aboutAbsoluteImage}
            alt=""
          />
          <div className="about-container">
            <LazyLoadImage
              className="about-left-image"
              src={aboutLeftImage}
              alt=""
            />
            <Container style={{ zIndex: "1", position: "relative" }}>
              <div className="about-card">
                <div className="card-item">
                  <div className="item__title">
                    <TranslationApi
                      uz={service?.name_uz}
                      ru={service?.name_ru}
                      en={service?.name_en}
                    />
                  </div>
                  <div className="item__text">
                    <TranslationApi
                      uz={HTMLReactParser(String(service?.description_uz))}
                      ru={HTMLReactParser(String(service?.description_ru))}
                      en={HTMLReactParser(String(service?.description_en))}
                    />
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </section>
        <section className="tariffs">
          <img
            className="tarif-absolute-image"
            src={tarifAbsoluteImage}
            alt=""
          />
          <Container>
            <Title title="ТАРИФНЫЕ" />
            <Title className="text-center" title="ПЛАНЫ" />
            <Slider className="tariffs-slick pt-12 pb-32" {...settings}>
              {tariffs?.map((item, idx) => (
                <TarifCart
                  cart={item}
                  key={idx}
                  handleClick={() => {
                    dispatch(setTarifStep());
                    setModaldata(item);
                  }}
                />
              ))}
            </Slider>
          </Container>
        </section>
        <Container className="relative">
          <Title className="text-center mt-12" title="ЧТО ВКЛЮЧЕНО?" />
          <div className="grid md:grid-cols-2 gap-6 mt-12 mb-24">
            {tariffsServices?.map((item, idx) => (
              <div
                key={idx}
                style={{
                  boxShadow: "0px 1px 17px rgba(198, 198, 198, 0.31)",
                  borderRadius: "20px",
                }}
                className="bg-white grid grid-cols-3 md:gap-4 gap-2 md:p-6 px-2 py-6"
              >
                <LazyLoadImage
                  style={{
                    borderRadius: "20px",
                    width: "100%",
                    objectFit: "contain",
                    maxHeight: "155px",
                  }}
                  src={API + item?.photo}
                  alt=""
                />
                <div className="col-span-2">
                  <div className="text-xl md:mb-3">
                    <TranslationApi
                      uz={item?.name_uz}
                      ru={item?.name_ru}
                      en={item?.name_en}
                    />
                  </div>
                  <div
                    className="md:text-lg color-gray font-400"
                    style={{ lineHeight: "1.2" }}
                  >
                    <TranslationApi
                      uz={HTMLReactParser(String(item?.description_uz))}
                      ru={HTMLReactParser(String(item?.description_ru))}
                      en={HTMLReactParser(String(item?.description_en))}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
        <Feedback />
      </div>
      <TarifModal
        open={modal}
        handleClose={() => setModal(false)}
        data={modalData}
      />
    </>
  );
};

export default Tariffs;
