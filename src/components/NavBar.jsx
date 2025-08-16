import React, { useState } from 'react'
import Link from './Link'
import { useLocation } from 'react-router-dom'
import { GithubIcon, LinkedInIcon, InstagramIcon, CredlyIcon, MailIcon, SunIcon, MoonIcon } from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from '../hooks/useThemeSwitcher'

const CustomLink = ({ href, title, className = "" }) => {
  const location = useLocation()
  
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span 
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${location.pathname === href ? 'w-full' : 'w-0'}
          dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const location = useLocation()
  
  const handleClick = () => {
    toggle()
    // Use setTimeout to allow animation to complete
    setTimeout(() => {
      window.location.href = href
    }, 100)
  }
  
  return (
    <button onClick={handleClick} className={`${className} relative group text-light dark:text-dark my-2`}>
      {title}
      <span 
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${location.pathname === href ? 'w-full' : 'w-0'}
          dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  )
}

const NavBar = () => {
  const [mode, cycleMode] = useThemeSwitcher()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      
      {/* Desktop Navigation */}
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4"/>
          <CustomLink href="/about" title="About" className="mx-4"/>
          <CustomLink href="/projects" title="Projects" className="mx-4"/>
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a 
            href="mailto:sonisoham91@gmail.com" 
            target={'_blank'}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className="w-6 mr-3"
            title="Email"
          >
            <MailIcon className="hover:text-primary transition-colors duration-300" />
          </motion.a>
          <motion.a 
            href="https://github.com/Soham2212004" 
            target={'_blank'}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className="w-6 mx-3 bg-light rounded-full dark:bg-dark p-1"
            title="GitHub"
          >
            <GithubIcon className="hover:opacity-80 transition-opacity duration-300" />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/sohamsoni220104" 
            target={'_blank'}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className="w-6 mx-3"
            title="LinkedIn"
          >
            <LinkedInIcon className="hover:opacity-80 transition-opacity duration-300" />
          </motion.a>
          <motion.a 
            href="https://www.instagram.com/_soham_soni_/" 
            target={'_blank'}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className="w-6 mx-3"
            title="Instagram"
          >
            <InstagramIcon className="hover:opacity-80 transition-opacity duration-300" />
          </motion.a>
          <motion.a 
            href="https://www.credly.com/users/soni-soham" 
            target={'_blank'}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className="w-6 ml-3"
            title="Credly"
          >
            <CredlyIcon className="hover:opacity-80 transition-opacity duration-300" />
          </motion.a>

          <button
            onClick={cycleMode}
            className={`ml-3 flex items-center justify-center rounded-full p-1
            ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
            `}
          >
            {
              mode === "dark" ? <SunIcon className={"fill-dark"} />
              : <MoonIcon className={"fill-dark"} />
            }
          </button>
        </nav>
      </div>

      {/* Mobile Menu Button */}
      <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`} ></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} ></span>
      </button>

      {/* Logo */}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
      
      {/* Mobile Navigation */}
      {
        isOpen ?
        <motion.div 
          initial={{scale:0, opacity:0, x: "-50%", y: "-50%"}}
          animate={{scale:1, opacity:1}}
          className="min-w-[70vw] flex flex-col justify-center items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink href="/" title="Home" className="" toggle={handleClick} />
            <CustomMobileLink href="/about" title="About" className="" toggle={handleClick} />
            <CustomMobileLink href="/projects" title="Projects" className="" toggle={handleClick} />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a 
              href="mailto:sonisoham91@gmail.com" 
              target={'_blank'}
              whileHover={{y:-2}}
              whileTap={{scale:0.9}}
              className="w-6 mr-3 sm:mx-1"
              title="Email"
            >
              <MailIcon className="hover:text-primary transition-colors duration-300" />
            </motion.a>
            <motion.a 
              href="https://github.com/Soham2212004" 
              target={'_blank'}
              whileHover={{y:-2}}
              whileTap={{scale:0.9}}
              className="w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1 p-1"
              title="GitHub"
            >
              <GithubIcon className="hover:opacity-80 transition-opacity duration-300" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/sohamsoni220104" 
              target={'_blank'}
              whileHover={{y:-2}}
              whileTap={{scale:0.9}}
              className="w-6 mx-3 sm:mx-1"
              title="LinkedIn"
            >
              <LinkedInIcon className="hover:opacity-80 transition-opacity duration-300" />
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/_soham_soni_/" 
              target={'_blank'}
              whileHover={{y:-2}}
              whileTap={{scale:0.9}}
              className="w-6 mx-3 sm:mx-1"
              title="Instagram"
            >
              <InstagramIcon className="hover:opacity-80 transition-opacity duration-300" />
            </motion.a>
            <motion.a 
              href="https://www.credly.com/users/soni-soham" 
              target={'_blank'}
              whileHover={{y:-2}}
              whileTap={{scale:0.9}}
              className="w-6 ml-3 sm:mx-1"
              title="Credly"
            >
              <CredlyIcon className="hover:opacity-80 transition-opacity duration-300" />
            </motion.a>

            <button
              onClick={cycleMode}
              className={`ml-3 flex items-center justify-center rounded-full p-1 sm:mx-1
              ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
              `}
            >
              {
                mode === "dark" ? <SunIcon className={"fill-dark"} />
                : <MoonIcon className={"fill-dark"} />
              }
            </button>
          </nav>
        </motion.div>
        : null
      }

    </header>
  )
}

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink 
        href="/"
        className="w-16 h-16 bg-dark text-light flex items-center justify-center
        rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light"
        whileHover={{
          backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,64,1)","rgba(131,58,180,1)", "#121212"],
          transition:{duration:1, repeat: Infinity}
        }}
      >
        SS
      </MotionLink>
    </div>
  )
}

const MotionLink = motion(Link)

export default NavBar