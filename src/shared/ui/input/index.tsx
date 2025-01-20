export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    {...props}
    className="w-full py-1 border border-t-0 focus:outline-none border-b-gray-300 border-x-0 focus:border-b-gray-600 disabled:bg-transparent placeholder:text-lg"
  />
)
