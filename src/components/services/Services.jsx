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

const Services = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getServices({ page: 1, limit: 40 }));
  }, []);

  const categories = useSelector((state) => state.category.category);
  const { loading } = useSelector((state) => state.category);
  const [selectedTab, setSelectedTab] = useState(0);
  const services = useSelector((state) => state.services.services);
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
            "data-aos-duration": 900,
            "data-aos-delay": 900,
          }}
          title={<TranslationApi ru="УСЛУГИ" uz="XIZMATLAR" en="SERVICES" />}
        />
        <div className="flex overflow-x-auto relative gap-x-2 my-8">
          <Button
            onClick={() => {
              setSelectedTab(0);
              // dispatch(getServicesByCategory(category?._id));
            }}
            className={`category-tab ${selectedTab === 0 && "active"}`}
            attribute={{
              "data-aos": "fade-zoom-in",
              "data-aos-duration": 900,
              "data-aos-delay": 300,
            }}
          >
            <TranslationApi ru="Все" uz="Hammasi" en="All" />
          </Button>
          {categories?.map((category, idx) => (
            <Button
              onClick={() => {
                setSelectedTab(category?._id);
                dispatch(getServicesByCategory(category?._id));
              }}
              key={idx}
              className={`category-tab ${
                selectedTab === category?._id && "active"
              }`}
              attribute={{
                "data-aos": "fade-zoom-in",
                "data-aos-duration": 900,
                "data-aos-delay": 300,
              }}
            >
              <TranslationApi
                uz={category?.name_uz}
                ru={category?.name_ru}
                en={category?.name_en}
              />
            </Button>
          ))}
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {selectedTab === 0
            ? services?.slice(0, 6)?.map((cart, idx) => (
                <ServiceCart
                  attribute={{
                    "data-aos": "fade-zoom-in",
                    "data-aos-duration": 900,
                    "data-aos-delay": 100,
                  }}
                  key={idx}
                  cart={cart}
                />
              ))
            : servicesByCategory?.map((cart, idx) => (
                <ServiceCart
                  attribute={{
                    "data-aos": "fade-zoom-in",
                    "data-aos-duration": 900,
                    "data-aos-delay": 100,
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

export default Services;
