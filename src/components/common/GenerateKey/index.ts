const generateKey = (pre: string): string => {
      return `${pre}_${new Date().getTime()}`;
};

export default generateKey;
