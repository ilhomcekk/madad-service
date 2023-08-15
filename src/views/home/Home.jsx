import React, { useEffect, useState } from "react";
import About from "../../components/about/About";
import Direction from "../../components/about/Direction";
import GoalCompany from "../../components/about/GoalCompany";
import Feedback from "../../components/feedback/Feedback";
import Services from "../../components/services/Services";
import Header from "../../components/header/Header";
import News from "../../components/news/News";
import Partners from "../../components/about/Partners";
import PageLogo from "../../assets/images/no-home-logo.png";

const Home = () => {
  const [anim, setAnim] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnim(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="content">
      {!anim && (
        <>
          <Header />
          <About />
          <Direction />
          <GoalCompany />
          <Feedback />
          <Services />
          <News />
          <Partners />
        </>
      )}
      <div className={`anim ${!anim && "close"}`}>
        <img src={PageLogo} alt="" />
      </div>
    </div>
  );
};

export default Home;
