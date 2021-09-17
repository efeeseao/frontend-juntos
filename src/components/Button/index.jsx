import * as S from './button.styles'

const CTAButton = ({ name, url }) => {
  return <S.Button to={url}>{name}</S.Button>
}

export default CTAButton
