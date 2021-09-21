import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { SearchMemberContext } from 'context/searchMemberContext'

import NavbarData from 'resources/navbarData'

import * as S from './header.styles'

const Header = () => {
  const { membersSearched, memberSearchFunction } =
    useContext(SearchMemberContext)
  const [search] = membersSearched

  return (
    <S.Header>
      <S.HeaderWrapper>
        <S.LogoWrapper>
          <Link to="/">
            <img
              className="logo"
              role="img"
              src="https://raw.githubusercontent.com/buzzcode42/juntos-images/main/header-logo.png?token=AJQRGDJX65MRPKG6QXPDTQ3BJGS4G"
              alt="JuntosSomosMaisLogo"
            />
          </Link>
        </S.LogoWrapper>
        <S.SearchField>
          <img
            className="search-field"
            role="img"
            src="https://raw.githubusercontent.com/buzzcode42/juntos-images/main/search.png?token=AJQRGDMOW4KF4EUGN35BYMLBJGS6O"
            alt="Search Icon"
          />
          <input
            type="text"
            placeholder="Buscar aqui"
            value={search}
            onChange={memberSearchFunction}
          />
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
