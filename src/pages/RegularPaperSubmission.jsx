import React from 'react'
import "../assets/css/regularPaper.css"

const RegularPaperSubmission = () => {
  const container = React.useRef(null);
  const scrollToBottom = () => {
    container.current.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(scrollToBottom, []);

  return (
    <div className='bg-white ptb-4' ref={container}>
      <div className="regular-papers">
        <h3>Paper Submission & Guidelines</h3>
        {/* <ul className="ml-4 mt-3">
          <li>It is informed to all the authors that the peer reviewed and selected papers of conference will be published as proceedings with Springer in their prestigious &quot;Lecture Notes in Electrical Engineering&quot; series (<a href="https://www.springer.com/series/7818" target="_blank" rel="noreferrer">https://www.springer.com/series/7818</a>).</li>
          <li>Submissions should be made according to the Springer LNEE format (<a href={"/documents/latex_template.zip"} target="_blank" rel="noreferrer">LaTeX template</a>, <a href={"/documents/word_template.zip"} target="_blank" rel="noreferrer">Word template</a>).</li>
          <li>Author must follow <a href={"/documents/Springer_Guidelines_for_Authors_of_Proceedings.pdf"} target="_blank" rel="noreferrer">Springer_Guidelines_for_Authors_of_Proceedings</a>.</li>
          <li>Papers should be submitted through the <a href={"https://easychair.org/conferences/?conf=e2a2022"} target="_blank" rel="noreferrer">EasyChair (E2A)</a> platform.</li>
          <li>Papers should be in English. The maximum full length size of paper may be 12 pages.</li>
          <li>Any published work or submitted any other conference/journal work will be rejected in preliminary stage.</li>
          <li>All paper will be checked by Plagiarism checker software.</li>
          <li>The paper submissions must follow the Springer formatting guidelines.</li>
        </ul> */}
        <div className='red'>To be updated Soon...</div>
      </div>
    </div>
  )
}

export default RegularPaperSubmission