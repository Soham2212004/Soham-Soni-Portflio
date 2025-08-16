import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useThemeSwitcher from '../hooks/useThemeSwitcher';

const CustomChatButton = ({ onClick, isOpen }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mode] = useThemeSwitcher();

  // Theme-based styles
  let buttonBg, iconColor, tooltipBg, tooltipText;
  if (mode === 'dark') {
    buttonBg = 'bg-light text-dark';
    iconColor = '#22223b';
    tooltipBg = 'bg-light';
    tooltipText = 'text-dark';
  } else if (mode === 'sunset') {
    buttonBg = 'bg-gradient-to-br from-[#ffb347] via-[#ff758c] to-[#ffcc80] text-[#3d1c00]';
    iconColor = '#3d1c00';
    tooltipBg = 'bg-[#ffb347]';
    tooltipText = 'text-[#3d1c00]';
  } else {
    // light
    buttonBg = 'bg-blue-500 hover:bg-blue-600 text-white';
    iconColor = '#fff';
    tooltipBg = 'bg-gray-800';
    tooltipText = 'text-white';
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-2xl z-50 flex items-center justify-center transition-all duration-300 ease-in-out ${buttonBg}`}
        style={
          mode === 'sunset'
            ? {
                background: 'linear-gradient(135deg, #ffb347 0%, #ffcc80 40%, #ff758c 100%)',
                color: '#3d1c00',
              }
            : undefined
        }
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Chat Icon */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            // Close icon
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke={iconColor}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            // Chat bubble icon
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.60571 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
                stroke={iconColor}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill={iconColor}
              />
            </svg>
          )}
        </motion.div>
      </motion.button>

      {/* Tooltip */}
      <motion.div
        className={`fixed bottom-6 right-24 px-3 py-2 rounded-lg shadow-lg z-40 whitespace-nowrap ${tooltipBg} ${tooltipText}`}
        initial={{ opacity: 0, x: 20 }}
        animate={{
          opacity: isHovered && !isOpen ? 1 : 0,
          x: isHovered && !isOpen ? 0 : 20,
        }}
        transition={{ duration: 0.2 }}
        style={{ pointerEvents: 'none' }}
      >
        <span className="text-sm font-medium">Ask me anything!</span>
        {/* Tooltip arrow */}
        <div
          className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"
          style={
            mode === 'sunset'
              ? { borderLeftColor: '#ffb347' }
              : mode === 'dark'
              ? { borderLeftColor: '#fff' }
              : undefined
          }
        ></div>
      </motion.div>
    </>
  );
};

export default CustomChatButton;