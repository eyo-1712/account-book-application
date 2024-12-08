import {
  CalendarOutlined,
  CloseOutlined,
  CreditCardOutlined,
  FolderAddOutlined,
  FolderOpenOutlined,
  LeftOutlined,
  LineChartOutlined,
  MenuOutlined,
  MinusSquareOutlined,
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
    'create-category': FolderAddOutlined,
    menu: MenuOutlined,
    'remove-form': MinusSquareOutlined,
  }[props.type]

  return <AntD />
}

/**
 * https://ant.design/components/icon
 */
