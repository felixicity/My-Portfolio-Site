import React from "react";
import { FaGithub, FaWhatsapp, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/navigation";
import Contact from "./components/contactForm";

const page = () => {
  return (
    <body>
      <header className="mt-6 flex justify-center items-center lg:mt-8">
        <h1 className="text-2xl mr-3">Felixicity</h1>
        <Navigation />
        <Link
          href="https://www.linkedin.com/in/felix-chukwu-9809b81a1/"
          className="absolute right-0 mr-5 px-4 py-2 bg-purple-950 text-white rounded-lg text-sm lg:mr-24 cursor-pointer"
        >
          Let's Chat
        </Link>
      </header>
      <main className="wrapper hero mt-24">
        <div className="flex">
          <div className="main">
            <h1 className="text-4xl text-purple-900 lg:text-6xl">Hi, I'm </h1>
            <p className="text-4xl mt-2 mb-1  md:text-5xl">Chukwu Felix</p>
            <p className="text-lg mb-1">A Software Developer</p>

            <p className="mt-12 mb-1 w-4/5">
              {" "}
              I help businesses , organisations and brands build goal driven
              digital products and interactive experiences to help brands meet
              their targets
            </p>
            <Link href="#contact">
              <button className="text-white mt-12 py-3 px-14 bg-purple-900 border-none rounded-lg hover:bg-purple-800 md:w-72 md:h-12">
                Contact Me
              </button>
            </Link>
          </div>
          <div className="icons text-2xl cursor-pointer">
            <Link href="/">
              {" "}
              <FaWhatsapp className="mb-8" />
            </Link>
            <Link href=" https://twitter.com/Felixchukwu2026">
              <FaTwitter className="mb-8" />
            </Link>
            <Link href="https://github.com/felixicity">
              <FaGithub className="mb-8" />
            </Link>
            <Link href="https://www.linkedin.com/in/felix-chukwu-9809b81a1/">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </main>

      <section className="about-section mt-32" id="about">
        <div className="wrapper">
          <h2 className="text-center text-2xl border-b-2 border-purple-900 w-28 mx-auto">
            About me
          </h2>
          <div className="flex flex-col items-center bg-white lg:flex-row justify-between">
            <Image
              alt="image"
              src="/project_images/hacker.jpg"
              width={300}
              height={300}
              // className="rounded-full"
            />
            <p className="text-md mt-4 text-black">
              {" "}
              I am a full stack developer from Lagos, Nigeria. I have been
              developing softwares and building projects for the past 2 years. I
              started with HTML, CSS, JavaScript and node.js. I have different
              certifications from Scrimba,Cisco and Google. I love music and
              craft.
            </p>
          </div>
        </div>
      </section>

      <section className="skills-section my-16 wrapper py-16 " id="skills">
        <h2 className="text-center font-bold text-2xl border-b-2 border-purple-900 w-20 mx-auto">
          Skills
        </h2>
        <div className="flex flex-1 gap-8 mt-16 overflow-x-auto">
          <Image
            src="/icons/html5.svg"
            width={70}
            height={70}
            alt="html logo"
          />
          <Image src="/icons/css.svg" width={70} height={70} alt="css logo" />
          <Image
            src="/icons/javascript.svg"
            width={70}
            height={70}
            alt="javascript logo"
          />
          <Image
            src="/icons/react.svg"
            width={70}
            height={70}
            alt="react logo"
          />
          <Image src="/next.svg" width={70} height={70} alt="next logo" />

          <Image
            src="/icons/nodejs.svg"
            width={70}
            height={70}
            alt="node logo"
          />
          <Image
            src="/icons/python.svg"
            width={70}
            height={70}
            alt="python logo"
          />
          <Image
            src="/icons/postgresql.svg"
            width={70}
            height={70}
            alt="postgresql logo"
          />
          <Image
            src="/icons/mongodb.svg"
            width={70}
            height={70}
            alt="mongodb logo"
          />
        </div>
      </section>

      <section className="bg-footer_900 text-white transition" id="project">
        <h2 className="text-center font-bold text-2xl border-b-2 border-purple-900 w-28 mx-auto pt-12">
          Projects
        </h2>
        <div className="wrapper py-12">
          <div className="project py-24 flex  flex-col lg:flex-row gap-16 items-start">
            <Image
              src="/project_images/tenzies_dice_game.png"
              height={400}
              width={400}
              alt="dice game"
              priority
            />
            <div className="">
              <p className="project-title text-xl text-center">Tenzies Game</p>
              <p className="project-description mb-4 text-md ">
                Tenzies is played by holding the dice for a particular number
                until all the ten dice are held. Originally, the idea was taken
                from scrimba's react course but I integrated features such as a
                timer, and saving to local storage functionality wihich saves
                the time of the last 3 players and styling look like actual dice
                because they were initially numbers on each die.
              </p>
              <Link
                className=" bg-orange-600 rounded-lg py-1 px-2 w-20 hover:opacity-50 active:bg-red-600"
                href="https://felixicity.github.io/interactive-card-details-form-main/"
              >
                View Live
              </Link>
            </div>
          </div>
          <div className="project py-24 flex  flex-col lg:flex-row gap-16 items-start">
            <Image
              src="/Babreux ecommerce.png"
              height={400}
              width={400}
              alt="ecommerce"
              priority
            />
            <div>
              <p className="project-title text-xl text-center py-4">
                Babreux Ecommerce store
              </p>
              <p className="project-description mb-4">
                This store sells clothes and other accessories. It has a cart
                for check out. An interactive details such adding to cart,
                liking an item etc.
              </p>
              <Link
                className=" bg-orange-600 rounded-lg py-1 px-2 w-20 hover:opacity-50 active:bg-red-600"
                href="https://felixicity.github.io/results-summary-component-main/"
              >
                View Live
              </Link>
            </div>
          </div>
          <div className="project py-24 flex  flex-col lg:flex-row gap-16 items-start">
            <Image
              src="/project_images/atm_card.png"
              height={400}
              width={400}
              alt="project1"
              priority
            />
            <div>
              <p className="project-title text-xl text-center py-4">
                Interactive Card Details Form
              </p>
              <p className="project-description mb-4">
                This card form page ensures and validates all user before
                submitting information. The user interaction is very nice as
                users see what they type in real time.
              </p>
              <Link
                className=" bg-orange-600 rounded-lg py-1 px-2 w-20 hover:opacity-50 active:bg-red-600"
                href="https://felixicity.github.io/results-summary-component-main/"
              >
                View Live
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white text-black m-0 w-full" id="contact">
        <div className="py-12 mx-auto">
          <h2 className="font-bold text-2xl border-b-2 border-purple-900 w-36 mx-auto">
            Contact Me
          </h2>
          <Contact />
        </div>
      </div>

      <footer className="bg-footer_900 text-white">
        <div className="icons py-12 flex text-2xl cursor-pointer justify-between w-56 mx-auto">
          <Link href="/">
            {" "}
            <FaWhatsapp />
          </Link>
          <Link href=" https://twitter.com/Felixchukwu2026">
            <FaTwitter />
          </Link>
          <Link href="https://github.com/felixicity">
            <FaGithub />
          </Link>
          <Link href=" https://www.linkedin.com/in/felix-chukwu-9809b81a1/">
            <FaLinkedin />
          </Link>
        </div>
        <small className="mx-auto">&copy; Chukwu Felix 2023</small>
      </footer>
    </body>
  );
};

export default page;
