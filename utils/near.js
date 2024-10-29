import { connect, Contract, keyStores, WalletConnection } from 'near-api-js'
import getConfig from './config'

const nearConfig = getConfig(process.env.NODE_ENV || 'development')

export async function initNear() {
  // Initialize connection to the NEAR testnet
  const near = await connect(Object.assign({ deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } }, nearConfig))

  // Initializing Wallet based Account
  const walletConnection = new WalletConnection(near)

  // Initializing our contract APIs by contract name and configuration
  const contract = new Contract(
    walletConnection.account(),
    nearConfig.contractName,
    {
      viewMethods: ['getReputationScore'],
      changeMethods: ['setReputationScore'],
    }
  )

  return { near, walletConnection, contract }
}

export async function logout(walletConnection) {
  if (walletConnection) {
    walletConnection.signOut()
    // reload page
    window.location.replace(window.location.origin + window.location.pathname)
  } else {
    console.error("Wallet connection not initialized")
  }
}

export async function login(walletConnection) {
  if (walletConnection) {
    walletConnection.requestSignIn({
      contractId: nearConfig.contractName,
      methodNames: ['getReputationScore', 'setReputationScore']
    })
  } else {
    console.error("Wallet connection not initialized")
  }
}

export async function getAccountId(walletConnection) {
  if (walletConnection) {
    return walletConnection.getAccountId()
  }
  return null
}

export async function getReputationScore(contract, accountId) {
  if (contract) {
    try {
      let score = await contract.getReputationScore({ accountId })
      return score
    } catch (e) {
      console.error("Error getting reputation score:", e)
      return null
    }
  }
  console.error("Contract not initialized")
  return null
}

export async function setReputationScore(contract, accountId, score) {
  if (contract) {
    try {
      await contract.setReputationScore({ accountId, score })
    } catch (e) {
      console.error("Error setting reputation score:", e)
    }
  } else {
    console.error("Contract not initialized")
  }
}

export async function isSignedIn(walletConnection) {
  return walletConnection && walletConnection.isSignedIn()
}