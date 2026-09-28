"use client";

import PortalCard from "./PortalCard";
// import { portalItems } from "../data/portalItems";
import type { PortalItem } from "@/lib/api/portalApi";

type PortalGridProps = {
  items: PortalItem[];
};

export default function PortalGrid({ items }: PortalGridProps) {
  return (
    <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <PortalCard key={item.id} item={item}/>
      ))}
    </div>
  );
}