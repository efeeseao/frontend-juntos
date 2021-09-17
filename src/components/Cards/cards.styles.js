import styled from 'styled-components'
import { Container } from 'styles/global'

export const SectionWrapper = styled.section`
  padding: 8rem;
`
export const SectionContainer = styled(Container)``

export const ContentGroup = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  position: relative;
`
export const TextWrapper = styled.div``

export const Cards = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  max-width: 62.5rem;
  flex-wrap: wrap;
  gap: 6.8rem;
  padding-top: 10rem;
`
export const CardContent = styled.div`
  width: 100%;
  max-width: 25.9rem;
  position: relative;
`
export const CardText = styled.div`
  h4 {
    width: 100%;
    max-width: 24.3rem;
    padding-bottom: 0.8rem;
    padding-top: 1.6rem;
    font-weight: 700;
  }
`
export const ImageWrapper = styled.div`
  position: absolute;
  top: -68px;
  right: 0;
  z-index: 99;
  animation: zoominout 9s infinite;
`
