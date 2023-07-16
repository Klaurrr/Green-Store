export const getDate = () => {
      const MONTHS = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
      ];
      const DATE = new Date();

      const MONTH = MONTHS[DATE.getUTCMonth()];
      const DAY = DATE.getUTCDate();
      const YEAR = DATE.getUTCFullYear();

      return `${DAY} ${MONTH}, ${YEAR}`;
};
