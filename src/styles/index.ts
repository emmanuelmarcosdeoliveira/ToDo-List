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
  --text-area: #8b8b8b;
  --btn-1: #2f3640;
  --tag-color-1: #e1a32a;
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

export default Styleglobal
