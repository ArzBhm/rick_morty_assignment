import {StyledWrapper} from './Pagination.style'

type PaginationProps = {
  loading: boolean
  prevPage: () => void
  nextPage: () => void
}

function Pagination({ loading, prevPage, nextPage }: PaginationProps): JSX.Element {

  if(loading) {
    return <div></div>
  }

    return (
        <StyledWrapper>
          <ul className='pagination'>
              <li className='page-item'>
                <a onClick={() => prevPage()} href='!#' className='page-link'>
                  Previouse
                </a>
              </li>
              <li className='page-item'>
                <a onClick={() => nextPage()} href='!#' className='page-link'>
                  Next
                </a>
              </li>
            </ul>
        </StyledWrapper>
    )
}

export default Pagination