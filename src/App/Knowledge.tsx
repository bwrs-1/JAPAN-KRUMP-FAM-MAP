import { Box, Tab, Tabs, Typography } from "@material-ui/core";
import React from "react";
import "./AboutUs.scss";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
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

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Content = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="about-us">
      <div className="container">
        <h1>Coming Soonn..</h1>
        {/* <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Stomp" {...a11yProps(0)} />
            <Tab label="Chest Pop" {...a11yProps(1)} />
            <Tab label="Arm Swing" {...a11yProps(2)} />
            <Tab label="Jab" {...a11yProps(3)} />
            <Tab label="SWIP" {...a11yProps(4)} />
            <Tab label="ARM placement" {...a11yProps(5)} />
            <Tab label="GET OFF" {...a11yProps(6)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
        Item Two
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item 3
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item 4
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item 5
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item 6
        </TabPanel> */}
      </div>
    </div>
  );
};

export default Content;
