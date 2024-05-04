import { fetchRentalsPages } from "@/app/lib/query";
import { lusitana } from "@/app/ui/fonts";
import { Suspense } from "react";
import Table from "@/app/ui/rentals/table";
import Pagination from "@/app/ui/pagination";

export default async function Page({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchRentalsPages();

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Rentals</h1>
      </div>

      <Suspense>
        <Table currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
