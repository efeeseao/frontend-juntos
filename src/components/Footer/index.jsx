import SocialData from 'resources/socialMedia'

import * as S from './footer.styles'

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.LogoWrapper>
        <img
          className="footer"
          src="https://raw.githubusercontent.com/buzzcode42/juntos-images/main/footer.png?token=AJQRGDMJ5SBNEOZTCQQ56C3BJGS2G"
          alt="footer-logo"
        />
        <img
          className="footer-logo"
          src="https://raw.githubusercontent.com/buzzcode42/juntos-images/main/footer-logo.png?token=AJQRGDJE3DAT44FOM6JKQUTBJGSS4"
          alt="footer-logo"
        />
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
