import { fetchCustomers, fetchRentals } from "@/app/lib/query";
import { Customer, Rental } from "../lib/definitions";

export default async function Page() {
  const rentals: Rental[] = await fetchRentals();

  if (!rentals || rentals.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div>
      <p>Reantals Page</p>
      {rentals.map((rental) => (
        <p>
          {rental.rental_id}, {rental.customer_id}, {`${rental.pickuptime}`}
        </p>
      ))}
    </div>
  );
}
