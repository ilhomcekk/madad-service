import React from "react";
import { BsArrowRight } from "react-icons/bs";
import TranslationApi from "../translation/TranslationApi";

const TarifCart = ({ cart, handleClick }) => {
  const language = window.localStorage.getItem("madad-Content-Language");
  let num = +cart?.price;
  return (
    <div className="tarif-cart">
      <div className="tarif-title">
        <TranslationApi
          uz={cart?.name_uz}
          ru={cart?.name_ru}
          en={cart?.name_en}
        />
      </div>
      <div className="tarif-subtitle">
        <TranslationApi
          ru="Что входит:"
          uz="Nimalar bo'ladi:"
          en="What is included:"
        />
      </div>
      <ul className="tarif-list">
        {language === "ru" &&
          cart?.tariffs?.map((item, idx) => <li key={idx}>{item} </li>)}
        {language === "uz" &&
          cart?.tariffs_uz?.map((item, idx) => <li key={idx}>{item} </li>)}
        {language === "en" &&
          cart?.tariffs_en?.map((item, idx) => <li key={idx}>{item} </li>)}
      </ul>
      <div className="tarif-price">
        {num === 0 ? (
          <TranslationApi ru="Договорная" uz="Kelishiladi" en="Negotiable" />
        ) : (
          num?.toLocaleString("de-DE") + " сум"
        )}
      </div>
      <div className="tarif-link" onClick={handleClick}>
        <TranslationApi
          ru="Оставить заявку"
          uz="Arizangizni yuboring"
          en="Submit your application"
        />
        <div className="svg">
          <BsArrowRight />
        </div>
      </div>
    </div>
  );
};

export default TarifCart;
