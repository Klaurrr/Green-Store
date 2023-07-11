import { FC, useEffect, useState } from "react";

import clsx from "clsx";

import Star from "@/../../public/assets/svg/Star.svg";

import { IRatingProps } from "./Rating.props";

import styles from "./Rating.module.scss";

const Rating: FC<IRatingProps> = ({ isEditable = false, rating, setRating, ...props }) => {
      const [ratingArray, setRatingArray] = useState(new Array(5).fill(<></>));

      useEffect(() => {
            constuctRating(rating);
      }, [rating]);

      const constuctRating = (currentRating: number) => {
            const updatedArray = ratingArray.map((star, index) => {
                  return (
                        <Star
                              className={
                                    index < currentRating
                                          ? clsx(styles.star, styles.fill)
                                          : styles.star
                              }
                        />
                  );
            });

            setRatingArray(updatedArray);
      };

      return (
            <div {...props} className={styles.container}>
                  {ratingArray.map((star, index) => (
                        <span key={index}>{star}</span>
                  ))}
            </div>
      );
};

export default Rating;
