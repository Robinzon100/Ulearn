import ReactHtmlParser from 'react-html-parser';
import { ReactNode } from 'react';



export interface ITabContent {
    rawHtml?: string[],
    component?: ReactNode[],
    contentIndex?: number
}

const TabContent = ({ rawHtml, component, contentIndex }: ITabContent) => {
    return (
        <>
            {rawHtml && rawHtml[contentIndex].length >= 0 && (
                <div className="СontentReveal">
                    {ReactHtmlParser(rawHtml[contentIndex])}
                </div>
            )}
            {component && component[contentIndex] != null && (
                <>
                    {component[contentIndex]}
                </>
            )}
        </>
    )
}

export default TabContent
