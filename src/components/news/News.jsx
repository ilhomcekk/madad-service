import { Container } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import NewsCart from "../carts/NewsCart";
import Title from "../title/Title";
import "../../assets/scss/_components.scss";
import { Button } from "@mui/material";
import { ImArrowRight2 } from "react-icons/im";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import newsAbsoluteImage from "../../assets/images/news-absolute.png";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../redux/actions/newsActions";
import TranslationApi from "../translation/TranslationApi";

const News = () => {
  const dispatch = useDispatch();
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 6,
  });

  useEffect(() => {
    dispatch(getNews(pagination));
  }, []);

  const news = useSelector((state) => state.news.news);

  const settings = {
    dots: false,
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
    <section className="news">
      <LazyLoadImage
        src={newsAbsoluteImage}
        className="news-absolute-image"
        alt=""
      />
      <Container className="relative">
        <Title
          attribute={{
            "data-aos": "fade-zoom-in",
            "data-aos-duration": 900,
            "data-aos-delay": 900,
          }}
          title={<TranslationApi ru="НОВОСТИ" uz="YANGILIKLAR" en="NEWS" />}
        />
        <Slider className="news-slick md:my-12 mt-12 mb-32" {...settings}>
          {news?.map((item, idx) => (
            <NewsCart
              key={idx}
              cart={item}
              attribute={{
                "data-aos": "fade-zoom-in",
                "data-aos-duration": 900,
                "data-aos-delay": 300,
              }}
            />
          ))}
        </Slider>
        <Link className="show-more mx-auto" to="/news">
          <TranslationApi ru="ПОДРОБНЕЕ" uz="BATAFSIL" en="SHOW MORE" />
          <ImArrowRight2 />
        </Link>
      </Container>
    </section>
  );
};

export default News;
