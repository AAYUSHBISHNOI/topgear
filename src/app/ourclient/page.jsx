"use client";

import React from "react";
// import Clientsaysforus from "../Components/Clientsaysforus";
import Wallofreviews from "../Components/Wallofreviews";
import Accordion from "../Components/Accordion";
import Heroourclients from "../Components/Heroourclients";
import Clientwhotrustus from "../Components/Clientwhotrustus";
import Paraourclients from "../Components/Paraourclients";
import Enoughtalks from "../Common/Enoughtalks";

const ourclient = () => {
  return (
    <div>
      {/* <Clientsaysforus /> */}
      <Heroourclients />
      <Clientwhotrustus />
      <Paraourclients />
      <Wallofreviews />
      <Accordion />
      <Enoughtalks />
    </div>
  );
};

export default ourclient;
