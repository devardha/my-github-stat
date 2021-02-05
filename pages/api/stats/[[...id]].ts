import { languageStatCompact, languageStatDefault } from '../../../utils/top-languages'
import { topLanguagesQuery } from '../../../graphql/queries'
import { request } from '../../../utils/request'

export default async function(req, res){
    const params = req.query.id
    const type = req.query.type
    const theme = req.query.theme

    const username = params[0]
    const api = params[1]

    try {
        const response = await request(topLanguagesQuery(username))

        const results = response.data.data.user.repositories.nodes
        const langs: object[] = [];

        results.map((repo: any): any  => {
            const usedLanguages = repo.languages.edges;

            usedLanguages.map((usedLang: any): any => {
                const langObject = {
                    languageName: usedLang.node.name,
                    languageSize: usedLang.size,
                    languageColor: usedLang.node.color
                }

                langs.push(langObject)
            })
        })

        const holder: any = {};

        interface LanguageInterface {
            languageName: string,
            languageSize: number,
            languageColor: string,
        }

        // language color wrapper
        const langColor: any = {}

        langs.forEach((x: LanguageInterface) => {
            if(holder.hasOwnProperty(x.languageName)){
                holder[x.languageName] = holder[x.languageName] + x.languageSize;
                langColor[x.languageName] = x.languageColor
            }else{
                holder[x.languageName] = x.languageSize;
                langColor[x.languageName] = x.languageColor
            }
        })

        const calculatedLang: object[] = [];

        for (const prop in holder) {
            if (holder.hasOwnProperty(prop)) {
                calculatedLang.push({ languageName: prop, languageSize: holder[prop] });
            }

        }

        const compare = ( a: any, b: any ) => {
            if ( a.languageSize < b.languageSize ){
              return 1;
            }
            if ( a.languageSize > b.languageSize ){
              return -1;
            }
            return 0;
        }

        const sortedAndFiltered = calculatedLang.sort(compare)

        // calculating total languages size
        const totalSum = sortedAndFiltered
        .map((lang: LanguageInterface) => lang.languageSize )
        .reduce((previousItem, currentItem) => previousItem + currentItem, 0)

        const arrayWithPercentage: object[] = []
        sortedAndFiltered.map((lang: LanguageInterface) => {
            const newLangObject = {
                languageName: lang.languageName,
                languageSize: lang.languageSize,
                languageColor: lang.languageColor,
                languagePercentage: (lang.languageSize / totalSum * 100).toFixed(2),
            }
            arrayWithPercentage.push(newLangObject)
        })

        const finalArray = arrayWithPercentage.filter((x: any) => parseFloat(x.languagePercentage) > 0 )

        const getType = (type) => {
            switch (type) {
                case 'default':
                    return languageStatDefault(finalArray, langColor, theme)
                case 'compact':
                    return languageStatCompact(finalArray, langColor, theme)
                default:
                    return languageStatDefault(finalArray, langColor, theme)
            }
        }

        const svg = getType(type)

        res.setHeader('Content-Type', 'image/svg+xml')
        res.send(svg)
    } catch (error) {
        res.json({msg: "Error"})
    }
}