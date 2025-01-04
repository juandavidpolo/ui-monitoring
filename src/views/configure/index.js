import React, {useState} from "react";

import { Row } from "reactstrap";
import { useLocation } from 'react-router-dom';

import Sidebar from "src/components/layout/sidebar";
import ViewHeader from "src/components/viewHeader";
import {InterfaceConfigration} from "src/components/cards";

const Configure = () => {

  let title = useLocation().pathname.replace("/","");
  title = title.charAt(0).toUpperCase() + title.slice(1);
  let subTitle = "Last updated: Just Now"
  const headerButtons = [
    {
      label: "Export Data",
      action: () => {console.log("button 1 action")},
      design: "dark"
    },
    {
      label: "Client Settings",
      action: () => {console.log("button 2 action")},
      design: "ligth"
    }
  ]

  const [interfaces, setIntefaces] = useState([
      {
        id:"1",
        name:"Web Server",
        ipAddress:"192.168.0.1",
        status:"Up",
        mtu:"1500",
        speed:"1000Mbps"
      },
      {
        id:"2",
        name:"Web Server 2",
        ipAddress:"192.168.0.1",
        status:"Up",
        mtu:"1500",
        speed:"1000Mbps"
      }
    ])

  return(
    <>
      <Sidebar/>
      <div className="main--section configure--view">
        <Row className="custom--row">
          <ViewHeader title={title} subTitle={subTitle} buttons={headerButtons}/>
        </Row>
        <Row className="custom--row">
          <InterfaceConfigration
            title="Interface Configuration"
            items={interfaces}
          />
        </Row>
      </div>
    </>
  )
}

export default Configure