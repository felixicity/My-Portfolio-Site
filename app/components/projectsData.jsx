import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const data = [
 {
   id:1,
   img: '/project1.png',
   title:"Interactive Card Details Form",
   description: "This card page ensures and validates all user before submitting information. The user interaction is very nice as users see what they type in real time",
   live_link:" https://felixicity.github.io/interactive-card-details-form-main/"
 },
 {
    id:2,
    img:'/project2.png',
    title:"Score Card Component",
    description: "This score page is for an IQ test app to enable users see their improvements on the go and motivate them to do better.",
    live_link:"https://felixicity.github.io/results-summary-component-main/"
  }
]


const ProjectsData = () => {

  return (
     <>
       {
        data.map(item => {
               <div className="project">
                  <Image src={item.img} height={200} width={200} alt={item.title} />
                  <p className='project-title'>{item.title}</p>
                  <p className='project-description'>{item.description}</p>
                  <Link href={item.live_link}>View Live</Link>
                 </div>
          })
        }
      </>
  )
}

export default ProjectsData