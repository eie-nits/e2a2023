import React from "react";
import Header from "../components/Header";

const Schedule = () => {
  const container = React.useRef(null);
  const scrollToBottom = () => {
    container.current.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(scrollToBottom, []);
  return (
    <>
    <Header/>
    <div className='bg-white ptb-4 schedule mb-2' ref={container}>
    <h3>Schedule</h3>
      <span style={{color: "#de1b1b"}} className='red-tex mt-2'>To be updated soon...</span>
    </div>
    </>
  )
}

export default Schedule;