import React, { useState } from 'react'
import Layout from '../components/Layout'
import profilePic from '../assets/soham4.png'
import AnimatedText from '../components/AnimatedText'
import Link from '../components/Link'
import { LinkArrow } from '../components/Icons'
import HireMe from '../components/HireMe'
import TransitionEffect from '../components/TransitionEffect'
import CustomChatButton from '../components/CustomChatButton'
import ChatModal from '../components/ChatModal'
import { motion } from 'framer-motion'

const MotionImage = motion.img

const Home = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light md:items-start md:min-h-fit">
        <Layout className="pt-0 md:pt-8 sm:pt-4">
          <div className="flex items-center justify-between w-full gap-8 lg:flex-col lg:gap-6 md:gap-4">
            
            {/* Image Section - Hidden on large screens, visible on mobile */}
            <div className="w-1/2 lg:w-full lg:max-w-md lg:mx-auto md:max-w-sm sm:max-w-xs">
              <MotionImage 
                src={profilePic} 
                alt="SohamSoni" 
                className="w-full h-auto lg:inline-block rounded-2xl"
                initial={{opacity:0, scale:0.9}}
                animate={{opacity:1, scale:1}}
                transition={{duration:0.5}}
                priority
                sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 60vw, 50vw"
              />
            </div>

            {/* Text Content Section */}
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full">
              <AnimatedText 
                text="SOHAM SONI" 
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-5xl md:!text-4xl sm:!text-3xl xs:!text-2xl"
              />
              
              <p className="my-4 text-base font-medium text-left lg:text-center md:text-sm md:my-3 sm:text-xs sm:my-2 leading-relaxed">
                Software Engineer specializing in AI-powered automation solutions. Experienced in integrating AI technologies into existing systems and developing intelligent software from the ground up, leveraging machine learning, cloud technologies, and modern frameworks to solve complex business problems efficiently.
              </p>

              {/* Buttons Section */}
              <div className="flex items-center gap-4 self-start mt-2 lg:self-center lg:flex-wrap lg:justify-center md:gap-3 sm:gap-2 sm:mt-1">
                <Link
                  href="https://drive.google.com/file/d/1dxKyBzezqN99za80-FTc7mo3c1LbCG6Y/view?usp=sharing"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 
                    rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                    border-2 border-solid border-transparent hover:border-dark
                    dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                    hover:dark:border-light transition-all duration-300
                    md:p-2 md:px-4 md:text-base sm:text-sm sm:p-1.5 sm:px-3
                    whitespace-nowrap"
                >
                  Resume <LinkArrow className={"w-6 ml-1 md:w-5 sm:w-4"} />
                </Link>
                
                <Link 
                  href="mailto:sonisoham91@gmail.com" 
                  target={"_blank"}
                  className="text-lg font-medium capitalize text-dark underline 
                    dark:text-light hover:opacity-80 transition-opacity duration-300
                    md:text-base sm:text-sm whitespace-nowrap"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        {/* Hire Me Component - Hidden on small screens if needed */}
        <div className="md:hidden">
          <HireMe />
        </div>

        {/* Custom Chat Button */}
        <CustomChatButton 
          onClick={() => setIsChatOpen(!isChatOpen)} 
          isOpen={isChatOpen} 
        />
        
        {/* Chat Modal */}
        {isChatOpen && (
          <ChatModal 
            isOpen={isChatOpen} 
            onClose={() => setIsChatOpen(false)} 
          />
        )}
      </main>
    </>
  )
}

export default Home
