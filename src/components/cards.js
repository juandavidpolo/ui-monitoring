import React from "react";

import {Badge} from 'reactstrap';

const DataCard = ({title, mainData, footer}) => {

  return(
    <div className="data--card">
      <div className="card--header">
        <div>
          {title}
        </div>
        <div>
          74%
        </div>
      </div>
      <div className="card--main">
        {mainData}
      </div>
      <div className="card--footer">
        {footer}
      </div>
    </div>
  )
}

const ListCard = ({title, items}) => {

  return(
    <div className="data--card">
      <div className="card--header">
        <div>
          {title}
        </div>
        <div>
          {}
        </div>
      </div>
      <div className="card--list">
        {items && items.length > 0 && items.map((item, i) => (
          <div key={i} className="list--items">
            <div>{item.icon}</div>
            <div>{item.name}</div>
            <div>
              <Badge color="dark">
              {item.status}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { DataCard, ListCard };