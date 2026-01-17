import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { adminRoutes } from "@/routes/admin-routes";
import { userRoutes } from "@/routes/user-routes";


// This is sample data.
// const data = {
//   versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
//   navMain: [
//     {
//       title: "Getting Started",
//       url: "#",
//       items: []
//     },
   
  
   
//   ],
// }





interface NavItem {
  title: string;
  url: string;
  isActive?: boolean;
}

export function AppSidebar({user, ...props }: {user:{role:string}} & React.ComponentProps<typeof Sidebar>) {
  let navItems: NavItem[] = [];
  switch (user.role) {
    case "admin":
      navItems = adminRoutes;
      break;
    case "user":
      navItems = userRoutes;
      break;
    default:
      navItems = [];
  }

  return (
    <Sidebar {...props}>
      
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {navItems.map((item) => (
          <SidebarGroup key={item.title}>
          
            <SidebarGroupContent>
              <SidebarMenu>
                
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <Link href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
               
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
