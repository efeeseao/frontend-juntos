import { Link } from 'react-router-dom'
import { theme } from 'styles/global'
import styled from 'styled-components'

const NotFoundWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
`
const MessageBox = styled.div`
  h4 {
    font-size: 10rem;
    font-weight: bold;
    position: relative;
    margin: -8rem 0 0;
    padding: 0;
  }

  p {
    color: #131313;
    font-size: 4rem;
    font-weight: bold;
    line-height: 5rem;
    max-width: 600px;
    position: relative;
  }
`
const LinkWrapper = styled.div`
  margin-top: 2rem;
`
const LinkBtn = styled(Link)`
  border: none;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.background};
  border-radius: 8px;
  line-height: 4rem;
  padding: 1.5rem 5rem;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.5rem;
  transition: all 0.3s;
  cursor: pointer;
`

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <MessageBox>
        <h4>404</h4>
        <p>OOOPS! Página não encontrada!</p>
        <LinkWrapper>
          <LinkBtn to="/">Voltar na Home</LinkBtn>
        </LinkWrapper>
      </MessageBox>
    </NotFoundWrapper>
  )
}

export default NotFound
