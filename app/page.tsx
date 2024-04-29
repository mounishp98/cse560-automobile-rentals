import Image from "next/image";
import SennaLogo from "@/app/ui/senna-logo";
import { lusitana } from "@/app/ui/fonts";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center">
      <div className="flex flex-col p-6 w-full lg:w-3/4">
        <div className="flex h-10 shrink-0 items-end rounded-lg py-4 md:h-20 lg:h-28">
          <SennaLogo />
        </div>
        <form className="pb-8 border-b border-gray-300 ">
          <div className="space-y-8">
            <div className="pb-8">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className={`${lusitana.className} block text-xl font-medium leading-6 text-gray-800 mb-4`}
                  >
                    Enter your query
                  </label>
                  <div className="mt-4">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="min-h-24 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Clear
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Execute
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
