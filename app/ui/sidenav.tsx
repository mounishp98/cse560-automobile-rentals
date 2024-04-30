import Link from "next/link";
import NavLinks from "@/app/ui/nav-links";
import { PowerIcon } from "@heroicons/react/24/outline";
import SennaLogo from "@/app/ui/senna-logo";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col content-start px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-gray-200 p-4 md:h-40"
        href="/"
      >
        <div className="w-48 text-white md:w-60">
          <SennaLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
      </div>
    </div>
  );
}
