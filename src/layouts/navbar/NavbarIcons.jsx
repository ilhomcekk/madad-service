import React, { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import TarifModal from "../../components/modal/TarifModal";
import {
  backTarifStep,
  postCreateTelegram,
  setTarifStep,
} from "../../redux/actions/telegramActions";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Box, TextField } from "@mui/material";
import { ImArrowRight2 } from "react-icons/im";
import { toast } from "react-toastify";
import { AiOutlinePercentage } from "react-icons/ai";
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
};

const NavbarIcons = () => {
  const dispatch = useDispatch();

  const [modal, setModal] = useState();
  const [params, setParams] = useState({
    name: "",
    phone: "",
    tarif: "Не выбрано",
    price: "Не выбрано",
    category: "Не выбрано",
    comment: "",
  });

  const { step } = useSelector((state) => state.telegram);
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
      <div
        className="navbar-icons"
        data-aos="fade-down"
        data-aos-duration="1200"
        data-aos-delay="1500"
      >
        <a
          className="navbar-phone flex items-center gap-2"
          href="tel:+998930020333"
        >
          <BsTelephone size={24} color="#fff" />
          +998 93 002 03 33
        </a>
        <div
          className="navbar-discount flex items-center text-white cursor-pointer"
          onClick={handleClick}
        >
          <TranslationApi
            ru="Получить скидку"
            uz="Chegirma"
            en="Get a discount"
          />
          <AiOutlinePercentage
            size={24}
            color="#fff"
            stroke="2"
            strokeWidth={4}
          />
        </div>
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

export default NavbarIcons;
