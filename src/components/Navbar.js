"use client"

import { cn } from '@/lib/utils'
import { House, NotepadText, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const links = [
  { href: '/', label: 'Home', icon: <House className='mr-2' /> },
  { href: '/profile', label: 'Profile', icon: <User className='mr-2' /> },
  { href: '/contact', label: 'Contact', icon: <NotepadText className='mr-2' /> },
]

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className='absolute left-0 bottom-[50%] lg:bottom-0 lg:left-[50%] text-white flex flex-col lg:flex-row border-r border-r-slate-800 lg:border-r-0 lg:border-t lg:border-t-slate-800'>
      {
        links.map(({ href, label, icon }) => {
          const isActiveLink = href === pathname || pathname?.startsWith(`${href}/`)
          return <Link key={href} href={href} className={cn('hover:cursor-pointer my-2 lg:mx-2 text-slate-700', isActiveLink && 'text-slate-400')} title={label}>
            {icon}
          </Link>
        })
      }
    </nav>
  )
}

export default Navbar