import States from 'resources/statesData'
import * as S from './states.styles'

const StateCheckboxList = () => {
  return (
    <S.List>
      <span className="title">Por Estado</span>
      {States.map((state) => {
        return (
          <S.Wrapper key={state}>
            <ul>
              <li>
                <input type="checkbox" />
                {state}
              </li>
            </ul>
          </S.Wrapper>
        )
      })}
      <a href="#">Ver mais</a>
    </S.List>
  )
}

export default StateCheckboxList
