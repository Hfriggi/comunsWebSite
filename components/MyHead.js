import Head from 'next/head'

export default function MyHead({ title, description, image, url }) {
    return (
        <Head>
            <title>{`${title}`}</title>
            <link rel="icon" href="/images/comuns.png" />
            <meta name="description" content={description} />
            <meta property="og:title" content={title} key="title" />
            <meta property="og:description" content={description} key="description" />
            <meta property="og:image" content={image} key="image" />
            <meta property="og:url" content={url} key="url" />
        </Head>
    )
}