import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
import Social from "../components/Social";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>cristian-elena.ro</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <Footer />
      <Social />
    </div>
  );
}
