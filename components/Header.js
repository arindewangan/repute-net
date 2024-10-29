import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { isSignedIn, login, logout } from '../utils/near'

export default function Header({ nearContext }) {
  const [signedIn, setSignedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const checkSignIn = async () => {
      if (nearContext) {
        const signedIn = await isSignedIn(nearContext.walletConnection)
        setSignedIn(signedIn)
      }
    }
    checkSignIn()
  }, [nearContext])

  const handleAuth = async () => {
    if (!nearContext) return

    if (signedIn) {
      await logout(nearContext.walletConnection)
      setSignedIn(false)
      router.push('/')
    } else {
      await login(nearContext.walletConnection)
    }
  }

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">Decentralized Reputation System</span>
              <img
                className="h-10 w-auto"
                src="/logo.png"
                alt="Logo"
              />
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Home
              </Link>
              {signedIn && (
                <Link href="/dashboard" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Dashboard
                </Link>
              )}
              <Link href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
                About
              </Link>
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <button
              onClick={handleAuth}
              className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
            >
              {signedIn ? 'Disconnect Wallet' : 'Connect Wallet'}
            </button>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Home
          </Link>
          {signedIn && (
            <Link href="/dashboard" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Dashboard
            </Link>
          )}
          <Link href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
            About
          </Link>
        </div>
      </nav>
    </header>
  )
}