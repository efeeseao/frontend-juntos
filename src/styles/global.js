import styled, { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {
    background: '#FFFFFF',
    primary: '#222D39',
    secondary: '#131313',
    border: '#E5E5E5',
    gray: '#4A4A4A'
  }
}

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    outline: none;
    box-sizing: border-box;
    border: none;
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
  }

  ::-webkit-scrollbar {
    width: 3px;
    background: ${theme.colors.gray};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.gray};
  }

  ::selection {
    color: white;
    background: ${theme.colors.gray};
  }

  html, body {
    font-size: 62.5%;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
    position: relative;
    font-weight: 400;
    background: ${theme.colors.background};
  }

  img {
  max-width: 100%;
  max-height: 70rem;
  display: inline-block;
  overflow: hidden;
}

button {
  background-color: transparent;
  cursor: pointer;
}

p {
  line-height: 150%;
  color: #616161;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

h1, h2, h3, h4 {
  font-family: 'Montserrat', sans-serif;
  line-height: 130%;
}

h1, h2 {
  font-weight: bold;
}

h1 {
  font-size: 4.7rem;
  color: #fff;
}

h2 {
  font-size: 4rem;
  letter-spacing: -0.03em;
  color: #242424;
}

h3, h4 {
  font-weight: 500;
}

strong {
  color: white;
}

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
    border-bottom-style: none;
  }

  button {
    all: unset;
  }

  input:focus, 
  textarea:focus, 
  select:focus {
    outline: none;
  }

  input:required {
    box-shadow: none;
  }

  input:invalid {
    box-shadow: none;
  }
`
export const Container = styled.div`
  width: 100%;
  max-width: 117rem;
  padding: 0px 1.5rem;
  margin: 0 auto;
`
