import { useEffect, useState } from "react";

function useWindowSize() {
      const [isSmallScreen, setIsSmallScreen] = useState(false);

      useEffect(() => {
            const mediaQuery = window.matchMedia("(max-width: 769px)");

            const handleResize = () => setIsSmallScreen(mediaQuery.matches);

            setIsSmallScreen(mediaQuery.matches);
            mediaQuery.addEventListener("change", handleResize);

            return () => {
                  mediaQuery.removeEventListener("change", handleResize);
            };
      }, []);

      return isSmallScreen;
}

export default useWindowSize;
