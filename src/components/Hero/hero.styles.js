import styled from 'styled-components'
import { Container } from 'styles/global'

export const Hero = styled.section`
  width: 100%;
  height: 70rem;
  padding-top: 19rem;
  background-color: #131313;
`
export const HeroContainer = styled(Container)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`
export const TextWrapper = styled.div`
  width: 100%;
  max-width: 74rem;

  h1 {
    color: #ffffff;
    margin-top: 3.4rem;
    margin-bottom: 2.4rem;
  }

  p {
    width: 100%;
    max-width: 50rem;
    margin-bottom: 4rem;
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 150%;
    color: #ffffff;
  }
`
