import { Drawer, IconButton, TextField, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getNewsBySearch } from "../../redux/actions/newsActions";

const NavbarSearch = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleChangeParams = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {}, []);
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const [openSearchMenu, setOpenSearchMenu] = useState(false);
  const matches = useMediaQuery("(max-width: 769px)");
  const handleSearch = () => {
    if (matches) {
      setOpenSearchMenu(true);
    } else {
      navigate(`/news/search/${query}?page=1`);
      setQuery("");
    }
  };

  useEffect(() => {
    setOpenSearchMenu(false);
  }, [pathname]);

  return (
    <div
      className="navbar-search"
      data-aos="fade-zoom-in"
      data-aos-duration="1200"
      data-aos-delay="1800"
    >
      <input
        value={query}
        onChange={handleChangeParams}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            navigate(`/news/search/${query}?page=1`);
            setQuery("");
          }
        }}
        type="search"
        placeholder="Поиск"
      />
      <div className="search-icon" onClick={handleSearch}>
        <FiSearch size={18} />
      </div>
    </div>
  );
};

export default NavbarSearch;
