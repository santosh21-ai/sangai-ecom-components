import React from "react";
import { BadgeCheckIcon } from "@heroicons/react/solid";
import order_history from "../order.json";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "₹90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "₹32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

function OrderHistory() {
  // console.log(data);
  return (
    <div className="min-h-full flex items-center justify-center py-12 md:px-10 sm:px-6 lg:px-8">
      <div className="">
        <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-xl md:text-3xl">
          <span className="block xl:inline">Order History</span>{" "}
        </h1>
        <p className="text-base text-gray-500 sm:text-base sm:max-w-xl sm:mx-auto md:text-lg lg:mx-0">
          Check the status of recent orders, manage returns, and discover
          similar products
        </p>

        <div className="rounded-md mt-8 border-2 py-4 px-4">
          <div className="flow-root ">
            <div className="flex flex-1 items-end justify-between text-sm mb-4">
              <div>
                <h4 className="font-bold text-gray-900">Order number</h4>
                <p className="text-gray-500 font-medium mt-1">WU8891111</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Date placed</h4>
                <p className="text-gray-500 font-medium mt-1">July 6, 2021</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Total amount</h4>
                <p className="text-gray-500 font-semibold mt-1">₹160.0</p>
              </div>

              <div className="rounded-md shadow mb-4">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-1 border-2 text-base font-medium rounded-md hover:bg-slate-300 hover:text-gray-600 md:px-2 text-gray-500"
                >
                  View order
                </a>
              </div>
              <div className="rounded-md shadow mb-4">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-1 border-2 text-base font-medium rounded-md hover:bg-slate-300 hover:text-gray-600 md:px-2 text-gray-500"
                >
                  View invoice
                </a>
              </div>
            </div>
            <ul role="list" className="-my-6 divide-y divide-gray-200 mt-2">
              {products.map((product) => (
                <>
                  <li key={product.id} className="">
                    <div className="flex  py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href={product.href}> {product.name} </a>
                            </h3>
                            <p className="ml-4">{product.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {product.color}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-1 items-end justify-between text-sm mb-4">
                      <p className="flex text-gray-500 text-sm">
                        <BadgeCheckIcon className="h-6 w-6 text-green-600 mr-2 pb-1" />
                        Delivered on July 12, 2021
                      </p>

                      <div className="flex">
                        <button
                          type="button"
                          className="font-medium text-sky-500 hover:text-sky-600 mr-8"
                        >
                          View product
                        </button>
                        <button
                          type="button"
                          className="font-medium text-sky-500 hover:text-sky-600"
                        >
                          Buy again
                        </button>
                      </div>
                    </div>
                  </li>
                </>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
