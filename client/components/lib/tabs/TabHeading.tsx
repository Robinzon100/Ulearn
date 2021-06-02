
import Icon from "components/lib/Icon/Icon";
import { useEffect } from "react";

import { changeTabPositionAndColor } from "components/pages/myCourse/course_tabs/utils/Underline";


export interface ITabHeadings {
    tabNamesAndIcons: {
        title: string,
        icon: {
            name: string,
            color?: string,
            strokeWidth?: number,
            size?: number,
            fill?: string,
            stroke?:string
        }
    }[],
    setTabIndex?: number | any;
}





const TabHeading = ({ tabNamesAndIcons, setTabIndex }: ITabHeadings) => {

    useEffect(() => {
        changeTabPositionAndColor();
    }, [])

    return (
        <>
            <nav className="tabs-heading">
                <ul className="tabs-heading--list">
                    {tabNamesAndIcons.map((tab, i) => (
                        <li
                            className="tabs-heading--list__item noselect  Tab"
                            onClick={() => setTabIndex(i)}
                            key={i}>
                            <div className="rendered_icon">
                                <Icon
                                    name={tab.icon.name}
                                    color={tab.icon.color}
                                    fill={tab.icon.fill}
                                    strokeWidth={tab.icon.strokeWidth}
                                    size={tab.icon.size}
                                    stroke={tab.icon.stroke}
                                />
                            </div>
                            <div className="rendered_title">
                                <p className="f-size-p5">{tab.title}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}


export default TabHeading