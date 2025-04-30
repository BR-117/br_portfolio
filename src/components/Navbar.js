'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Auto-close menu when pathname changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link href="/" className="text-logo">
          <h1>Bim Rai</h1>
        </Link>
      </div>

      <div className="navbar-toggler" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`navbar-right ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link></li>
          <li><Link href="/projects" className={pathname === "/projects" ? "active" : ""}>Projects</Link></li>
          <li><Link href="/about" className={pathname === "/about" ? "active" : ""}>About</Link></li>
          <li><Link href="/contacts" className={pathname === "/contacts" ? "active" : ""}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}
