import { Link } from 'react-router-dom'
import logo from 'images/header-logo.png'
import searchIcon from 'images/search.png'

import NavbarData from 'resources/navbarData'

import * as S from './header.styles'

const Header = () => {
  return (
    <S.Header>
      <S.HeaderWrapper>
        <S.LogoWrapper>
          <Link to>
            <img
              className="logo"
              role="img"
              src={logo}
              alt="JuntosSomosMaisLogo"
            />
          </Link>
        </S.LogoWrapper>
        <S.SearchField>
          <img
            className="search-field"
            role="img"
            src={searchIcon}
            alt="Search Icon"
          />
          <input type="text" placeholder="Buscar aqui" />
          <S.MenuOptions>
            <ul>
              {NavbarData.map(({ id, name, route }) => (
                <li key={id}>
                  <Link to={route}>{name}</Link>
                </li>
              ))}
            </ul>
          </S.MenuOptions>
        </S.SearchField>
      </S.HeaderWrapper>
    </S.Header>
  )
}

export default Header
