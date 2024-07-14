import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variaveis from '../../styles/variaveis'

export const Circle = styled(Link)`
  height: 4rem;
  width: 4rem;
  background-color: ${variaveis.green};
  color: white;
  position: fixed;
  bottom: 2.5rem;
  right: 2.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  text-decoration: none;
`
