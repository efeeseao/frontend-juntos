import { SearchMemberProvider, CheckedStatesProvider } from 'context'
import { Layout, MembersList } from 'components'

const Users = () => {
  return (
    <SearchMemberProvider>
      <Layout>
        <CheckedStatesProvider>
          <MembersList />
        </CheckedStatesProvider>
      </Layout>
    </SearchMemberProvider>
  )
}

export default Users
