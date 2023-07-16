import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Slider from "react-slick";
import offerSlide from "../../assets/images/offer-slide.png";
import "../../assets/scss/_offer.scss";
import OfferComponent from "../../components/offer/Offer";
import Services from "../../components/services/Services";
import Feedback from "../../components/feedback/Feedback";
import { useDispatch, useSelector } from "react-redux";
import { getAdvertising } from "../../redux/actions/advertisingActions";
import TranslationApi from "../../components/translation/TranslationApi";
const API = "https://api.madad-service.uz/";

const Offer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdvertising());
  }, []);

  const advertising = useSelector((state) => state.advertising.advertising);

  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: `button__bar`,
    appendDots: (dots) => {
      return (
        <div>
          <ul>{dots}</ul>
        </div>
      );
    },
  };

  return (
    <div className="content">
      <Slider className="offer-slick" {...settings}>
        {advertising?.map((item, idx) => (
          <div className="offer-slide" key={idx}>
            {/* <LazyLoadImage src={offerSlide} alt="" /> */}
            <LazyLoadImage
              src={API + item?.photo}
              alt=""
            />
            <Container className="offer-slide-container">
              <div className="offer-slick-title">
                {
                  <TranslationApi
                    uz={item?.name_uz}
                    ru={item?.name_ru}
                    en={item?.name_en}
                  />
                }
              </div>
            </Container>
          </div>
        ))}
      </Slider>
      <OfferComponent />
      <Services />
      <Feedback />
    </div>
  );
};

export default Offer;
