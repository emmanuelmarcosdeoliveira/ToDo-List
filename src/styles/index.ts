import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'
import { Button } from '../components/Task/styles'

const Styleglobal = createGlobalStyle`
:root {
  --border: #a1a1a1;
  --card-color: #fcfcfc; 
  --card-label: #5e5e5e;
  --sidebar-color: #eee;
  --bg-color: #fff;
  --input-color: #666666;
  --focus-input: #E6F6FD;
  --text-area: #8b8b8b;
  --btn-1: #2f3640;
  --tag-color-1: #e1a32a;
  --tag1: #c23616;
  --tag2: #44bd32;
  --tag3: #F0c11a;


  --shaddow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  } 


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}
body {
    background-color: #f7f7f7;
}
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 2.5rem;
  height: 100dvh;
  overflow-y: auto;
`

export const Titulo = styled.h2`
  display: block;
  margin-block: 2.5rem;
  font-size: 1.125rem;
  font-weight: 700;
`
export const Input = styled.input`
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-color: var(--bg-color);
  font-weight: 700;
  border-color: var(--input-color);
  min-width: 100%;
`
export const ButtonSalve = styled(Button)`
  background-color: ${variaveis.green};
`

export default Styleglobal
