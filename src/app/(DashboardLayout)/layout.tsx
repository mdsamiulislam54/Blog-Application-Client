
import { AppSidebar } from "@/components/layout/Dashboard/app-sidebar"
import { ModeToggle } from "@/components/Provider/Theme-Provider/DarkMode"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { roles } from "@/constants/roles"

import { userSession } from "@/services/user.service"


export default async function DashboardLayout({ children, admin, user }: { children: React.ReactNode, admin: React.ReactNode, user: React.ReactNode, }) {
    const { data } = await userSession.getSession()
    const userInfo = {
        role: data.user?.role,
        // Change to "user" to test user layout
    }
    return (
        <SidebarProvider>
            <AppSidebar user={userInfo} />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator
                        orientation="vertical"
                        className="mr-2 data-[orientation=vertical]:h-4"
                    />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href="#">
                                    Building Your Application
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden md:block" />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <ModeToggle />
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4">
                    {userInfo.role === roles.ADMIN ? admin : user}

                </div>

            </SidebarInset>
        </SidebarProvider>
    )
}
