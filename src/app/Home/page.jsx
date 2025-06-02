"use client";

import React from "react";
import Herohome from "../Components/Herohome";
import Ourservicehome from "../Components/Ourservicehome";
import Aboutushome from "../Components/Aboutushome";
import Ourprocesshome from "../Components/Ourprocesshome";
import Recentshowcasehome from "../Components/Recentshowcasehome";
import Founderqoute from "../Components/Founderquote";

const Home = () => {
  return (
    <div>
      {/* <Error /> */}
      <Herohome />
      <Ourservicehome />
      <Aboutushome />
      <Ourprocesshome />
      <Recentshowcasehome />
      <Founderqoute />
    </div>
  );
};

export default Home;
