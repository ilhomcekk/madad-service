import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../assets/scss/_news.scss";
import Title from "../../components/title/Title";
import newsAbsoluteImage from "../../assets/images/news-page-absolute.png";
import newsAbsoluteImage2 from "../../assets/images/news-page-absolute-2.png";
import NewsCart from "../../components/carts/NewsCart";
import { Pagination } from "@mui/material";
import Feedback from "../../components/feedback/Feedback";
import { useDispatch, useSelector } from "react-redux";
import { getNews, getNewsBySearch } from "../../redux/actions/newsActions";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const NewsSearch = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { slug } = useParams();
  const location = useLocation();
  const { search } = location;
  const metaNumber = search ? parseInt(search?.match(/\d+/)[0]) : 1;
  const [pagination, setPagination] = useState({
    page: metaNumber,
    limit: 12,
  });

  useEffect(() => {
    let newPagination = {
      ...pagination,
      page: metaNumber,
    };
    setPagination(newPagination);
    dispatch(getNewsBySearch(slug, newPagination));
  }, [metaNumber, slug]);

  const news = useSelector((state) => state.news.newsBySearch);
  const _meta = useSelector((state) => state.news.newsBySearchPagination);
  const handlePagination = (e, value) => {
    navigate(`?page=${value}`);
  };

  return (
    <div className="content">
      <div className="news-container">
        <LazyLoadImage
          className="news-page-absolute-image"
          src={newsAbsoluteImage}
          alt=""
        />
        <LazyLoadImage
          className="news-page-absolute-image-2"
          src={newsAbsoluteImage2}
          alt=""
        />
        <Container>
          <div className="flex items-center gap-2 mt-4 text-xl">
            <FiSearch />
            {news?.length > 0
              ? `По запросу ${_meta?.totalCount} результатов`
              : "Нет результатов"}
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 my-12">
            {news?.map((item, idx) => (
              <NewsCart cart={item} key={idx} />
            ))}
          </div>
          <div className="flex items-center justify-center">
            <Pagination
              onChange={handlePagination}
              count={_meta?.pageCount}
              page={pagination.page}
              color="primary"
            />
          </div>
        </Container>
      </div>
      <Feedback />
    </div>
  );
};

export default NewsSearch;
