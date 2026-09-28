import Image from "next/image";

type PortalHeaderProps = {
    firstName:string;
    lastName:string;
};

export default function PortalHeader({
    firstName,
    lastName,
}:PortalHeaderProps) {
    const initials = `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
    return (
      <header className="h-[68px] w-full bg-zinc-100 flex items-center justify-between px-6">
  
        <div className="flex items-center gap-3">
          
          <h1 className="">
          <Image src="/icons/TJ-logo.svg" alt="Trader Joe Logo" width={160} height={160} />
          </h1>
  
          <span className="text-2xl font-light text-red-600">
            PRODUCT
          </span>
  
          <span className="text-2xl font-light text-red-600">
            PORTAL
          </span>
        </div>
  
        <div className="flex items-center gap-5">
          <button className="text-sm font-semibold text-gray-700 transition-transform duration-150 hover:scale-105">
            Guide ⓘ
          </button>
  
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#d8c0b5]">
            <span className="text-xs font-bold text-gray-700transition-transform duration-50 hover:scale-102">
            {initials}
            </span>
          </div>
        </div>
  
      </header>
    );
  }