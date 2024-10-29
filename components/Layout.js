import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, nearContext }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Decentralized Reputation System</title>
        <meta name="description" content="AI-Powered Reputation System for Web3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header nearContext={nearContext} />

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <Footer />
    </div>
  )
}