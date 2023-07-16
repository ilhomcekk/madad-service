import React from "react";
const language = window.localStorage.getItem("madad-Content-Language");

const TranslationApi = ({ uz, ru, en }) => {
  let field;
  if (language === "uz") {
    field = uz;
  }
  if (language === "ru") {
    field = ru;
  }
  if (language === "en") {
    field = en;
  }
  return field;
};

export default TranslationApi;
