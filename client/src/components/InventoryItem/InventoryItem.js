import React, { useEffect, useState } from "react";

export default function InventoryItem({
  item,
  setModal,
  deleteModal,
  deleteMe,
}) {
  const [totalStock, setTotalStock] = useState(0);

  useEffect(() => {
    item.colors.forEach((element) => {
      const stock = element.clothing_stock;
      const currentStock = stock.xs + stock.s + stock.m + stock.l + stock.xl;
      setTotalStock(totalStock + currentStock);
    });
  }, []);

  return (
    <article className="flex flex-col w-full mb-5 bg-slate-100 p-5 rounded-lg shadow-md">
      <div className="flex flex-row items-center justify-center md:text-center text-left text-black ml-2 w-full">
        <div className="flex flex-col md:flex-row w-full ">
          <h1 className="text-xl md:w-1/3 w-full">{item.name}</h1>
          <h1 className="text-xl md:w-1/3 full">${item.price} </h1>
          <h1 className="text-xl md:w-1/3 w-full">
            Total Stock: {totalStock}{" "}
          </h1>
        </div>

        <div className="flex flex-col md:flex-row md:w-1/3 w-1/3 justify-evenly">
          <button
            className="bg-blue-500 text-white rounded-tr-lg rounded-bl-lg pl-5 pr-5 md:mb-0 mb-2 hover:bg-blue-600"
            onClick={() => setModal(item)}
          >
            Edit
          </button>
          <button
            className="bg-red-600 text-white rounded-tr-lg rounded-bl-lg pl-5 pr-5 hover:bg-red-700"
            onClick={() => {
              deleteModal(true);
              deleteMe(item.id);
            }}
          >
            delete
          </button>
        </div>
      </div>
      <h1 className="text-lg text-black ml-2">Variants</h1>
      <div className="flex flex-col ">
        {item.colors.map((color) => {
          return (
            <div
              key={color.id}
              className="relative flex-col group bg-blue-500 mt-1 rounded-lg"
            >
              <label htmlFor={item.name + color.color}>
                <h1 className="text-lg bg-blue-500 text-white w-[full] pl-5 pr-5  p-1 hover:bg-blue-600 hover:cursor-pointer checked:bg-slate-50 transition-all rounded-lg">
                  {color.color}
                </h1>
              </label>
              <input
                className="sr-only peer"
                type="checkbox"
                id={item.name + color.color}
              />
              <section className="hidden flex-row w-[full] justify-around peer-checked:flex text-white bg-blue-400 rounded-br-lg rounded-bl-lg transition-all">
                <div>
                  <h1 className="text-lg">Size</h1>
                  <h1 className="text-lg">Stock</h1>
                </div>
                <div>
                  <h1 className="text-lg">XS</h1>
                  <h1>{color.clothing_stock.xs}</h1>
                </div>
                <div>
                  <h1 className="text-lg">S</h1>
                  <h1>{color.clothing_stock.s}</h1>
                </div>
                <div>
                  <h1 className="text-lg">M</h1>
                  <h1>{color.clothing_stock.m}</h1>
                </div>
                <div>
                  <h1 className="text-lg">L</h1>
                  <h1>{color.clothing_stock.l}</h1>
                </div>
                <div>
                  <h1 className="text-lg">XL</h1>
                  <h1>{color.clothing_stock.xl}</h1>
                </div>
              </section>
            </div>
          );
        })}
      </div>
    </article>
  );
}
