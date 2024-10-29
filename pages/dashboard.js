import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import { logout, getAccountId, getReputationScore } from '../utils/near'

export default function Dashboard() {
  const [accountId, setAccountId] = useState('')
  const [reputationScore, setReputationScore] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      const account = await getAccountId()
      if (!account) {
        router.push('/')
        return
      }
      setAccountId(account)
      const score = await getReputationScore(account)
      setReputationScore(score)
    }
    fetchData()
  }, [router])

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-4xl font-bold mb-5">Your Dashboard</h1>
          <p className="text-xl mb-5">Welcome, {accountId}</p>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-4">Your Reputation Score</h2>
            {reputationScore !== null ? (
              <p className="text-6xl font-bold text-blue-600">{reputationScore}</p>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Disconnect Wallet
          </button>
        </main>
      </div>
    </Layout>
  )
}