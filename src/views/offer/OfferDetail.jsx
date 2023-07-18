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
import {
  getAdvertising,
  getAdvertisingByCategory,
} from "../../redux/actions/advertisingActions";
import TranslationApi from "../../components/translation/TranslationApi";
import { useParams } from "react-router-dom";
import axios from "axios";
import OfferServices from "../../components/services/OfferServices";
const API = "https://api.madad-service.uz/";

const OfferDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [params, setParams] = useState({
    page: 1,
    "per-page": 24,
  });
  const [advertisingByCategory, setAdvertisingByCategory] = useState([]);

  const advertising = useSelector((state) => state.advertising.advertising);
  const handleFilter = async () => {
    let filter = await advertising?.filter(
      (item) => item?.category?._id === id
    );
    if (filter?.length > 0) setAdvertisingByCategory(filter);
  };

  useEffect(() => {
    dispatch(getAdvertising(params));
  }, [id]);
  useEffect(() => {
    handleFilter();
  }, [advertising]);

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
        {advertisingByCategory?.map((item, idx) => (
          <div className="offer-slide" key={idx}>
            {/* <LazyLoadImage src={offerSlide} alt="" /> */}
            <LazyLoadImage src={API + item?.photo} alt="" />
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
      <OfferServices />
      {/* <Services /> */}
      <Feedback />
    </div>
  );
};

export default OfferDetail;
