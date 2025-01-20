import { ReactQueryProvider } from 'shared/lib'
import { Router } from './router'

const App = () => (
  <ReactQueryProvider>
    <Router />
  </ReactQueryProvider>
)

export default App
