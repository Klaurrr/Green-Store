import { usePlantsStore } from "@/store";
import { useState } from "react";

export const countHandler = () => {
      const [counter, setCounter] = useState(1);

      const addCart = usePlantsStore((state) => state.addCart);

      const countHandler = (operation: string) => {
            if (operation === "decrease") {
                  if (counter > 1) {
                        setCounter(counter - 1);
                  }
            } else setCounter(counter + 1);
      };
};
