import styled from 'styled-components'

export const Form = styled.form`
  max-width: 34.187rem;
  width: 100%;
  font-weight: 700;
  font-size: 0.875rem;
  color: #666;

  textarea {
    resize: none;
    height: 12.5rem;
    margin-block: 1rem;
  }
`

export const Opcoes = styled.div`
  margin-bottom: 1rem;
  align-items: center;
  p {
    margin-bottom: 0.375rem;
  }
  label {
    margin-right: 0.375rem;
  }
`
export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
