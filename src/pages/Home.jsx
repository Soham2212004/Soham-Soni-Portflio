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
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light sm:items-start">
        <Layout className="pt-0 md:pt-16 sm:pt-16">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <MotionImage 
                src={profilePic} 
                alt="SohamSoni" 
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                initial={{opacity:0, scale:0.9}}
                animate={{opacity:1, scale:1}}
                transition={{duration:0.5}}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText text="SOHAM SONI" className="!text-6xl !text-left 
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                Software Engineer specializing in AI-powered automation solutions. Experienced in integrating AI technologies into existing systems and developing intelligent software from the ground up, leveraging machine learning, cloud technologies, and modern frameworks to solve complex business problems efficiently.</p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="https://drive.google.com/file/d/1dxKyBzezqN99za80-FTc7mo3c1LbCG6Y/view?usp=sharing"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 
                    rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                    border-2 border-solid border-transparent hover:border-dark
                    dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                    hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link href="mailto:sonisoham91@gmail.com" target={"_blank"}
                className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >Contact</Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
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