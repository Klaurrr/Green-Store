export interface IPaginationProps {
      dataPerPage: number;
      totalData: number;
      currentPage: number;
      paginate: (open: number) => void;
}
