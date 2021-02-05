import Head from 'next/head'

export default function Home() {
    const domain = process.env.DOMAIN || 'http://localhost:3000'

    const designList = [
        {
            name: 'Default Language Stats',
            endpoint: '/api/stats/devardha/languages?type=default',
        },
        {
            name: 'Compact Language Stats',
            endpoint: '/api/stats/devardha/languages?type=compact',
        }
    ]

    return (
        <>
            <Head>
                <title>My GitHub Stat</title>
            </Head>
            <div className="header">
                <h1>My GitHub Stats</h1>
                <p>Monitor your GitHub accout for free.</p>
                <div className="call-to-actions">
                    <a href="https://github.com/devardha"><button className="primary">GitHub</button></a>
                    <a href="https://paypal.me/ardhayudhatama"><button className="secondary">Donate</button></a>
                </div>
            </div>
            <main className="container">
               <ul className="card-list">
                   {
                       designList?.map((item, index) => (
                        <li className="card">
                            <p>{item.name}</p>
                            <code className="endpoint">{domain}{item.endpoint}</code>
                            <img src={`${domain}${item.endpoint}`}/>
                        </li>
                       ))
                   }
               </ul>
            </main>
            <footer>
                <p>Made with ❤️ by devardha</p>
            </footer>
        </>
    )
}
