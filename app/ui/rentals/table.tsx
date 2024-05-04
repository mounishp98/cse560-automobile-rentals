import { Rental } from "@/app/lib/definitions";
import {
  fetchPaginatedCustomers,
  fetchPaginatedRentals,
} from "@/app/lib/query";
import { formatDateTimeToLocal, formatDateToLocal } from "@/app/lib/utils";

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
