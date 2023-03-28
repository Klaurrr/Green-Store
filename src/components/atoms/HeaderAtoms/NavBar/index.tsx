import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.scss";

const NavBar = () => {
    const router = useRouter();

    return (
        <nav className={styles.container}>
            {["Home", "Shop", "Plant Care", "Blogs"].map((item, index) => (
                <Link
                    key={index}
                    href={`/${item.replace(/\s/g, "")}`}
                    className={
                        router.pathname === `/${item.replace(/\s/g, "")}`
                            ? styles.active
                            : ""
                    }
                >
                    {item}
                </Link>
            ))}
        </nav>
    );
};

export default NavBar;
