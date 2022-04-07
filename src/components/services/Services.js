import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Services = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Haircut" {...a11yProps(0)} />
          <Tab label="Tinsel" {...a11yProps(1)} />
          <Tab label="Feather" {...a11yProps(2)} />
          <Tab label="Foil" {...a11yProps(3)} />
          <Tab label="Streak" {...a11yProps(4)} />
          <Tab label="Manicure" {...a11yProps(5)} />
          <Tab label="Makeup" {...a11yProps(6)} />
          <Tab label="Mermaid Party" {...a11yProps(7)} />
          <Tab label="Pirate Party" {...a11yProps(8)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        $20 Haircut includes a shampoo, blowdry and style
      </TabPanel>
      <TabPanel value={value} index={1}>
        $3 per tinsel string hand tied into hair to create a mermaid like glisten in the sun
      </TabPanel>
      <TabPanel value={value} index={2}>
        $5 per feather hand tied in the hair giving any style a hip new look
      </TabPanel>
      <TabPanel value={value} index={3}>
        $6 per color foil adding a bright multi demision look to your mermaid 
      </TabPanel>
      <TabPanel value={value} index={4}>
        $6 per hand painted color streak adding a bright muti dension look to you mermaid style
      </TabPanel>
      <TabPanel value={value} index={5}>
        $10 get papmered with freshly painted nails
      </TabPanel>
      <TabPanel value={value} index={6}>
        $10 complete your look with a makeup makeover
      </TabPanel>
      <TabPanel value={value} index={7}>
        $25 per child (5 child limit) Expirence the magic of underwater, dressing as the mermaids do. 2 strands of hair tinsel and manicure or makeup included with mini photoshoot. (For allergy reasons please provide your own snacks and beverages) Party themes can be combined for co-ed parties.
      </TabPanel>
      <TabPanel value={value} index={8}>
        $25 per child (5 child limit) Expirence the adventure of the pirate life! dress up face paint and a color streak included in a mini photo shoot. (for allergy reasons please bring your own snacks and beverages)Party themes can be combinde for co-ed parties.
      </TabPanel>
    </Box>
  );
}

export default Services;