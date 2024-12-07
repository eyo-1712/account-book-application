export const Container = (props: React.PropsWithChildren) => (
  <div className="container mx-auto bg-white max-w-screen-sm">
    {props.children}
  </div>
)
