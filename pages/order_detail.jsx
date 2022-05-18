import React from "react";
import { cartItem } from "../utils/data";
import { BadgeCheckIcon, ArrowRightIcon } from "@heroicons/react/outline";
import Image from "next/image";
import ShippingProgressBar from "../components/ShippingProgressBar";
import Link from "next/link";

const OrderDetail = () => {
  return (
    <div className="shadow overflow-hidden sm:rounded-md">
      <div className="px-4 py-5 bg-white sm:p-6">
        <div className="grid grid-cols-6 gap-4 lg:px-36 pb-36 drop-shadow-2xl">
          <div className="md:col-span-3 col-span-6 flex">
            <h3 className="md:text-3xl text-xl font-bold text-gray-900">
              Order #54879
            </h3>
            <Link href="#!">
              <a className="flex text-base font-semibold text-teal-700 md:py-2 py-1 px-2">
                View Invoice <ArrowRightIcon className="pt-2 h-6 w-6" />
              </a>
            </Link>
          </div>
          <div className="md:col-span-3 col-span-6">
            <div className="flex md:float-right text-lg space-x-2">
              <h3>Order placed</h3>
              <p className="font-semibold text-gray-900">March 22, 2021</p>
            </div>
          </div>
          {/* {cartItem.map((product) => ( */}
          <>
            <div className="md:col-span-1 col-span-6 border-2 flex justify-center">
              <Image
                src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                alt="pro_img"
                height={150}
                width={150}
              />
            </div>

            <div className="md:col-span-3 col-span-6 ">
              <h3 className="font-semibold text-base text-gray-700">
                Nomad Tumbler
              </h3>
              <p className="text-gray-700 font-semibold text-lg mt-2">$35.0</p>
              <p className="text-gray-600 font-base text-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur adipisci ratione iure facere, debitis nobis.
              </p>
            </div>

            <div className="md:col-span-1 col-span-3">
              <h3 className="font-semibold text-base text-gray-700">
                Delivery address
              </h3>

              <p className="text-gray-600 font-base text-medium mt-2">
                Floyd Miles
              </p>
              <p className="text-gray-600 font-base text-medium">
                7363 Cynthia pass
              </p>
              <p className="text-gray-600 font-base text-medium">
                Toronto, ON N3Y 4H8
              </p>
            </div>

            <div className="md:col-span-1 col-span-3 ">
              <h3 className="font-semibold text-base text-gray-700">
                Shipping updates
              </h3>

              <p className="text-gray-600 font-base text-medium mt-2">
                Floyd Miles
              </p>
              <p className="text-gray-600 font-base text-medium">
                7363 Cynthia pass
              </p>
              <p className="text-gray-600 font-base text-medium">
                Toronto, ON N3Y 4H8
              </p>
            </div>

            <div className="md:col-span-6">
              <ShippingProgressBar />
              {/* <div className=" h-3 relative border rounded-full overflow-hidden mt-2">
                <div className="w-96 h-full bg-gray-100 absolute rounded-full"></div>
                <div
                  id="bar"
                  className="transition-all ease-out duration-1000 h-full bg-yellow-400 relative w-1/10 rounded-full"
                ></div>
              </div> */}
            </div>
          </>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
