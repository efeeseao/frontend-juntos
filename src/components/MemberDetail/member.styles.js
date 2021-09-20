import styled from 'styled-components'
import { Container } from 'styles/global'

export const Wrapper = styled(Container)`
  margin-top: 5rem;

  a {
    align-items: center;
    display: flex;

    span {
      color: #171717;
      font-weight: 600;
      margin-left: 1rem;
    }
  }
`
export const MemberWrapper = styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 611px;
`
export const MemberAvatar = styled.div`
  margin-right: 3rem;

  img {
    width: 245px;
    border-radius: 50%;
  }
`
export const MemberDescription = styled.div`
  color: #4a4a4a;
  width: 450px;
  height: 300px;

  h1 {
    color: #4a4a4a;
    font-weight: 700;
    font-size: 2.5rem;
  }
  h2 {
    font-weight: 500;
    font-size: 2rem;
  }
  p {
    padding-top: 7px;
    span {
      color: #4a4a4a;
      font-weight: bold;
    }
  }
`
