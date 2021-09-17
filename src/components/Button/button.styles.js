import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { theme } from 'styles/global'

export const Button = styled(Link)`
  border: 1px solid ${theme.colors.border};
  background-color: ${theme.colors.background};
  color: ${theme.colors.secondary};
  border-radius: 10rem;
  line-height: 4rem;
  padding: 1.5rem 5rem;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: #ffffff;
  }
`
