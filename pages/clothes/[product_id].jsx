import { React, useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import RelatedProducts from "../../components/related-products";
import ViwedProducts from "../../components/Viewed-products";
import ProductReview from "../../components/product-review";

const product = {
  name: "Basic Tee 6-Pack ",
  price: "192",
  rating: 3.9,
  reviewCount: 117,
  href: "#",
  imageSrc:
    "https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg",
  imageAlt: "Two each of gray, white, and black shirts arranged on table.",
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: true },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "XXL", inStock: true },
    { name: "XXXL", inStock: false },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ClothesDetail = () => {
  const [open, setOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <>
      <div
        className="flex min-h-screen text-center md:block md:px-2 lg:px-4"
        style={{ fontSize: 0 }}
      >
        <div className="flex text-base text-left transform transition w-full md:inline-block  md:my-8 md:align-middle lg:max-w-4xl">
          <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
            <div className="w-full aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="object-center object-cover"
              />
            </div>
            <div className="sm:col-span-8 lg:col-span-7 px-4">
              <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                {product.name}
              </h2>

              <section aria-labelledby="information-heading" className="mt-2">
                <h3 id="information-heading" className="sr-only">
                  Product information
                </h3>

                <div className="flex items-center space-x-4 my-4">
                  <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                    <span className="font-semibold text-indigo-500 mr-1 mt-1 text-xl">
                      ₹
                    </span>
                    <span className="font-bold text-indigo-600 text-3xl">
                      {product.price}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-green-500 text-xl font-semibold">
                      Save 12%
                    </p>
                    <p className="text-gray-400 text-sm">
                      Inclusive of all Taxes.
                    </p>
                  </div>
                </div>

                {/* Reviews */}
                <div className="mt-4">
                  <h4 className="sr-only">Reviews</h4>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            product.rating > rating
                              ? "text-indigo-600"
                              : "text-gray-200",
                            "h-5 w-5 flex-shrink-0"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">{product.rating} out of 5 stars</p>
                    <a
                      href="#"
                      className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      {product.reviewCount} reviews
                    </a>
                  </div>
                </div>
                <p className="mt-4 font-semibold text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
                  soluta reiciendis laborum tempora eveniet quae magnam eum illo
                  animi, voluptatum natus, odio minus, iste dolore sit et
                  molestias? Animi, sint!
                </p>
              </section>

              <section aria-labelledby="options-heading" className="mt-10">
                <h3 id="options-heading" className="sr-only">
                  Product options
                </h3>

                <form>
                  {/* Colors */}
                  <div>
                    <h4 className="text-sm text-gray-900 font-medium">Color</h4>

                    <RadioGroup
                      value={selectedColor}
                      onChange={setSelectedColor}
                      className="mt-4"
                    >
                      <RadioGroup.Label className="sr-only">
                        Choose a color
                      </RadioGroup.Label>
                      <div className="flex items-center space-x-3">
                        {product.colors.map((color) => (
                          <RadioGroup.Option
                            key={color.name}
                            value={color}
                            className={({ active, checked }) =>
                              classNames(
                                color.selectedClass,
                                active && checked ? "ring ring-offset-1" : "",
                                !active && checked ? "ring-2" : "",
                                "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                              )
                            }
                          >
                            <RadioGroup.Label as="p" className="sr-only">
                              {color.name}
                            </RadioGroup.Label>
                            <span
                              aria-hidden="true"
                              className={classNames(
                                color.class,
                                "h-8 w-8 border border-black border-opacity-10 rounded-full"
                              )}
                            />
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Sizes */}
                  <div className="mt-10">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm text-gray-900 font-medium">
                        Size
                      </h4>
                      <a
                        href="#"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Size guide
                      </a>
                    </div>

                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="mt-4"
                    >
                      <RadioGroup.Label className="sr-only">
                        Choose a size
                      </RadioGroup.Label>
                      <div className="grid grid-cols-4 gap-4">
                        {product.sizes.map((size) => (
                          <RadioGroup.Option
                            key={size.name}
                            value={size}
                            disabled={!size.inStock}
                            className={({ active }) =>
                              classNames(
                                size.inStock
                                  ? "bg-white shadow-sm text-gray-900 cursor-pointer"
                                  : "bg-gray-50 text-gray-200 cursor-not-allowed",
                                active ? "ring-2 ring-indigo-500" : "",
                                "group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1"
                              )
                            }
                          >
                            {({ active, checked }) => (
                              <>
                                <RadioGroup.Label as="p">
                                  {size.name}
                                </RadioGroup.Label>
                                {size.inStock ? (
                                  <div
                                    className={classNames(
                                      active ? "border" : "border-2",
                                      checked
                                        ? "border-indigo-500"
                                        : "border-transparent",
                                      "absolute -inset-px rounded-md pointer-events-none"
                                    )}
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <div
                                    aria-hidden="true"
                                    className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                                  >
                                    <svg
                                      className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                      viewBox="0 0 100 100"
                                      preserveAspectRatio="none"
                                      stroke="currentColor"
                                    >
                                      <line
                                        x1={0}
                                        y1={100}
                                        x2={100}
                                        y2={0}
                                        vectorEffect="non-scaling-stroke"
                                      />
                                    </svg>
                                  </div>
                                )}
                              </>
                            )}
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>

                  <button
                    type="submit"
                    className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Add to bag
                  </button>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 divide-y divide-gray-300 gap-4 ">
        <div className="w-full lg:px-12 px-4">
          <h1 className="text-2xl font-extrabold text-gray-900 mb-2 md:pl-24">
            Related products
          </h1>
          <RelatedProducts />
        </div>
        <div className="w-full w-full lg:px-12 px-4 ">
          <h1 className="text-2xl font-extrabold text-gray-900 mb-2 md:pl-24 mt-8">
            Viwed products
          </h1>
          <ViwedProducts />
        </div>
      </div>
      <div className="w-full mt-8">
        <ProductReview />
      </div>
    </>
  );
};

export default ClothesDetail;
