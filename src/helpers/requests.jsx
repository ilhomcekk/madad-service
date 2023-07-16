import axios from "axios";

const language = window.localStorage.getItem("madad-Content-Language");
if (!language) {
  window.localStorage.setItem("madad-Content-Language", "ru");
}

const config = {
  headers: {
    "Content-language": language || "ru",
  },
};

const packageData = (data) => {
  const form = new FormData();
  for (const key in data) {
    if (Array.isArray(data[key])) {
      for (const childKey in data[key]) {
        form.append(`${key}[${childKey}]`, data[key][childKey]);
      }
    } else {
      form.append(key, data[key]);
    }
  }
  return form;
};

const API = "https://api.madad-service.uz";

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// axios.interceptors.request.use((e) => {
//   e.headers = {
//     ...config.headers,
//     Authorization: store.getState().auth.reduxToken
//       ? `Bearer ${store.getState().auth.reduxToken}`
//       : "",
//   };
//   return e;
// });

const request = {
  // News
  getNews: (params) => axios.get(`${API}/news`, { params }),
  getNewsBySearch: (query, params) =>
    axios.get(`${API}/news/search/${query}`, { params }),
  getDetailNews: (id) => axios.get(`${API}/api/news/${id}`),
  postCreateCommentForNews: (id, params) =>
    axios.post(`${API}/news/${id}/create`, params),
  // Offers
  getOffers: (params) => axios.get(`${API}/offers`, { params }),
  getDetailOffers: (id) => axios.get(`${API}/offers/${id}`),
  // Advertising
  getAdvertising: (params) => axios.get(`${API}/advertisings`, { params }),
  getDetailAdvertising: (id) => axios.get(`${API}/advertisings/${id}`),
  // Partners
  getPartners: (params) => axios.get(`${API}/partners`, { params }),
  getDetailPartners: (id) => axios.get(`${API}/partners/${id}`),
  // About us
  getAboutUs: (params) => axios.get(`${API}/aboutUs`, { params }),
  getDetailAboutUs: (id) => axios.get(`${API}/aboutUs/${id}`),
  // Services
  getServices: (params) => axios.get(`${API}/services`, { params }),
  getDetailServices: (id) => axios.get(`${API}/services/${id}`),
  getServicesByCategory: (id) => axios.get(`${API}/services/category_id/${id}`),
  // Tariffs
  getDetailTariffs: (id) => axios.get(`${API}/services/${id}`),
  getTariffsByCategory: (id, params) =>
    axios.get(`${API}/tariffs/category_id/${id}`, { params }),
  // Tariffs Services
  getTariffsServicesByCategory: (id, params) =>
    axios.get(`${API}/tariffs/services/category_id/${id}`, { params }),
  // Faq
  getFaq: (params) => axios.get(`${API}/faq`, { params }),
  getDetailFaq: (id) => axios.get(`${API}/faq/${id}`),
  // Category
  getCategory: (params) => axios.get(`${API}/category`, { params }),
  getDetailCategory: (id) => axios.get(`${API}/category/${id}`),
  // Feedback
  postFeedbackCreate: (params) => axios.post(`${API}/feedback/create`, params),
  // Telegram bot
  postCreateTelegram: (params) =>
    axios.post(
      `https://api.telegram.org/bot6360531805:AAH3JAYmPGWxdOv__pMXda9fV_YDU0RXSso/sendmessage?chat_id=-1001989675307&text=${params}`
    ),
};

export default request;
