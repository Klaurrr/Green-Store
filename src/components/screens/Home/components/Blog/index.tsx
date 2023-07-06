import React from "react";

import BlogItem from "./BlogItem.component";

import icons from "../../../../../../public/assets/icons";

import styles from "./styles/Blog.module.scss";

export const Blog = () => {
      const MOCKS = [
            {
                  date: "September 12",
                  timeForRead: 5,
                  title: "Cactus & Succulent Care Tips",
                  desc: "Cacti are succulents are easy care plants for any home or patio.",
                  img: icons.PlantForBlog_1.src,
            },
            {
                  date: "September 13",
                  timeForRead: 2,
                  title: "Top 10 Succulents for Your Home",
                  desc: "Best in hanging baskets. Prefers medium to high light.",
                  img: icons.PlantForBlog_2.src,
            },
            {
                  date: "September 15",
                  timeForRead: 3,
                  title: "Cacti & Succulent Care Tips",
                  desc: "Cacti and succulents thrive in containers and because most are..",
                  img: icons.PlantForBlog_3.src,
            },
            {
                  date: "August 5",
                  timeForRead: 8,
                  title: "Best Houseplants  Room by Room",
                  desc: "The benefits of houseplants are endless. In addition to..",
                  img: icons.PlantForBlog_4.src,
            },
      ];

      return (
            <div className={styles.container}>
                  <h2>Our Blog Posts</h2>
                  <p>
                        We are an online plant shop offering a wide range of cheap and trendy
                        plants.{" "}
                  </p>
                  <div className={styles.blogs}>
                        {MOCKS.map((plant, index) => (
                              <BlogItem plant={plant} key={`${plant}_${index}`} />
                        ))}
                  </div>
            </div>
      );
};
