import React, {useState} from "react";

import { Row } from "reactstrap";
import { useLocation } from 'react-router-dom';

import Sidebar from "src/components/layout/sidebar";
import CustomModal from "src/components/customModal";
import ViewHeader from "src/components/viewHeader";
import { DataCard, ListCard } from "src/components/cards";
import { warning, danger } from "src/utils/getDefinedStyles";

import {
  database,
  server,
  cloud,
  triangleExclamation,
  circleExclamation
} from "src/assets/svg";

const Monitor = () => {

  const [services, setServices] = useState([
    {
      name:"Web Server",
      icon:server(),
      status:"Running"
    },
    {
      name:"Database",
      icon:database(),
      status:"Running"
    },
    {
      name:"Cloud Storage",
      icon:cloud(),
      status:"Running"
    }
  ])

  const [alerts, setAlerts] = useState([
    {
      name:"High CPU usage",
      icon:triangleExclamation(warning().value),
      status:"Warning"
    },
    {
      name:"System Update",
      icon:circleExclamation(danger().value),
      status:"Info"
    }
  ])

  let title = useLocation().pathname.replace("/","");
  title = title.charAt(0).toUpperCase() + title.slice(1);
  let subTitle = "Device IP: 192.168.0.1"
  const headerButtons = [
    {
      label: "Save Configuration",
      action: () => {console.log("button 1 action")},
      design: "dark"
    }
  ]
  
  return(
    <>
      <Sidebar/>
      <div className="main--section configure--view">
        <Row className="custom--row">
          <ViewHeader title={title} subTitle={subTitle} buttons={headerButtons}/>
        </Row>
        <Row className="custom--row">
          <DataCard
            title="System health"
            mainData="74%"
            footer="12% increase from las week"/>
          <DataCard
            title="Active Users"
            mainData="34%"
            footer="32% increase from yesterday"/>
          <DataCard
            title="Server Load"
            mainData="24%"
            footer="22% increase from peak hours"/>
        </Row>
        <Row className="custom--row">
          <ListCard 
            title="Active Services"
            items={services}/>
          <ListCard
            title="Recent Alerts"
            items={alerts}/>
        </Row>
      </div>
    </>
  )
}

export default Monitor