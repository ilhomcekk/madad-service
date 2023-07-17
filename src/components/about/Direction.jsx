import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import direction1 from "../../assets/images/direction-1.svg";
import direction2 from "../../assets/images/direction-2.svg";
import direction3 from "../../assets/images/direction-3.svg";
import direction4 from "../../assets/images/direction-4.svg";
import directionImage from "../../assets/images/tarif.png";
import directionAbsoluteImage from "../../assets/images/goal-absolute.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import TranslationApi from "../translation/TranslationApi";
import HTMLReactParser from "html-react-parser";
const API = "https://api.madad-service.uz/";

const Direction = () => {
  const list = useSelector((state) => state.category.category);
  const services = useSelector((state) => state.services.services);
  const [tab, setTab] = useState();
  const [desc, setDesc] = useState();
  useEffect(() => {
    setTab(list[0]);
  }, [list]);

  const handleService = async () => {
    const filter = await services?.find(
      (item) => item?.category?._id === tab?._id
    );
    setDesc(filter);
  };
  handleService();

  return (
    <section className="direction">
      <Container className="lg:!ml-0 lg:!pl-0">
        <div className="direction-block">
          <div
            className="direction-left"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <div className="left__title">НАШИ НАПРАВЛЕНИЯ</div>
            <div className="left__boxes">
              {list && (
                <>
                  <div className="left__box">
                    {list[0] && (
                      <div
                        className={`box ${
                          tab?._id === list[0]?._id && "active"
                        } right-border`}
                        onClick={() => setTab(list[0])}
                      >
                        <div className="image">
                          <LazyLoadImage src={API + list[0]?.photo} alt="" />
                        </div>
                        <TranslationApi
                          uz={list[0]?.name_uz}
                          ru={list[0]?.name_ru}
                          en={list[0]?.name_en}
                        />
                      </div>
                    )}
                    {list[1] && (
                      <div
                        className={`box ${tab?._id === list[1]?._id && 'active'}`}
                        onClick={() => setTab(list[1])}
                      >
                        <div className="image">
                          <LazyLoadImage src={API + list[1]?.photo} alt="" />
                        </div>
                        <TranslationApi
                          uz={list[1]?.name_uz}
                          ru={list[1]?.name_ru}
                          en={list[1]?.name_en}
                        />
                      </div>
                    )}
                  </div>
                  <div className="left__box">
                    {list[2] && (
                      <div
                        className={`box ${
                          tab?._id === list[2]?._id && "active"
                        } right-border`}
                        onClick={() => setTab(list[2])}
                      >
                        <div className="image">
                          <LazyLoadImage src={API + list[2]?.photo} alt="" />
                        </div>
                        <TranslationApi
                          uz={list[2]?.name_uz}
                          ru={list[2]?.name_ru}
                          en={list[2]?.name_en}
                        />
                      </div>
                    )}
                    {list[3] && (
                      <div
                        className={`box ${
                          tab?._id === list[3]?._id && "active"
                        }`}
                        onClick={() => setTab(list[3])}
                      >
                        <div className="image">
                          <LazyLoadImage src={API + list[3]?.photo} alt="" />
                        </div>
                        <TranslationApi
                          uz={list[3]?.name_uz}
                          ru={list[3]?.name_ru}
                          en={list[3]?.name_en}
                        />
                      </div>
                    )}
                  </div>
                </>
              )}
              {/* <div className="left__box">
                <Link to={""} className="box right-border">
                  <div className="image">
                    <LazyLoadImage src={direction1} alt="" />
                  </div>
                  Клининговые услуги
                </Link>
                <Link to="" className="box">
                  <div className="image">
                    <LazyLoadImage src={direction2} alt="" />
                  </div>
                  Грузоперевозка в Ташкенте
                </Link>
              </div>
              <div className="left__box">
                <Link to="" className="box right-border">
                  <div className="image">
                    <LazyLoadImage src={direction3} alt="" />
                  </div>
                  Промышленный альпинизм
                </Link>
                <Link to="" className="box">
                  <div className="image">
                    <LazyLoadImage src={direction4} alt="" />
                  </div>
                  Выездной кейтеринг
                </Link>
              </div> */}
            </div>
          </div>
          <div
            className="direction-right"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="900"
          >
            <LazyLoadImage
              className="right-absolute-image"
              src={directionAbsoluteImage}
              alt=""
            />
            <div className="right-image">
              <LazyLoadImage src={directionImage} alt="" />
              <div
                className="right-absolute-text md:pl-8 pl-0"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="1200"
              >
                <TranslationApi
                  ru={tab?.name_ru?.slice(0, 10)}
                  uz={tab?.name_uz?.slice(0, 10)}
                  en={tab?.name_en?.slice(0, 10)}
                />
              </div>
            </div>
            <div
              className="right-title md:px-8"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="1500"
            >
              <TranslationApi
                ru={tab?.name_ru?.slice(10, tab?.name_ru?.length - 0)}
                uz={tab?.name_uz?.slice(10, tab?.name_uz?.length - 0)}
                en={tab?.name_en?.slice(10, tab?.name_en?.length - 0)}
              />
            </div>
            {desc && (
              <div
                className="right-desc color-gray text-lg leading-tight font-400 md:pr-8 md:pl-24 pl-0 md:mt-16 mt-4"
                style={{ zIndex: "1" }}
                data-aos="fade-zoom-in"
                data-aos-duration="600"
                data-aos-delay="1200"
              >
                <TranslationApi
                  ru={HTMLReactParser(String(desc?.description_ru))}
                  uz={HTMLReactParser(String(desc?.description_uz))}
                  en={HTMLReactParser(String(desc?.description_en))}
                />
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Direction;
