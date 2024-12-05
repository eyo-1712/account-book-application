import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { IProps } from './type'

export const Icon = (props: IProps) => {
  const AntD = {
    back: LeftOutlined,
    left: LeftOutlined,
    right: RightOutlined,
  }[props.type]

  return <AntD color={props.color} />
}

Icon.defaultProps = {
  color: 'black',
}
