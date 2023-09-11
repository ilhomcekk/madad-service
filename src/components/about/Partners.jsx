import { Container } from "@mui/system";
import React, { useEffect } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import Title from "../title/Title";
import "../../assets/scss/_components.scss";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ru from "../../assets/images/ru.svg";
import { useDispatch, useSelector } from "react-redux";
import { getPartners } from "../../redux/actions/partnersActions";
import TranslationApi from "../translation/TranslationApi";
const API = "https://api.madad-service.uz/";

const Partners = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPartners());
  }, []);

  const partners = useSelector((state) => state.partners.partners);

  const settings = {
    dots: false,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
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
          slidesToShow: 3,
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
    <section className="partners">
      <Container className="relative">
        <Title
          attribute={{
            "data-aos": "fade-zoom-in",
            "data-aos-duration": 900,
            "data-aos-delay": 900,
          }}
          title={<TranslationApi ru="ПАРТНЕРЫ" uz="HAMKORLAR" en="PARTNERS" />}
          style="#fff"
        />
        <Slider className="partners-slick my-12" {...settings}>
          {partners?.map((item, idx) => (
            <a
              href={item?.link}
              target="_blank"
              key={idx}
              className="partners-box"
              data-aos="fade-zoom-in"
              data-aos-duration="900"
              data-aos-delay="300"
            >
              <div className="flip-inner">
                <div className="flip-image">
                  <LazyLoadImage src={API + item?.photo} alt="" />
                </div>
                <div class="flip-card-back">{item?.name}</div>
              </div>
            </a>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Partners;
