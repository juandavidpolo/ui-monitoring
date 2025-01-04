import React from "react";

import {Badge} from 'reactstrap';

import { secondary } from "src/utils/getDefinedStyles";

const DataCard = ({title, mainData, footer}) => {

  return(
    <div className="data--card">
      <div className="card--header">
        <div>
          <h3>{title}</h3>
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
    <div className="list--card">
      <div className="card--header">
        <div>
        <h3>{title}</h3>
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
              <Badge color={secondary().key}>
              {item.status}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const InterfaceConfigration = ({title, items}) => {
  return(
    <div className="interface--card">
      <div className="card--header">
        <div>
        <h3>{title}</h3>
        </div>
        <div>
          <button
            type="button"
            className="custom--button ligth--button">
            Add Interface
          </button>
        </div>
      </div>
      <div className="interface--list">
        {items && items.length > 0 && items.map((item, i) => (
          <div key={i} className="list--items">
            <div>
              <div>
                <h5>
                  {item.name}
                </h5>
              </div>
              <div>
                <button
                  type="button"
                  className="custom--button ligth--button">
                  Edit
                </button>
                <button
                  type="button"
                  className="custom--button ligth--button">
                  Delete
                </button>
              </div>
            </div>
            <div>
              <div>
                <div>{`IP Address: ${item.ipAddress}`}</div>
                <div>{`MTU: ${item.mtu}`}</div>
              </div>
              <div>
                <div>{`Status: ${item.status}`}</div>
                <div>{`Speed: ${item.speed}`}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { DataCard, ListCard, InterfaceConfigration };