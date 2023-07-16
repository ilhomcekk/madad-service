import { Container } from "@mui/system";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Title from "../title/Title";
import goalAbsoluteImage from "../../assets/images/goal-absolute.png";

const GoalCompany = () => {
  return (
    <section className="goal">
      <Container>
        <Title
          attribute={{
            "data-aos": "fade-zoom-in",
            "data-aos-duration": 1200,
            "data-aos-delay": 1200,
          }}
          title="ОСНОВНАЯ ЦЕЛЬ"
        />
        <Title
          attribute={{
            "data-aos": "fade-zoom-in",
            "data-aos-duration": 1200,
            "data-aos-delay": 1200,
          }}
          className="md:text-end"
          title="КОМПАНИИ"
        />
        <div className="goal-boxes lg:flex">
          <LazyLoadImage
            className="goal-absolute-image"
            src={goalAbsoluteImage}
            alt=""
          />
          <div
            className="box lg:w-2/5"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <div className="color-gray text-lg font-400 lg:pr-14 lg:mb-0 mb-8 md:mt-0 mt-4">
              Квартирные, офисные и дачные переезды– это наша ежедневная работа
              и мы настоящие профессионалы своего дела. Перевозка,
              организованная нашей компанией это полноценный переезд «под ключ»,
              а не просто несколько грузчиков и газель. Мы поможем вам с
              упаковкой личных вещей, сборкой-разборкой мебели и подключением
              бытовой техники. По приезду в новую квартиру или офис, вся ваша
              мебель будет собрана и вместе с вещами расставлена по своим
              местам.{" "}
            </div>
          </div>
          <div className="box lg:w-3/5 grid md:grid-cols-2 gap-6">
            <div
              className="goal-card"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-duration="1200"
              data-aos-delay="600"
            >
              <div className="card__image"></div>
              {/* <LazyLoadImage
                className="card__image"
                src="https://picsum.photos/85/85"
                alt=""
              /> */}
              <div className="card__title">Лучшие в деле.</div>
              <div className="card__text">
                Мы поможем вам с упаковкой личных вещей, сборкой-разборкой
                мебели и подключением бытовой техники
              </div>
            </div>
            <div
              className="goal-card"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-duration="1200"
              data-aos-delay="900"
            >
              <div className="card__image"></div>
              {/* <LazyLoadImage
                className="card__image"
                src="https://picsum.photos/85/85"
                alt=""
              /> */}
              <div className="card__title">Качество.</div>
              <div className="card__text">
                Наша компания гарантирует качество и несет ответственность за
                выполненные работы.
              </div>
            </div>
            <div
              className="goal-card"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-duration="1200"
              data-aos-delay="1200"
            >
              <div className="card__image"></div>
              {/* <LazyLoadImage
                className="card__image"
                src="https://picsum.photos/85/85"
                alt=""
              /> */}
              <div className="card__title">Лучшие в деле.</div>
              <div className="card__text">
                Мы поможем вам с упаковкой личных вещей, сборкой-разборкой
                мебели и подключением бытовой техники
              </div>
            </div>
            <div
              className="goal-card"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-duration="1200"
              data-aos-delay="1500"
            >
              <div className="card__image"></div>
              {/* <LazyLoadImage
                className="card__image"
                src="https://picsum.photos/85/85"
                alt=""
              /> */}
              <div className="card__title">Лучшие в деле.</div>
              <div className="card__text">
                Мы поможем вам с упаковкой личных вещей, сборкой-разборкой
                мебели и подключением бытовой техники
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GoalCompany;
