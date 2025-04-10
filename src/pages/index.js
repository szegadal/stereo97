import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <link rel="icon" href="/images/favicon/favicon.png" />
      </Head>
    </Layout>
  )
}