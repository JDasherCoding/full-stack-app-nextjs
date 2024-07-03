import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./home.module.css";
import Image from "next/image";

export const metadata = {};

export default function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.textContainer}>
				<h1 className={styles.title}>Creative Thoughts Agency</h1>
				<p className={styles.desc}>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
					fugiat animi velit exercitationem necessitatibus asperiores.{" "}
				</p>
				{/* Hero Buttons */}
				<div className={styles.buttons}>
					<button className={styles.button}>Learn More</button>
					<button className={styles.button}>Contact</button>
				</div>
				{/* Brands  */}
				<div className={styles.brands}>
					<Image src="/brands.png" alt="" fill className={styles.brand} />
				</div>
			</div>
			<div className={styles.imgContainer}>
				<Image src="/hero.gif" alt="" fill className={styles.heroImg} />
			</div>
		</div>
	);
}
