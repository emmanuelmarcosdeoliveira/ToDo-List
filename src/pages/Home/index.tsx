import SideBar from '../../containers/SideBar'
import Main from '../../containers/Main'
import AddButton from '../../components/AddButton'

const Home = () => {
  return (
    <>
      <SideBar mostrarFiltros />
      <Main />
      <AddButton />
    </>
  )
}

export default Home
