import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <img
          src='./SALogoTransparent.png'
          alt="Social Amnesia"
          className={styles.headerLogo}
        />

        <a className={styles.headerLink} href="https://github.com/Nick-Gottschlich/Social-Amnesia/releases/latest" target="_blank">
          Download
        </a>

        <a className={styles.headerLink} href="https://github.com/sponsors/Nick-Gottschlich" target="_blank">
          Donate
        </a>

        <a className={styles.headerLink} href="https://github.com/Nick-Gottschlich/Social-Amnesia" target="_blank">
          GitHub
        </a>
      </header>

      <main className={styles.container}>
        <img
          src='./SALogoTransparent.png'
          alt="Social Amnesia"
          height="125"
        />

        <h1 className={styles.title}>
          Social Amnesia
        </h1>

        <h2 className={styles.subtitle}>
          Forget the past
        </h2>

        <div className={styles.paragraph}>
          <span>
            Social Amnesia makes sure your
          </span>
          <img
            src='./TwitterLogo.png'
            alt="Twitter"
            className={styles.twitterLogo}
          />
          <span>and</span>
          <img
            src='./RedditLogo.png'
            alt="Reddit"
            className={styles.redditLogo}
          />
          <span>accounts only show your posts from recent history, not from "that phase" 5 years ago. </span>
        </div>

        <video
          src="./SAExampleVideo.webm"
          alt="Social Amnesia example video"
          controls
          className={styles.exampleVideo}
        />

        <div className={styles.lastParagraph}>
          Want to know more? Check out the{' '}
          <a className={styles.link} href="https://github.com/Nick-Gottschlich/Social-Amnesia" target="_blank">GitHub</a>
          {' '}to contribute, download the latest release, and find out more information.
        </div>
      </main>
    </div>
  )
}
