import React from "react";
import Head from "next/head";
import Link from "next/link";
//import Header from "./header";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Layout.module.css";
import Image from "next/image";

export default function Layout({ children, title, description, home, name }) {
  console.log(home)

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/img/1.jpg"
              className={utilStyles.borderCircle}
              height={600}
              width={600}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/img/2.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <nav>
        <Link href="/">
          Inicio |
        </Link>
        <Link href="/blog">
          Blog | 
        </Link>
        <Link href="/contact">
          Contacto |
        </Link>
        <Link href="/about">
          About
        </Link>
      </nav>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
      <footer>footer</footer>
    </div>
  );
}

Layout.defaultProps = {
  title: "Mi sitio web",
  description: "Descripcion por Defecto",
};
