export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    className="w-full py-1 border border-t-0 focus:outline-none border-b-gray-300 border-x-0 focus:border-b-gray-600"
  />
)
