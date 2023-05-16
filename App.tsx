import React, { useState } from "react";
import Store from "./Store";
import { Restaurant } from "./resturant";

let data: Restaurant = {
  name: "누나네 식당",
  category: "western",
  address: {
    city: "incheon",
    detail: "somewhere",
    zipCode: 23425634,
  },
  menu: [
    { name: "rose pasta", price: 2000, category: "PASTA" },
    { name: "garlic steak", price: 3000, category: "steak" },
  ],
};

const App: React.FC = () => {
  const [myrestaurant, setMyRestaurent] = useState<Restaurant>(data);
  return (
    <div className="App">
      <Store info={data} />
    </div>
  );
};
