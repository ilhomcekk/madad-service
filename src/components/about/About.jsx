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
import TranslationApi from "../translation/TranslationApi";

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
          title={<TranslationApi ru="О нас" uz="Biz haqimizda" en="About us" />}
          attribute={{
            "data-aos": "fade-zoom-in",
            "data-aos-duration": 1200,
            "data-aos-delay": 900,
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
          data-aos-duration="900"
        />
        <Container style={{ zIndex: "1", position: "relative" }}>
          <div
            className="about-card"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="300"
          >
            <div className="card-item">
              <div className="item__title">
                <TranslationApi
                  ru={"Мы оказываем широкий спектр услуг."}
                  uz={"Biz keng ko'lamli xizmatlarni taqdim etamiz."}
                  en={"We provide a wide range of services."}
                />
              </div>
              <div className="item__text">
                <TranslationApi
                  ru={
                    "Madad service - компания, охватившая 4 направления в сфере предоставления услуг. Клининговые услуги, кейтеринг, промышленный альпинизм и грузоперевозка при крупных переездах - все эти услуги вы можете найти в одном месте, а именно у нас! Мы предоставляем лучший сервис в Узбекистане!"
                  }
                  uz={
                    "“Madad servis” – xizmat ko‘rsatish sohasida 4 ta yo‘nalishni o‘z ichiga olgan kompaniya. Tozalash xizmatlari, ovqatlanish, sanoat alpinizmi va yirik yuk tashish uchun yuk tashish - bu xizmatlarning barchasini bir joyda, ya'ni bizda topishingiz mumkin! Biz O'zbekistonda eng zo'r xizmatni taqdim etamiz!"
                  }
                  en={
                    "Madad service is a company covering 4 directions in the field of service provision. Cleaning services, catering, industrial mountaineering and cargo transportation for large moves - you can find all these services in one place, namely with us! We provide the best service in Uzbekistan!"
                  }
                />
              </div>
              <Link className="show-more" to="/contacts">
                <TranslationApi
                  ru={"ПОДРОБНЕЕ"}
                  uz={"BATAFSIL"}
                  en={"LEARN MORE"}
                />
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
