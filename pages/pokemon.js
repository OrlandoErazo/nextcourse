import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function About({data}) {
  const [state, setState] = useState({
    name: data.name,
  });
  // useEffect(() => {
  //   console.log('Component Loaded')
  //   axios.get("https://pokeapi.co/api/v2/pokemon/pikachu").then((response) => {
  //     console.log(response.data.name)
  //     setState({
  //       name : response.data.name
  //     })
  //   });
  // }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon- Next JS Course</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="This is a Next JS Course" />
      </Head>
      <h1>Pokemon</h1>
      <h2>{state.name}</h2>
      <p>This is the pokemon page.</p>
    </div>
  );
}
// STATIC SITE GENERATION
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
//   const data = await res.json();
//   // axios.get("https://pokeapi.co/api/v2/pokemon/pikachu");.then((response) => {
//   //     console.log(response.data.name)
//   //     setState({
//   //       name : response.data.name
//   //     })
//   //   });

//   // Pass data to the page via props
//   return {
//     props: {
//       data,
//     },
//   };
// }


// SERVER SIDE GENERATION
// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
