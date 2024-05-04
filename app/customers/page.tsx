import { fetchCustomersPages, fetchPaginatedCustomers } from "@/app/lib/query";
import { lusitana } from "@/app/ui/fonts";
import Pagination from "@/app/ui/pagination";
import Table from "@/app/ui/customers/table";
import { Suspense } from "react";
import { CustomersTableSkeleton } from "../ui/skeletons";

export default async function Page({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  // const [isPhoneChecked, setIsPhoneChecked] = useState(false);
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchCustomersPages();

  // const handlePhoneCheckboxChange = () => {
  //   console.log(isPhoneChecked);

  //   setIsPhoneChecked(!isPhoneChecked);
  // };

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>

      {/* <h3 className="mt-6 mb-4 text-gray-900">Select the attribute</h3>
      <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex">
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
          <div className="flex items-center ps-3">
            <input
              type="checkbox"
              checked={isPhoneChecked}
              onChange={handlePhoneCheckboxChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">
              Phone Number
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
          <div className="flex items-center ps-3">
            <input
              id="react-checkbox-list"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label
              // for="react-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 "
            >
              React
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
          <div className="flex items-center ps-3">
            <input
              id="angular-checkbox-list"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label
              // for="angular-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 "
            >
              Angular
            </label>
          </div>
        </li>
        <li className="w-full ">
          <div className="flex items-center ps-3">
            <input
              id="laravel-checkbox-list"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label
              // for="laravel-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 "
            >
              Laravel
            </label>
          </div>
        </li>
      </ul> */}

      <Suspense fallback={<CustomersTableSkeleton />}>
        <Table currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
