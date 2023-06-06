import { useEffect, useState, Children, cloneElement } from "react";

import { Props } from "./Carousel.props";

import styles from "@/styles/components/common/Carousel.module.scss";

const Carousel: React.FC<Props> = ({ children, Banner = false }) => {
      const [pages, setPages] = useState<any>([]);
      const [offset, setOffset] = useState(0);
      const [currentPage, setCurrentPage] = useState(0);

      const page_width = 1200;

      useEffect(() => {
            setCurrentPage(Math.abs(offset / page_width));
      }, [offset]);

      useEffect(() => {
            setPages(
                  Children.map(children, (child) => {
                        return cloneElement(child, {
                              style: {
                                    height: "100%",
                                    minWidth: `${page_width}px`,
                                    maxWidth: `${page_width}px`,
                              },
                        });
                  })
            );
      }, []);

      return (
            <article className={styles.container}>
                  <div className={styles.window}>
                        <div
                              className={styles.pages_container}
                              style={{ transform: `translateX(${offset}px)` }}
                        >
                              {pages}
                        </div>
                  </div>
                  <div className={Banner ? styles.dots : styles.switches}>
                        {pages.map((_item: undefined, index: string) => (
                              <button
                                    key={index}
                                    onClick={() => {
                                          setOffset(-index * page_width);
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
