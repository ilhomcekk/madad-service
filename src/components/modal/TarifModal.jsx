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
      toast.error("Напишите комментария");
    }
    if (params?.name && params?.phone && params?.comment) {
      dispatch(
        postCreateTelegram(`
          ФИО: ${params.name}
          %0AТелефон: ${params.phone} %0AУслуга: ${params.category} %0AТариф: ${params.tarif} %0AЦена: ${params.price} сум %0AКомментария: ${params.comment}
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <TranslationApi
              ru="Ваше данные"
              uz="Sizning tafsilotlaringiz"
              en="Your details"
            />
          </Typography>
          <div>
            <label htmlFor="name" className="block mt-4">
              <TranslationApi ru="Имя" uz="Ism" en="Name" />
            </label>
            <TextField
              className="w-full"
              name="name"
              id="name"
              onChange={handleChangeParams}
            />
            <label htmlFor="phone" className="block mt-4">
              <TranslationApi ru="Телефон" uz="Telefon" en="Phone" />
            </label>
            <TextField
              className="w-full"
              name="phone"
              id="phone"
              type="text"
              value={params?.phone}
              onChange={handleChangePhone}
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            />
            <label htmlFor="comment" className="block mt-4">
              <TranslationApi ru="Комментария" uz="Sharh" en="" />
            </label>
            <TextField
              className="w-full"
              name="comment"
              id="comment"
              onChange={handleChangeParams}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="show-more mx-auto mt-8 !text-base"
          >
            <TranslationApi
              ru="Подать заявку"
              uz="Murojaat qilish"
              en="Apply"
            />
            <ImArrowRight2 />
          </button>
        </Box>
      </Modal>
    </div>
  );
};

export default TarifModal;
