import Image from "next/image";
//import type { PortalItem } from "../data/portalItems";
import type { PortalItem } from "@/lib/api/portalApi";
import { useState } from "react";

type PortalCardProps = {
  item: PortalItem;
};

export default function PortalCard({item,}: PortalCardProps) {
    const [expanded, setExpanded] = useState(false);
  return (
    // <div className="h-[182px] border border-gray-300 bg-[#f9f9f6] p-5 flex flex-col justify-between">

<div className={`border border-gray-200 bg-[#f9f9f6] p-5 flex flex-col ${ expanded ? "min-h-[182px] border-red-400 shadow-lg" : "h-[182px]" }`} >

      {/* Icon + Title */}
      <div>
        <Image src={item.icon} alt={item.title} width={60} height={60} className="h-14 w-14 object-contain"/>

        <div className="mt-4 flex items-center gap-2">

          <h2 className="text-lg font-semibold text-black">
            {item.title}
          </h2>

          {item.count !== undefined && (
            <span className="badge badge-error text-white font-semibold">
              {item.count}
            </span>
          )}

        </div>
      </div>

      {/* Subitems */} 
      {expanded && item.subItems && item.subItems.length>0 && (
        <div className="mt-4 space-y-2">
          {item.subItems.map((subItem) => (
            <div key={subItem.id} className="flex items-center justify-between border-t border-gray-200 pt-2">
              <span className="text-sm text-gray-700"> {subItem.title} </span>
              {subItem.count !== undefined && ( <span className="badge badge-error text-white font-semibold"> {subItem.count} </span> )}
            </div>
          ))}
        </div>
      )}

      {/* View More */}
      {/* <button className="btn btn-outline btn-sm w-fit rounded-full px-5 text-red-600 border-red-300 hover:bg-red-50">
        + VIEW MORE
      </button> */}
      <button onClick={() => setExpanded(!expanded)} className="btn btn-outline btn-sm w-fit rounded-full px-5 text-red-600 border-red-300 hover:bg-red-50 mt-4" > 
        {expanded ? "- VIEW LESS" : "+ VIEW MORE"} 
        </button>

    </div>
  );
}