import { ReactQueryProvider } from 'shared/lib/react-query'
import { Router } from './router'

const App = () => (
  <ReactQueryProvider>
    <Router />
  </ReactQueryProvider>
)

export default App
