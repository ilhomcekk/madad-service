import HTMLReactParser from "html-react-parser";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "../../assets/scss/_carts.scss";
import TranslationApi from "../translation/TranslationApi";
const API = "https://api.madad-service.uz/";

const NewsCart = ({ cart, attribute }) => {
  return (
    <Link to={`/news/${cart?._id}`} className="news-cart" {...attribute}>
      {/* <LazyLoadImage
        className="cart__image"
        src="https://picsum.photos/350/350"
        alt=""
      /> */}
      <LazyLoadImage
        className="cart__image"
        src={API + cart?.photo}
        alt=""
        style={{ width: "350px", height: "350px" }}
      />
      <div className="cart__action">
        <div className="cart__title">
          {
            <TranslationApi
              uz={cart?.name_uz}
              ru={cart?.name_ru}
              en={cart?.name_en}
            />
          }
        </div>
        <div className="cart__description">
          <TranslationApi
            uz={HTMLReactParser(String(cart?.description_uz))}
            ru={HTMLReactParser(String(cart?.description_ru))}
            en={HTMLReactParser(String(cart?.description_en))}
          />
        </div>
        <div className="cart__date">{cart?.date?.split(",")[0]}</div>
      </div>
    </Link>
  );
};

export default NewsCart;
