import React from "react"

// Import all the assets from src/assets folder

import CredlyImg from '../assets/credly-svgrepo-com.png'
import GmailImg from '../assets/mail.png'
import InstagramImg from '../assets/instagram.png'
import LinkedinImg from '../assets/linkedin.png'
import ProfilePicImg from '../assets/profile-pic-1.png'
import RADASImg from '../assets/RADAS.png'
import SafaaiBuddyImg from '../assets/SafaaiBuddy.png'
import SocialImg from '../assets/github.png'
import WhatsappImg from '../assets/github.png'

export const GithubIcon = ({ className, ...rest }) => (
  <img
    src={SocialImg}
    alt="GitHub"
    className={`w-full h-auto ${className}`}
    {...rest}
    onError={(e) => {
      console.error('Failed to load GitHub icon:', e.target.src);
    }}
  />
)

export const LinkedInIcon = ({ className, ...rest }) => (
  <img
    src={LinkedinImg}
    alt="LinkedIn"
    className={`w-full h-auto ${className}`}
    {...rest}
    onError={(e) => {
      console.error('Failed to load LinkedIn icon:', e.target.src);
    }}
  />
)

export const InstagramIcon = ({ className, ...rest }) => (
  <img
    src={InstagramImg}
    alt="Instagram"
    className={`w-full h-auto ${className}`}
    {...rest}
    onError={(e) => {
      console.error('Failed to load Instagram icon:', e.target.src);
    }}
  />
)

export const MailIcon = ({ className, ...rest }) => (
  <img
    src={GmailImg}
    alt="Gmail"
    className={`w-full h-auto ${className}`}
    {...rest}
    onError={(e) => {
      console.error('Failed to load Gmail icon:', e.target.src);
    }}
  />
)

export const CredlyIcon = ({ className, ...rest }) => (
  <img
    src={CredlyImg}
    alt="Credly"
    className={`w-full h-auto ${className}`}
    {...rest}
    onError={(e) => {
      console.error('Failed to load Credly icon:', e.target.src);
    }}
  />
)

export const WhatsAppIcon = ({ className, ...rest }) => (
  <img
    src={WhatsappImg}
    alt="WhatsApp"
    className={`w-full h-auto ${className}`}
    {...rest}
    onError={(e) => {
      console.error('Failed to load WhatsApp icon:', e.target.src);
    }}
  />
)

// Additional utility components for the other assets
export const ProfilePic = ({ className, ...rest }) => (
  <img
    src={ProfilePicImg}
    alt="Profile"
    className={`w-full h-auto ${className}`}
    {...rest}
    onError={(e) => {
      console.error('Failed to load Profile pic:', e.target.src);
    }}
  />
)

export const AIAgentImage = ({ className, ...rest }) => (
  <img
    src={AIAgentImg}
    alt="AI Agent"
    className={`w-full h-auto ${className}`}
    {...rest}
    onError={(e) => {
      console.error('Failed to load AI Agent image:', e.target.src);
    }}
  />
)

export const AIMultitaskerImage = ({ className, ...rest }) => (
  <img
    src={AIMultitaskerImg}
    alt="AI Multitasker"
    className={`w-full h-auto ${className}`}
    {...rest}
    onError={(e) => {
      console.error('Failed to load AI Multitasker image:', e.target.src);
    }}
  />
)

export const RADASImage = ({ className, ...rest }) => (
  <img
    src={RADASImg}
    alt="RADAS"
    className={`w-full h-auto ${className}`}
    {...rest}
    onError={(e) => {
      console.error('Failed to load RADAS image:', e.target.src);
    }}
  />
)

export const SafaaiBuddyImage = ({ className, ...rest }) => (
  <img
    src={SafaaiBuddyImg}
    alt="Safaai Buddy"
    className={`w-full h-auto ${className}`}
    {...rest}
    onError={(e) => {
      console.error('Failed to load Safaai Buddy image:', e.target.src);
    }}
  />
)

// Fallback SVG icons in case images don't load
export const GithubIconSVG = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

export const LinkedInIconSVG = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

export const InstagramIconSVG = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

export const MailIconSVG = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

// Keep the existing SVG icons as they were

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
)

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

export const LinkArrow = ({ className, ...rest }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path
      d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M9 15L15 9M15 9C15 9.35698 14.9052 10.4113 13.8113 9.31738M15 9C14.6427 9 13.5879 9.09485 14.6816 10.1888"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const CircularText = ({ className, ...rest }) => (
  <svg
    width="496"
    height="496"
    viewBox="0 0 496 496"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path
      id="circlePath"
      d="M 248, 248 m -150, 0 a 150,150 0 0,1 300,0 a 150,150 0 0,1 -300,0"
      fill="transparent"
    />
    <text fill="currentColor">
      <textPath href="#circlePath" className="text-3xl font-extrabold">
        • AI/ML AUTOMATION SPECIALIST  •  SOFTWARE ENGINEER 
      </textPath>
    </text>
  </svg>
)

export const ChatBotIcon = ({ className, ...rest }) => (
  <svg
    width="96"
    height="96"
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <g clipPath="url(#clip0_chatbot)">
      {/* Main body */}
      <rect
        x="16"
        y="20"
        width="64"
        height="48"
        rx="12"
        fill="#3B71E8"
      />
      {/* Screen */}
      <rect
        x="24"
        y="28"
        width="48"
        height="32"
        rx="4"
        fill="#1E3A8A"
      />
      {/* Eyes */}
      <circle cx="36" cy="40" r="3" fill="#60A5FA" />
      <circle cx="60" cy="40" r="3" fill="#60A5FA" />
      {/* Mouth/Speaker */}
      <rect
        x="40"
        y="48"
        width="16"
        height="4"
        rx="2"
        fill="#60A5FA"
      />
      {/* Chat bubble */}
      <path
        d="M72 8C76.4183 8 80 11.5817 80 16V24C80 28.4183 76.4183 32 72 32H60L56 36V32H52C47.5817 32 44 28.4183 44 24V16C44 11.5817 47.5817 8 52 8H72Z"
        fill="#FEE715"
      />
      {/* Chat dots */}
      <circle cx="54" cy="20" r="1.5" fill="#1E3A8A" />
      <circle cx="62" cy="20" r="1.5" fill="#1E3A8A" />
      <circle cx="70" cy="20" r="1.5" fill="#1E3A8A" />
      {/* Base */}
      <rect
        x="32"
        y="68"
        width="32"
        height="8"
        rx="4"
        fill="#6B7280"
      />
      {/* Stand */}
      <rect
        x="44"
        y="76"
        width="8"
        height="12"
        rx="4"
        fill="#6B7280"
      />
      {/* Base plate */}
      <ellipse
        cx="48"
        cy="88"
        rx="16"
        ry="4"
        fill="#374151"
      />
    </g>
    <defs>
      <clipPath id="clip0_chatbot">
        <rect width="96" height="96" fill="white" />
      </clipPath>
    </defs>
  </svg>
)