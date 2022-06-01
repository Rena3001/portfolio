import React from 'react'
import image from '../components/image/logohack.jpg'

export default function Project() {
    return (
      <div className='project-cards'>
        <div>
          <img src={image} alt="kgjh"/>
          <div>text</div>
          <div>
            <button>View code</button>
            <button>View project</button>
          </div>
        </div>
        <div>
          <img src={image} alt="kgjh"/>
          <div>text</div>
          <div>
            <button>View code</button>
            <button>View project</button>
          </div>
        </div>
        <div>
          <img src={image} alt="kgjh"/>
          <div>text</div>
          <div>
            {/* <button>View code</button> */}
            <button>View project</button>
          </div>
        </div>
        {/* <div></div>
        <div></div>
        
        <div></div>
        <div></div> */}
         
      </div>
    )
  }