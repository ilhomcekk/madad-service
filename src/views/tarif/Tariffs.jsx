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
import TarifServicesCart from "../../components/carts/TarifServicesCart";
import {
  cateringTarifServices,
  cleaningTarifServices,
  gruzoperevozkaTarifServices,
} from "./list";
const API = "https://api.madad-service.uz/";

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
      dispatch(
        getTariffsByCategory(service?.category?._id, {
          page: 1,
          limit: 24,
        })
      );
      dispatch(getTariffsServicesByCategory(service?._id));
    }
  }, [service]);

  const [tariffsByServicesId, setTariffsByServicesId] = useState([]);
  useEffect(() => {
    const tariffsByServices = tariffs?.filter((item) => {
      return item?.service_id == id;
    });
    setTariffsByServicesId(tariffsByServices);
  }, [tariffs]);

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
        <div
          className="tarif-header"
          style={{ background: `url(${API + service?.photo})` }}
        >
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
        <section className="about z-[1]">
          <Container>
            <Title
              title={
                <TranslationApi ru="О нас" uz="Biz haqimizda" en="About us" />
              }
            />
          </Container>
          <LazyLoadImage
            className="about-absolute-image"
            src={aboutAbsoluteImage}
            alt=""
          />
          <div className="about-container">
            <LazyLoadImage
              className="about-left-image"
              // src={aboutLeftImage}
              src={API + service?.photo}
              style={{ borderRadius: "15px" }}
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
          {tariffsByServicesId?.length > 0 && (
            <Container>
              <Title
                title={<TranslationApi ru="ТАРИФНЫЕ" uz="TARIFF" en="TARIFF" />}
              />
              <Title
                className="text-center"
                title={<TranslationApi ru="ПЛАНЫ" uz="PLANLAR" en="PLANS" />}
              />
              <Slider className="tariffs-slick pt-12 pb-32" {...settings}>
                {tariffsByServicesId?.map((item, idx) => (
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
          )}
        </section>
        <Container className="relative">
          <Title
            className="text-center mt-12"
            title={
              <TranslationApi
                ru="ЧТО ВКЛЮЧЕНО?"
                uz="NIMALAR BOG'LANGAN?"
                en="WHAT'S INCLUDED?"
              />
            }
          />
          <div className="grid md:grid-cols-2 gap-6 mt-12 mb-24">
            {id === "64fe1bb120cd360e5b3939c1" &&
              cateringTarifServices?.map((item, idx) => (
                <TarifServicesCart item={item} key={idx} />
              ))}
            {id === "64fe3d7d20cd360e5b393ac4" &&
              cleaningTarifServices?.map((item, idx) => (
                <TarifServicesCart item={item} key={idx} />
              ))}
            {id === "650003b3e22bf4ae71a789b9" &&
              gruzoperevozkaTarifServices?.map((item, idx) => (
                <TarifServicesCart item={item} key={idx} />
              ))}
            {id !== "64fe1bb120cd360e5b3939c1" &&
              id !== "64fe3d7d20cd360e5b393ac4" &&
              id !== "650003b3e22bf4ae71a789b9" &&
              tariffsServices?.map((item, idx) => (
                <TarifServicesCart item={item} key={idx} />
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
