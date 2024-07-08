import { useDispatch, useSelector } from 'react-redux'
import { alterarFiltro } from '../../store/reducers/filter'
import * as S from './styles'
import * as enums from '../../utils/enums/tasks'
import { RootReducer } from '../../store'

export type Props = {
  legend: string
  criterion: 'prioridade' | 'status' | 'todas'
  valor?: enums.Priority | enums.Status
}

const FilterCard = ({ legend, criterion, valor }: Props) => {
  const dispatch = useDispatch()
  const { filter, task } = useSelector((state: RootReducer) => state)
  const verificaEstadoAtivo = () => {
    const mesmoCriterio = filter.criterion === criterion
    const mesmoValor = filter.valor === valor
    return mesmoCriterio && mesmoValor
  }

  const contarTarefas = () => {
    if (criterion === 'todas') return task.itens.length
    if (criterion === 'prioridade') {
      return task.itens.filter((item) => item.priority === valor).length
    }
    if (criterion === 'status') {
      return task.itens.filter((item) => item.status === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterion,
        valor
      })
    )
  }
  const contador = contarTarefas()
  const ativo = verificaEstadoAtivo()

  return (
    <S.Card active={ativo} onClick={filtrar}>
      <S.Count>{contador}</S.Count>
      <S.label>{legend}</S.label>
    </S.Card>
  )
}
export default FilterCard
