import React, { FC } from "react";

import { IBlogItemProps } from "./Props/BlogItem.props";

import ArrowRight from "@/../../public/assets/svg/ArrowRight.svg";

import styles from "@/styles/components/ui/BlogItem.module.scss";

const BlogItem: FC<IBlogItemProps> = ({ plant }) => {
      const { date, timeForRead, title, desc, img } = plant;

      return (
            <div className={styles.container}>
                  <img src={img} alt="plant-img" />
                  <div className={styles.wrapper}>
                        <p className={styles.date}>
                              {date} | Read in {timeForRead} minutes
                        </p>
                        <h3 className={styles.title}>{title}</h3>
                        <p className={styles.desc}>{desc}</p>
                        <div className={styles.read}>
                              Read More
                              <ArrowRight />
                        </div>
                  </div>
            </div>
      );
};

export default BlogItem;
