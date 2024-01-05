'use client'

import Link from "next/link"
import ThemeButton from "./ThemeButton"

const Header = () => {
  return (
    <header className='p-24 py-6'>
    <nav className='container flex items-center justify-between'>
      <ul className='flex gap-6'>
        <li>
          <Link href='/'>Menu</Link>
        </li>
      </ul>

      <p>Bruno Tassinari</p>

      <ThemeButton />
    </nav>
  </header>
  )
}

export default Header
