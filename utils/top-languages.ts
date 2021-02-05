import { getTheme } from './themes'

export const languageStatDefault = (languages: object[], colors: any, theme: string) => {
    const langs: any = languages.slice(0, 5)
    const design = getTheme(theme)

    const svg =`<svg
    width="300"
    height="285"
    viewBox="0 0 300 285"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
    <style>
        .header {
            font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
            fill: ${design.textPrimary};
            animation: fadeInAnimation 0.8s ease-in-out forwards;
        }
        .lang-name { font: 400 11px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${design.textSecondary} }
    </style>
    <rect
      data-testid="card-bg"
      x="0.5"
      y="0.5"
      rx="4.5"
      height="99%"
      stroke="${design.stroke}"
      width="299"
      fill="${design.background}"
      stroke-opacity="1"
    />
    <g data-testid="card-title" transform="translate(25, 35)">
        <g transform="translate(0, 0)">
            <text
            x="0"
            y="0"
            class="header"
            data-testid="header"
            >
                Most Used Languages
            </text>
        </g>
    </g>
    <g data-testid="main-card-body" transform="translate(0, 55)">
    <svg data-testid="lang-items" x="25">
    ${
        langs.map((lang: any, index: number) => {
            const translateY = [0, 40, 80, 120, 160]
            return(`
                <g transform="translate(0, ${translateY[index]})">
                    <text data-testid="lang-name" x="2" y="15" class="lang-name">${lang.languageName}</text>
                    <text x="215" y="34" class="lang-name">${lang.languagePercentage}%</text>
                    <svg width="205" x="0" y="25">
                        <rect rx="5" ry="5" x="0" y="0" width="205" height="8" fill="#ddd"></rect>
                        <rect
                        height="8"
                        fill="${colors[lang.languageName]}"
                        rx="5" ry="5" x="0" y="0"
                        data-testid="lang-progress"
                        width="${Math.round(lang.languagePercentage)}%"
                        >
                        </rect>
                    </svg>
                </g>
            `)
        })
    }
    </svg>
    </g>
    </svg>`

    return svg
}

export const languageStatCompact = (languages: object[], colors: any, theme: string) => {
    const langs: any = languages.slice(0, 5)
    const design = getTheme(theme)

    const svg = `
    <svg
        width="350"
        height="165"
        viewBox="0 0 350 165"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <style>
        .header {
            font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
            fill: ${design.textPrimary};
            animation: fadeInAnimation 0.8s ease-in-out forwards;
        }
        
        .lang-name { font: 400 11px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${design.textSecondary} }

        /* Animations */
        @keyframes scaleInAnimation {
            from {
                transform: translate(-5px, 5px) scale(0);
            }
            to {
                transform: translate(-5px, 5px) scale(1);
            }
        }
        @keyframes fadeInAnimation {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        * { animation-duration: 0s !important; animation-delay: 0s !important; }
        </style>

        <rect
            data-testid="card-bg"
            x="0.5"
            y="0.5"
            rx="4.5"
            height="99%"
            stroke="${design.stroke}"
            width="349"
            fill="${design.background}"
            stroke-opacity="1"
        />
            <g data-testid="card-title" transform="translate(25, 35)">
                <g transform="translate(0, 0)">
                    <text x="0" y="0" class="header" data-testid="header">Most Used Languages</text>
                </g>
            </g>

            <g data-testid="main-card-body" transform="translate(0, 55)">
                <svg data-testid="lang-items" x="25">
                <mask id="rect-mask">
                    <rect x="0" y="0" width="300" height="8" fill="white" rx="5" />
                </mask>
                <rect
                    mask="url(#rect-mask)" 
                    data-testid="lang-progress"
                    x="0" 
                    y="0"
                    width="${langs[0].languagePercentage * 349}" 
                    height="8"
                    fill="${colors[langs[0].languageName]}"
                />
                <rect
                    mask="url(#rect-mask)" 
                    data-testid="lang-progress"
                    x="232.65" 
                    y="0"
                    width="${langs[1].languagePercentage * 349}" 
                    height="8"
                    fill="${colors[langs[1].languageName]}"
                />
                <rect
                    mask="url(#rect-mask)" 
                    data-testid="lang-progress"
                    x="268.88" 
                    y="0"
                    width="${langs[2].languagePercentage * 349}" 
                    height="8"
                    fill="${colors[langs[2].languageName]}"
                />
                <rect
                    mask="url(#rect-mask)" 
                    data-testid="lang-progress"
                    x="288.82" 
                    y="0"
                    width="${langs[3].languagePercentage * 349}" 
                    height="8"
                    fill="${colors[langs[3].languageName]}"
                />
                <rect
                    mask="url(#rect-mask)" 
                    data-testid="lang-progress"
                    x="298.7" 
                    y="0"
                    width="${langs[4].languagePercentage * 349}" 
                    height="8"
                    fill="${colors[langs[4].languageName]}"
                />
                <g transform="translate(0, 25)">
                    <circle cx="5" cy="6" r="5" fill="${colors[langs[0].languageName]}" />
                    <text data-testid="lang-name" x="15" y="10" class='lang-name'>${langs[0].languageName} ${langs[0].languagePercentage}%</text>
                </g>
                <g transform="translate(150, 25)">
                    <circle cx="5" cy="6" r="5" fill="${colors[langs[1].languageName]}" />
                    <text data-testid="lang-name" x="15" y="10" class='lang-name'>${langs[1].languageName} ${langs[1].languagePercentage}%</text>
                </g>
                <g transform="translate(0, 50)">
                    <circle cx="5" cy="6" r="5" fill="${colors[langs[2].languageName]}" />
                    <text data-testid="lang-name" x="15" y="10" class='lang-name'>${langs[2].languageName} ${langs[2].languagePercentage}%</text>
                </g>
                <g transform="translate(150, 50)">
                    <circle cx="5" cy="6" r="5" fill="${colors[langs[3].languageName]}" />
                    <text data-testid="lang-name" x="15" y="10" class='lang-name'>${langs[3].languageName} ${langs[3].languagePercentage}%</text>
                </g>
                <g transform="translate(0, 75)">
                    <circle cx="5" cy="6" r="5" fill="${colors[langs[4].languageName]}" />
                    <text data-testid="lang-name" x="15" y="10" class='lang-name'>${langs[4].languageName} ${langs[4].languagePercentage}%</text>
                </g>
            </svg>
        </g>
    </svg>
    `

    return svg
}