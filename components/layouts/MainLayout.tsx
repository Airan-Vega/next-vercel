import { FC, PropsWithChildren } from "react";
import Head from "next/head";
import { Navbar } from "../Navbar";
import styles from "./MainLayout.module.css";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Contact - Airán</title>
				<meta name="description" content="Contatc Page" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />
			<main className={styles.main}>{children}</main>
		</div>
	);
};
