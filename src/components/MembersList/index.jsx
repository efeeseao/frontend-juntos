import { useState, useEffect, useContext } from 'react'
import { Pagination, StateCheckboxList, SortedByState } from 'components'
import { UserHeader, WrapperContent } from 'components/Shared'
import { SearchMemberContext } from 'context/searchMemberContext'
import { CheckedStatesContext } from 'context/checkedStatesContext'
import api from 'service/api'

import * as S from './memberList.styles'

const MembersContent = () => {
  const [allMembers, setAllMembers] = useState([])
  const [currentMembers, setCurrentMembers] = useState([])
  const [totalPages, setTotalPages] = useState(null)
  const [currentPage, setCurrentPage] = useState(null)
  const [stateSortedMembers, setStateSortedMembers] = useState([])

  const { membersFiltered } = useContext(SearchMemberContext)
  const { selectedStateList, selectedState } = useContext(CheckedStatesContext)
  // eslint-disable-next-line no-unused-vars
  const [filteredMembers, _] = membersFiltered
  const [checkedState] = selectedState
  const sizeOfCheckedState = checkedState.length
  const quantityOfSelectedStates = selectedStateList.length

  useEffect(() => {
    async function getAllMembers() {
      const response = await api.get('/')
      setAllMembers(response.data)
    }
    getAllMembers()
  }, [selectedStateList])

  function onPageChanged(data) {
    const { currentPage, totalPages, pageLimit } = data
    const offset = (currentPage - 1) * pageLimit
    const currentMembers = allMembers.slice(offset, offset + pageLimit)

    setCurrentPage(currentPage)
    setCurrentMembers(currentMembers)
    setTotalPages(totalPages)
  }

  function onStateChecked(data) {
    const { currentPage, totalPages, pageLimit } = data
    const offset = (currentPage - 1) * pageLimit
    const currentMembers = selectedStateList.slice(offset, offset + pageLimit)

    setCurrentPage(currentPage)
    setStateSortedMembers(currentMembers)
    setTotalPages(totalPages)
  }

  const numberOfMembers = allMembers.length
  if (numberOfMembers === 0) return null

  if (sizeOfCheckedState !== 0) {
    return (
      <S.UserWrapper>
        <UserHeader />
        <S.UserContent>
          <StateCheckboxList statesData={allMembers} />

          <S.Users>
            <S.UsersHeader>
              <p>
                Exibindo {currentPage} de {totalPages} membros
              </p>
              <WrapperContent />
            </S.UsersHeader>
            <S.UserList>
              {stateSortedMembers.map(({ picture, name, location }) => {
                return (
                  <S.User
                    key={location.postcode}
                    to={`/members/${location.postcode}`}
                  >
                    <img src={picture.large} alt={name.first} />
                    <h2 className="user-name">
                      {name.first} {name.last}
                    </h2>
                    <p className="address">{location.street}</p>
                    <p className="city">{location.city}</p>
                    <p className="postcode">
                      {location.state} - Postcode {location.postcode}
                    </p>
                  </S.User>
                )
              })}
            </S.UserList>
            <SortedByState
              totalMembers={quantityOfSelectedStates}
              pageLimit={9}
              pageNeighbors={1}
              onStateChecked={onStateChecked}
            />
          </S.Users>
        </S.UserContent>
      </S.UserWrapper>
    )
  }

  return (
    <S.UserWrapper>
      <UserHeader />
      <S.UserContent>
        <StateCheckboxList statesData={allMembers} />

        <S.Users>
          <S.UsersHeader>
            <p>
              Exibindo {currentPage} de {totalPages} membros
            </p>
            <WrapperContent />
          </S.UsersHeader>
          <S.UserList>
            {filteredMembers.length !== 0
              ? filteredMembers.map(({ picture, name, location }) => {
                  return (
                    <S.User
                      key={location.postcode}
                      to={`/members/${location.postcode}`}
                    >
                      <img src={picture.large} alt={name.first} />
                      <h2 className="user-name">
                        {name.first} {name.last}
                      </h2>
                      <p className="address">{location.street}</p>
                      <p className="city">{location.city}</p>
                      <p className="postcode">
                        {location.state} - Postcode {location.postcode}
                      </p>
                    </S.User>
                  )
                })
              : currentMembers.map(({ picture, name, location }) => {
                  return (
                    <S.User
                      key={location.postcode}
                      to={`/members/${location.postcode}`}
                    >
                      <img src={picture.large} alt={name.first} />
                      <h2 className="user-name">
                        {name.first} {name.last}
                      </h2>
                      <p className="address">{location.street}</p>
                      <p className="city">{location.city}</p>
                      <p className="postcode">
                        {location.state} - Postcode {location.postcode}
                      </p>
                    </S.User>
                  )
                })}
          </S.UserList>
          <Pagination
            totalMembers={numberOfMembers}
            pageLimit={9}
            pageNeighbors={1}
            onPageChanged={onPageChanged}
          />
        </S.Users>
      </S.UserContent>
    </S.UserWrapper>
  )
}

export default MembersContent
