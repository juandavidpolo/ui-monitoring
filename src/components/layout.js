import React from "react";
const Layout = ({children}) => {

  return(
    <div className="custom--layout">
      <div>main Layout</div>
      {children}
    </div>
  )
}

export default Layout;