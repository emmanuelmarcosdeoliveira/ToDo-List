import { useSelector } from 'react-redux'
import Task from '../../components/Task'
import { Container } from './styles'
import { RootReducer } from '../../store'

const Main = () => {
  const { itens } = useSelector((state: RootReducer) => state.task)
  const { termo } = useSelector((state: RootReducer) => state.filter)

  const filterTasks = () => {
    return itens.filter(
      (item) => item.title.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <Container>
      <p>Duas Tarefas marcadas como: "categoria" e "{termo}" </p>
      <ul>
        {filterTasks().map((t) => (
          <li key={t.title}>
            <Task
              id={t.id}
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
