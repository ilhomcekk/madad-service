import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Title from "../title/Title";
import aboutAbsoluteImage from "../../assets/images/about-absolute.png";
import aboutLeftImage from "../../assets/images/about-left.png";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import { ImArrowRight2 } from "react-icons/im";
import Slider from "react-slick";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getAboutUs } from "../../redux/actions/aboutUsActions";

const About = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAboutUs());
  }, []);

  const aboutUs = useSelector((state) => state.aboutUs.aboutUs);

  const settings = {
    dots: false,
    infinite: false,
    arrow: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <BsArrowRight />,
    prevArrow: <BsArrowLeft />,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="about" id="about">
      <Container>
        <Title
          title="О нас"
          attribute={{
            "data-aos": "fade-zoom-in",
            "data-aos-duration": 1200,
            "data-aos-delay": 1200,
          }}
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
          src={aboutLeftImage}
          alt=""
          data-aos="fade-right"
          data-aos-duration="1200"
        />
        <Container style={{ zIndex: "1", position: "relative" }}>
          <div
            className="about-card"
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <div className="card-item">
              <div className="item__title">
                Мы оказываем широкий спектр услуг.
              </div>
              <div className="item__text">
                Квартирные, офисные и дачные переезды– это наша ежедневная
                работа и мы настоящие профессионалы своего дела. Перевозка,
                организованная нашей компанией это полноценный переезд «под
                ключ», а не просто несколько грузчиков и газель. Мы поможем вам
                с упаковкой личных вещей, сборкой-разборкой мебели и
                подключением бытовой техники. По приезду в новую квартиру или
                офис, вся ваша мебель будет собрана и вместе с вещами
                расставлена по своим местам.{" "}
              </div>
              <Link className="show-more" to="/tariffs">
                ПОДРОБНЕЕ
                <ImArrowRight2 />
              </Link>
            </div>
            <Slider className="about-slick" {...settings}>
              {aboutUs?.map((item, idx) => (
                <Link key={idx} to="">
                  {/* <LazyLoadImage src="https://picsum.photos/250/210" alt="" /> */}
                  <LazyLoadImage
                    src={item?.photo}
                    alt=""
                    style={{ width: "250px", height: "210px" }}
                  />
                </Link>
              ))}
            </Slider>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default About;
