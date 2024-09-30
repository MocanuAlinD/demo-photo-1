import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Social from "../components/Social"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>cristian-elena.ro</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Cantata+One&family=Cinzel:wght@400;500&family=Elsie+Swash+Caps&family=Hammersmith+One&family=Indie+Flower&family=Josefin+Slab:wght@500&family=Montserrat:ital,wght@0,200;0,300;0,500;0,900;1,200;1,300;1,500;1,900&family=Poppins:ital,wght@0,200;0,400;0,600;0,900;1,200;1,400;1,600;1,900&family=Raleway:ital,wght@0,300;0,500;0,900;1,200&family=Special+Elite&display=swap"
              rel="stylesheet" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
            <script src="https://kit.fontawesome.com/cbb96f47ca.js" crossorigin="anonymous"></script>
        </Head>
          <Navbar />
          <Footer />
          <Social />
      </div>
        )
}
