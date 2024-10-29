import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import { login, logout, isSignedIn } from '../utils/near'

export default function Home() {
  const [signedIn, setSignedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const checkSignIn = async () => {
      const signedIn = await isSignedIn()
      setSignedIn(signedIn)
      if (signedIn) {
        router.push('/dashboard')
      }
    }
    checkSignIn()
  }, [router])

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            Welcome to the{' '}
            <span className="text-blue-600">
              Decentralized Reputation System
            </span>
          </h1>

          <p className="mt-3 text-2xl">
            Get started by connecting your NEAR wallet
          </p>

          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            <button
              onClick={login}
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Connect Wallet &rarr;</h3>
              <p className="mt-4 text-xl">
                Connect your NEAR wallet to view and manage your reputation.
              </p>
            </button>
          </div>
        </main>
      </div>
    </Layout>
  )
}