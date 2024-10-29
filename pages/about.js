import Layout from '../components/Layout'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

export default function About() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Decentralized Reputation System</h1>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
            <CardDescription>Empowering trust in the Web3 ecosystem</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              The Decentralized Reputation System aims to create a user-owned reputation system that evaluates and records users' on-chain behaviors across multiple blockchains. By generating a score stored on-chain, we help DeFi platforms, DAOs, and NFT projects assess user reliability, fostering a more trustworthy decentralized environment.
            </p>
          </CardContent>
        </Card>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Connect your wallet to our platform</li>
              <li>We analyze your on-chain activity across multiple blockchains</li>
              <li>Our AI-powered system calculates your reputation score</li>
              <li>Your score is stored on the NEAR blockchain for transparency and security</li>
              <li>DApps and other Web3 services can use your score to provide personalized experiences</li>
            </ol>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Technology Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Frontend: Next.js and Tailwind CSS</li>
              <li>Backend: Next.js API Routes</li>
              <li>Blockchain Interaction: NEAR Protocol</li>
              <li>AI Scoring: TensorFlow.js</li>
              <li>Data Fetching: The Graph / Covalent API</li>
              <li>Decentralized Storage: IPFS / Arweave</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}