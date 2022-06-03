import React from 'react'
import image from '../components/image/logohack.jpg'

export default function Project() {
    return (
      <div className='container mt-5'>
      <div className=' row'>
        <div className="col-lg-3 col-md-4  col-sm-12  ">
          <div className='project-cart'>
          {/* <img src={image} className="project-img" alt="kgjh"/> */}
         <h1>ToDoList</h1>
         <p>HTML, CSS, Javascript</p>

          <div>
            <button><a href='https://github.com/Rena3001/htodolist_m2' target="_blank">View code</a></button>
          </div>
        </div>
        </div>
        <div className="col-lg-3 col-md-4  col-sm-12  ">
          <div className='project-cart'>
          {/* <img src={image} className="project-img" alt="kgjh"/> */}
         <h1>Menu card</h1>
         <p>HTML, CSS, Javascript</p>

          <div>
            <button><a href='https://github.com/Rena3001/menucard' target="_blank">View code</a></button>
          </div>
        </div>
        </div>
        <div className="col-lg-3 col-md-4  col-sm-12  ">
          <div className='project-cart'>
          {/* <img src={image} className="project-img" alt="kgjh"/> */}
         <h1>Convertor</h1>
         <p>HTML, CSS, Javascript</p>

          <div>
            <button><a href='https://github.com/Rena3001/layihe3/' target="_blank">View code</a></button>
          </div>
        </div>
        </div>
        <div className="col-lg-3 col-md-4  col-sm-12  ">
          <div className='project-cart'>
          {/* <img src={image} className="project-img" alt="kgjh"/> */}
         <h1>Website</h1>
         <p>Figma to Html,Css</p>

          <div>
            <button><a href='https://github.com/Rena3001/Layihe-/' target="_blank">View code</a></button>
          </div>
        </div>
        </div>
         </div>
      </div>
    )
  }