import styled from 'styled-components'

export const UserWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`
export const UserHeader = styled.header`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  max-width: 1136px;
  width: 100%;

  .header {
    font-size: 14px;
  }

  .title h1 {
    color: hsl(0deg 0% 0%);
    font-size: 2.5rem;
    font-weight: bold;
    margin: 24px 0 40px 0;
  }
`
export const UserContent = styled.section`
  display: flex;
  max-width: 1136px;
  width: 100%;
`
export const Users = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
`
export const UsersHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e5e5e5;
  padding: 0 16px;
  border-radius: 4px;
  margin-bottom: 16px;
  max-width: 894px;
  height: 60px;
  width: 100%;
  box-sizing: border-box;

  p {
    font-size: 1.5rem;
    font-weight: 400;
  }

  .option strong {
    font-size: 1.2rem;
    margin-right: 8px;
    color: #222d39;
  }

  select {
    border: none;
    font-size: 1.2rem;
    font-weight: 400;
    width: 68px;
    background: white;
  }
`
export const UserList = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  column-gap: 16px;
  row-gap: 16px;
  margin-bottom: 160px;
  max-width: 894px;
  height: 100%;
  width: 100%;
`
export const User = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 310px;
  width: 285px;
  border: 1px solid #e5e5e5;

  img {
    border: none;
    border-radius: 50%;
    margin-top: 35px;
    height: 97px;
    width: 97px;
  }

  .user-name {
    font-size: 20px;
    font-weight: 700;
    margin-top: 12px;
  }

  .address,
  .postcode,
  .city {
    font-weight: 400;
  }

  .address {
    font-size: 14px;
    margin-top: 16px;
  }

  .city,
  .postcode {
    font-size: 12px;
  }

  .city {
    margin-top: 12px;
  }
`
