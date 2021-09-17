import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 240px;
  background: #3a3a3a;
  padding-top: 32px;
`
export const LogoWrapper = styled.div`
  img.footer {
    width: 48px;
    height: 48px;
  }

  img.footer-logo {
    width: 120px;
    height: 48px;
    margin-left: 7px;
  }
`
export const TextSlogan = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: #ffffff;
  margin-top: 24px;
`
export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  span {
    font-size: 14px;
    font-weight: 400;
    margin-top: 24px;
    color: #ffffff;
  }
`
export const IconsWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  ul {
    display: flex;

    li a {
      margin-left: 20px;
    }
  }
`
