import { useQueryClient } from '@tanstack/react-query'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from 'shadcn/components/ui/sidebar'
import { useRouter } from 'shared/lib'
import { Icon } from 'shared/ui'

export const AppSideBar = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  const logOut = () => {
    queryClient.clear()
  }

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="h-16" />
      <SidebarContent>
        <SidebarMenu className="group-data-[collapsible=icon]:items-center">
          <SidebarMenuItem>
            <SidebarMenuButton
              className="flex flex-row items-center gap-2"
              onClick={router.nav.calendar}
            >
              <Icon type="calendar" />
              <span className="group-data-[collapsible=icon]:hidden">
                가계부
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="flex flex-row items-center p-2 gap-2"
              onClick={router.nav.account}
            >
              <Icon type="card" />
              <span className="group-data-[collapsible=icon]:hidden">
                자산 관리
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="flex flex-row items-center p-2 gap-2"
              onClick={router.nav.category}
            >
              <Icon type="category" />
              <span className="group-data-[collapsible=icon]:hidden">
                카테고리 관리
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="flex flex-row items-center p-2 gap-2"
              onClick={router.nav.analysis}
            >
              <Icon type="chart" />
              <span className="group-data-[collapsible=icon]:hidden">
                지출분석
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu className="flex flex-col group-data-[collapsible=icon]:items-center">
          <SidebarMenuItem>
            <SidebarMenuButton
              className="flex flex-row items-center gap-2"
              onClick={logOut}
            >
              <Icon type="logout" />
              <span className="group-data-[collapsible=icon]:hidden">
                로그아웃
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
