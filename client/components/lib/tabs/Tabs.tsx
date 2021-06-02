import TabHeading from './TabHeading';
import TabContent from './TabContent';
import { useState } from 'react';
import { ITabHeadings } from './TabHeading';
import { ITabContent } from './TabContent';


interface ITabs extends ITabHeadings, ITabContent { }


const Tabs = ({ tabNamesAndIcons, rawHtml, component }: ITabs) => {
  const [globalIndex, setglobalIndex] = useState(0)

  const setTabIndex = (index) =>
    setglobalIndex(index)




  return (
    <>
      <TabHeading
        tabNamesAndIcons={tabNamesAndIcons}
        setTabIndex={setTabIndex} />

        <div className="tab-content-container">
            <TabContent
                contentIndex={globalIndex}
                rawHtml={rawHtml}
                component={component}
            />
        </div>
      
    </>
  );
};

export default Tabs;
