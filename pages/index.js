import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
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

        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  )
}
