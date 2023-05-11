import { FC } from "react";
import { IPaginationProps } from "./Pagination.props";

const Pagination = ({ dataPerPage, totalData, currentPage, paginate }: IPaginationProps): any => {
      const pageNumbers = [];

      for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
            pageNumbers.push(i);
      }

      return pageNumbers.map((number) => <div onClick={() => paginate(number)}>{number}</div>);
};

export default Pagination;
