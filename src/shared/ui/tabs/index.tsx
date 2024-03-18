import { useState } from "react";

import "./style.scss"

interface TabData {
   title: string,
   content: JSX.Element
}

interface TabsProps {
  tabsData: Array<TabData>,
  className?: string
}

const Tabs = ({tabsData, className=""}:TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className={`${className} tabs`}>
      <div className="tabs-links">
        {
          tabsData.map((tabData, index) => (
            <button 
              className={`tab-link ${index === selectedTab ? "active" : ""}`}
              style={{width: `${100 / tabsData.length}%`}} 
              onClick={() => setSelectedTab(index)}
              type="button"
            >
              {tabData.title}
            </button>
          ))
        }
      </div>
      <div className="tabs-content">
        {tabsData[selectedTab].content}
      </div>
    </div>
  )
}

export default Tabs