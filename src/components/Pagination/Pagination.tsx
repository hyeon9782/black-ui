import { button, pagination, paginationItem } from "./Pagination.css";

type Props = {
  totalPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ totalPage, currentPage = 1, onPageChange }: Props) => {
  let startPage: number, endPage: number;

  if (totalPage <= 5) {
    // 전체 페이지가 5개 이하인 경우
    startPage = 1;
    endPage = totalPage;
  } else {
    // 전체 페이지가 5개를 초과하는 경우
    if (currentPage <= 3) {
      startPage = 1;
      endPage = 5;
    } else if (currentPage + 2 >= totalPage) {
      startPage = totalPage - 4;
      endPage = totalPage;
    } else {
      startPage = currentPage - 2;
      endPage = currentPage + 2;
    }
  }

  const pages = Array.from(
    { length: endPage + 1 - startPage },
    (_, index) => startPage + index,
  );

  return (
    <nav>
      <ul className={pagination({})}>
        <li>
          <button
            disabled={currentPage === 1}
            className={button({ isDisabled: currentPage === 1 })}
            onClick={() => onPageChange(currentPage - 1)}
          >
            Prev
          </button>
        </li>
        {pages.map((page) => (
          <li
            className={paginationItem({})}
            key={page}
            style={{
              cursor: "pointer",
              fontWeight: currentPage === page ? "bold" : "normal",
            }}
            onClick={() => onPageChange(page)}
          >
            {page}
          </li>
        ))}
        <li>
          <button
            disabled={currentPage >= totalPage}
            className={button({ isDisabled: currentPage >= totalPage })}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
