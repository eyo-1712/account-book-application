import { useDispatch } from 'react-redux'
import { useRouter } from 'shared/lib'
import { Icon } from 'shared/ui'
import { logOut } from '../../../user'

export const SideBar = (props: { open: boolean; onClose: () => void }) => {
  const router = useRouter()
  const dispatch = useDispatch()

  return (
    <aside
      className={[
        'w-40 h-screen bg-white p-4 z-10 absolute top-0',
        `${props.open && 'hidden'}`,
      ].join(' ')}
    >
      <ul className="flex flex-col gap-4">
        <li>
          <button
            type="button"
            onClick={props.onClose}
            className="flex flex-row items-center gap-2"
          >
            <Icon type="close" />
          </button>
        </li>
        <li>
          <button type="button" className="flex flex-row items-center gap-2">
            <Icon type="calendar" />
            가계부
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={router.nav.calendar}
            className="flex flex-row items-center gap-2"
          >
            <Icon type="category" />
            카테고리 관리
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={router.nav.calendar}
            className="flex flex-row items-center gap-2"
          >
            <Icon type="card" />
            고정지출 관리
          </button>
        </li>
        <li>
          <button type="button" className="flex flex-row items-center gap-2">
            <Icon type="chart" />
            지출 분석
          </button>
        </li>
        <li className="absolute bottom-4">
          <button type="button" onClick={() => dispatch(logOut())}>
            로그아웃
          </button>
        </li>
      </ul>
    </aside>
  )
}
