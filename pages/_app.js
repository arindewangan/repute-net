import { useEffect, useState } from 'react'
import { initNear } from '../utils/near'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [nearContext, setNearContext] = useState(null)

  useEffect(() => {
    initNear()
      .then(setNearContext)
      .catch(console.error)
  }, [])

  return <Component {...pageProps} nearContext={nearContext} />
}

export default MyApp