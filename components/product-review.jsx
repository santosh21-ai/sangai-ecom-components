import { StarIcon } from "@heroicons/react/solid";
export default function ProductReview() {
  return (
    <div className="md:grid md:grid-cols-3 md:gap-20 md:px-12 md:py-12">
      <div className="md:col-span-1">
        <div className="px-4 sm:px-0">
          <h1 className="text-2xl font-extrabold leading-6 text-gray-900">
            Customer Reviews
          </h1>
          <div className="flex mt-3">
            <StarIcon className="h-7 w-7 text-indigo-600 hover:text-indigo-700" />
            <StarIcon className="h-7 w-7 text-indigo-600 hover:text-indigo-700" />
            <StarIcon className="h-7 w-7 text-indigo-600 hover:text-indigo-700" />
            <StarIcon className="h-7 w-7 text-indigo-600 hover:text-indigo-700" />
            <StarIcon className="h-7 w-7 text-gray-300 hover:text-gray-400" />
            <p className="ml-2 font-semibold text-gray-500 text-lg">
              Base on 1624 reviews
            </p>
          </div>

          <div className="mt-8">
            <div className="md:grid md:grid-cols-8 md:gap-1">
              <div className="md:col-span-1">
                <div className="flex text-lg font-semibold ">
                  <p className="mb-1 mr-1"> 5 </p>
                  <StarIcon className="h-6 w-6 text-indigo-600 hover:text-indigo-700 mt-1" />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className=" h-3 relative border rounded-full overflow-hidden mt-2">
                  <div className="w-96 h-full bg-gray-100 absolute rounded-full"></div>
                  <div
                    id="bar"
                    className="transition-all ease-out duration-1000 h-full bg-yellow-400 relative w-1/10 rounded-full"
                  ></div>
                </div>
              </div>
              <div className="md:col-span-1 text-center">60%</div>
            </div>

            <div className="md:grid md:grid-cols-8 md:gap-1">
              <div className="md:col-span-1">
                <div className="flex text-lg font-semibold ">
                  <p className="mb-1 mr-1"> 4 </p>
                  <StarIcon className="h-6 w-6 text-indigo-600 hover:text-indigo-700" />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className=" h-3 relative border rounded-full overflow-hidden mt-2">
                  <div className="w-96 h-full bg-gray-100 absolute rounded-full"></div>
                  <div
                    id="bar"
                    className="transition-all ease-out duration-1000 h-full bg-yellow-400 relative w-5/6 rounded-full"
                  ></div>
                </div>
              </div>
              <div className="md:col-span-1 text-center">80%</div>
            </div>

            <div className="md:grid md:grid-cols-8 md:gap-1">
              <div className="md:col-span-1">
                <div className="flex text-lg font-semibold ">
                  <p className="mb-1 mr-1"> 3 </p>
                  <StarIcon className="h-6 w-6 text-indigo-600 hover:text-indigo-700" />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className=" h-3 relative border rounded-full overflow-hidden mt-2">
                  <div className="w-96 h-full bg-gray-100 absolute rounded-full"></div>
                  <div
                    id="bar"
                    className="transition-all ease-out duration-1000 h-full bg-yellow-400 relative w-2/6 rounded-full"
                  ></div>
                </div>
              </div>
              <div className="md:col-span-1 text-center">20%</div>
            </div>

            <div className="md:grid md:grid-cols-8 md:gap-1">
              <div className="md:col-span-1">
                <div className="flex text-lg font-semibold ">
                  <p className="mb-1 mr-1"> 2 </p>
                  <StarIcon className="h-6 w-6 text-indigo-600 hover:text-indigo-700" />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className=" h-3 relative border rounded-full overflow-hidden mt-2">
                  <div className="w-96 h-full bg-gray-100 absolute rounded-full"></div>
                  <div
                    id="bar"
                    className="transition-all ease-out duration-1000 h-full bg-yellow-400 relative w-3/6 rounded-full"
                  ></div>
                </div>
              </div>
              <div className="md:col-span-1 text-center">30%</div>
            </div>

            <div className="md:grid md:grid-cols-8 md:gap-1">
              <div className="md:col-span-1">
                <div className="flex text-lg font-semibold ">
                  <p className="mb-1 mr-1"> 1 </p>
                  <StarIcon className="h-6 w-6 text-indigo-600 hover:text-indigo-700" />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className=" h-3 relative border rounded-full overflow-hidden mt-2">
                  <div className="w-96 h-full bg-gray-100 absolute rounded-full"></div>
                  <div
                    id="bar"
                    className="transition-all ease-out duration-1000 h-full bg-yellow-400 relative w-1/6 rounded-full"
                  ></div>
                </div>
              </div>
              <div className="md:col-span-1 text-center">10%</div>
            </div>
          </div>

          <h1 className="text-lg font-bold leading-6 text-gray-600 mt-8">
            Share your thoughts
          </h1>
          <p className="mt-1 text-medium text-gray-500 mt-2 font-medium">
            If you&apos;ve used this product, share your thoughts with other
            customers
          </p>
          <button
            type="submit"
            className="mt-6 mb-8 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Write a review
          </button>
        </div>
      </div>
      <div className="mt-5 md:mt-0 md:col-span-2 px-4">
        <div className="sm:rounded-md sm:overflow-hidden divide-y divide-gray-200">
          <div className="mb-8">
            <div className="flex py-2 px-5">
              <img
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white mt-1"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />

              <div className="ml-4 flex flex-1 flex-col">
                <div className="justify-between text-base font-medium text-gray-900">
                  <h3 className="font-bold">Tom Thangjam</h3>
                  <div className="flex mt-1">
                    <StarIcon className="h-7 w-7 text-indigo-600 hover:text-indigo-700" />
                    <StarIcon className="h-7 w-7 text-indigo-600 hover:text-indigo-700" />
                    <StarIcon className="h-7 w-7 text-indigo-600 hover:text-indigo-700" />
                    <StarIcon className="h-7 w-7 text-indigo-600 hover:text-indigo-700" />
                    <StarIcon className="h-7 w-7 text-gray-300 hover:text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
            <p className="ml-4 italic font-semibold text-gray-500 text-lg ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              sint veritatis voluptas nesciunt. Ducimus vel fuga in delectus
              commodi ipsum quo doloremque, perferendis, blanditiis quaerat
              nostrum esse doloribus dignissimos quis.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex py-2 px-5">
              <img
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white mt-1"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt=""
              />

              <div className="ml-4 flex flex-1 flex-col ">
                <div className="justify-between text-base font-medium text-gray-900">
                  <h3 className="font-bold">ALex Laishram</h3>
                  <div className="flex mt-1">
                    <StarIcon className="h-7 w-7 text-indigo-600 hover:text-indigo-700" />
                    <StarIcon className="h-7 w-7 text-indigo-600 hover:text-indigo-700" />
                    <StarIcon className="h-7 w-7 text-gray-300 hover:text-gray-400" />
                    <StarIcon className="h-7 w-7 text-gray-300 hover:text-gray-400" />
                    <StarIcon className="h-7 w-7 text-gray-300 hover:text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
            <p className="ml-4 italic font-semibold text-gray-500 text-lg ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              sint veritatis voluptas nesciunt. Ducimus vel fuga in delectus
              commodi ipsum quo doloremque, perferendis, blanditiis quaerat
              nostrum esse doloribus dignissimos quis.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex py-2 px-5">
              <img
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white mt-1"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />

              <div className="ml-4 flex flex-1 flex-col ">
                <div className="justify-between text-base font-medium text-gray-900">
                  <h3 className="font-bold">Thoibi Mutum</h3>
                  <div className="flex mt-1">
                    <StarIcon className="h-7 w-7 text-indigo-600 hover:text-indigo-700" />
                    <StarIcon className="h-7 w-7 text-indigo-600 hover:text-indigo-700" />
                    <StarIcon className="h-7 w-7 text-indigo-600 hover:text-indigo-700" />
                    <StarIcon className="h-7 w-7 text-indigo-600 hover:text-indigo-700" />
                    <StarIcon className="h-7 w-7 text-indigo-600 hover:text-indigo-700" />
                  </div>
                </div>
              </div>
            </div>
            <p className="ml-4 italic font-semibold text-gray-500 text-lg ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              sint veritatis voluptas nesciunt. Ducimus vel fuga in delectus
              commodi ipsum quo doloremque, perferendis, blanditiis quaerat
              nostrum esse doloribus dignissimos quis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
