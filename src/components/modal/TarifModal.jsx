import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { ImArrowRight2 } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import {
  backTarifStep,
  postCreateTelegram,
  setTarifStep,
} from "../../redux/actions/telegramActions";
import { toast } from "react-toastify";
import TranslationApi from "../translation/TranslationApi";
import logo from "../../assets/images/no-home-logo.png";
import "../../assets/scss/_components.scss";

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

const TarifModal = ({ data }) => {
  const dispatch = useDispatch();

  const [params, setParams] = useState({
    name: "",
    phone: "",
    tarif: data?.name_ru,
    price: data?.price,
    category: data?.category?.name_ru,
    comment: "",
  });

  useEffect(() => {
    setParams((prev) => {
      return {
        ...prev,
        tarif: data?.name_ru,
        price: data?.price,
        category: data?.category?.name_ru,
      };
    });
  }, [data]);

  const { step } = useSelector((state) => state.telegram);
  const handleClose = () => {
    dispatch(backTarifStep());
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
          ФИО: ${params.name}
          %0AТелефон: ${params.phone} %0AУслуга: ${params.category} %0AТариф: ${params.tarif} %0AЦена: ${params.price} сум %0AКомментарий: ${params.comment}
      `)
      );
    }
  };

  return (
    <div>
      <Modal
        open={step}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            <TranslationApi
              ru="Ваше данные"
              uz="Sizning tafsilotlaringiz"
              en="Your details"
            />
          </Typography> */}
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
            {/* <label htmlFor="name" className="block mt-4">
              <TranslationApi ru="Имя" uz="Ism" en="Name" />
            </label> */}
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
            {/* <label htmlFor="phone" className="block mt-4">
              <TranslationApi ru="Телефон" uz="Telefon" en="Phone" />
            </label> */}
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
            {/* <label htmlFor="comment" className="block mt-4">
              <TranslationApi ru="Комментарий" uz="Sharh" en="Description" />
            </label> */}
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
                <TranslationApi ru="Комментарий" uz="Sharh" en="Description" />
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
  );
};

export default TarifModal;
