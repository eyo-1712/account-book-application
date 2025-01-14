import { logOut } from 'features/user'
import { useDispatch } from 'react-redux'
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
  const router = useRouter()
  const dispatch = useDispatch()

  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={router.nav.calendar}>
              <Icon type="calendar" />
              가계부
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={router.nav.account}>
              <Icon type="card" />
              자산 관리
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={router.nav.category}>
              <Icon type="category" />
              카테고리 관리
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={router.nav.analysis}>
              <Icon type="chart" />
              지출분석
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => dispatch(logOut())}>
              로그아웃
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
