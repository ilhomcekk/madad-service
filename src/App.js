import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./layouts/footer/Footer";
import Navbar from "./layouts/navbar/Navbar";
import ScrollToTop from "./layouts/navbar/ScrollToTop";
import Agreement from "./views/agreement/Agreement";
import Contacts from "./views/contacts/Contacts";
import Faq from "./views/faq/Faq";
import Home from "./views/home/Home";
import News from "./views/news/News";
import NewsDetail from "./views/news/NewsDetail";
import Offer from "./views/offer/Offer";
import Tariffs from "./views/tarif/Tariffs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewsSearch from "./views/news/NewsSearch";
import OfferDetail from "./views/offer/OfferDetail";
import TarifModal from "./components/modal/TarifModal";
import { setTarifStep } from "./redux/actions/telegramActions";
import { useDispatch } from "react-redux";
import { getCategory } from "./redux/actions/categoryActions";

const App = () => {
  const dispatch = useDispatch();
  const [modalData, setModalData] = useState({
    price: "Не выбрано",
    category: {
      name_ru: "Не выбрано",
    },
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(setTarifStep());
    }, 15000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    window.addEventListener(
      "load",
      AOS.init({
        once: true,
      })
    );
    try {
    } catch (e) {
      console.log(e);
    }
  }, [window]);

  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <ToastContainer position="top-right" />
      <TarifModal data={modalData} />
      <Routes path="/">
        <Route path="/" element={<Home />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/offer/:id" element={<OfferDetail />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/search/:slug" element={<NewsSearch />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/agreement" element={<Agreement />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/tariffs/:id" element={<Tariffs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
// "start": "PORT=3003 react-scripts start",
