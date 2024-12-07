import {
  CalendarOutlined,
  CloseOutlined,
  CreditCardOutlined,
  FolderAddOutlined,
  FolderOpenOutlined,
  LeftOutlined,
  LineChartOutlined,
  MenuOutlined,
  RightOutlined,
} from '@ant-design/icons'
import { IProps } from './type'

export const Icon = (props: IProps) => {
  const AntD = {
    back: LeftOutlined,
    left: LeftOutlined,
    right: RightOutlined,
    close: CloseOutlined,
    chart: LineChartOutlined,
    calendar: CalendarOutlined,
    card: CreditCardOutlined,
    category: FolderOpenOutlined,
    'category-add': FolderAddOutlined,
    menu: MenuOutlined,
  }[props.type]

  return <AntD color={props.color} />
}

/**
 * https://ant.design/components/icon
 */
