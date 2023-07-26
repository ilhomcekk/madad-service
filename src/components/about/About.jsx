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
                <TranslationApi
                  ru={"Мы оказываем широкий спектр услуг."}
                  uz={"Biz keng ko'lamli xizmatlarni taqdim etamiz."}
                  en={"We provide a wide range of services."}
                />
              </div>
              <div className="item__text">
                <TranslationApi
                  ru={
                    "Квартирные, офисные и дачные переезды– это наша ежедневная работа и мы настоящие профессионалы своего дела. Перевозка, организованная нашей компанией это полноценный переезд «подключ», а не просто несколько грузчиков и газель. Мы поможем вам с упаковкой личных вещей, сборкой-разборкой мебели и подключением бытовой техники. По приезду в новую квартиру или офис, вся ваша мебель будет собрана и вместе с вещами расставлена по своим местам."
                  }
                  uz={
                    "Kvartira, ofis va qishloqni ko'chirish bizning kundalik ishimiz va biz o'z sohamizning haqiqiy professionallarimiz. Kompaniyamiz tomonidan tashkil etilgan transport - bu faqat bir nechta yuk ko'taruvchi va gazel emas, balki to'liq kalitli ko'chirishdir. Biz sizga shaxsiy buyumlarni qadoqlash, mebellarni yig'ish va demontaj qilish va maishiy texnikani ulashda yordam beramiz. Yangi kvartira yoki ofisga kelganingizdan so'ng, sizning barcha mebellaringiz yig'iladi va o'z joylaridagi narsalar bilan birlashtiriladi."
                  }
                  en={
                    "Apartment, office and country moving is our daily work and we are true professionals in our field. Transportation organized by our company is a full-fledged turnkey move, and not just a few loaders and a gazelle. We will help you with packing personal items, assembling and disassembling furniture and connecting household appliances. Upon arrival at a new apartment or office, all your furniture will be collected and put together with things in their places."
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
