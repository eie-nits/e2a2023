import React from 'react'
import "../assets/css/registration.css"
import Header from '../components/Header';

const Registration = () => {
  const container = React.useRef(null);
  const scrollToBottom = () => {
    container.current.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(scrollToBottom, []);
  return (
    <>
    <Header/>
    <div className='bg-white ptb-4' ref={container}>
      <div className='registration'>
        <h3>Registration Category</h3>
          <table className='table mt-2'>
            <tr className="text-center">
              <th>Category</th>
              <th>Indian Authors <br /> (in INR)</th>
              <th>Foreign Authors <br /> (in USD)</th>
              <th>Late registration - Indian Authors <br /> (in INR)</th>
              <th>Late registration - Foreign Authors <br /> (in USD)</th>
            </tr>
            <tr>
              <td>Students</td>
              <td>4000</td>
              <td>150</td>
              <td>5000</td>
              <td>200</td>
            </tr>
            <tr>
              <td>Academician/Scientists</td>
              <td>5000</td>
              <td>250</td>
              <td>6000</td>
              <td>300</td>
            </tr>
            <tr>
              <td>Industry</td>
              <td>6000</td>
              <td>350</td>
              <td>7000</td>
              <td>400</td>
            </tr>
            <tr>
              <td>Additional Paper per Author</td>
              <td>2000</td>
              <td>75</td>
              <td>2500</td>
              <td>100</td>
            </tr>
          </table>
        </div>
      <div className='registration mt-4'>
        <h3>Registration Guidelines</h3>
        <span className='red-text mt-2'>To be updated soon...</span>
          {/* <ol className="ml-4 mt-2">
            <li className="bold">Important points (please read before you proceed for registration):
              <ul className="ml-3 mt-1">
                <li className="mt-1">All participants must fill the google form (Link: <a className="link" href="https://forms.gle/tfLQZNvoPbteFMEz5" target="_blank" rel="noreferrer">https://forms.gle/tfLQZNvoPbteFMEz5</a>) to register themselves for the conference, after paying the registration fees.</li>
                <li className="mt-1">Participants are informed to pay the registration fee throughonline mode in the bank account given below. Please start this process early since until your payment is received and verified you will not be able to upload your papers.</li>
              </ul>
            </li>
            <li className="bold mt-2">Procedure for registration:
              <ul className="ml-3 mt-1">
                <li className="mt-1">Look up the conference registration fees given in the table below that applies to you and deposit the fee in the conference bank account - please note down the transaction reference number and take the screen shot of payment receipt.</li>
                <li className="mt-1">Fill the registration form with all the required details. Please click the link below for registration form.</li>
                <li className="mt-1">Please keep ready the following before you start filling the registration form:</li>
                <ol className="ml-4 list3">
                  <li className="mt-1">Your paper details (paper id, title), and author(s) details (name(s) and affiliation)</li>
                  <li className="mt-1">Online transaction reference number</li>
                  <li className="mt-1">Student identity proof in PDF format of size not more than 10 MB (if you are a student registrant)</li>
                  <li className="mt-1">Scanned copy of online payment receipt in PDF format of size not more than 10 MB.</li>
                </ol>
              </ul>
            </li>
            <li className="bold mt-2">Paying through Electronic Funds Transfer:
              <ul className="ml-3 mt-1">
              <li className="mt-1">Choose the appropriate amount as per the information given above in the table.</li>
              <li className="mt-1">You can pay through online/ internet banking of your account OR through your UPI (PhonePe, Google Pay, etc.) - Bank transfer
              <table className='table mt-2'>
            <tr className="text-center">
              <th>Account Name</th>
              <td>INTERNATIONAL CONFERENCE ON EMERGING ELECTRONICS & AUTOMATION</td>
            </tr>
            <tr>
              <th>Account Number</th>
              <td>40566029835</td>
            </tr>
            <tr>
              <th>Type of Account</th>
              <td>Regular Savings Bank Account</td>
            </tr>
            <tr>
              <th>IFSC code</th>
              <td>SBIN0007061</td>
            </tr>
            <tr>
              <th>Additional Paper per Author</th>
              <td>SBININBB</td>
            </tr>
          </table>
              </li>
              
            </ul>
           </li>
            <li className="bold mt-2">Additional information:
              <ul className="ml-3 mt-1">
              <li className="mt-1">The authors can register for maximum of 3 accepted papers. However for second and third paper an additional fee of INR 1,000/- or USD 30 is to be paid (each).</li>
              <li className="mt-1">Students can upload maximum of 1 paper with a single registration.</li>
              <li className="mt-1 bold">The page limit for each submission should be 6-12 for regular papers.</li>
            </ul>
            </li>
          </ol> */}
        </div>
      </div>
      </>
  )
}

export default Registration