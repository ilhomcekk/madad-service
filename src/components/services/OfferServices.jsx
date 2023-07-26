import { Button } from "@mui/base";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ServiceCart from "../carts/ServiceCart";
import Title from "../title/Title";
import serviceAbsoluteImage from "../../assets/images/goal-absolute.png";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../redux/actions/categoryActions";
import {
  getServices,
  getServicesByCategory,
} from "../../redux/actions/servicesActions";
import TranslationApi from "../translation/TranslationApi";
import { useParams } from "react-router-dom";

const OfferServices = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServicesByCategory(id));
  }, [id]);

  const servicesByCategory = useSelector(
    (state) => state.services.servicesByCategory
  );

  return (
    <section className="services">
      <LazyLoadImage
        className="services-absolute-image"
        src={serviceAbsoluteImage}
        alt=""
      />
      <Container>
        <Title
          attribute={{
            "data-aos": "fade-zoom-in",
            "data-aos-duration": 1200,
            "data-aos-delay": 1200,
          }}
          title={<TranslationApi ru="УСЛУГИ" uz="XIZMATLAR" en="SERVICES" />}
        />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-4">
          {servicesByCategory?.map((cart, idx) => (
            <ServiceCart
              attribute={{
                "data-aos": "fade-zoom-in",
                "data-aos-duration": 1200,
                "data-aos-delay": 400,
              }}
              key={idx}
              cart={cart}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OfferServices;
