import { Container } from "@mui/system";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Title from "../title/Title";
import goalAbsoluteImage from "../../assets/images/goal-absolute.png";
import TranslationApi from "../translation/TranslationApi";

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
          title={
            <TranslationApi
              ru="ОСНОВНАЯ ЦЕЛЬ"
              uz="ASOSIY MAQSAD"
              en="PRIMARY GOAL"
            />
          }
        />
        <Title
          attribute={{
            "data-aos": "fade-zoom-in",
            "data-aos-duration": 1200,
            "data-aos-delay": 1200,
          }}
          className="md:text-end"
          title={
            <TranslationApi ru="КОМПАНИИ" uz="KOMPANIYALAR" en="COMPANIES" />
          }
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
              <TranslationApi
                ru="Квартирные, офисные и дачные переезды– это наша ежедневная работа
              и мы настоящие профессионалы своего дела. Перевозка,
              организованная нашей компанией это полноценный переезд «под ключ»,
              а не просто несколько грузчиков и газель. Мы поможем вам с
              упаковкой личных вещей, сборкой-разборкой мебели и подключением
              бытовой техники. По приезду в новую квартиру или офис, вся ваша
              мебель будет собрана и вместе с вещами расставлена по своим
              местам."
                uz="Kvartira, ofis va qishloqni ko'chirish - bizning kundalik ishimiz va biz o'z sohamizning haqiqiy mutaxassislarimiz. Yuk tashish; yetkazib berish, kompaniyamiz tomonidan tashkil etilgan to'liq huquqli harakat kalit taslim asosida, va faqat bir nechta yuk ko'taruvchi va gazel emas. Biz sizga yordam beramiz shaxsiy buyumlarni qadoqlash, mebellarni yig'ish va demontaj qilish va ulash maishiy texnika. Yangi kvartiraga yoki ofisga kelganingizda, barchangiz mebel yig'iladi va narsalar bilan birga o'z-o'zidan tartibga solinadi joylar."
                en="Apartment, office and country moving is our daily work.
               and we are true professionals in our field. Shipping,
               organized by our company is a full-fledged move on a turnkey basis,
               and not just a few loaders and a gazelle. We will help you with
               packing personal belongings, assembling and disassembling furniture and connecting
               household appliances. Upon arrival at a new apartment or office, all your
               furniture will be collected and, together with things, arranged in their own
               places."
              />
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
