import Task from '../../components/Task'
import { Container } from './styles'

const Main = () => {
  return (
    <Container>
      <p>Duas Tarefas marcadas como: "categoria" e "Termo" </p>
      <ul>
        <li>
          <Task />
        </li>
        <li>
          <Task />
        </li>
        <li>
          <Task />
        </li>
        <li>
          <Task />
        </li>
        <li>
          <Task />
        </li>
      </ul>
    </Container>
  )
}

export default Main
