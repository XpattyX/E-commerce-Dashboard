import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Salereport from './SalesReport';
import Inventory from './Inventory';
import BasicTable from './Customer';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Overview from './Overview';
import BasicLineChart from './LineChart';
import Topsale from './TopSale';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 'auto' ,position:'fixed'}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Overview" {...a11yProps(0)} />
        <Tab label="SalesReport" {...a11yProps(1)} />
        <Tab label="Inventory" {...a11yProps(2)} />
        <Tab label="Customer" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>{         
        <>
          <div className='header'>
            <h1 className='header'>Overview</h1>
          </div>
          <Overview/>
          <BasicLineChart/>
          <Topsale/>
        </> }
      </TabPanel>
      <TabPanel value={value} index={1}>{         
        <>
        <div className='header'>
          <h1>Sales Report</h1>
          <TextField placeholder='Search'></TextField>
        </div>
          <Salereport/>
        </>}
      </TabPanel>
      <TabPanel value={value} index={2}>{       
        <>
        <div className='header'>
          <h1>All Product</h1>
          <div className='buttonGroup'>
            <Button variant="contained">Add</Button>
            <Button variant="outlined" >Edit</Button>
            <Button variant="contained" color="error">Delete</Button>
          </div>
        </div>
          <Inventory/>
        </> }
      </TabPanel>
      <TabPanel value={value} index={3}>{       
      <>
      <div className='header'>
        <h1>All Customer</h1>
        <TextField placeholder='Search'></TextField>
      </div>
        <BasicTable/>
      </>}
      </TabPanel>
    </Box>
  );
}