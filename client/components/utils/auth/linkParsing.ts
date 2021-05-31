export const parseWeatherItsHttp = (link: string): string => {
    let isWithHttp = link.split('http')[0] == ''
    return  `${isWithHttp ? '':'http://'}${link}`
}