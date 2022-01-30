import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function BlogIndex() {
  return (
    <div className="container">
      <Head>
        <title>Blog Index</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="This is a Next JS Course" />
      </Head>
      <h1>Blog Index</h1>
      <p>
        This is the blog page.
      </p>
    </div>
  );
}
