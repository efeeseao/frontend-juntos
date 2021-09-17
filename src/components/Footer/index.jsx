import SocialData from 'resources/socialMedia'

import footer from 'images/footer.png'
import logo from 'images/footer-logo.png'

import * as S from './footer.styles'

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.LogoWrapper>
        <img className="footer" src={footer} alt="footer-logo" />
        <img className="footer-logo" src={logo} alt="footer-logo" />
      </S.LogoWrapper>
      <S.TextSlogan>
        <p>Juntos Somos Mais Fidelização S.A</p>
      </S.TextSlogan>
      <S.SocialMediaWrapper>
        <span>Siga-nos nas redes sociais:</span>
        <S.IconsWrapper>
          <ul>
            {SocialData.map(({ aria, icon, target, url }) => (
              <li key={aria}>
                <a href={url} aria-label={aria} target={target}>
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </S.IconsWrapper>
      </S.SocialMediaWrapper>
    </S.FooterWrapper>
  )
}

export default Footer
