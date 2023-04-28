import React from 'react'
import {FaLaptopCode ,FaMobileAlt,FaGithub,FaDiscord,FaWhatsapp,FaTwitter, FaLinkedin} from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from './components/navigation'
import Contact from './components/contactForm'

const page = () => {
  
  return ( 
    <>
        <div className='wrapper'>
             <header className='flex mt-4 justify-center items-center lg:justify-start'>
                  <h1 className=' text-2xl lg:self-start lg:my-2'>Felixicity</h1>
                  <Navigation/>
             </header>
             <main className='hero mt-24'>
                 <div className="flex">
                      <div className="main">
                            <h1 className='text-4xl text-purple-600 lg:text-6xl'>Hi, I'm </h1>
                            <p className='text-4xl text-white mt-2 mb-1  md:text-5xl'>Chukwu Felix</p>
                            <p className='text-lg mb-1'>A Software Developer</p>
                            <p className='text-gray-400 mt-12 mb-1 w-4/5'> I help businesses , organisations and brands build goal driven digital products and interactive experiences to 
                              help brands meet their targets</p>
                            <Link href="#contact"><button className='mt-12 w-56 h-8 bg-purple-900 border-none rounded-lg text-md hover:bg-purple-800 md:w-72 md:h-12'>Contact Me</button></Link>
                      </div>
                      <div className="icons text-2xl cursor-pointer">
                            <Link href='/'> <FaWhatsapp className='mb-8'/></Link>
                            <Link href=' https://twitter.com/Felixchukwu2026'><FaTwitter className='mb-8'/></Link>
                            <Link href='https://github.com/felixicity'><FaGithub className='mb-8'/></Link>
                            <Link href='https://www.linkedin.com/in/felix-chukwu-9809b81a1/'><FaLinkedin/></Link>
                      </div>
                 </div> 
             </main>

            <section className='about-section my-16' id='about'>
            <h2 className='text-center font-bold text-2xl border-b-2 border-purple-900 w-28 mx-auto'>About me</h2>
                 <p className='mt-4'> I am a self-taught developer who 
                 have been developing softwares and building projects 
                 for the past 2 years. I have different certifications 
                 from Scrimba,Cisco and Google. You can checkout my linkedIn 
                 profile for more details.</p>

            </section>
            <section className='skills-section my-16' id='skills'>
                <h2 className='text-center font-bold text-2xl border-b-2 border-purple-900 w-20 mx-auto'>Skills</h2>
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-16 my-12">
                    <div className='web mb-12 flex flex-col items-center '>
                        <FaLaptopCode className='text-white mb-8' style = {{width:"100px", height:"100px"}}/>
                        <h2 className='font-bold text-lg'>Web Development</h2>
                        <p className='font-medium'>I built apps and products with the latest and best technologies 
                          for both the backend and frontend in order to give your apps the 
                          touches needed for a professional look</p>

                        <p className='my-2 text-gray-500'>Technologies : Html, Css, Javascript, Sass, Tailwind, Bootstrap, React,
                          Next Js,Node js, Express js, Python, FastApi, Postgresql, MongoDB, Typescript </p>
                    </div>
                    <div className='mobile mb-12 flex flex-col items-center' >
                        <FaMobileAlt className ='text-white mb-8'  style = {{width:"100px", height:"100px"}}/>
                        <h2 className='font-bold text-lg'>Mobile App Development</h2>
                        <p className='font-medium'> More than 80% of online visitors use their mobile phones. I help create mobile apps 
                          that are fast,reliable,efficient and attractive. Mobile apps that'll hook your customers
                          to your business. 
                        </p>

                        <p className='my-2 text-gray-500'>Technologies: React-Native</p>
                    </div>
                </div>
            </section>
          
            <section className='my-16 ' id='project'>
              <h2 className='text-center font-bold text-2xl border-b-2 border-purple-900 w-28 mx-auto'>Projects</h2>
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-16">
                  <div className="project py-8">
                          <Image src="/project2.png" height={500} width={500} alt="project2" priority/>
                          <p className='project-title text-xl text-center py-4'>Interactive Card Details Form</p>
                          <p className='project-description'>This card page ensures and validates all user before submitting information. The user interaction is very nice as users see what they type in real time</p>
                          <Link className='font-semi-bold border-b-2 border-orange-600 w-20 hover:opacity-50 active:bg-red-600' href="https://felixicity.github.io/interactive-card-details-form-main/">View Live</Link>
                    </div>
                    <div className="project py-8">
                          <Image src="/project1.png" height={500} width={500} alt="project1" priority/>
                          <p className='project-title text-xl text-center py-4'>Score Card Component</p>
                          <p className='project-description'>This score page is for an IQ test app to enable users see their improvements on the go and motivate them to do better.</p>
                          <Link className='font-semi-bold border-b-2 border-orange-600 w-20 hover:opacity-50 active:bg-red-600'  href="https://felixicity.github.io/results-summary-component-main/">View Live</Link>
                    </div>
                    <div className="project py-8">
                          <Image src="/project1.png" height={500} width={500} alt="project1" priority/>
                          <p className='project-title text-xl text-center py-4'>Score Card Component</p>
                          <p className='project-description'>This score page is for an IQ test app to enable users see their improvements on the go and motivate them to do better.</p>
                          <Link className='font-semi-bold border-b-2 border-orange-600 w-20 hover:opacity-50 active:bg-red-600'  href="https://felixicity.github.io/results-summary-component-main/">View Live</Link>
                    </div>
                </div>
            </section>
      </div>
      <div className='bg-white text-black m-0 my-12 w-full'>
          <h2 className='font-bold text-2xl border-b-2 border-purple-900 w-32 mx-auto'>Contact Me</h2>
          <Contact/>
      </div>

      <footer>
      <div className="icons my-8 flex text-3xl cursor-pointer justify-between w-56 mx-auto">
          <Link href='/'> <FaWhatsapp /></Link>
          <Link href=' https://twitter.com/Felixchukwu2026'><FaTwitter /></Link>
          <Link href='https://github.com/felixicity'><FaGithub /></Link>
          <Link href=" https://www.linkedin.com/in/felix-chukwu-9809b81a1/"><FaLinkedin/></Link>
      </div>
        <small>&copy; Chukwu Felix 2023</small>
      </footer>
  </>
 
)
}

export default page