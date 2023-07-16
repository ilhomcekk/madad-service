import { Button } from "@mui/material";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "../../assets/scss/_carts.scss";
import TranslationApi from "../translation/TranslationApi";

const ServiceCart = ({ cart, attribute }) => {
  return (
    <Link to={`/tariffs/${cart?._id}`} className="service-cart" {...attribute}>
      <div className="cart__image">
        {/* <LazyLoadImage src="https://picsum.photos/350/250" alt="" /> */}
        <LazyLoadImage
          src={"http://188.93.210.225:5000/" + cart?.photo}
          alt=""
          style={{ width: "350px", height: "250px" }}
        />
      </div>
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
        <Button className="cart__link">
          <BsArrowRight />
        </Button>
      </div>
    </Link>
  );
};

export default ServiceCart;
