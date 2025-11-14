import React, { useEffect, useRef } from 'react'
import AnimatedText from '../components/AnimatedText'
import Layout from '../components/Layout'
import profilePic from '../assets/logo2.jpg'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { motion } from 'framer-motion'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Education from '../components/Education'
import TransitionEffect from '../components/TransitionEffect'

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, {once: true});

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && parseInt(latest) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    })
  }, [springValue, value])


  return <span ref={ref}></span>
}

const About = () => {
  return (
    <>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16 md:pt-12 sm:pt-8 xs:pt-4">
          <AnimatedText 
            text="Building Tomorrow with AI Today!" 
            className="mb-16 lg:!text-7xl md:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8 xs:mb-6" 
          />
          
<div className="grid w-full grid-cols-8 gap-16 md:gap-12 sm:gap-8 xs:gap-6 md:flex md:flex-col">
            {/* Profile Image Section - Shows first on mobile */}
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:w-full
            md:p-6 sm:p-4 xs:p-3"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light 
              xs:-right-2 xs:w-[103%] xs:rounded-[1.5rem]" />
              <img 
                src={profilePic} 
                alt="Soham Soni" 
                className="w-full h-auto rounded-2xl xs:rounded-xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Biography Section - Shows second on mobile */}
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:w-full">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 md:text-base sm:text-sm">
                Biography
              </h2>
              <p className="font-medium md:text-sm sm:text-xs leading-relaxed">
                Hi, I&apos;m Soham Soni, a Software Engineer at AV DEVS Solutions specializing in AI-powered automation solutions. With expertise in integrating AI technologies into existing systems and developing intelligent software from the ground up, I focus on building scalable applications that leverage machine learning, cloud technologies, and modern development frameworks.
              </p>

              <p className="my-4 font-medium md:text-sm sm:text-xs leading-relaxed sm:my-3">
                I believe that artificial intelligence is about more than just cutting-edge technology – it&apos;s about solving 
                real-world problems and creating intelligent, efficient solutions that make a meaningful impact on how we work and live.
              </p>

              <p className="font-medium md:text-sm sm:text-xs leading-relaxed">
                Whether I&apos;m integrating AI technology into enterprise projects at AV DEVS Solutions, developing full-stack applications with RAG architecture like I did during my internship at Linde Engineering, or creating AI agents for document processing and automation workflows, I bring my commitment to innovation and practical problem-solving to every project. I look forward to continuing to leverage my AI/ML expertise to create the next generation of intelligent business solutions.
              </p>
            </div>

            {/* Stats Section */}
            <div className="col-span-2 flex flex-col items-end justify-between gap-8 xl:col-span-8 xl:flex-row 
            xl:items-center md:order-3 md:gap-6 sm:gap-4 xs:gap-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={19}/>+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center 
                md:text-lg sm:text-base xs:text-sm mt-2 sm:mt-1">
                  AI Tools Built
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={6}/>+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center 
                md:text-lg sm:text-base xs:text-sm mt-2 sm:mt-1">
                  Major Projects
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={2}/>+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center 
                md:text-lg sm:text-base xs:text-sm mt-2 sm:mt-1">
                  Industry Internships
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  )
}

export default About
