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

  const handleSubmit = () => {
    if (!params?.name) {
      toast.error("Напишите имя");
    }
    if (!params?.phone) {
      toast.error("Напишите телефон");
    }
    if (params?.name && params?.phone) {
      dispatch(
        postCreateTelegram(`
          ФИО: ${params.name} %0AСкидка: Заявка со скидкой 10%
          %0AТелефон: ${params.phone} %0AУслуга: ${params.category} %0AТариф: ${params.tarif} %0AЦена: ${params.price} сум %0AКомментария: ${params.comment}
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
          className="flex items-center text-white gap-2"
          href="tel:+998930020333"
        >
          <BsTelephone size={24} color="#fff" />
          +998 93 002 03 33
        </a>
        <div
          className="navbar-discount flex items-center text-white cursor-pointer"
          onClick={handleClick}
        >
          Получить скидку
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
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Ваше данные
            </Typography>
            <div>
              <label htmlFor="name" className="block mt-4">
                Имя
              </label>
              <TextField
                className="w-full"
                name="name"
                id="name"
                onChange={handleChangeParams}
              />
              <label htmlFor="phone" className="block mt-4">
                Телефон
              </label>
              <TextField
                className="w-full"
                name="phone"
                id="phone"
                onChange={handleChangeParams}
              />
              <label htmlFor="comment" className="block mt-4">
                Комментария
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
              Подать заявку
              <ImArrowRight2 />
            </button>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default NavbarIcons;
