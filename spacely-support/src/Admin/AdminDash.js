import React from "react";
import {Pane,Tablist,Tab,Paragraph} from "evergreen-ui"

const AdminDash = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0)
    const [tabs] = React.useState(['Traits', 'Event History', 'Identities'])
    return(
        <div>
            <div>

  
    <Pane height={120}>
      <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
        {tabs.map((tab, index) => (
          <Tab
            key={tab}
            id={tab}
            onSelect={() => setSelectedIndex(index)}
            isSelected={index === selectedIndex}
            aria-controls={`panel-${tab}`}
          >
            {tab}
          </Tab>
        ))}
      </Tablist>
      <Pane padding={16} background="tint1" flex="1">
        {tabs.map((tab, index) => (
          <Pane
            key={tab}
            id={`panel-${tab}`}
            role="tabpanel"
            aria-labelledby={tab}
            aria-hidden={index !== selectedIndex}
            display={index === selectedIndex ? 'block' : 'none'}
          >
            <Paragraph>Panel {tab}</Paragraph>
          </Pane>
        ))}
      </Pane>
    </Pane>
            </div>
        </div>
    );
}


export default AdminDash;