import React, { useContext } from "react";
import "./Shop.css";
import { ProductContext } from "../../Context/ProductContext";
import { DeleteOutline, Edit } from "@mui/icons-material";
import Crud from "./Crud";
// import { CounterContext } from "../../Context/Context";

export default function AdminCard({ item }) {
  const value = useContext(ProductContext);
  console.log(item);
  return (
    <div>
      <li>
        <input
          type="radio"
          id="job-1"
          name="job"
          value="job-1"
          class="hidden peer"
          required
        />
        <label
          for="job-1"
          class="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500"
        >
          <div class="block">
            <div className="pic-title">
              <img
                // class="h-auto max-w-xs rounded-lg"
                className="imgUrl"
                src={item.imgUrl}
                alt="image description"
              />
              <div class="w-full text-lg font-semibold title-u">
                {item.title}
              </div>
            </div>
            {/* <div class="w-full text-gray-500 dark:text-gray-400">Flowbite</div> */}
          </div>
          <div>
            <span class="text-3xl font-bold text-gray-900 dark:text-white">
              ${item.price}
            </span>
          </div>
          <div>
            <button
              onClick={() => value.deletPro(item.id)}
              type="button"
              // class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              className="delete-icon"
            >
              <DeleteOutline className="admin-icon" />
            </button>

            <button
              type="submit"
              onClick={() => value.handleEditProduct(item)}
              // class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              className="edit-icon"
            >
              {/* <Edit className="admin-icon" /> */}
              <Crud edit={true} />
            </button>
          </div>
          {/* <svg
            class="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg> */}
        </label>
      </li>
    </div>
  );
}
