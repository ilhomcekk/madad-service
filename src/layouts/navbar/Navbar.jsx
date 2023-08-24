import { Container } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useLocation } from "react-router-dom";
import "../../assets/scss/_navbar.scss";
// import noHomeLogo from "../../assets/images/no-home-logo.svg";
import noHomeLogo from "../../assets/images/no-home-logo.png";
// import homeLogo from "../../assets/images/home-logo.svg";
import homeLogo from "../../assets/images/home-logo.png";
import NavbarSearch from "./NavbarSearch";
import NavbarLanguage from "./NavbarLanguage";
import {
  Box,
  Drawer,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineCloseCircle, AiOutlinePercentage } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import NavbarIcons from "./NavbarIcons";
import { BsTelephone } from "react-icons/bs";
import { toast } from "react-toastify";
import { postCreateTelegram } from "../../redux/actions/telegramActions";
import { useDispatch } from "react-redux";
import { ImArrowRight2 } from "react-icons/im";
import TranslationApi from "../../components/translation/TranslationApi";
import logo from "../../assets/images/no-home-logo.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
};

const Navbar = () => {
  const dispatch = useDispatch();
  const myRef = useRef();
  const { t } = useTranslation();
  const [openMenuBars, setOpenMenuBars] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  //   NAVBAR STYLE
  const [navbarFixed, setNavbarFixed] = useState(false);
  const [y, setY] = useState();
  const getYPosition = () => {
    const y = myRef.current.offsetTop;
    setY(y);
  };
  useEffect(() => {
    getYPosition();
  }, [myRef]);
  useEffect(() => {
    setOpenMenuBars(false);
  }, [pathname]);
  const handleScrollNavbar = () => {
    if (window.scrollY > y) {
      setNavbarFixed(true);
    } else {
      setNavbarFixed(false);
    }
  };
  window.addEventListener("scroll", handleScrollNavbar);
  // ================================================
  const [modal, setModal] = useState(false);
  const [params, setParams] = useState({
    name: "",
    phone: "",
    tarif: "Не выбрано",
    price: "Не выбрано",
    category: "Не выбрано",
    comment: "",
  });
  const handleClose = () => {
    // dispatch(backTarifStep());
    setModal(false);
  };

  const handleClick = () => {
    // dispatch(setTarifStep());
    setModal(true);
  };
  const handleChangeParams = (e) => {
    const { name, value } = e.target;
    setParams((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleChangePhone = (e) => {
    const { name, value } = e.target;
    setParams((prev) => {
      return {
        ...prev,
        [name]: value?.replace(/\D/g, ""),
      };
    });
  };
  const handleSubmit = () => {
    if (!params?.name) {
      toast.error("Напишите имя");
    }
    if (!params?.phone) {
      toast.error("Напишите телефон");
    }
    if (!params?.comment) {
      toast.error("Напишите комментарий");
    }
    if (params?.name && params?.phone && params?.comment) {
      dispatch(
        postCreateTelegram(`
          ФИО: ${params.name} %0AСкидка: Заявка со скидкой 10%
          %0AТелефон: ${params.phone} %0AУслуга: ${params.category} %0AТариф: ${params.tarif} %0AЦена: ${params.price} сум %0AКомментарий: ${params.comment}
      `)
      );
      setModal(false);
    }
  };

  return (
    <>
      <div className={`navbar-height ${pathname !== "/" && "active-height"}`}>
        <nav
          ref={myRef}
          className={`navbar ${navbarFixed && "navbar-fixed"} no-home`}
        >
          <Container>
            <div className="navbar-inner">
              <Link
                to="/"
                className="navbar-logo"
                data-aos="fade-zoom-in"
                data-aos-duration="1200"
                data-aos-delay="1500"
              >
                {/* {pathname !== "/" ? (
                  <LazyLoadImage alt="" src={`${noHomeLogo}`} />
                ) : (
                  <LazyLoadImage alt="" src={`${homeLogo}`} />
                )} */}
                <LazyLoadImage alt="" src={`${noHomeLogo}`} />
              </Link>
              {/* <NavbarSearch /> */}
              <div className="navbar-list">
                <Link
                  to="/offer"
                  data-aos="fade-down"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <TranslationApi ru="Услуги" uz="Xizmatlar" en="Services" />
                </Link>
                <Link
                  to="/news"
                  data-aos="fade-down"
                  data-aos-duration="1200"
                  data-aos-delay="600"
                >
                  <TranslationApi ru="Новости" uz="Yangiliklar" en="News" />
                </Link>
                <Link
                  to="/contacts"
                  data-aos="fade-down"
                  data-aos-duration="1200"
                  data-aos-delay="900"
                >
                  <TranslationApi ru="Контакты" uz="Kontakt" en="Contacts" />
                </Link>
                <Link
                  to="/faq"
                  data-aos="fade-down"
                  data-aos-duration="1200"
                  data-aos-delay="1200"
                >
                  FAQ
                </Link>
              </div>
              <NavbarIcons />
              <NavbarLanguage />
              <IconButton
                data-aos="fade-down"
                data-aos-duration="1200"
                data-aos-delay="1200"
                className="menu-bars"
                onClick={() => setOpenMenuBars(true)}
              >
                <CiMenuFries />
              </IconButton>
            </div>
          </Container>
        </nav>
        <Drawer
          open={openMenuBars}
          anchor={"left"}
          onClose={() => setOpenMenuBars(false)}
          className="mobile-menu"
        >
          <IconButton
            className="!ml-auto"
            size="large"
            onClick={() => setOpenMenuBars(false)}
          >
            <AiOutlineCloseCircle size={32} color="#fff" />
          </IconButton>
          {/* <TextField
            className="menu-search !mx-4"
            id="standard-basic"
            label="Поиск"
            variant="standard"
          /> */}
          <div className="bars-list">
            <Link to="/offer">
              <TranslationApi ru="Услуги" uz="Xizmatlar" en="Services" />
            </Link>
            <Link to="/news">
              <TranslationApi ru="Новости" uz="Yangiliklar" en="Новости" />
            </Link>
            <Link to="/contacts">
              <TranslationApi ru="Контакты" uz="Kontakt" en="Contacts" />
            </Link>
            <Link to="/faq">FAQ</Link>
            <div
              onClick={handleClick}
              className="flex items-center text-white cursor-pointer text-lg gap-x-2 whitespace-nowrap"
            >
              Получить скидку
              <AiOutlinePercentage
                size={24}
                color="#fff"
                stroke="2"
                strokeWidth={4}
              />
            </div>
            <a className="!flex !items-center gap-x-2" href="tel:+998930020333">
              <BsTelephone size={24} color="#fff" />
              +998 93 002 03 33
            </a>
          </div>
        </Drawer>
      </div>
      <div>
        <Modal
          open={modal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <img
              className="text-center mx-auto"
              style={{ maxWidth: "220px" }}
              src={logo}
              alt=""
            />
            <div className="mt-2 leading-[16px] font-400 text-center text-[#333]">
              <TranslationApi
                ru="Хотите, чтобы оператор call-центра связался с вами в течение 3
              минут?"
                uz="Call-markaz operatori siz bilan 3 daqiqa ichida bog‘lanishini xohlaysizmi?"
                en="Do you want a call center operator to contact you within 3 minutes?"
              />
            </div>
            <div className="flex flex-col gap-6  mt-6">
              <TextField
                className="w-full"
                name="name"
                id="name"
                InputLabelProps={{
                  className: "font-400",
                }}
                label={<TranslationApi ru="Имя" uz="Ism" en="Name" />}
                onChange={handleChangeParams}
                inputProps={{
                  className: "!bg-gray-200 font-400",
                }}
              />
              <TextField
                className="w-full"
                name="phone"
                id="phone"
                InputLabelProps={{
                  className: "font-400",
                }}
                type="text"
                value={params?.phone}
                label={<TranslationApi ru="Телефон" uz="Telefon" en="Phone" />}
                onChange={handleChangePhone}
                inputProps={{
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  className: "!bg-gray-200 font-400",
                }}
              />
              <TextField
                className="w-full !bg-gray-200 !rounded-xl"
                name="comment"
                id="comment"
                rows={3}
                multiline
                InputLabelProps={{
                  className: "font-400",
                }}
                label={
                  <TranslationApi
                    ru="Комментарий"
                    uz="Sharh"
                    en="Description"
                  />
                }
                onChange={handleChangeParams}
                inputProps={{
                  className: "font-400",
                }}
              />
            </div>
            <button
              onClick={handleSubmit}
              className="show-more mx-auto mt-8 !text-base"
            >
              <TranslationApi ru="Отправить" uz="Jo'natish" en="Send" />
              <ImArrowRight2 />
            </button>
            <div className="border-t text-sm font-300 text-gray text-center leading-none mt-4 pt-2">
              <TranslationApi
                ru="Нажимая кнопку «Отправить», вы подтверждаете свое согласие на
            обработку персональных данных"
                uz="Jo'natish tugmasini bosish orqali siz roziligingizni tasdiqlaysiz
             shaxsiy ma'lumotlarni qayta ishlash"
                en="By clicking the 'Send' button, you confirm your consent to
             processing of personal data"
              />
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default Navbar;
