import React, { useState } from "react";

import { usePlantsStore } from "@/store";

import Button from "../Button/Button";

import { IPlantsState } from "@/types/IPlantsState";

import styles from "@/styles/components/ui/PriceRange.module.scss";

const PriceRange = () => {
	const [value, setValue] = useState(0);

	const plants = usePlantsStore((state: IPlantsState) => state?.plants);

	const addFilteredPlants = usePlantsStore((state: IPlantsState) => state.addFilteredPlants);

	const filterHandler = () => {
		addFilteredPlants(plants.filter((plant) => plant.price <= value));
	};

	const priceMin = Math.ceil(Math.min(...plants.map((plant) => plant.price)));
	const priceMax = Math.ceil(Math.max(...plants.map((plant) => plant.price)));

	return (
		<div className={styles.container}>
			<h3>Price Range</h3>
			<div className={styles.wrapper}>
				<input
					type="range"
					min={priceMin}
					max={priceMax}
					value={value}
					onChange={(e) => setValue(+e.target.value)}
				/>
				<div className={styles.price}>
					Price:{" "}
					<span>
						${priceMin} - ${value === 0 ? priceMin : value}
					</span>
				</div>
				<div onClick={() => filterHandler()}>
					<Button width={"90px"} height={"35px"} text={"Filter"} />
				</div>
			</div>
		</div>
	);
};

export default PriceRange;
