import React from 'react'
import "../assets/css/sponsorship.css"

const Sponsorship = () => {
  const container = React.useRef(null);
  const scrollToBottom = () => {
    container.current.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(scrollToBottom, []);
  return (
    <div className='bg-white ptb-4' ref={container}>
      <div className="sponsorship">
      <h3>How to become a Sponsor?</h3>
      <p className="mtb-2">E2A 2022 welcomes sponsors and exhibitors interested in promoting their activities and products during the online conference event. With more than 50 expected conference attendees, the E2A 2022 offers a great opportunity to advertise electronics/ automation/ any other-related products and increase the visibility of your organization.</p>
      <p>The details of the sponsorship are as follows:</p>
      <p className="mtb-2">Main Sponsor: (Rs. 25000/-):</p>
      <ul className="ml-3">
        <li>Logo recognition on the conference website (with link to the sponsor website).</li>
        <li>Logo recognition in the conference program.</li>
        <li>A promotional video of the sponsor will be webcasted for viewing in general online session of the Conference.</li>
        <li>Please contact us for any special needs.</li>
        {/* <li>The paper submissions must follow the Springer formatting guidelines.</li> */}
      </ul>
      <p className="mtb-2">Early confirmation of your Sponsorship will ensure an even higher level of exposure.</p>
      <p>Please contact General Chair: Dr. Ranjay Hazra (email: <a href="mailto: e2a@nits.ac.in">e2a@nits.ac.in</a>) for more details.</p>
      </div>
    </div>
  )
}

export default Sponsorship