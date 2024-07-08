import { useSelector } from 'react-redux'
import Task from '../../components/Task'
import { Container, Resultado } from './styles'
import { RootReducer } from '../../store'
import task from '../../store/reducers/task'

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

  const exibeResultadoFiltrado = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? ` e "${termo}"` : ''

    if (criterion === 'todas') {
      mensagem = `${quantidade} tarefa(s) econtrada(s) como: todas${complementacao} `
    } else {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: "${`${criterion}=${valor}`}" ${complementacao}`
    }
    return mensagem
  }

  const tarefas = filterTasks()
  const mensagem = exibeResultadoFiltrado(tarefas.length)

  return (
    <Container>
      <Resultado>{mensagem}</Resultado>
      <ul>
        {tarefas.map((t) => (
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
