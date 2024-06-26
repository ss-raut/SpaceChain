import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react';

function SubmitInfo() {
  window.location.href = '/Welcome';
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SpaceChain</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Login
        </h1>


        <div style={{paddingTop: "100px"}}>
         <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.12)',
           borderColor: "#eaeaea", borderStyle: "solid", borderRadius: '25px',
           padding: "30px"}}>
           <div className={styles.grid} style={{paddingBottom: "30px"}}>
           <label className={styles.stext}>Username:</label>
           <input type = "text" id="t1" className={styles.text}></input>
           </div>
        
           <div className={styles.grid} style={{paddingBottom: "30px"}}>
           <label className={styles.stext}>Password:</label>
           <input type = "text" id="t1" className={styles.text}></input>
           </div>
           <button className={styles.button} onClick={SubmitInfo}> Submit </button>
         </div>
        </div>

      </main>

      <footer className={styles.footer}>
        <h3>Team SpaceChain</h3>
      </footer>
    </div>
  )
}