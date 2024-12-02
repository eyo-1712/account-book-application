export const Button = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  // eslint-disable-next-line react/button-has-type, react/jsx-props-no-spreading
  <button {...props}>{children}</button>
)
