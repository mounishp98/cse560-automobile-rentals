import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { Customer, Rental } from "./definitions";

export async function fetchRentalCost() {
  noStore();

  try {
    const data = await sql`SELECT * FROM rental_cost`;

    return data;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to fetch rental_cost data");
  }
}

export async function fetchCustomers() {
  noStore();
  try {
    const data = await sql<Customer>`SELECT * FROM customer`;

    return data.rows;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to fetch rental_cost data");
  }
}

export async function fetchRentals() {
  noStore();
  try {
    const data = await sql<Rental>`SELECT * FROM rental`;

    return data.rows;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to fetch rental_cost data");
  }
}
