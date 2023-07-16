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
import { getNews } from "../../redux/actions/newsActions";
import { useLocation, useNavigate } from "react-router-dom";

const News = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { search } = location;
  const metaNumber = search ? parseInt(search?.match(/\d+/)[0]) : 1;
  const [pagination, setPagination] = useState({
    page: metaNumber,
    limit: 6,
  });

  useEffect(() => {
    let newPagination = {
      ...pagination,
      page: metaNumber,
    };
    setPagination(newPagination);
    dispatch(getNews(newPagination));
  }, [metaNumber]);

  const news = useSelector((state) => state.news.news);
  const _meta = useSelector((state) => state.news.pagination);
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
          <Title title="НОВОСТИ" />
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

export default News;
