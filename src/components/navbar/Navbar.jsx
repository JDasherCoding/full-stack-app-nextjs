import React from "react";
import Links from "./links/Links";
import styles from "./styles.module.css";
const Navbar = () => {
	return (
		<div className={styles.container}>
			<div>Logo</div>
			<div>
				<Links />
			</div>
		</div>
	);
};

export default Navbar;