import React from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertaisment from "./Advertaisment";
import ActiveUser from "./ActiveUser";
import Events from "./Events";

function homePage() {
  return (
    <div className="homepage">
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertaisment />
      <ActiveUser />
      <Events />
    </div>
  );
}

export default homePage;
