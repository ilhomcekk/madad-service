import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import uzFlag from "../../assets/images/uz.svg";
// import ruFlag from "../../assets/images/ru.svg";
// import enFlag from "../../assets/images/en.svg";
import uzFlag from "../../assets/images/uz.png";
import ruFlag from "../../assets/images/ru.png";
import enFlag from "../../assets/images/en.png";
import { IoIosArrowDown } from "react-icons/io";

const NavbarLanguage = () => {
  const language = window.localStorage.getItem("madad-Content-Language");
  const handleLanguage = (language) => {
    window.localStorage.setItem("madad-Content-Language", language);
    window.location.reload();
  };
  const languages = [
    {
      lang: "ru",
      name: "RU",
      img: ruFlag,
    },
    {
      lang: "uz",
      name: "UZ",
      img: uzFlag,
    },
    {
      lang: "en",
      name: "EN",
      img: enFlag,
    },
  ];

  const languagesArr = languages?.filter((item) => item?.lang !== language);
  const selectedLanguage = languages?.find((item) => item?.lang === language);

  return (
    <div
      className="navbar-language"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-delay="1500"
    >
      <div className="selected-language">
        <LazyLoadImage src={selectedLanguage?.img} alt="" />
        {selectedLanguage?.name}
        <IoIosArrowDown />
      </div>
      <div className="language-dropdown shadow-2xl">
        {languagesArr?.map((item, idx) => (
          <div
            key={idx}
            className="language"
            onClick={() => handleLanguage(item?.lang)}
          >
            <LazyLoadImage src={item?.img} alt="" />
            {item?.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavbarLanguage;
