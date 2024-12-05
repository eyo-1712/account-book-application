import { Provider } from 'react-redux'
import { store } from './redux'
import { Router } from './router'

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)

export default App
