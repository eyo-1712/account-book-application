import { LeftOutlined } from '@ant-design/icons'
import { IProps } from './type'

export const Icon = (props: IProps) =>
  ({
    back: <LeftOutlined />,
  })[props.type]
