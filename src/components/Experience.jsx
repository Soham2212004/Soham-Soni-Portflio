import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null)
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">

      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">
          {work}
        </p>
      </motion.div>
    </li>
  )
}

const Experience = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top 
          md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-light"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Engineer" 
            company="AV DEVS Solutions Pvt. Ltd."
            companyLink="https://www.avdevs.com/"
            time="Aug 2025 - Present" 
            address="Vadodara, Gujarat"
            work="Integrating AI technologies into pre-existing projects and developing new AI-based solutions from the ground up. Leading initiatives to enhance product capabilities and streamline workflows using advanced machine learning and automation techniques."
          />

          <Details
            position="Artificial Intelligence Intern" 
            company="Linde Engineering India"
            companyLink="https://www.linde-engineering.com/"
            time="Dec 2024 - Apr 2025" 
            address="Vadodara, India"
            work="Developed document Q&A AI agent using RAG architecture with Gemini API, PostgreSQL, and Azure Blob Storage. 
            Implemented OCR automation using Tesseract for document processing and created ML-based pipelines. 
            Built intelligent automation solutions enhancing document processing workflows."
          />

          <Details
            position="Summer Intern" 
            company="ByteXL"
            companyLink="https://bytexl.com/"
            time="May 2024 - Jun 2024" 
            address="Vadodara, India"
            work="Gained hands-on experience with Microsoft Azure cloud services and Python programming. 
            Worked on practical projects involving cloud deployment and automation. 
            Enhanced skills in cloud computing and modern development practices."
          />

          <Details
            position="Cloud Computing Intern" 
            company="Uniconverge Technologies"
            companyLink="https://www.uniconvergetech.in/"
            time="Apr 2024 - Jun 2024" 
            address="Vadodara, India"
            work="Deployed and configured AI/ML applications on Google Cloud Platform and Microsoft Azure. 
            Optimized cloud infrastructure for scalability and cost-efficiency across multiple projects. 
            Gained expertise in cloud architecture and deployment strategies for machine learning applications."
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience
