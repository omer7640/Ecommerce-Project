import { Modal } from "flowbite";
import React, { useContext, useState } from "react";
import AdminCard from "./AdminCard";
import { ProductContext } from "../../Context/ProductContext";
import Crud from "../ShopComponents/Crud";

export default function AdminMode() {
  const [modal, setModal] = useState(false);
  // const value = useContext(CounterContext);
  const value = useContext(ProductContext);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div>
      {/* <!-- Modal toggle --> */}
      <button
        onClick={toggleModal}
        data-modal-target="select-modal"
        data-modal-toggle="select-modal"
        class="block text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 admin-mode"
        type="button"
      >
        Admin Mode
      </button>

      {/* <!-- Main modal --> */}
      {modal && (
        <div
          id="select-modal"
          tabIndex="-1"
          aria-hidden="true"
          class=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full lg:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div class="relative p-4 w-full max-w-full max-h-full">
            {/* <!-- Modal content --> */}
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* <!-- Modal header --> */}
              <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Creator's Mode
                </h3>
                <button
                  onClick={toggleModal}
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="select-modal"
                >
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div class="p-4 md:p-5">
                <p class="text-gray-500 dark:text-gray-400 mb-4">
                  Select your desired position:
                </p>
                <Crud />
                <ul class="space-y-4 mb-4">
                  {value.data.map((item) => (
                    <AdminCard item={item} key={item.id} />
                  ))}
                </ul>
                <button class="text-white inline-flex w-full justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Next step
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
