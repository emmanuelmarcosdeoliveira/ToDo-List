import FilterCard from '../../components/FilterCard'
import * as S from './styles'

const SideBar = () => {
  return (
    <aside>
      <S.Aside>
        <div>
          <S.Input type="text" placeholder="Buscar" />
          <S.Filters>
            <FilterCard legend="pendntes" count={1} />
            <FilterCard legend="concluidas" count={2} />
            <FilterCard legend="urgentes" count={3} />
            <FilterCard legend="importantes" count={4} />
            <FilterCard legend="normal" count={5} />
            <FilterCard active legend="todas" count={15} />
          </S.Filters>
        </div>
      </S.Aside>
    </aside>
  )
}

export default SideBar
