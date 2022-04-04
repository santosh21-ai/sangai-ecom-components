import { React, Fragment } from "react";
import { callouts } from "../utils/data";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-gray-900">Collections</h2>
        <div className="h-[40rem] grid grid-rows-4 grid-flow-col gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="rounded-lg col-span-2 row-span-4 bg-red-500 h-full bg-cover bg-center bg-[url('https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg')]">
            {/* <Image
            src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg"
            alt="Picture of the author"
            width={400}
            height={500}
          /> */}
            {/* <img
            src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg"
            alt="fhh"
            className="h-full object-center object-cover"
          /> */}
            1
          </div>
          <div className="rounded-lg col-span-2 row-span-2 bg-red-700 bg-cover bg-center bg-[url('https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg')] ">
            2
          </div>
          <div className="rounded-lg col-span-2 row-span-2 bg-red-700 bg-cover bg-center bg-[url('https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg')]">
            3
          </div>
        </div>
      </div>

      <Fragment className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            <h2 className="text-2xl font-extrabold text-gray-900">
              Collections
            </h2>
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative w-full h-96 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-96 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    {callout.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Fragment>
    </>
  );
};

export default Home;
