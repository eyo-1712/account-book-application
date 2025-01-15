import { logOut } from 'features/user'
import { useDispatch } from 'react-redux'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from 'shadcn/components/ui/sidebar'
import { useRouter } from 'shared/lib'
import { Icon } from 'shared/ui'

export const AppSideBar = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader />
      <SidebarContent>
        <SidebarMenu className="flex flex-col group-data-[collapsible=icon]:items-center">
          <SidebarMenuItem onClick={router.nav.calendar}>
            <div className="flex flex-row gap-2 p-2">
              <Icon type="calendar" />
              <span className="group-data-[collapsible=icon]:hidden">
                가계부
              </span>
            </div>
          </SidebarMenuItem>
          <SidebarMenuItem onClick={router.nav.account}>
            <div className="flex flex-row gap-2 p-2">
              <Icon type="card" />
              <span className="group-data-[collapsible=icon]:hidden">
                자산 관리
              </span>
            </div>
          </SidebarMenuItem>
          <SidebarMenuItem onClick={router.nav.category}>
            <div className="flex flex-row gap-2 p-2">
              <Icon type="category" />
              <span className="group-data-[collapsible=icon]:hidden">
                카테고리 관리
              </span>
            </div>
          </SidebarMenuItem>
          <SidebarMenuItem onClick={router.nav.analysis}>
            <div className="flex flex-row gap-2 p-2">
              <Icon type="chart" />
              <span className="group-data-[collapsible=icon]:hidden">
                지출분석
              </span>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-0">
        <SidebarMenu className="flex flex-col group-data-[collapsible=icon]:items-center">
          <SidebarMenuItem onClick={() => dispatch(logOut())}>
            <div className="flex flex-row gap-2 p-2">
              <Icon type="logout" />
              <span className="group-data-[collapsible=icon]:hidden">
                로그아웃
              </span>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
