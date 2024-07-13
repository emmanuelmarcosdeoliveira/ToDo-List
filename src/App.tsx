import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import StyleGlobal, { Container } from './styles'
import { Provider } from 'react-redux'
import store from './store'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novatarefa',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <StyleGlobal />
      <Container>
        <RouterProvider router={routes} />
      </Container>
    </Provider>
  )
}
export default App
