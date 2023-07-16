import { Container } from "@mui/system";
import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Feedback from "../../components/feedback/Feedback";
import Title from "../../components/title/Title";
import newsAbsoluteImage2 from "../../assets/images/news-page-absolute-2.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { IoIosArrowDown } from "react-icons/io";
import "../../assets/scss/_faq.scss";
import { useDispatch, useSelector } from "react-redux";
import { getFaq } from "../../redux/actions/faqActions";
import TranslationApi from "../../components/translation/TranslationApi";

const Faq = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFaq());
  }, []);

  const faqs = useSelector((state) => state.faq.faq);

  return (
    <div className="content">
      <div className="agreement-container relative">
        <LazyLoadImage
          className="faq-page-absolute-image-2"
          src={newsAbsoluteImage2}
          alt=""
        />
        <Container>
          <Title title="FAQ" className="mb-8" />
          <div className="faq-accordions flex flex-col gap-2">
            {faqs?.map((item, idx) => (
              <Accordion key={idx}>
                <AccordionSummary
                  expandIcon={<IoIosArrowDown size={22} color="#1babe3" />}
                  aria-controls={`panel${item?._id}a-content`}
                  id={`panel${item?._id}a-header`}
                >
                  <Typography>
                    <TranslationApi
                      uz={item?.question_uz}
                      ru={item?.question_ru}
                      en={item?.question_en}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="color-gray font-400">
                    <TranslationApi
                      uz={item?.answer_uz}
                      ru={item?.answer_ru}
                      en={item?.answer_en}
                    />
                  </div>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </Container>
      </div>
      <Feedback />
    </div>
  );
};

export default Faq;
