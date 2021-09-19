import { createContext, useState, useEffect } from 'react'
import api from 'service/api'

export const CheckedStatesContext = createContext([])

function CheckedStatesProvider({ children }) {
  const [checkedState, setCheckedState] = useState([])
  const [checked, setChecked] = useState(false)
  const [searchList, setSearchList] = useState([])

  useEffect(() => {
    async function getSearchedList() {
      const response = await api.get('/')
      setSearchList(response.data)
    }
    getSearchedList()
  }, [])

  const handleCheckbox = (e) => {
    if (checkedState.includes(e.target.value)) {
      const filtered = checkedState.filter((state) => {
        return state !== e.target.value
      })
      setCheckedState(filtered)
    } else {
      setCheckedState((prevValue) => [...prevValue, e.target.value])
      setChecked(true)
    }
  }

  let stateFiltered = []
  searchList.map((item) => {
    if (
      checkedState.includes(item.location.state) ||
      checkedState.length === 0
    ) {
      stateFiltered.push({
        id: item.id,
        picture: item.picture.thumbnail,
        first: item.name.first,
        last: item.name.last,
        street: item.location.street,
        city: item.location.city,
        state: item.location.state,
        cep: item.location.postcode
      })
    }

    return stateFiltered
  })

  if (checkedState.length === 0) {
    stateFiltered = []
  }

  const statesData = {
    selectedState: [checkedState, setCheckedState],
    selectedStateList: stateFiltered,
    checkedBox: [checked, setChecked],
    handleCheckBoxFunction: handleCheckbox
  }

  return (
    <CheckedStatesContext.Provider value={statesData}>
      {children}
    </CheckedStatesContext.Provider>
  )
}

export default CheckedStatesProvider
