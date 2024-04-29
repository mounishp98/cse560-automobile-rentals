import { dancing_script } from "./fonts";
import Image from "next/image";

export default function SennaLogo() {
  return (
    <div
      className={`${dancing_script.className} flex flex-row gap-2 items-center leading-none text-gray-900`}
    >
      <Image
        className="hidden lg:block text-amber-600"
        color=""
        src="/sport-car.png"
        width={64}
        height={64}
        alt="Picture of the sport car"
      />
      <Image
        className="block lg:hidden text-amber-600"
        src="/sport-car.png"
        width={42}
        height={42}
        alt="Picture of the sport car"
      />
      <h1 className="text-[24px] lg:text-[30px]">Senna Cars</h1>
    </div>
  );
}
