import styled from 'styled-components'

export const Task = styled.div`
  background-color: var(--card-color);
  box-shadow: var(--shaddow);
  padding: 1rem;
  margin-block: 2rem;
  border-radius: 1rem;
`
export const Title = styled.h3`
  font-size: 1, 125rem;
  font-weight: 700;
  margin-block-end: 0.5rem;
`
export const Tag = styled.span`
  padding: 0.25rem 0.5rem;
  font-size: 0.625rem;
  font-weight: 700;
  color: var(--bg-color);
  background-color: var(--tag-color-1);
  border-radius: 0.5rem;
  margin-right: 1rem;
  display: inline-block;
`

export const Description = styled.textarea`
  color: var(--text-area);
  font-size: 0.875rem;
  line-height: 1.5rem;
  font-family: 'Roboto Mono', monospace;
  display: block;
  margin-block: 1rem;
  width: 100%;
  resize: none;
  border: none;
  background-color: transparent;
`

export const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 1rem;
`

export const Button = styled.button`
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--bg-color);
  padding: 0.5rem 0.75rem;
  border: none;
  cursor: pointer;
  background-color: var(--btn-1);
  border-radius: 0.5rem;
  margin-right: 0.5rem;
`
