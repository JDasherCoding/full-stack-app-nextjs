import Image from "next/image";
import React from "react";
import styles from "./about.module.css";

const AboutPage = () => {
	return (
		<div>
			<div className={styles.imgContainer}>
				{/* <Image src="/about.png" fill /> */}
				<Image
					src="https://images.pexels.com/photos/19543795/pexels-photo-19543795/free-photo-of-red-macaw-parrot-in-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="pexel image"
					fill
				/>
			</div>
		</div>
	);
};

export default AboutPage;
