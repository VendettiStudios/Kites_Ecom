import type { AppProps } from 'next/app'
import { FC, ReactNode, useEffect } from 'react'
import './globals.css'

const Noop: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>

export default function App({ Component, pageProps }: AppProps) {
    const Layout = (Component as any).Layout || Noop
  
    useEffect(() => {
      document.body.classList?.remove('loading')
    }, [])
  
    return (
      <>
        {/* <Head /> */}
        {/* <ManagedUIContext> */}
          <Layout pageProps={pageProps}>
            <Component {...pageProps} />
          </Layout>
        {/* </ManagedUIContext> */}
      </>
    )
  }
  
