import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FilterCard from '../../components/FilterCard'
import * as S from './styles'
import { alterarTermo } from '../../store/reducers/filter'
import * as enums from '../../utils/enums/tasks'
import { RootReducer } from '../../store'
import { Button, Input } from '../../styles'

type Props = {
  mostrarFiltros: boolean
}

const SideBar = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filter)
  return (
    <aside>
      <S.Aside>
        <div>
          {mostrarFiltros ? (
            <>
              <Input
                type="text"
                placeholder="Buscar"
                value={termo}
                onChange={(event) => dispatch(alterarTermo(event.target.value))}
              />
              <S.Filters>
                <FilterCard
                  valor={enums.Status.PEDDING}
                  criterion="status"
                  legend="pendente"
                />
                <FilterCard
                  valor={enums.Status.CONCLUDED}
                  criterion="status"
                  legend="concluída"
                />
                <FilterCard
                  valor={enums.Priority.URGENT}
                  criterion="prioridade"
                  legend="urgente"
                />
                <FilterCard
                  valor={enums.Priority.IMPORTANT}
                  criterion="prioridade"
                  legend="importante"
                />
                <FilterCard
                  valor={enums.Priority.NORMAL}
                  criterion="prioridade"
                  legend="normal"
                />
                <FilterCard criterion="todas" legend="todas" />
              </S.Filters>
            </>
          ) : (
            <Button onClick={() => navigate('/')}>
              voltar a lista de Tarefas
            </Button>
          )}
        </div>
      </S.Aside>
    </aside>
  )
}
export default SideBar
