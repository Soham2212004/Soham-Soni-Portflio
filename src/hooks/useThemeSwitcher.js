import { useEffect, useState } from 'react'

const themes = ['dark', 'light']

const useThemeSwitcher = () => {
  const preferDarkQuery = '(prefers-color-scheme: dark)'
  const [mode, setMode] = useState('dark')

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery)
    const userPref = window.localStorage.getItem('theme')

    const handleChange = () => {
      let check = 'dark'
      if (userPref && themes.includes(userPref)) {
        check = userPref
      } else if (!userPref) {
        check = mediaQuery.matches ? 'dark' : 'light'
      }
      setMode(check)
      document.documentElement.classList.remove('dark')
      if (check === 'dark') {
        document.documentElement.classList.add('dark')
      }
    }

    handleChange()
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    window.localStorage.setItem('theme', mode)
    document.documentElement.classList.remove('dark')
    if (mode === 'dark') {
      document.documentElement.classList.add('dark')
    }
    // When mode is 'light', 'dark' class is removed, so default (light) styles apply
  }, [mode])

  // Cycle through themes
  const cycleMode = () => {
    const idx = themes.indexOf(mode)
    setMode(themes[(idx + 1) % themes.length])
  }

  return [mode, cycleMode]
}

export default useThemeSwitcher