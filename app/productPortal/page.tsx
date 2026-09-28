import PortalHeader from "./components/PortalHeader";
import PortalGrid from "./components/PortalGrid";
import { getPortalItems } from "@/lib/api/portalApi";

export default async function ProductPortalPage(){
    const portalItems = await getPortalItems();
    return(
        <div className="min-h-screen bg-white">
            <PortalHeader 
            firstName="Rakesh"
            lastName="Ranjan"
            />
            <main className="p-6">
                <PortalGrid items={portalItems} />
            </main>
        </div>
    )
}