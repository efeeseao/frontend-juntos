import { CTAButton } from 'components'
import * as S from './hero.styles'

const Hero = () => {
  return (
    <S.Hero>
      <S.HeroContainer>
        <S.TextWrapper>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            voluptatibus consectetur. Rem animi at sapiente a voluptatibus
            ratione neque, repellat molestiae placeat impedit quae, quia aperiam
            voluptates debitis exercitationem? Est?
          </p>
          <CTAButton name="Ver membros" url="/members" />
        </S.TextWrapper>
      </S.HeroContainer>
    </S.Hero>
  )
}

export default Hero
