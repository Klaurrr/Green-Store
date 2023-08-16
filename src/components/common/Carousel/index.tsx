import { Children, cloneElement, useEffect, useRef, useState } from "react";

import useWindowSize from "@/hooks/UseWindowSize";

import { Props } from "./Carousel.props";

import styles from "./Carousel.module.scss";

const Carousel: React.FC<Props> = ({ children, Banner = false }) => {
      const [pages, setPages] = useState<any>([]);
      const [offset, setOffset] = useState(0);
      const [currentPage, setCurrentPage] = useState(0);
      const isSmallScreen = useWindowSize();
      const PAGE_WIDTH = isSmallScreen ? window.innerWidth - 30 : 1200;

      useEffect(() => {
            setCurrentPage(Math.abs(offset / PAGE_WIDTH));
      }, [offset]);

      useEffect(() => {
            setPages(
                  Children.map(children, (child) => {
                        return cloneElement(child, {
                              style: {
                                    height: "100%",
                                    minWidth: `${PAGE_WIDTH}px`,
                                    maxWidth: `${PAGE_WIDTH}px`,
                              },
                        });
                  })
            );
      }, []);

      // const touchStartX = useRef<number | null>(null);
      // const touchDeltaX = useRef<number | null>(null);
      // const bannerRef = useRef<HTMLDivElement | null>(null);

      // const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
      //       touchStartX.current = event.touches[0].clientX;
      //       touchDeltaX.current = 0;
      // };

      // const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
      //       if (touchStartX.current !== null) {
      //             const touchX = event.touches[0].clientX;
      //             touchDeltaX.current = touchX - touchStartX.current;
      //             if (touchDeltaX.current < 0) {
      //                   bannerRef.current!.style.transform = `translateX(${
      //                         offset + touchDeltaX.current
      //                   }px)`;
      //             }
      //       }
      // };

      // const handleTouchEnd = () => {
      //       if (touchStartX.current !== null && Math.abs(touchDeltaX.current!) > 150) {
      //             // const newOffset = offset + (touchDeltaX.current! < 0 ? PAGE_WIDTH : -PAGE_WIDTH);
      //             // setOffset(Math.min(0, Math.max(-PAGE_WIDTH * (pages.length - 1), newOffset)));
      //       }
      //       // bannerRef.current!.style.transform = `translateX(${offset}px)`;
      //       // touchStartX.current = null;
      //       // touchDeltaX.current = 0;
      // };
      return (
            <article className={styles.container}>
                  <div className={styles.window}>
                        <div
                              className={styles.pages_container}
                              // onTouchStart={handleTouchStart}
                              // onTouchMove={handleTouchMove}
                              // onTouchEnd={handleTouchEnd}
                              // ref={bannerRef}
                              style={{ transform: `translateX(${offset}px)` }}>
                              {pages}
                        </div>
                  </div>
                  <div className={Banner ? styles.dots : styles.switches}>
                        {pages.map((_item: undefined, index: string) => (
                              <button
                                    key={index}
                                    onClick={() => {
                                          setOffset(-index * PAGE_WIDTH);
                                          setCurrentPage(Number(index));
                                    }}
                                    className={
                                          index == String(currentPage)
                                                ? styles.button_active
                                                : styles.button
                                    }
                              />
                        ))}
                  </div>
            </article>
      );
};

export default Carousel;
