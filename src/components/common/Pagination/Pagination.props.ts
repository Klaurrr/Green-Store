export interface IPaginationProps {
      dataPerPage: number;
      totalData: number;
      currentPage: number;
      setCurrentPage: (open: number) => void;
      paginate: (open: number) => void;
}
