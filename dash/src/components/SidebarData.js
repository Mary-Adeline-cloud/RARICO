import React from "react";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [

  {
    title: "Search",
    path: "/Search",
    icon: <IoIcons.IoIosSearch  />,

    cName: "nav-text",
  
  },
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
    class:'menuToggle'
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <IoIcons.IoIosBasket />,
    cName: "nav-text",
    class:'menuToggle'
  },

  {
    title: "Services",
    path: "/services",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
    class:'menuToggle'
  },

  {
    title: "Data-View",
    path: "/dataview",
    icon: <IoIcons.IoIosAlbums />,
    cName: "nav-text",
    class:'menuToggle'
  },

  
  {
    title: "Help",
    path: "/help",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
    class:'menuToggle'
  },
];
