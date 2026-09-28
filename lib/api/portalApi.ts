export type SubItem = {
    id:number;
    title:string;
    count?:number;
}

export type PortalItem ={
    id:number;
    title:string;
    icon:string;
    count:number;
    subItems?:SubItem[];
};


// https://tjppbackendpairprogramming-production.up.railway.app/api/portal/items
// const API_URL = "http://localhost:8080/api/portal";
const API_URL = "https://tjppbackendpairprogramming-production.up.railway.app/api/portal";
export async function getPortalItems():Promise<PortalItem[]>{
    const response = await fetch(`${API_URL}/items`)
    if(!response.ok){
        throw new Error("Failed to fetch portal items");
    }
    return response.json();
}