
import Icon from "components/lib/Icon/Icon";
import {  useState } from 'react';



export interface ITabHeadings {
    tabNamesAndIcons: {
        title: string,
        icon: {
            name: string,
            color?: string,
            strokeWidth?: number,
            size?: number,
            fill?: string,
            stroke?: string
        }
    }[],
    setTabIndex?: number | any;
}





const TabHeading = ({ tabNamesAndIcons, setTabIndex }: ITabHeadings) => {
    const [localIndex, setLocalIndex] = useState(0)


    return (
        <>
            <nav className="tabs-heading">
                <ul className="tabs-heading--list">
                    {tabNamesAndIcons.map((tab, i) => (
                        <li
                            className="tabs-heading--list__item noselect  Tab"
                            onClick={() => {
                                setTabIndex(i)
                                setLocalIndex(i)
                            }}
                            key={i}
                            data-active={localIndex == i}
                            style={{
                                borderBottom: `3px solid ${tab.icon.stroke}`,
                                boxShadow: `${tab.icon.stroke} 0px -7px 10px -10px inset`
                            }}>
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