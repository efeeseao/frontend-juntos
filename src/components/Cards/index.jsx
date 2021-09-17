import CardData from 'resources/cardData'
import * as S from './cards.styles'

import CardImg from 'images/card-group.png'

const SectionMembers = () => {
  return (
    <S.SectionWrapper>
      <S.SectionContainer>
        <S.ContentGroup>
          <S.TextWrapper>
            <h2>Juntos Somos Mais Fortes</h2>
            <S.Cards>
              {CardData.map(({ title, text, id }) => (
                <S.CardContent key={id}>
                  <S.CardText>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </S.CardText>
                </S.CardContent>
              ))}
            </S.Cards>
          </S.TextWrapper>
          <S.ImageWrapper>
            <img src={CardImg} alt="Card" />
          </S.ImageWrapper>
        </S.ContentGroup>
      </S.SectionContainer>
    </S.SectionWrapper>
  )
}

export default SectionMembers
