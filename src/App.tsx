import Main from './containers/Main'
import SideBar from './containers/SideBar'
import StyleGlobal, { Container } from './styles'
import { Provider } from 'react-redux'
import store from './store'
function App() {
  return (
    <Provider store={store}>
      <StyleGlobal />
      <Container>
        <SideBar />
        <Main />
      </Container>
    </Provider>
  )
}
export default App
