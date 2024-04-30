import { fetchCustomers } from "@/app/lib/query";
import { Customer } from "../lib/definitions";

export default async function Page() {
  const customers: Customer[] = await fetchCustomers();

  if (!customers || customers.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div>
      <p>Customers Page</p>
      {customers.map((customer) => (
        <p key={customer.customer_id}>
          {customer.customer_id}, {customer.driving_license}
        </p>
      ))}
    </div>
  );
}
