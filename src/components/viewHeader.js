import React from "react";

const ViewHeader = ({title="title", subTitle="subtitle", buttons}) => {
  return(
    <div className="view--header">
      <div className="header--info">
        <h1>{title}</h1>
        <span>{subTitle}</span>
      </div>
      <div className="header--buttons">
        {(buttons && buttons.length > 0 && buttons.map((button, i) => (
          <button key={i}
            type="button"
            className={`custom--button ${button.design}--button`}
            onClick={()=>{button.action()}}>
            {button.label}
          </button>
        )))}
      </div>
    </div>
  )
}

export default ViewHeader;