import CardData from 'resources/cardData'
import * as S from './cards.styles'

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
            <img
              src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80"
              alt="JuntosSomosMaisFortes"
            />
          </S.ImageWrapper>
        </S.ContentGroup>
      </S.SectionContainer>
    </S.SectionWrapper>
  )
}

export default SectionMembers
