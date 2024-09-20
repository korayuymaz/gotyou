import React from "react";
import Filters from "./Filters";
import { restaurants } from "../../public/card-data";
import Card from "./Card";

const Main = () => {
  return (
    <div className="mt-[40px] text-purple">
      <h1>Easy restaurant reservations.</h1>
      <h1>No fuss. We got you.</h1>
      <Filters />
      <div className="flex flex-wrap mt-[40px] gap-[20px] gap-y-[28px]">
        {restaurants.map(
          ({
            id,
            city,
            image,
            people,
            cuisine,
            price,
            category,
            name,
            date,
          }) => (
            <Card
              key={id}
              city={city}
              image={image}
              people={people}
              cuisine={cuisine}
              price={price}
              category={category}
              name={name}
              date={date}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Main;
