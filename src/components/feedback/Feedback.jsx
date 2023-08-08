import React, { useState } from "react";
import { Container } from "@mui/system";
import Title from "../title/Title";
import { LazyLoadImage } from "react-lazy-load-image-component";
import feedbackImage from "../../assets/images/feedback.png";
import { Button, TextField } from "@mui/material";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { postFeedbackCreate } from "../../redux/actions/feedbackActions";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import TranslationApi from "../translation/TranslationApi";
import { postCreateTelegram } from "../../redux/actions/telegramActions";

const Feedback = () => {
  const dispatch = useDispatch();

  const [dateNow, setDateNow] = useState("");

  const [params, setParams] = useState({
    name: "",
    phone: "",
    description: "",
    date: dateNow,
  });

  const [telegramParams, setTelegramParams] = useState({
    name: "",
    phone: "",
    tarif: "Не выбрано",
    price: "Не выбрано",
    category: "Не выбрано",
    comment: "",
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
    if (params.name && params.phone && params.description) {
      dispatch(postFeedbackCreate(params));
      dispatch(
        postCreateTelegram(`
          ФИО: ${params.name}
          %0AТелефон: ${params.phone} %0AУслуга: ${telegramParams.category} %0AТариф: ${telegramParams.tarif} %0AЦена: ${telegramParams.price} %0AКомментария: ${params.description}
      `)
      );
      setParams((prev) => {
        return {
          ...prev,
          name: "",
          phone: "+998",
          description: "",
        };
      });
    }
    if (!params.name) {
      toast.error("Заполните имя");
    }
    if (!params.phone) {
      toast.error("Введите телефон номер");
    }
    if (!params.description) {
      toast.error("Заполните комментарий");
    }
  };

  return (
    <section className="feedback">
      <Container>
        <Title
          attribute={{
            "data-aos": "fade-zoom-in",
            "data-aos-duration": 900,
            "data-aos-delay": 300,
          }}
          title={
            <TranslationApi
              ru="ОБРАТНАЯ СВЯЗЬ"
              uz="QAYTA ALOQA"
              en="FEEDBACK"
            />
          }
          style="#fff"
        />
        <div className="feedback-box md:flex justify-between mt-8">
          <div className="md:w-1/3">
            <LazyLoadImage
              className="feedback-image"
              src={feedbackImage}
              alt=""
            />
          </div>
          <div className="md:w-3/5 h-max grid grid-cols-2 gap-x-6 gap-y-10 mt-8">
            <TextField
              id="filled-textarea"
              label={<TranslationApi ru="Имя" uz="Ism" en="Name" />}
              placeholder="Рафаэль"
              multiline
              variant="filled"
              focused
              size="large"
              className="feedback-input"
              data-aos="fade-right"
              data-aos-duration="900"
              name="name"
              value={params.name}
              onChange={handleChangeParams}
            />
            {/* <TextField
              id="filled-textarea"
              label="Телефон"
              placeholder="+998"
              multiline
              variant="filled"
              focused
              size="large"
              className="feedback-input"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="600"
              name="phone"
              value={params.phone}
              onChange={handleChangeParams}
            /> */}
            <PhoneInput
              name="multipleErrorInput4"
              autoCorrect="off"
              containerClass="_phone-input"
              country={"uz"}
              onlyCountries={["uz"]}
              countryCodeEditable={false}
              specialLabel={
                <TranslationApi ru="Телефон" uz="Telefon" en="Phone" />
              }
              value={params.phone}
              onChange={(e) =>
                setParams((prev) => {
                  return {
                    ...prev,
                    phone: `+${e}`,
                  };
                })
              }
            />
            <TextField
              id="filled-textarea"
              label={
                <TranslationApi ru="Описание" uz="Tavsif" en="Description" />
              }
              multiline
              variant="filled"
              focused
              size="large"
              className="feedback-input"
              data-aos="fade-right"
              data-aos-duration="900"
              data-aos-delay="600"
              name="description"
              value={params.description}
              onChange={handleChangeParams}
            />
            <Button
              data-aos="fade-right"
              data-aos-duration="900"
              data-aos-delay="900"
              className="feedback-send"
              variant="outlined"
              onClick={handleSubmit}
            >
              <BsArrowRight />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Feedback;
