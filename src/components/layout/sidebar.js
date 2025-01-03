import React, {useState} from "react";

import SearchInput from "src/components/searchInput";

import { Badge } from "reactstrap";

const Sidebar = () => {

  const [clients, setClients] = useState([
    {
      id: 1,
      name: "client 1",
      status: "Offline"
    },
    {
      id: 2,
      name: "client 2",
      status: "Inactive"
    },
    {
      id: 3,
      name: "client 3",
      status: "Active"
    }
  ]);

  return(
    <div className="custom--sidebar">
      <div>
        <SearchInput/>
      </div>
      {clients && clients.length > 0 && clients.map((item, i) => (
        <div className="sidebar--item" key={i}>
          <span>{item.name}</span>
          <Badge className="sidebar--badge" color="none">{item.status}</Badge>
        </div>
      ))}
    </div>
  )
}

export default Sidebar