// import Image from "next/image";
// import SennaLogo from "@/app/ui/senna-logo";
// import { lusitana } from "@/app/ui/fonts";
// import fetchRentalCostRecords from "@/app/lib/actions";
// import { fetchRentalCost } from "@/app/lib/query";

// export default async function Home() {
//   // const data = await fetchRentalCost();
//   // console.log(data);

//   return (
//     <main className="min-h-screen flex justify-center">
//       <div className="flex flex-col p-6 w-full lg:w-3/4">
//         <div className="flex h-10 shrink-0 items-end rounded-lg py-4 md:h-20 lg:h-28 px-4">
//           <SennaLogo />
//         </div>
//         {/* <form className="pb-8 px-8 bg-gray-100/50 rounded-md">
//           <div className="space-y-8">
//             <div className="pb-8">
//               <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//                 <div className="col-span-full">
//                   <label
//                     htmlFor="about"
//                     className={`${lusitana.className} block text-xl font-medium leading-6 text-gray-800 mb-4`}
//                   >
//                     Enter your query
//                   </label>
//                   <div className="mt-4">
//                     <textarea
//                       id="about"
//                       name="about"
//                       rows={3}
//                       className="min-h-24 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                       defaultValue={""}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="flex items-center justify-end gap-x-6">
//             <button
//               type="button"
//               className="text-sm font-semibold leading-6 text-gray-900"
//             >
//               Clear
//             </button>
//             <button
//               type="submit"
//               className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               Execute
//             </button>
//           </div>
//         </form> */}
//         {/* <button
//           type="submit"
//           className="rounded-md bg-indigo600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//         >
//           Execute
//         </button> */}
//       </div>
//     </main>
//   );
// }

import SideNav from "@/app/ui/sidenav";

export default async function Page() {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-72">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12"></div>
    </div>
  );
}
