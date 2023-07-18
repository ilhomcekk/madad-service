import { Button } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import offerAbsoluteImage from "../../assets/images/offer-absolute.png";
import Title from "../title/Title";
import { getOffers } from "../../redux/actions/offersActions";
import TranslationApi from "../translation/TranslationApi";
const API = "https://api.madad-service.uz/";

const Offer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [params, setParams] = useState({
    page: 1,
    "per-page": 24,
  });

  const [offersByCategory, setOffersByCategory] = useState([]);
  const offers = useSelector((state) => state.offers.offers);

  useEffect(() => {
    dispatch(getOffers(params));
  }, []);

  const handleFilter = async () => {
    let filter = await offers?.filter((item) => item?.category?._id === id);
    if (filter?.length > 0) setOffersByCategory(filter);
  };

  useEffect(() => {
    handleFilter();
  }, [offersByCategory]);

  const settings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 2,
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
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="offer">
      <LazyLoadImage
        className="offer-absolute-image"
        src={offerAbsoluteImage}
        alt=""
      />
      <Container>
        <Title title="СПЕЦИАЛЬНЫЕ" />
        <Title title="ПРЕДЛОЖЕНИЯ" className="text-right" />
        <Slider className="offer-component-slick my-12" {...settings}>
          {offersByCategory?.map((item, idx) => (
            <Link key={idx} to="" className="offer-box">
              {/* <LazyLoadImage
                className="box__image"
                src="https://picsum.photos/350/350"
                alt=""
              /> */}
              <LazyLoadImage
                className="box__image"
                src={API + item?.photo}
                alt=""
                style={{ width: "350px", height: "350px" }}
              />
              <div className="box__action">
                <div className="box__title">
                  <TranslationApi
                    uz={item?.name_uz}
                    ru={item?.name_ru}
                    en={item?.name_en}
                  />
                </div>
                <div className="box__link">
                  Оставить заявку
                  <div className="box__svg">
                    <BsArrowRight />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Offer;
