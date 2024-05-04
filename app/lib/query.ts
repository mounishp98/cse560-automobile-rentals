import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { Customer, Rental } from "./definitions";

const ITEMS_PER_PAGE = 12;

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

// export async function fetchCustomers() {
//   noStore();
//   try {
//     const data =
//       await sql<Customer>`SELECT * FROM customer NATURAL JOIN drivinglicense`;

//     return data.rows;
//   } catch (error) {
//     console.error("Database Error: ", error);
//     throw new Error("Failed to fetch customers data");
//   }
// }

export async function fetchPaginatedCustomers(currentPage: number) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const customers =
      await sql<Customer>`SELECT * FROM customer NATURAL JOIN drivinglicense ORDER BY name LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`;

    return customers.rows;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to fetch customers paginated data");
  }
}

export async function fetchCustomersPages() {
  noStore();
  try {
    const count =
      await sql`SELECT COUNT(*) FROM customer NATURAL JOIN drivinglicense`;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to fetch number of customer pages");
  }
}

// export async function fetchRentals() {
//   noStore();
//   try {
//     const data = await sql<Rental>`SELECT * FROM rental`;

//     return data.rows;
//   } catch (error) {
//     console.error("Database Error: ", error);
//     throw new Error("Failed to fetch rentals data");
//   }
// }

export async function fetchPaginatedRentals(currentPage: number) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const customers =
      await sql<Rental>`SELECT * FROM rental NATURAL JOIN customer NATURAL JOIN drivinglicense NATURAL JOIN vehicle NATURAL JOIN registration ORDER BY dropofftime DESC LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`;

    return customers.rows;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to fetch rentals paginated data");
  }
}

export async function fetchRentalsPages() {
  noStore();
  try {
    const count =
      await sql`SELECT COUNT(*) FROM rental NATURAL JOIN customer NATURAL JOIN drivinglicense NATURAL JOIN vehicle NATURAL JOIN registration`;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to fetch number of rental pages");
  }
}
