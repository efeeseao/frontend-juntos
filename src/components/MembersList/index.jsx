import { useState, useEffect } from 'react'
import { Pagination } from 'components'

import { StateCheckboxList, Skeleton } from 'components'
import * as S from './memberList.styles'

const UserContent = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])
  return (
    <S.UserWrapper>
      <S.UserHeader>
        <div className="header">
          <p>Home &gt; Usuários &gt; Detalhes</p>
        </div>
        <div className="title">
          <h1>Lista de Membros</h1>
        </div>
      </S.UserHeader>
      <S.UserContent>
        <StateCheckboxList />

        <S.Users>
          <S.UsersHeader>
            <p>Exibindo 9 de 11 membros</p>
            <div className="option">
              <strong>Ordenar por:</strong>
              <select name="sort" id="sort">
                <option value="name">Nome</option>
                <option value="state">Estado</option>
                <option value="city">Cidade</option>
              </select>
            </div>
          </S.UsersHeader>
          <S.UserList>
            {isLoading ? (
              <Skeleton />
            ) : (
              <S.User>
                <img src="#" alt="logo" />
                <h2 className="user-name">Fernando dos Santos</h2>
                <p className="address">Nova Vida</p>
                <p className="city">Luanda</p>
                <p className="postcode">Luanda - CEP: 0000</p>
              </S.User>
            )}
          </S.UserList>
          <Pagination />
        </S.Users>
      </S.UserContent>
    </S.UserWrapper>
  )
}

export default UserContent
