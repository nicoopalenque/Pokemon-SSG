import Head from 'next/head'
import { Navbar } from '../ui';
import React from 'react'

interface Props {
  children?: React.ReactNode,
  title?: string,
};

export const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{ title ||"Pokemon App"}</title>
        <meta name="author" content="Rene Nicolas Palenque" />
        <meta name="description" content={`Informacion sobre el pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <Navbar />

      <main style={{
        padding: '0 20px'
      }}>
        { children }
      </main>
    </>
  )
}
