export const Form = (props: React.FormHTMLAttributes<HTMLFormElement>) => (
  <form
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    className="flex flex-col w-full text-lg gap-6"
  />
)
