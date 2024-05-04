import { Customer } from "@/app/lib/definitions";
import { fetchPaginatedCustomers } from "@/app/lib/query";
import { formatDateToLocal } from "@/app/lib/utils";
import { IdentificationIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

export default async function CustomersTable({
  currentPage,
}: {
  currentPage: number;
}) {
  const customers: Customer[] = await fetchPaginatedCustomers(currentPage);

  if (!customers || customers.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {customers?.map((customer) => (
              <div
                key={customer.customer_id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex flex-row gap-1">
                    <IdentificationIcon className="w-4" />
                    <p className="text-sm sm:text-md text-gray-500">
                      {customer.driving_license}
                    </p>
                  </div>
                  <div className="flex flex-row gap-1">
                    <EnvelopeIcon className="w-4" />
                    <p className="text-sm sm:text-md text-gray-500">
                      {customer.email}
                    </p>
                    <PhoneIcon className="w-4" />{" "}
                    <p className="text-sm sm:text-md text-gray-500">
                      {customer.phone}
                    </p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <p className="text-lg font-medium">{customer.name}</p>
                  <div className="flex flex-row">
                    {/* <p className="text-lg text-gray-500">DOB: </p> */}
                    <p className="text-lg font-medium">
                      {formatDateToLocal(customer.dob)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-3">
                  Driving License
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  DOB
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Phone
                </th>
                {/* {isPhoneChecked && (
              <th scope="col" className="px-3 py-5 font-medium">
                Phone
              </th>
            )} */}
              </tr>
            </thead>
            <tbody className="bg-white">
              {customers?.map((customer) => (
                <tr
                  key={customer.customer_id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3 py-3">
                    {customer.driving_license}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {customer.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(customer.dob)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {customer.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {customer.phone}
                  </td>
                  {/* {isPhoneChecked && (
                <td className="whitespace-nowrap px-3 py-3">
                  {customer.phone}
                </td>
              )} */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
