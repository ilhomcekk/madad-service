import { combineReducers } from "redux";
import aboutUsReducer from "./aboutUsReducer";
import advertisingReducer from "./advertisingReducer";
import categoryReducer from "./categoryReducer";
import faqReducer from "./faqReducer";
import feedbackReducer from "./feedbackReducer";
import newsReducer from "./newsReducer";
import offersReducer from "./offersReducer";
import partnersReducer from "./partnersReducer";
import servicesReducer from "./servicesReducer";
import tariffsReducer from "./tariffsReducer";
import tariffsServicesReducer from "./tariffsServicesReducer";
import telegramReducer from "./telegramReducer";

const reducer = combineReducers({
  news: newsReducer,
  offers: offersReducer,
  advertising: advertisingReducer,
  partners: partnersReducer,
  aboutUs: aboutUsReducer,
  services: servicesReducer,
  faq: faqReducer,
  category: categoryReducer,
  feedback: feedbackReducer,
  tariffs: tariffsReducer,
  tariffsServices: tariffsServicesReducer,
  telegram: telegramReducer,
});

export default reducer;
