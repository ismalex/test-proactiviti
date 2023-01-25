import { Box, Tab, Tabs } from '@mui/material'
import React from 'react'

export default function TabsHeader() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    }
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: "white"
            }
          }}
        >
          <Tab  label="Search" {...a11yProps(0)} disableRipple />
          <Tab label="Account" {...a11yProps(1)} disableRipple />
          <Tab label="Map" {...a11yProps(2)} disableRipple />
          <Tab label="Log & Notify" {...a11yProps(3)} disableRipple />
          <Tab label="Tickets" {...a11yProps(4)} disableRipple />
        </Tabs>
      </Box>
      {/* <TabPanel value={value} index={0}>
  Item One
</TabPanel>
<TabPanel value={value} index={1}>
  Item Two
</TabPanel>
<TabPanel value={value} index={2}>
  Item Three
</TabPanel> */}
    </Box>
  )
}
