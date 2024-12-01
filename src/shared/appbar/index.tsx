interface IProps {
  title: React.ReactNode
  leading?: React.ReactNode
  actions?: React.ReactNode
}

export const AppBar = (props: IProps) => (
  <header className="sticky top-0 h-16 flex flex-row bg-white items-center">
    {props.leading && <nav className="absolute left-0">{props.leading}</nav>}
    <p className="flex-1 text-center">{props.title}</p>
    {props.actions && <nav className="absolute right-0">{props.actions}</nav>}
  </header>
)

AppBar.defaultProps = {
  leading: undefined,
  actions: undefined,
}
