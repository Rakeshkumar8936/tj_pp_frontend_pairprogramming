export type PortalItem = {
    id: number;
    title: string;
    icon: string;
    count?: number;
    subItems?:string[];
  };
  
  export const portalItems: PortalItem[] = [
    {
      id: 1,
      title: "My Tasks",
      icon: "/icons/MyTasks.svg",
      count:2306,
    },
    {
      id: 2,
      title: "Create Product",
      icon: "/icons/CreateProduct.svg",
      subItems:[
        "shopping List Management",
        "Vendor Assessment",
        "Prepare for Panel",
      ],
      count:765,
    },
    {
      id: 3,
      title: "Panel",
      icon: "/icons/TastingPanel.svg",
      count:567,
    },
    {
      id: 4,
      title: "Active Projects",
      icon: "/icons/ActiveProjects.svg",
      count:345,
    },
    {
      id: 5,
      title: "Vendor Management",
      icon: "/icons/VendorManagement.svg",
      count:567,
    },
    {
      id: 6,
      title: "Design & Artwork",
      icon: "/icons/DesignArtwork.svg",
      count:567,
    },
    {
      id: 7,
      title: "Launched Products",
      icon: "/icons/PrepareForLaunch.svg",
      count:3456,
    },
    {
      id: 8,
      title: "My Notes",
      icon: "/icons/MyNotes.svg",
      count:3456,
    },
    {
      id: 9,
      title: "Admin Management",
      icon: "/icons/Management.svg",
      count:567,
    },
  ];