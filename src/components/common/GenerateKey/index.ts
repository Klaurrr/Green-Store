const GenerateKey = (pre: string): string => {
      return `${pre}_${new Date().getTime()}`;
};

export default GenerateKey;
