import React from 'react';
import '../assets/css/commitee.css';
import members from "../assets/members"
import ProfileCard from '../components/ProfileCard';

const Committee = () => {
  const container = React.useRef(null);
  const scrollToBottom = () => {
    container.current.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(scrollToBottom, []);

  return (
    <>
      <div className='main-content' ref={container}>
        <div className='paper-heading'>
          <span className='red-text'>COMMITTEE MEMBERS</span>
          <div className='line'></div>
        </div>

        <div className='list'>
          <h1 style={{ marginBottom: '10px' }}>Patron</h1>
          <ProfileCard img={"/images/dilip-kr-baidya.jpg"} name="Prof. Dilip Kumar Baidya," aff={"Director, NIT Silchar"} />
        </div>
        <div className='list'>
          <h1 style={{ marginBottom: '10px' }}>Honorary Chair</h1>

          <ProfileCard img={"/images/Jagannath Sarangapani_Hon Chair.jpg"} name="Prof. Jagannathan Sarangapani," aff={"Missouri Institute of Science and Technology, USA"} style={{maxWidth: "350px"}} link="https://ece.mst.edu/faculty-directory/jagannathan-sarangapani/" />
        </div>

        <div className='list'>
          <h1 style={{ marginBottom: '-5px' }}>General Chair</h1>
          <div className='mt-2' style={{display: "flex", justifyContent: 'space-evenly', flexWrap: "wrap", width: "100%"}}>
            <ProfileCard style={{maxWidth: "300px"}} img={"/images/Moncef Gabbouj_Gen Chair.jpg"} name={`Prof. Moncef Gabbouj,`} aff={"Tampere University, Finland"} link={"https://www.tuni.fi/en/moncef-gabbouj"} />

            <ProfileCard style={{maxWidth: "300px"}} img={"/images/Quanxin Zhu_Gen Chair.PNG"} name="Prof. Quan Xin Zhen," aff="Hunan Normal University, China" link="https://www.mc.hunnu.edu.cn/info/1744/3601.htm" />

            <ProfileCard style={{maxWidth: "300px"}} img={"/images/Shyam Sudhir Pandey_Gen Chair.jpg"} name="Prof. Shyam Sudhir Pandey," aff="Kyushu Institute of Technology, Japan" link="https://www.life.kyutech.ac.jp/~shyam/" />

            <ProfileCard style={{maxWidth: "300px"}} img={"/images/Ranjay Hazra_Gen Chair.jpg"} name="Dr. Ranjay Hazra," aff="NIT Silchar" link="http://www.nits.ac.in/departments/instru/eie.php" />
          </div>
        </div>
        <div className='list'>
          <h1 style={{ marginBottom: '10px' }}>Convenor</h1>
          <ProfileCard img={"/images/rd.jpg"} name="Dr. Rajdeep Dasgupta," aff="NIT Silchar" link="http://www.nits.ac.in/departments/instru/eie.php" />
        </div>

        <div className='list'>
          <h1>Organizing Chairs/Secretary</h1>
          <div className='mt-2' style={{display: "flex", justifyContent: 'space-evenly', flexWrap: "wrap", width: "100%"}}>
            <ProfileCard style={{maxWidth: "300px"}} img={"/images/mk.jpg"} name="Dr. Munmun Khanra," aff="NIT Silchar" link="http://www.nits.ac.in/departments/instru/eie.php" />

            <ProfileCard style={{maxWidth: "300px"}} img={"/images/sk.jpg"} name="Dr. Shankar K." aff="NIT Silchar" link="http://www.nits.ac.in/departments/instru/eie.php" />

            <ProfileCard style={{maxWidth: "300px"}} img={"/images/jh.jpg"} name="Dr. Jupitara Hazarika" aff="NIT Silchar" link="http://www.nits.ac.in/departments/instru/eie.php" />

            <ProfileCard style={{maxWidth: "300px"}} img={"/images/aks.jpg"} name="Dr. Arup Kumar Sharma" aff="NIT Silchar" link="http://www.nits.ac.in/departments/instru/eie.php" />
          </div>
        </div>

        <div className='list'>
          <h1>Technical Program Chairs</h1>
          <h3>
            <strong>Control & Robotics: </strong> Dr. Sudipto Chakraborty
          </h3>
          <h3>
            <strong>Signal Processing: </strong>Dr. Jupitara Hazarika
          </h3>
          <h3>
            <strong>Communication System: </strong>Dr. Ranjay Hazra
          </h3>
          <h3>
            <strong>MEMS & VLSI: </strong>Dr. Arun Kumar Sunaniya
          </h3>
          <h3>
            <strong>AI & Soft Computing: </strong>Dr. Lalu Seban
          </h3>
          <h3>
            <strong>Sensors & Instrumentation: </strong>Dr. Sudharsan Sahoo
          </h3>
          <h3>
            <strong>Energy, Power Systems & Power Electronics: </strong>Dr. Munmun
            Khanra
          </h3>
        </div>

        {/* <div className='list'>
          <h1>Publication Chairs</h1>
          <h3>
            Dr. Rajdeep Dasgupta, NIT Silchar
          </h3>
          <h3>
            Dr. Munmun Khanra
          </h3>
          <h3>
            Dr. Arun Kumar Sunaniya, NIT Silchar
          </h3>
          <h3>
            Dr. Wasim Arif, NIT Silchar
          </h3>
        </div> */}

        {/* <div className='list'>
          <h1>Publicity Chairs</h1>
          <h3>
            Dr. Shahedul Haque Laskar, NIT Silchar
          </h3>
          <h3>
            Dr. Shankar K., NIT Silchar
          </h3>
          <h3>
            Dr. Rajeeb Dey, NIT Silchar
          </h3>
          <h3>
            Dr. Ripon Patgiri, NIT Silchar
          </h3>
        </div> */}

        {/* <div className='list'>
          <h1>Hospitality Chairs</h1>
          <h3>
            Dr. Jupitara Hazarika, NIT Silchar
          </h3>
          <h3>
            Dr. Sudarsan Sahoo, NIT Silchar
          </h3>
          <h3>
            Dr. Anup Kumar Sharma, NIT Silchar
          </h3>
          <h3>
            Dr. Bipul Das, NIT Silchar
          </h3>
        </div> */}

        {/* <div className='list'>
          <h1>Finance Chairs</h1>
          <h3>
            Dr. Mansa Kumar Bera, NIT Silchar
          </h3>
          <h3>
            Dr. Shivendra Kumar Pandey, NIT Silchar
          </h3>
          <h3>
            Dr. Dipankar Bhanja, NIT Silchar
          </h3>
          <h3>
            Dr. Pulok Nath, NIT Silchar
          </h3>
        </div> */}

        {/* <div className='list'>
          <h1>Registration Committee</h1>
          <h3>
            Dr. Mansa Kumar Bera, NIT Silchar
          </h3>
          <h3>
            Dr. Koena Mukherjee, NIT Silchar
          </h3>
          <h3>
            Dr. Shankar K., NIT Silchar
          </h3>
          <h3>
            Dr. Anup Kumar Sharma, NIT Silchar
          </h3>
        </div> */}

        {/* <div className='list'>
          <h1>Website & Online Platform Commitee</h1>
          <h3>
            Dr. Lalu Seban, NIT Silchar
          </h3>
          <h3>
            Dr. Ranjay Razra, NIT Silchar
          </h3>
          <h3>
            Dr. Sudipta Chakraborty, NIT Silchar
          </h3>
          <h3>
            Dr. Naresh Babu, NIT Silchar
          </h3>
        </div> */}

        {/* <div className='list'>
          <h1>Sponsorship</h1>
          <h3>
            Dr. Manas Kumar Bera, NIT Silchar
          </h3>
          <h3>
            Dr. Bipul Das, NIT Silchar
          </h3>
          <h3>
            Dr. Shivendra Kumar Pandey, NIT Silchar
          </h3>
        </div> */}

        <div className='list'>
          <h1 className="mtb-2">Technical Program Committee </h1>
          <table className='committeeTable mb-4'>
            <tr>
              <th>S. No.</th>
              <th>Name of TPC Member</th>
              <th>Affiliation</th>
            </tr>
            {
              members.map((el, i) => (
                <tr key={i}>
                  <td>{i+1}</td>
                  <td>{el.member}</td>
                  <td>{el.affiliation}</td>
                </tr>
              ))
            }
          </table>
        </div>
      </div>
    </>
  );
};

export default Committee;
