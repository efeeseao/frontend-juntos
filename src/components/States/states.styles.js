import styled from 'styled-components'

export const List = styled.aside`
  padding: 24px 27px;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  height: 100%;
  min-height: 374px;
  width: 400px;

  .title {
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
  }

  a {
    font-size: 1rem;
    font-weight: 400;
    color: #222d39;
  }

  ul {
    list-style: none;
    margin-top: 14px;
    padding: 0;

    li {
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 28px;
      margin-bottom: 8px;

      input {
        margin-right: 8px;
      }
    }
  }
`
export const Wrapper = styled.div``
