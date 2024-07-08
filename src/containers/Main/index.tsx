import { useSelector } from 'react-redux'
import Task from '../../components/Task'
import { Container } from './styles'
import { RootReducer } from '../../store'

const Main = () => {
  const { itens } = useSelector((state: RootReducer) => state.task)
  const { termo, criterion, valor } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filterTasks = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.title.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      if (criterion === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.priority === valor
        )
      } else if (criterion === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }
      return tarefasFiltradas
    } else {
      return itens
    }
  }

  return (
    <Container>
      <p>Duas Tarefas marcadas como: "categoria" e "{termo}" </p>
      <ul>
        <li>{termo}</li>
        <li>{criterion}</li>
        <li>{valor}</li>
      </ul>
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
