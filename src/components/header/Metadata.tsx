import Head from "next/head";
import type { FC } from "react";


const Metadata: FC = () => {
    return(
        <>
        <Head>
            <title>first app</title>
            <meta name="description" content="this an app to learn t3 stack" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        </>
    )
}

export default Metadata;