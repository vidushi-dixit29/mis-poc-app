import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const CenteredTabs = ({ tabs }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Panel = (props) => (
    <div hidden={props.value !== props.index}>
      {props.children}
    </div>
  );

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange}>
        {tabs.map((tab, index) => (
          <Tab label={tab.label} key={index} />
        ))}
      </Tabs>
      {tabs.map((tab, index) => (
        <Panel value={value} index={index} key={index}>
          {tab.content}
        </Panel>
      ))}
    </Box>
  );
};

export default CenteredTabs;
