import { useRouter } from "next/router";

const useCurrentPath = () => {
      const { pathname } = useRouter();

      return pathname.split("/")[1];
};

export default useCurrentPath;
