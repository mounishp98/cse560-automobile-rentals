"use server";

import { fetchRentalCost } from "@/app/lib/query";

export default async function fetchRentalCostRecords() {
  const data = await fetchRentalCost();
}
