import { createContext, useState } from 'react'
import api from 'service/api'

export const SearchMemberContext = createContext({})

function SearchMemberProvider({ children }) {
  const [search, setSearch] = useState('')
  const [filteredMembers, setFilteredMembers] = useState([])

  const searchMember = async (event) => {
    const searchInput = event.target.value
    let currentList = []
    let newList = []
    setSearch(searchInput)

    currentList = await api.get('/')

    newList = currentList.data
      .map((list) => {
        const firstName = list.name.first
        const lastName = list.name.last
        let nameFounded

        if (firstName.includes(searchInput)) {
          nameFounded = list
        } else if (lastName.includes(searchInput)) {
          nameFounded = list
        }

        return nameFounded
      })

      .filter((list) => {
        const item = list !== undefined
        return item
      })

    if (newList.length > 9) {
      newList = []
    }
    setFilteredMembers(newList)
  }

  const membersData = {
    membersFiltered: [filteredMembers, setFilteredMembers],
    membersSearched: [search, setSearch],
    memberSearchFunction: searchMember
  }
  return (
    <SearchMemberContext.Provider value={membersData}>
      {children}
    </SearchMemberContext.Provider>
  )
}

export default SearchMemberProvider
