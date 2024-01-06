'use client'

import Link from "next/link"
import { useState, useEffect } from "react"
import ToggleTheme from "@components/ToggleTheme"

const Header = () => {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <header className='p-24 py-6'>
    <nav className='container flex items-center justify-between'>
      <ul className='flex gap-6'>
        <li>
          <Link href='/'>Menu</Link>
        </li>
      </ul>

      <p>Bruno Tassinari</p>

      <ToggleTheme />
    </nav>
  </header>
  )
}

export default Header
