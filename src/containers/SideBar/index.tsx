import FilterCard from '../../components/FilterCard'
import * as S from './styles'

const SideBar = () => {
  return (
    <aside>
      <S.Aside>
        <div>
          <S.Input type="text" placeholder="Buscar" />
          <S.Filters>
            <FilterCard legend="pendente" count={1} />
            <FilterCard legend="concluída" count={2} />
            <FilterCard legend="urgente" count={3} />
            <FilterCard legend="importante" count={4} />
            <FilterCard legend="normal" count={5} />
            <FilterCard active legend="todas" count={15} />
          </S.Filters>
        </div>
      </S.Aside>
    </aside>
  )
}

export default SideBar
