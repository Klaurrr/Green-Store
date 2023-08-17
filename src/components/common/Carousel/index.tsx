import { Children, cloneElement, useEffect, useState } from "react";

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

      const [startX, setStartX] = useState(0);
      const [currentX, setCurrentX] = useState(0);

      const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
            setStartX(e.touches[0].clientX);
      };

      const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
            setCurrentX(e.touches[0].clientX);
      };

      const handleTouchEnd = () => {
            const swipeDistance = startX - currentX;
            const swipeThreshold = PAGE_WIDTH / 2;

            const newOffset = offset - (swipeDistance > 0 ? PAGE_WIDTH : -PAGE_WIDTH);
            const maxOffset = -(pages.length - 1) * PAGE_WIDTH;

            if (newOffset > 0) {
                  setOffset(0);
                  setCurrentPage(0);
                  return;
            }

            if (newOffset < maxOffset) {
                  setOffset(maxOffset);
                  setCurrentPage(pages.length - 1);
                  return;
            }

            if (Math.abs(swipeDistance) > swipeThreshold) {
                  setOffset(newOffset);
                  const newPage = Math.abs(Math.floor(newOffset / PAGE_WIDTH));
                  setCurrentPage(newPage);
            }
      };

      return (
            <article className={styles.container}>
                  <div className={styles.window}>
                        <div
                              className={styles.pages_container}
                              style={{ transform: `translateX(${offset}px)` }}
                              onTouchStart={handleTouchStart}
                              onTouchMove={handleTouchMove}
                              onTouchEnd={handleTouchEnd}>
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
