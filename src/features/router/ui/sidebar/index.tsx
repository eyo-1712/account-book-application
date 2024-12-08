import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux'
import { useRouter } from 'shared/lib'
import { Icon } from 'shared/ui'
import { logOut } from '../../../user'
import { IProps } from './type'

export const SideBar = (props: IProps) => {
  const router = useRouter()
  const dispatch = useDispatch()

  const Component = (
    <aside
      className={[
        'w-40 h-screen bg-white px-4 z-10 fixed top-0 transition-all duration-300',
        `${props.open ? 'left-0' : 'left-[-10rem]'}`,
      ].join(' ')}
    >
      <ul className="flex flex-col gap-4">
        <li>
          <button
            type="button"
            onClick={props.onClose}
            className="flex flex-row items-center h-16 gap-2"
          >
            <Icon type="close" />
          </button>
        </li>
        <li>
          <button
            type="button"
            className="flex flex-row items-center gap-2"
            onClick={router.nav.calendar}
          >
            <Icon type="calendar" />
            가계부
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={router.nav.category}
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
          <button
            type="button"
            onClick={router.nav.calendar}
            className="flex flex-row items-center gap-2"
          >
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

  return ReactDOM.createPortal(Component, document.getElementById('root')!)
}
