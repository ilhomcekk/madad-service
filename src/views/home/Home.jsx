import React from "react";
import About from "../../components/about/About";
import Direction from "../../components/about/Direction";
import GoalCompany from "../../components/about/GoalCompany";
import Feedback from "../../components/feedback/Feedback";
import Services from "../../components/services/Services";
import Header from "../../components/header/Header";
import News from "../../components/news/News";
import Partners from "../../components/about/Partners";

const Home = () => {
  return (
    <div className="content">
      <Header />
      <About />
      <Direction />
      <GoalCompany />
      <Feedback />
      <Services />
      <News />
      <Partners />
    </div>
  );
};

export default Home;
