import { React, useState } from "react";
import { TrashIcon, PlusIcon } from "@heroicons/react/solid";

const SummaryProduct = ({
  id,
  imageSrc,
  imageAlt,
  href,
  name,
  color,
  price,
}) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <li key={id} className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 ">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover object-center "
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-500">
            <h3>
              <a href={href}> {name} </a>
            </h3>
            <TrashIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
          </div>
          <p className="mt-1 text-sm text-gray-500">{color}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-base font-medium text-gray-900">₹{price}</p>

          <div className="flex">
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                name="price"
                id="price"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-24 pl-7 pr-7 sm:text-sm border-gray-300 rounded-md"
                value={quantity}
                onChange={(e) => {
                  let q = e.target.value;
                  if (q === "") {
                    console.log("empty");
                    setQuantity(quantity - quantity);
                  } else {
                    setQuantity(Number(q));
                  }

                  console.log(quantity);
                }}
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center"
                onClick={() => {
                  setQuantity(quantity++);
                  console.log(quantity);
                }}
              >
                <PlusIcon className="h-6 w-6 text-gray-500 pr-2 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default SummaryProduct;
