import { useState, useEffect, useContext } from 'react'
import { CheckedStatesContext } from 'context/checkedStatesContext'
import States from 'resources/statesData'
import * as S from './states.styles'

const StateCheckboxList = ({ statesData }) => {
  const [visible, setVisible] = useState(7)
  // eslint-disable-next-line no-unused-vars
  const [_, setStatesList] = useState(statesData)
  const { handleCheckBoxFunction } = useContext(CheckedStatesContext)

  useEffect(() => {
    const stateSelected = statesData.map((member) => {
      return member
    })
    setStatesList(stateSelected)
    console.log(stateSelected)
  }, [statesData])

  const showMoreStates = (event) => {
    event.preventDefault()
    if (visible === 7) {
      setVisible((vis) => vis + 20)
    } else {
      setVisible((vis) => vis - 20)
    }
  }
  return (
    <S.List>
      <span className="title">Por Estado</span>
      {States.slice(0, visible).map((state) => {
        const lowerState = state.toLowerCase()
        return (
          <S.Wrapper key={state}>
            <ul>
              <li>
                <input
                  type="checkbox"
                  value={lowerState}
                  onClick={handleCheckBoxFunction}
                />
                {state}
              </li>
            </ul>
          </S.Wrapper>
        )
      })}
      <a href="#" onClick={showMoreStates}>
        {visible !== 27 ? 'Ver mais' : 'Ver menos'}
      </a>
    </S.List>
  )
}

export default StateCheckboxList
