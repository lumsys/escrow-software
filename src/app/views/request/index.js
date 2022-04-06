import React, { Component } from 'react'
import { Breadcrumb } from 'app/components'
import { Card } from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

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

const Request = () =>  {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
        return (
            <div className="m-sm-30">
                <div className="mb-sm-30">
                    <Breadcrumb
                        routeSegments={[
                         
                            { name: 'Transaction Request' },
                        ]}
                    />
                </div>
                 {/* <Card className="px-6 pt-2 pb-4"> */}
                  
                 <Box sx={{ borderBottom: 1, borderColor: 'divider' }} style={{marginBottom:20}}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Orders" {...a11yProps(0)} />
                        <Tab label="Other Party" {...a11yProps(1)} />
                        <Tab label="Witness" {...a11yProps(2)} />
                        <Tab label="Agreement Document" {...a11yProps(3)} />
                        <Tab label="Message" {...a11yProps(4)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        Orders
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Other Party
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Witness
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Agreement Document
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Message
                    </TabPanel>
                     {/* </Card>  */}
            </div>
        )
}

export default Request
