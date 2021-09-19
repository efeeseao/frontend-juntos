import styled from 'styled-components'

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  max-width: 1136px;
  width: 100%;

  .header {
    font-size: 14px;
  }

  .title h1 {
    color: hsl(0deg 0% 0%);
    font-size: 2.5rem;
    font-weight: bold;
    margin: 24px 0 40px 0;
  }
`
const UserHeader = () => {
  return (
    <HeaderWrapper>
      <div className="header">
        <p>Home &gt; Usuários &gt; Detalhes</p>
      </div>
      <div className="title">
        <h1>Lista de Membros</h1>
      </div>
    </HeaderWrapper>
  )
}

export default UserHeader
