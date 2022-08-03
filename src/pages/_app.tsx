import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from '../components/GlobalStyles'

function MyApp({ Component, pageProps }: AppProps) {
    // Fix until they fix this type issues in React 18
    //https://github.com/styled-components/styled-components/issues/3738
    const GlobalStyleProxy: any = GlobalStyles
    return (
        <>
            <GlobalStyleProxy />
                <Head>
                    <title>Template</title>
                </Head>
                <Component {...pageProps} />
        </>
    )
}

export default MyApp