
import Icon from "components/lib/Icon/Icon";



export interface ITabHeadings {
    tabNamesAndIcons: {
        title: string,
        icon: {
            name: string,
            color?: string,
            strokeWidth?: number,
            size?: number,
            fill?: string,
        }
    }[],
    setTabIndex?: number | any;
}





const TabHeading = ({ tabNamesAndIcons, setTabIndex }: ITabHeadings) => {
    return (
        <>
            <nav>
                <ul className="Tabs">
                    {tabNamesAndIcons.map((tab, i) => (
                        <li
                            className="Tabs--item noselect  Tab"
                            onClick={() => setTabIndex(i)}
                            key={i}>
                            <div className="rendered_icon">
                                <Icon
                                    name={tab.icon.name}
                                    color={`var(--${tab.icon.color})`}
                                    fill={`var(--${tab.icon.fill})`}
                                    strokeWidth={tab.icon.strokeWidth}
                                    size={tab.icon.size}
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