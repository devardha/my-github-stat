import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {
    const domain = 'https://mygithub-stats.now.sh/' || 'http://localhost:3000'
    const [theme, setTheme] = useState('default')

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

    useEffect(() => {

    }, [theme])

    return (
        <>
            <Head>
                <title>My GitHub Stat</title>
            </Head>
            <div className="header">
                <h1>My GitHub Stats</h1>
                <p>Monitor your GitHub accout for free.</p>
                <div className="call-to-actions">
                    <a href="https://github.com/devardha/my-github-stats"><button className="primary">GitHub</button></a>
                    <a href="https://paypal.me/ardhayudhatama"><button className="secondary">Donate</button></a>
                </div>
            </div>
            <main className="container">
                <div className="navigation">
                    <span>Theme</span>
                    <select name="theme" id="theme" onChange={(e) => setTheme(e.target.value)}>
                        <option value="default">Default</option>
                        <option value="nightowl">Night Owl</option>
                        <option value="panda">Panda</option>
                    </select>
                </div>
                <ul className="card-list">
                   {
                       designList?.map((item, index) => (
                        <li className="card" key={index}>
                            <p>{item.name}</p>
                            <code className="endpoint">{domain}{item.endpoint}&theme={theme}</code>
                            <img src={`${domain}${item.endpoint}&theme=${theme}`}/>
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
