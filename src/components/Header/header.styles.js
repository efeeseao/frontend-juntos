import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10rem;
  background: #f5f5f5;
`
export const HeaderWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1136px;
`
export const LogoWrapper = styled.figure`
  .logo {
    height: 40px;
    width: 148px;
  }
`
export const SearchField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 950px;

  .search-field {
    position: relative;
    left: 16.75rem;
  }

  input {
    height: 48px;
    width: 425px;
    border: 1px solid #b0b0b0;
    border-radius: 50px;
    padding-left: 50px;
    font-size: 1.5rem;
    color: #131313;
  }
`
export const MenuOptions = styled.nav`
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    gap: 4.6rem;
  }

  a {
    font-weight: 500;
    line-height: 1.188rem;
    font-size: 1.75rem;
    color: #242424;
    transition: all 0.3s;

    &:hover {
      color: #000000;
    }
  }
`
