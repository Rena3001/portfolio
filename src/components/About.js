import React from 'react'
import logo from "./image/logohack.jpg"


export default function About() {
  return (
    <div className='about'>
      <div >
        <img className='logo' src={logo} alt="yfty" />
      </div>
      <div className="text">
       <strong>Rena Verdiyeva</strong><br />
        {/* I am 20.I was Born in Moscow, I continued my education 
        in Mingachevir at the age of 5,
         then in Baku from the fifth
         grade, and in 2018 I was admitted to ASOIU. 
         I scored 481 points in the entrance exam and 
         achieved great success.
          In the fourth year, I went to the Algorithmics course and 
          learned a lot. */}


        <ul className='about-info'>
          <li className=''>
            <div><strong/>Age:</div><p>20</p>
          </li>
          <li>
            <div>City:</div><p>Moscow</p>
          </li>
          <li>
            <div>Speciality:</div><p>Information security</p>
          </li>
          <li>
            <div>University:</div><p>ASOIU</p>
          </li>
          <li>
            <div>Courses:</div><p>Algorithmic</p>
          </li>

        </ul>

      </div>
    </div>
  )
}
