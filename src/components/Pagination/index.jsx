import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import * as S from './pagination.styles'

const Pagination = () => {
  return (
    <S.PaginationWrapper>
      <button role="button" type="button" className="left-button">
        <FaArrowLeft />
      </button>
      <ul className="pagination">
        <li className="page-item">
          <a href="#" className="page-link">
            <span>&laquo;</span>
          </a>
        </li>
        <li className="page-item">
          <a href="#" className="page-link">
            12
          </a>
        </li>
      </ul>
      <button role="button" type="button" className="right-button">
        <FaArrowRight />
      </button>
    </S.PaginationWrapper>
  )
}

export default Pagination
