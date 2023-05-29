/* eslint-disable react/prop-types */
import React from 'react'

const DropDown = ({subItems, children}) => {
  return (
    <div className="dropdown ml-4" style={{marginTop: "2px"}}>
      {children}
      <div className="dropdown-content">
        {
          subItems.map((el, key) => (
            <a key={key} href={el.pathname}>{el.name}</a>
          ))
        }
      </div>
    </div>
  )
}

export default DropDown