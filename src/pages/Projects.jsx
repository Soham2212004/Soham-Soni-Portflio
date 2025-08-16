import React from 'react'
import AnimatedText from '../components/AnimatedText'
import { GithubIcon } from '../components/Icons'
import Layout from '../components/Layout'
import Link from '../components/Link'
import { motion } from 'framer-motion'
import TransitionEffect from '../components/TransitionEffect'
// You'll need to add actual images for your projects
import safaaiBuddyImg from '../assets/SafaaiBuddy.png'
import studyGeniusImg from '../assets/Study_AI.png'
import aiAgentsImg from '../assets/AI_Agent.png'
import craftlyImg from '../assets/SafaaiBuddy.png'
import roadAccidentImg from '../assets/RADAS.png'
import aiMultitaskerImg from '../assets/AI_Multitasker.png'
import investmentCalculatorImg from '../assets/Investment_Calculator_App.png' // Add your image for the new project

const FramerImage = motion.img

const FeaturedProject = ({ type, title, summary, img, link, github }) => {

  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">

      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
      rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />

      <Link href={link} target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-3xl xs:text-2xl">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10"> <GithubIcon /> </Link>
          <Link href={link} target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
            dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
            hover:dark:border-light sm:px-4 sm:text-base"
          > Visit Project
          </Link>
        </div>
      </div>

    </article>
  )
}

const Project = ({ title, type, img, link, github }) => {

  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl 
    border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
      rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />

      <Link href={link} target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link href={link} target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >Visit</Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>

        </div>
      </div>

    </article>
  )
}

const Projects = () => {
  return (
    <>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Building Tomorrow with AI Today!" 
          className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Road Accident Detection & Alert System"
                img={roadAccidentImg}
                summary="A comprehensive safety solution using AI and machine learning to detect road accidents in real-time. 
                The system automatically alerts emergency services and relevant authorities, potentially saving lives by reducing 
                response time during critical situations."
                link="https://github.com/Soham2212004/Road-Accident-Detection-Alert-System.git"
                github="https://github.com/Soham2212004/Road-Accident-Detection-Alert-System.git"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="StudyGenius AI"
                img={studyGeniusImg}
                link="https://github.com/Soham2212004/StudyGenius-AI.git"
                github="https://github.com/Soham2212004/StudyGenius-AI.git"
                type="AI Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="AI Agents"
                img={aiAgentsImg}
                link="https://github.com/Soham2212004/AI-Agents.git"
                github="https://github.com/Soham2212004/AI-Agents.git"
                type="AI Project"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="SafaaiBuddy"
                img={safaaiBuddyImg}
                summary="An intelligent cleaning and waste management solution powered by AI. This application helps users maintain 
                cleanliness by providing smart recommendations, scheduling, and monitoring capabilities for efficient waste management 
                and sanitation practices."
                link="https://github.com/Soham2212004/SafaaiBuddy.git"
                github="https://github.com/Soham2212004/SafaaiBuddy.git"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="AI Multitasker"
                img={aiMultitaskerImg}
                link="https://github.com/Soham2212004/AI-Multitasker.git"
                github="https://github.com/Soham2212004/AI-Multitasker.git"
                type="AI Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Investment Calculator App"
                img={investmentCalculatorImg}
                link="https://github.com/Soham2212004/Investment-Calculator-App.git"
                github="https://github.com/Soham2212004/Investment-Calculator-App.git"
                type="Finance Project"
              />
            </div>
          </div>

        </Layout>
      </main>
    </>
  )
}

export default Projects