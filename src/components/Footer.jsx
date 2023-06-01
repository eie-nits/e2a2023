/* eslint-disable react/prop-types */
import React from 'react'

const Footer = () => {
  const isHome = window.location.pathname == "/";
  return (
    <footer style={{ backgroundColor: isHome ? "#fff" : "#eee", color: "#333"}}>
      <p style={{margin: "0 auto", textAlign: "center", fontSize: "13px"}}>Copyright &copy; E2A 2023. All Rights Reserved.</p>
      <p style={{margin: "0 auto", textAlign: "center", fontSize: "13px"}}>Designed by Vinayak Das, 4th Year UG Student</p>
    </footer>
  )
}

export default Footer