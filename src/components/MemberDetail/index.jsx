import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

import api from 'service/api'
import * as S from './member.styles'

const MemberDetail = () => {
  const { postcode } = useParams()
  const [member, setMember] = useState([])

  useEffect(() => {
    async function fetchMember() {
      const response = await api.get(`/${postcode}`)
      setMember(response.data)
    }

    fetchMember()
  }, [postcode])

  return (
    <S.Wrapper>
      <Link to="/members">
        <FaArrowLeft />
        <span>Voltar na Lista de Membros</span>
      </Link>
      <S.MemberWrapper>
        <S.MemberAvatar>
          <img src={member?.picture?.large} alt="Avatar" />
        </S.MemberAvatar>
        <S.MemberDescription>
          <h1>{member?.name?.title ?? 'Mr/s.'}</h1>
          <h2>
            {member?.name?.first ?? 'Primeiro nome desconhecido'}{' '}
            {member?.name?.last ?? 'Último nome desconhecido'}
          </h2>
          <p>
            Rua: <span>{member?.location?.street ?? 'Desconhecida'}</span>
          </p>
          <p>
            Cidade: <span>{member?.location?.city ?? 'Desconhecida'}</span>
          </p>
          <p>
            Estado: <span>{member?.location?.state ?? 'Desconhecido'}</span>
          </p>
          <p>
            Email: <span>{member?.email ?? 'Desconhecido'}</span>
          </p>
          <p>
            Telefone: <span>{member?.phone ?? 'Desconhecido'}</span>
          </p>
        </S.MemberDescription>
      </S.MemberWrapper>
    </S.Wrapper>
  )
}

export default MemberDetail
