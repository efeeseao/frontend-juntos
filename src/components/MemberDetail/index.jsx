import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import avatar from 'images/avatar.png'
import * as S from './member.styles'

const MemberDetail = () => {
  return (
    <S.Wrapper>
      <Link to="/">
        <FaArrowLeft />
        <span>Voltar na Lista de Membros</span>
      </Link>
      <S.MemberWrapper>
        <S.MemberAvatar>
          <img src={avatar} alt="" />
        </S.MemberAvatar>
        <S.MemberDescription>
          <h1>Mr.</h1>
          <h2>Fernando dos Santos</h2>
          <p>
            Rua: <span>3838 rua santa catarina</span>
          </p>
          <p>
            Cidade: <span>Umuarama</span>
          </p>
          <p>
            Estado: <span>Santa Catarina</span>
          </p>
          <p>
            Email: <span>exemple@gmail.com</span>
          </p>
          <p>
            Telefone: <span>234567890000</span>
          </p>
        </S.MemberDescription>
      </S.MemberWrapper>
    </S.Wrapper>
  )
}

export default MemberDetail
