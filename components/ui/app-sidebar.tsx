"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarFooter,
} from "@/components/ui/sidebar"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
const data = 
  {
    navMain: [
      {title: "Overview",
        items: [
          {
          title: "Dashboard",
          url: "/dashboard",
          icon: <IconDashboard />
          }
        ]
      },
      {title: "IT Helpdesk",
        items: [
          {
          title: "Job Queue",
          url: "/jobqueue",
          icon: <IconListDetails />
        },{
          title: "Inventory Management",
          url: "/inventory",
          icon: <IconDatabase />
        },{
          title: "History",
          url: "/history",
          icon: <IconReport />
        }
        ]

      }
    ]
  }
  

  // Check if the current path matches a specific route
export function AppSidebar() {

const pathname = usePathname();
const isActive = pathname === "/history";

  return (

    <Sidebar>
      <SidebarContent>
        {data.navMain.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel> {group.title} </SidebarGroupLabel>
            <SidebarMenu>
              {group.items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <div className="w-full">
                  <Button variant={pathname === item.url ? "default" : "secondary"} className="w-full justify-start">
                    {item.icon}
                    <a href={item.url}>{item.title}</a>
                  </Button>
                  </div>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}