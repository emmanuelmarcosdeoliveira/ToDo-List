import * as S from './styles'

export type Props = {
  active?: boolean
  count: number
  legend: string
}

const FilterCard = ({ active, count, legend }: Props) => {
  return (
    <S.Card active={active}>
      <S.Count>{count}</S.Count>
      <S.label>{legend}</S.label>
    </S.Card>
  )
}
export default FilterCard
