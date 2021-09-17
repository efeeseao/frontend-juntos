import { Header } from 'components'
import * as S from './layout.styles'

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <Header />
      {children}
    </S.LayoutWrapper>
  )
}

export default Layout
