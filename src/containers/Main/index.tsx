import { useSelector } from 'react-redux'
import Task from '../../components/Task'
import { Container } from './styles'
import { RootReducer } from '../../store'

const Main = () => {
  const tarefas = useSelector((state: RootReducer) => state.task)

  return (
    <Container>
      <p>Duas Tarefas marcadas como: "categoria" e "Termo" </p>
      <ul>
        {tarefas.map((t) => (
          <li key={t.title}>
            <Task
              description={t.description}
              title={t.title}
              status={t.status}
              priority={t.priority}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}
export default Main
