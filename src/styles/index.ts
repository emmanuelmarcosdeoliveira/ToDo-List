import styled, { createGlobalStyle } from 'styled-components'

const Styleglobal = createGlobalStyle`
:root {
  --border: #a1a1a1;
  --card-color: #fcfcfc; 
  --card-label: #5e5e5e;
  --sidebar-color: #eee;
  --bg-color: #fff;
  --input-color: #666666;
  --focus-input: #E6F6FD;
  } 


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
}
body {
    background-color: #f7f7f7;
}
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export default Styleglobal
