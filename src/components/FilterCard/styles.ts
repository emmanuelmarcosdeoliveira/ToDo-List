import styled from 'styled-components'
import { Props } from '.'

type ProsLegendAndCount = Omit<Props, `count` | 'legend'>

export const Card = styled.div<ProsLegendAndCount>`
  padding: 8px;
  border: 1px solid ${(props) => (props.active ? '#1e90ff' : '#a1a1a1')};
  background-color: ${(props) => (props.active ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.active ? '#1e90ff' : '#5e5e5e')};
  border-radius: 0.5rem;
`
export const Count = styled.span`
  font-weight: 700;
  font-size: 1.5rem;
  display: block;
`
export const label = styled.p`
  font-size: 0.75rem;
`
