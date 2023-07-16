import React, { useEffect, useState } from "react";
import newsAbsoluteImage from "../../assets/images/news-page-absolute.png";
import newsAbsoluteImage2 from "../../assets/images/news-page-absolute-2.png";
import { Container } from "@mui/system";
import { AiFillEye } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../assets/scss/_news.scss";
import Feedback from "../../components/feedback/Feedback";
import { MdOutlineDateRange } from "react-icons/md";
import { Button } from "@mui/material";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getDetailNews,
  postCreateCommentForNews,
} from "../../redux/actions/newsActions";
import Avatar from "../../assets/images/avatar.png";
import HTMLReactParser from "html-react-parser";
import { toast } from "react-toastify";
import TranslationApi from "../../components/translation/TranslationApi";
const API = "https://api.madad-service.uz/";

const NewsDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { data } = useSelector((state) => state.news);
  const [dateNow, setDateNow] = useState("");

  const [params, setParams] = useState({
    name: "",
    phone: "",
    comment: "",
    date: dateNow,
  });

  const handleDate = () => {
    const now = new Date();
    const options = { timeZone: "Asia/Tashkent" };
    const dateInUzbekistan = now.toLocaleString("ru-RU", options);
    setDateNow(dateInUzbekistan);
    setParams((prev) => {
      return {
        ...prev,
        date: dateInUzbekistan,
      };
    });
  };

  const handleChangeParams = (e) => {
    const { name, value } = e.target;
    handleDate();
    setParams((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    if (params.name && params.phone && params.comment) {
      dispatch(postCreateCommentForNews(id, params));
      setParams((prev) => {
        return {
          ...prev,
          name: "",
          phone: "",
          comment: "",
        };
      });
    }
    if (!params.name) {
      toast.error("Заполните имя");
    }
    if (!params.phone) {
      toast.error("Введите телефон номер");
    }
    if (!params.comment) {
      toast.error("Заполните комментарий");
    }
  };

  const { step } = useSelector((state) => state.news);

  useEffect(() => {
    if (step === true) {
      dispatch(getDetailNews(id));
    }
  }, [step]);

  useEffect(() => {
    dispatch(getDetailNews(id));
  }, [id]);

  return (
    <div className="content">
      <div className="news-container">
        <LazyLoadImage
          className="news-page-absolute-image"
          src={newsAbsoluteImage}
          alt=""
        />
        <LazyLoadImage
          className="news-page-absolute-image-2"
          src={newsAbsoluteImage2}
          alt=""
        />
        <Container>
          <div className="grid md:grid-cols-3 border-t">
            <div className="border-r pt-6 pr-6">
              <div className="text-2xl mb-4 leading-none">
                {
                  <TranslationApi
                    uz={data?.name_uz}
                    ru={data?.name_ru}
                    en={data?.name_en}
                  />
                }
              </div>
              <div className="flex items-center justify-between">
                <div className="color-gray text-xl font-400">{data?.date}</div>
                <div className="flex items-center color-blue text-lg gap-x-1 font-400">
                  <AiFillEye color="#1babe3" size={19} />
                  {data?.viewCount}
                </div>
              </div>
            </div>
            <div className="md:col-span-2 pt-6 md:pl-10 relative">
              {/* <LazyLoadImage
                style={{
                  maxHeight: "300px",
                  width: "100%",
                  borderRadius: "20px",
                  objectFit: "cover",
                }}
                src="https://picsum.photos/770/330"
                alt=""
              /> */}
              <LazyLoadImage
                style={{
                  maxHeight: "300px",
                  width: "100%",
                  borderRadius: "20px",
                  objectFit: "contain",
                }}
                src={API + data?.photo}
                alt=""
              />
              <div className="color-gray font-400 mt-6">
                <TranslationApi
                  uz={HTMLReactParser(String(data?.description_uz))}
                  ru={HTMLReactParser(String(data?.description_ru))}
                  en={HTMLReactParser(String(data?.description_en))}
                />
              </div>
              <div className="text-2xl mt-14 mb-6">Комментарии:</div>
              {data?.comments?.map((item, idx) => (
                <div key={idx} className="review">
                  <div className="flex md:flex-row flex-col items-center justify-between">
                    <div className="flex items-center gap-x-4 text-xl leading-none">
                      <LazyLoadImage
                        style={{
                          minWidth: "40px",
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                        }}
                        src={Avatar}
                        alt=""
                      />
                      {item?.name}
                    </div>
                    <div className="flex items-center gap-x-2 mr-0 color-gray font-400">
                      <MdOutlineDateRange size={16} color="#858585" />
                      {item?.date?.split(",")[0]}
                    </div>
                  </div>
                  <div className="color-gray pl-14 pr-14 my-4 font-400">
                    {item?.comment}
                  </div>
                </div>
              ))}
              <div className="text-2xl mt-14 mb-8">Оставить комментарий</div>
              <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                <div className="review-input">
                  <label>Имя</label>
                  <input
                    name="name"
                    value={params.name}
                    onChange={handleChangeParams}
                    type="text"
                  />
                </div>
                <div className="review-input">
                  <label>Номер телефона</label>
                  <input
                    name="phone"
                    value={params.phone}
                    onChange={handleChangeParams}
                    type="tel"
                  />
                </div>
                <div className="review-input col-span-2">
                  <label>Комментарий</label>
                  <input
                    name="comment"
                    value={params.comment}
                    onChange={handleChangeParams}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex items-center justify-end mt-12">
                <Button onClick={handleSubmit} className="review-send">
                  <BsArrowRight />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Feedback />
    </div>
  );
};

export default NewsDetail;
