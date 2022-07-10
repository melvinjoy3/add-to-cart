import React from "react";
import ItemCard from "./itemCard";
import Data from "./Data.js";
function Home() {
  console.log(Data.productData, "data");
  return (
    <div>
      <h1 className="text-center mt-3">All items</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {Data.productData.map((item, index) => {
            return (
              <ItemCard
                img={item.img}
                desc={item.desc}
                title={item.title}
                price={item.price}
                key={index}
                item={item}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Home;
