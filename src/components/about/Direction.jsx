import React, { useEffect, useMemo, useState } from "react";
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
  const list1 = useMemo(
    () => list?.find((item) => item?._id === "64abfb066bfd48f1136090b2"),
    [list]
  );
  const list2 = useMemo(
    () => list?.find((item) => item?._id === "64abfae56bfd48f1136090ad"),
    [list]
  );
  const list3 = useMemo(
    () => list?.find((item) => item?._id === "64abfaa56bfd48f1136090a8"),
    [list]
  );
  const list4 = useMemo(
    () => list?.find((item) => item?._id === "64abfa6b6bfd48f1136090a3"),
    [list]
  );
  const services = useSelector((state) => state.services.services);
  const [tab, setTab] = useState();
  const desc = useMemo(
    () => services?.find((item) => item?.category?._id === tab?._id),
    [services]
  );
  useEffect(() => {
    setTab(list2);
  }, [list]);

  return (
    <section className="direction">
      <Container className="lg:!ml-0 lg:!pl-0">
        <div className="direction-block">
          <div
            className="direction-left"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <div className="left__title">
              <TranslationApi
                ru="НАШИ НАПРАВЛЕНИЯ"
                uz="BIZNING YO'NALISHLAR"
                en="OUR DIRECTIONS"
              />
            </div>
            <div className="left__boxes">
              {list && (
                <>
                  <div className="left__box">
                    {list1 && (
                      <div
                        className={`box ${
                          tab?._id === list1?._id && "active"
                        } right-border`}
                        onClick={() => setTab(list1)}
                      >
                        <div className="image">
                          <LazyLoadImage src={API + list1?.photo} alt="" />
                        </div>
                        <TranslationApi
                          uz={list1?.name_uz}
                          ru={list1?.name_ru}
                          en={list1?.name_en}
                        />
                      </div>
                    )}
                    {list2 && (
                      <div
                        className={`box ${tab?._id === list2?._id && "active"}`}
                        onClick={() => setTab(list2)}
                      >
                        <div className="image">
                          <LazyLoadImage src={API + list2?.photo} alt="" />
                        </div>
                        <TranslationApi
                          uz={list2?.name_uz}
                          ru={list2?.name_ru}
                          en={list2?.name_en}
                        />
                      </div>
                    )}
                  </div>
                  <div className="left__box">
                    {list3 && (
                      <div
                        className={`box ${
                          tab?._id === list3?._id && "active"
                        } right-border`}
                        onClick={() => setTab(list3)}
                      >
                        <div className="image">
                          <LazyLoadImage src={API + list3?.photo} alt="" />
                        </div>
                        <TranslationApi
                          uz={list3?.name_uz}
                          ru={list3?.name_ru}
                          en={list3?.name_en}
                        />
                      </div>
                    )}
                    {list4 && (
                      <div
                        className={`box ${tab?._id === list4?._id && "active"}`}
                        onClick={() => setTab(list4)}
                      >
                        <div className="image">
                          <LazyLoadImage src={API + list4?.photo} alt="" />
                        </div>
                        <TranslationApi
                          uz={list4?.name_uz}
                          ru={list4?.name_ru}
                          en={list4?.name_en}
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
              <LazyLoadImage src={API + desc?.photo} alt="" />
              <div
                className="right-absolute-text md:pl-8 pl-0"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="1200"
              >
                <TranslationApi
                  ru={tab?.name_ru?.substring(0, tab?.name_ru?.indexOf(" "))}
                  uz={tab?.name_uz?.substring(0, tab?.name_uz?.indexOf(" "))}
                  en={tab?.name_en?.substring(0, tab?.name_en?.indexOf(" "))}
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
                ru={tab?.name_ru?.substring(tab?.name_ru?.indexOf(" ") + 1)}
                uz={tab?.name_uz?.substring(tab?.name_uz?.indexOf(" ") + 1)}
                en={tab?.name_en?.substring(tab?.name_en?.indexOf(" ") + 1)}
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
