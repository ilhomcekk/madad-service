import { Container } from "@mui/system";
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import newsAbsoluteImage2 from "../../assets/images/news-page-absolute-2.png";
import "../../assets/scss/_contacts.scss";
import Title from "../../components/title/Title";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { FaFacebook, FaMapMarkerAlt, FaTelegramPlane } from "react-icons/fa";
import Feedback from "../../components/feedback/Feedback";
import { BsArrowRight, BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { BiMap } from "react-icons/bi";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { Button, TextField } from "@mui/material";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { postFeedbackCreate } from "../../redux/actions/feedbackActions";
import TranslationApi from "../../components/translation/TranslationApi";

const containerStyle = {
  width: "100%",
  height: "300px",
};

const center = {
  lat: 41.2598788,
  lng: 69.2238091,
};

const Contacts = () => {
  const dispatch = useDispatch();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAoud-_7sLGaEDVV5s8QvtTeGzI9dunLqU",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const [dateNow, setDateNow] = useState("");

  const [params, setParams] = useState({
    name: "",
    phone: "",
    description: "",
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
    if (params.name && params.phone && params.description) {
      dispatch(postFeedbackCreate(params));
      setParams((prev) => {
        return {
          ...prev,
          name: "",
          phone: "",
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
    <div className="content">
      <div className="contacts-container">
        <LazyLoadImage
          className="contacts-page-absolute-image-2"
          src={newsAbsoluteImage2}
          alt=""
        />
        <Container>
          <Title
            title={<TranslationApi ru="КОНТАКТЫ" uz="KONTATK" en="CONTACTS" />}
          />
          <div className="contacts-box flex lg:flex-row flex-col pt-10 pb-24">
            <div className="box-first">
              {isLoaded ? (
                <GoogleMap
                  mapContainerClassName="map"
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={13}
                  onLoad={onLoad}
                  onUnmount={onUnmount}
                >
                  {/* Child components, such as markers, info windows, etc. */}
                  <Marker
                    onLoad={onLoad}
                    position={center}
                    icon={<FaMapMarkerAlt />}
                  ></Marker>
                </GoogleMap>
              ) : (
                <></>
              )}
              <div className="contact-boxes grid md:grid-cols-2 gap-4 mt-4">
                <div className="contact-box">
                  <div className="text-2xl color-blue mb-4">
                    <TranslationApi ru="Контакты" uz="Kontakt" en="Contacts" />
                  </div>
                  <div className="contact-block">
                    <BsTelephone />
                    <div>
                      <div className="block-title">+998 93 002 03 33</div>
                      <div className="block-text color-gray font-400">
                        Номер телефона
                      </div>
                    </div>
                  </div>
                  <div className="contact-block">
                    <HiOutlineMail />
                    <div>
                      <div className="block-title">info@madad-service.uz</div>
                      <div className="block-text color-gray font-400">
                        Почта
                      </div>
                    </div>
                  </div>
                  <div className="contact-block">
                    <BiMap />
                    <div>
                      <div className="block-title">Локация</div>
                      <div className="block-text color-gray font-400">
                        ТРЦ Vega Centre ул. Шота Руставели 150 напротив Южного
                        вокзала, Ташкент 100121
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact-box">
                  <div className="text-2xl color-blue mb-4">
                    <TranslationApi
                      ru="Соц.сети"
                      uz="Tarmoqlar"
                      en="Soc.networks"
                    />
                  </div>
                  <div className="contacts-icon flex items-center gap-4">
                    <a href="https://www.facebook.com/Madad-Service-111374008089763/?ref=pages_you_manage">
                      <FaFacebook color="#1babe3" size={28} />
                    </a>
                    <a href="https://t.me/madad_service">
                      <FaTelegramPlane color="#1babe3" size={28} />
                    </a>
                    <a href="https://instagram.com/madad_service?igshid=YmMyMTA2M2Y=">
                      <AiFillInstagram color="#1babe3" size={28} />
                    </a>
                    <a href="https://www.youtube.com/@madadservice">
                      <AiFillYoutube color="#1babe3" size={28} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-last">
              <div className="send-card">
                <div className="send-title text-white text-2xl text-center mb-8">
                  <TranslationApi
                    ru="Отправьте нам сообщение"
                    uz="Bizga xabar yuboring"
                    en="Send us a message"
                  />
                </div>
                <TextField
                  id="filled-textarea"
                  label={<TranslationApi ru="Имя" uz="Ism" en="Name" />}
                  multiline
                  variant="filled"
                  focused
                  size="large"
                  className="contact-input"
                  name="name"
                  value={params.name}
                  onChange={handleChangeParams}
                />
                <TextField
                  id="filled-textarea"
                  label={
                    <TranslationApi ru="Телефон" uz="Telefon" en="Phone" />
                  }
                  multiline
                  variant="filled"
                  focused
                  size="large"
                  className="contact-input"
                  name="phone"
                  value={params.phone}
                  onChange={handleChangeParams}
                />
                <TextField
                  id="filled-textarea"
                  label={
                    <TranslationApi
                      ru="Описание"
                      uz="Tavsif"
                      en="Description"
                    />
                  }
                  multiline
                  variant="filled"
                  focused
                  size="large"
                  className="contact-input"
                  name="description"
                  value={params.description}
                  onChange={handleChangeParams}
                />
                <div className="contact-send" onClick={handleSubmit}>
                  <TranslationApi ru="Отправить" uz="Jo'natish" en="Send" />
                  <div className="svg">
                    <BsArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Feedback />
    </div>
  );
};

export default Contacts;
