export interface IShowPlantsProps {
      sort: string;
      activeCategory: string;
      setDataForPagination: (number: number) => void;
      firstDataIndex: number;
      lastDataIndex: number;
}
