interface ITabs {
  iconsToRender?: any;
  tabsToRender?: any;
  contentTofetch?: any;
  setTabIndex?: number | any;
  setTabContent?: any;
}

const Tabs = ({
  iconsToRender,
  tabsToRender,
  contentTofetch,
  setTabIndex,
  setTabContent,
}: ITabs) => {
  return (

    <>
      <nav>
        <ul className="Tabs">
          {tabsToRender.map((courseTab, i) => (
            <li
              style={{ cursor: "pointer" }}
              className="Tabs--item noselect  Tab"
              onClick={() => {
                setTabContent(contentTofetch(courseTab.route));
                setTabIndex(i);
              }}
              key={courseTab.id}
            >
              <div className="rendered_icon">
                {iconsToRender(courseTab.iconComponent)}
              </div>
              <div className="rendered_title">
                <p className="f-size-p5">{courseTab.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </>
    
  );
};

export default Tabs;
