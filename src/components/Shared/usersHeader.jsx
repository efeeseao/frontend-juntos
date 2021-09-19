import styled from 'styled-components'

const Wrapper = styled.div`
  .option strong {
    font-size: 1.2rem;
    margin-right: 8px;
    color: #222d39;
  }

  select {
    border: none;
    font-size: 1.2rem;
    font-weight: 400;
    width: 68px;
    background: white;
  }
`
const UsersHeader = () => {
  return (
    <Wrapper>
      <div className="option">
        <strong>Ordenar por:</strong>
        <select name="sort" id="sort">
          <option value="name">Nome</option>
          <option value="state">Estado</option>
          <option value="city">Cidade</option>
        </select>
      </div>
    </Wrapper>
  )
}

export default UsersHeader
