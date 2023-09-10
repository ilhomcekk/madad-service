import HTMLReactParser from "html-react-parser";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import TranslationApi from "../translation/TranslationApi";
const API = "https://api.madad-service.uz/";

const TarifServicesCart = ({ item }) => {
  return (
    <div
      style={{
        boxShadow: "0px 1px 17px rgba(198, 198, 198, 0.31)",
        borderRadius: "20px",
      }}
      className="bg-white grid grid-cols-3 md:gap-4 gap-2 md:p-6 px-2 py-6"
    >
      <LazyLoadImage
        style={{
          borderRadius: "20px",
          width: "100%",
          objectFit: "contain",
          maxHeight: "155px",
        }}
        src={item?.photo ? API + item?.photo : item?.image}
        alt=""
      />
      <div className="col-span-2">
        <div className="text-xl md:mb-3">
          <TranslationApi
            uz={item?.name_uz}
            ru={item?.name_ru}
            en={item?.name_en}
          />
        </div>
        <div
          className="md:text-lg color-gray !font-400"
          style={{ lineHeight: "1.2" }}
        >
          <TranslationApi
            uz={HTMLReactParser(String(item?.description_uz))}
            ru={HTMLReactParser(String(item?.description_ru))}
            en={HTMLReactParser(String(item?.description_en))}
          />
        </div>
      </div>
    </div>
  );
};

export default TarifServicesCart;
