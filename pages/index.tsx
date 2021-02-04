import Head from 'next/head'

export default function Home() {
    const domain = process.env.DOMAIN || 'http://localhost:3000'

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
                   <li className="card">
                       <p>Default GitHub Statistic</p>
                       <code className="endpoint">{domain}/api/stats/devardha/languages?type=default</code>
                       <img src={`${domain}/api/stats/devardha/languages?type=default`}/>
                   </li>
               </ul>
            </main>
            <footer>
                <p>Dibuat dengan penuh cinta oleh devardha</p>
            </footer>
        </>
    )
}
