"use client";
import React from "react";
import { useState } from "react";

import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

const Links = () => {
	const links = [
		{ title: "Homepage", path: "/" },
		{ title: "About", path: "/about" },
		{ title: "Contact", path: "/contact" },
		{ title: "Blog", path: "/blog" },
	];

	const [open, setOpen] = useState(true);
	// Temporary
	const session = true;
	const isAdmin = false;
	return (
		<div className={styles.container}>
			{/* Desktop Navigation  */}
			<div className={styles.links}>
				{links.map((link) => (
					<NavLink item={link} key={link.title} />
				))}
				{session ? (
					<>
						{isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
						<button className={styles.logout}>Logout</button>
					</>
				) : (
					<NavLink item={{ title: "Login", path: "/login" }} />
				)}
			</div>
			{/* Mobile Navigation */}
			<button
				className={styles.menuButton}
				onClick={() => setOpen((prev) => !prev)}
			>
				Menu
			</button>
			{open && (
				<div className={styles.mobileLinks}>
					{links.map((link) => (
						<NavLink item={link} key={link.title} />
					))}
				</div>
			)}
		</div>
	);
};

export default Links;
