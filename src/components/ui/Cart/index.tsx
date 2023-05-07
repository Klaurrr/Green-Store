import { usePlantsStore } from "@/store";

import { IPlantsState } from "@/types/IPlantsState";

import CartSvg from "@/../../public/assets/svg/CartSvg.svg";

import styles from "@/styles/components/ui/Cart.module.scss";

const Cart = () => {
	const plants = usePlantsStore((state: IPlantsState) => state?.cart);

	return (
		<div className={styles.container}>
			<CartSvg />
			<div className={styles.counter}>{plants.length}</div>
		</div>
	);
};

export default Cart;
