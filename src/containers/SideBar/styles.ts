import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 1rem;
  background-color: var(--sidebar-color);
  min-height: 100dvh;
`
export const Filters = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-block: 1rem;
`
export const Input = styled.input`
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-color: var(--bg-color);
  font-weight: 700;
  border-color: var(--input-color);
  min-width: 100%;
`
