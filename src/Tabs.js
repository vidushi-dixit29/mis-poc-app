import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography, Box} from '@mui/material';

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
      <Box sx={{ width: '100%', bgcolor: 'background.paper', display: 'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
        <Tabs value={value} onChange={handleChange}>
          {tabs.map((tab, index) => (
            <Tab label={tab.label} key={index} />
          ))}
        </Tabs>
        <Typography sx={{ marginLeft: 'auto' }}>
          All currency values are in £000.
          <br/>
          *WDV = Weighted Deal Value
        </Typography>
      </Box>
      {tabs.map((tab, index) => (
        <Panel value={value} index={index} key={index}>
          {tab.content}
        </Panel>
      ))}
    </Box>
  );
};

export default CenteredTabs;
