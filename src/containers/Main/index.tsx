import Task from '../../components/Task'
import { Container } from './styles'
import * as enums from '../../utils/enums/tasks'

const tarefas = [
  {
    title: 'Estudar TypeScript',
    description: 'Ver o Módulo de TypeScript, assistir a Aula 3',
    priority: enums.Priority.IMPORTANT,
    status: enums.Status.PEDDING
  },
  {
    title: 'Estudar JavaScript',
    description: 'Ver o Modulo de JavaScript da EBAC,assistir a  Aula 6',
    priority: enums.Priority.NORMAL,
    status: enums.Status.CONCLUDED
  },
  {
    title: 'Estudar React',
    description: ' Ver o Modulo de React da EBAC,assistir a Aula 1',
    priority: enums.Priority.URGENT,
    status: enums.Status.PEDDING
  }
]

const Main = () => {
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
