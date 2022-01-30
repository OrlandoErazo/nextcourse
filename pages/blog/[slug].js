import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Article() {
  const router = useRouter()
  const { slug } = router.query
  return (
    <div className="container">
      <Head>
        <title>{slug}</title>        
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="This is a Next JS Course" />
      </Head>
      <h1>{slug}</h1>
      <p>
      Article description
      </p>
    </div>
  );
}
