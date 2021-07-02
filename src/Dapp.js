import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dappie from "./components/Dappie";
import  GetData  from './components/GetData';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const Dapp = () => {
  return (
    <Tabs isFitted variant="enclosed" colorScheme="teal">
      <TabList mb="1em">
        <Tab>Immortalize</Tab>
        <Tab>Consult Data</Tab>
      </TabList>
      <TabPanels>
          <TabPanel>
            <Header />
            <Dappie />
            <Footer />
          </TabPanel>
          <TabPanel>
            <Header />
            <GetData /> 
            <Footer />
          </TabPanel>
        
      </TabPanels>
    </Tabs>
  );
};

export default Dapp;
