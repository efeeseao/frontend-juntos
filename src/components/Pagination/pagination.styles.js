import styled from 'styled-components'

export const PaginationWrapper = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 40px;
  margin-bottom: 80px;
  width: 350px;

  .pagination {
    align-items: center;
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    text-align: center;
    width: 100%;

    .page-item {
      display: inline;
      margin: 0 12px;
      padding-bottom: 8px;

      .page-link {
        color: #9b9b9b;
        font-size: 1.5rem;
        height: 40px;
        text-decoration: none;
      }
    }

    .page-item.active {
      border-bottom: 3px solid #9b9b9b;
      border-radius: 3px;
      padding: 0 16px 5px;
    }

    .page-item.active a {
      font-weight: 700;
    }
  }

  .left-button,
  .right-button {
    background-color: #4a4a4a;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    height: 44px;
    margin: auto;
    text-align: center;
    width: 60px;

    svg {
      color: #ffffff;
    }
  }

  .left-button:disabled,
  .right-button:disabled {
    background-color: #9b9b9b;
  }
`
