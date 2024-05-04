import { Rental } from "@/app/lib/definitions";
import {
  fetchPaginatedCustomers,
  fetchPaginatedRentals,
} from "@/app/lib/query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IdentificationIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { formatDateTimeToLocal, formatDateToLocal } from "@/app/lib/utils";
import { faAddressCard, faCar } from "@fortawesome/free-solid-svg-icons";

export default async function RentalsTable({
  currentPage,
}: {
  currentPage: number;
}) {
  const rentals: Rental[] = await fetchPaginatedRentals(currentPage);

  if (!rentals || rentals.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {rentals?.map((rental) => (
              <div
                key={rental.rental_id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <p className="text-sm sm:text-md text-gray-500">
                    {formatDateTimeToLocal(rental.pickuptime)} -{" "}
                    {formatDateTimeToLocal(rental.dropofftime)}
                  </p>
                  <div className="flex flex-row gap-1">
                    <CurrencyDollarIcon className="w-5" />
                    <p className="text-sm sm:text-md text-gray-500">
                      {rental.trip_cost.toString()}
                    </p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div className="flex flex-col gap-1 justify-start">
                    <div className="flex flex-row gap-1">
                      <UserCircleIcon className="w-6" />
                      <p className="text-lg font-medium">{rental.name}</p>
                    </div>
                    <div className="flex flex-row gap-1">
                      <IdentificationIcon className="w-6 text-gray-500" />
                      <p className="text-md font-medium text-gray-500 align-bottom text-start">
                        {rental.driving_license}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div className="flex flex-col gap-2 justify-end">
                      <div className="flex flex-row gap-2 justify-end">
                        <p className="text-lg font-medium">{rental.model}</p>
                        <div className="w-6">
                          <FontAwesomeIcon className="w-6" icon={faCar} />
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 justify-end">
                        <p className="text-md font-medium text-gray-500 align-bottom text-end">
                          {rental.registration}
                        </p>
                        <div className="w-6">
                          <FontAwesomeIcon
                            className="w-6 text-gray-500"
                            icon={faAddressCard}
                          />
                        </div>
                      </div>
                    </div>
                    {/* <div className="flex flex-col gap-1 justify-end">
                      <p className="text-lg font-medium">{rental.type}</p>
                      <p className="text-md font-medium text-gray-500 align-baseline text-end">
                        {rental.odometer_reading.toString()}
                      </p>
                    </div> */}
                    {/* <div className="flex flex-col gap-1 justify-end">
                      <div className="">
                        <FontAwesomeIcon className="w-6" icon={faCar} />
                      </div>
                      
                    </div> */}
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
                  Vehicle Model
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Vehicle Type
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Pickup Time
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Dropoff Time
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Trip Cost
                </th>
                {/* <th scope="col" className="px-3 py-5 font-medium">
                  Phone
                </th> */}
              </tr>
            </thead>
            <tbody className="bg-white">
              {rentals?.map((rental) => (
                <tr
                  key={rental.rental_id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3 py-3">
                    {rental.driving_license}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">{rental.name}</td>
                  {/* <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(customer.dob)}
                  </td> */}
                  <td className="whitespace-nowrap px-3 py-3">
                    {rental.model}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">{rental.type}</td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateTimeToLocal(rental.pickuptime)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateTimeToLocal(rental.dropofftime)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {rental.trip_cost.toString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
