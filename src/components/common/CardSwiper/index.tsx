import { FC, useRef, useState } from "react";

import { ICardSwiperProps } from "./CardSwiper.props";

const CardSwiper: FC<ICardSwiperProps> = ({ children, onSwipeLeft }) => {
      const cardRef = useRef<HTMLDivElement | null>(null);
      const touchStartX = useRef<number | null>(null);
      const [positionX, setPositionX] = useState(0);

      const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
            touchStartX.current = event.touches[0].clientX;
      };

      const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
            if (touchStartX.current !== null) {
                  const touchX = event.touches[0].clientX;
                  const deltaX = touchX - touchStartX.current;
                  setPositionX(deltaX);

                  if (deltaX < 0) {
                        cardRef.current!.style.transform = `translateX(${deltaX}px)`;
                  }
            }
      };

      const handleTouchEnd = () => {
            if (touchStartX.current !== null) {
                  if (positionX < -150) {
                        cardRef.current!.style.transform = "translateX(-1000px)";
                        onSwipeLeft();
                  } else {
                        cardRef.current!.style.transform = "translateX(0px)";
                  }
            }
      };

      return (
            <div
                  ref={cardRef}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}>
                  {children}
            </div>
      );
};
export default CardSwiper;
