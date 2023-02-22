import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '@/components'
import { Raleway } from '@next/font/google'

const raleway = Raleway({ subsets: ['latin']})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root{
            --raleway-font: ${raleway.style.fontFamily};
          }
        `}
      </style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
