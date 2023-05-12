import { useState } from "react";

import clsx from "clsx";

import { IPaginationProps } from "./Pagination.props";

import icons from "../../../../public/assets/icons";

import styles from "@/styles/components/common/Pagination.module.scss";

const Pagination = ({
      dataPerPage,
      totalData,
      currentPage,
      setCurrentPage,
      paginate,
}: IPaginationProps) => {
      const pageNumbers: number[] = [];

      const [currentButtons, setCurrentButtons] = useState(1);

      const lastButtonIndex = currentButtons * 3;
      const firstButtonIndex = lastButtonIndex - 3;

      for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
            pageNumbers.push(i);
      }

      const previousPageHandler = () => {
            if (
                  currentPage === pageNumbers.slice(firstButtonIndex, lastButtonIndex)[0] &&
                  currentPage > 1
            ) {
                  setCurrentButtons(currentButtons - 1);
                  setCurrentPage(currentPage - 1);
            } else if (currentPage <= pageNumbers.length && currentPage > 1) {
                  setCurrentPage(currentPage - 1);
            }
      };

      const nextPageHandler = () => {
            if (currentPage % 3 != 0) {
                  if (currentPage < pageNumbers.length) {
                        setCurrentPage(currentPage + 1);
                  }
            } else if (currentButtons < Math.ceil(pageNumbers.length / 3)) {
                  setCurrentButtons(currentButtons + 1);
                  setCurrentPage(currentPage + 1);
            }
      };

      return (
            <div className={styles.container}>
                  {currentPage > 1 && (
                        <div className={styles.previous_button} onClick={previousPageHandler}>
                              <img src={icons.ArrowForPagination.src} alt="arrow-img" />
                        </div>
                  )}
                  {pageNumbers.slice(firstButtonIndex, lastButtonIndex).map((number) => (
                        <div
                              className={
                                    currentPage === number
                                          ? clsx(styles.paginate__item, styles.active)
                                          : styles.paginate__item
                              }
                              onClick={() => paginate(number)}
                        >
                              {number}
                        </div>
                  ))}
                  {currentPage < pageNumbers.length && (
                        <div className={styles.next_button} onClick={nextPageHandler}>
                              <img src={icons.ArrowForPagination.src} alt="arrow-img" />
                        </div>
                  )}
            </div>
      );
};

export default Pagination;
