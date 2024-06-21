import styled, { createGlobalStyle } from 'styled-components'

const Styleglobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
}
body {
    background-color: #0012;
}
`
export const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
`

export default Styleglobal
