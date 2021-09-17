import { Header, Footer } from 'components'
import * as S from './layout.styles'

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <Header />
      {children}
      <Footer />
    </S.LayoutWrapper>
  )
}

export default Layout
